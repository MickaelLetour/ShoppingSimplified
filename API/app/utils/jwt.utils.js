var jwt = require('jsonwebtoken');

const JWT_SIGN_TOKEN = '0djg6lf6jddd66rgj5dvfejbrte35gch6fr28dh6fhrd0gghv65gt6tvv';

module.exports = {
    generateTokenForUser: function(data){
        return jwt.sign({
            user : data
        },
        JWT_SIGN_TOKEN,
        {
            expiresIn: '1h'
        })
    }
}