const jwt = require('jsonwebtoken');

const auth = (req, res, next) =>{
    try{
     const token = req.header('Authorization')
    }catch(err){
        res.status(2001)
    }
}

const secretkey = 'thisisaverysecurekey';

const createToken = (user_payload) =>{
    try{
        const token = jwt.sign(user_payload, 'secretkey', {expiresIn: '1hr',
            algorithm:'HS256'
        })
        return token;
    }catch(err){
        console.log(err);
    }
} 

module.exports.token;