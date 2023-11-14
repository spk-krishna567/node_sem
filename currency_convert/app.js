const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://uma:uma@nodebb.7oqvou7.mongodb.net/login', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const ConversionRate = mongoose.model('ConversionRate', {
  fromCurrency: String,
  toCurrency: String,
  rate: Number,
});

app.get('/api/all-conversion-rates', async (req, res) => {
  try {
    const allConversionRates = await ConversionRate.find();
    res.json(allConversionRates);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.post('/api/convert-currency', async (req, res) => {
  try {
    const { fromCurrency, toCurrency, amount } = req.body;

    // Fetch the conversion rate from the database
    const conversionRate = await ConversionRate.findOne({
      fromCurrency,
      toCurrency,
    });

    if (!conversionRate) {
      return res.status(404).send('Conversion rate not found');
    }

    // Perform the conversion
    const convertedAmount = amount * conversionRate.rate;

    res.json({ convertedAmount: convertedAmount.toFixed(2) });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});