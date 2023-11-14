const bcrypt = require('bcrypt');
const express = require('express');
const app = express();

app.use(express.json());

app.post('/hash-password', async (req, res) => {
    const { password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        res.json({ hashedPassword });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});