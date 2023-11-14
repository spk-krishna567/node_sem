const jwt =require("jsonwebtoken");
const secretKey="12345678"

const tokenvalidator =async(secretKey,req,res,next)=>{
    const token=req.body.header('x-auth-token');
    if(!token){
        res.status(500).json({message:"access denied token not found"})
    }

    jwt.verify(secretKey,token,(err,decoded)=>{
        if(err){
            res.status(500).json({message:"invalid token"})
        }

        req.user=decoded;
        next();
    })
}

module.exports=tokenvalidator