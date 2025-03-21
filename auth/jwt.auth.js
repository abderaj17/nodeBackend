const jwt = require('jsonwebtoken');

const auth = (req, res, next) =>{
    try{

    }catch(err){
        res.status
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