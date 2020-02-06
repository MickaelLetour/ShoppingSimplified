var jwt = require('jsonwebtoken');

module.exports = {
    generateTokenForUser: function(data){
        const private_key= '0djg6lf6jddd66rgj5dvfejbrte35gch6fr28dh6fhrd0gghv65gt6tvv';
        const tokenSign = jwt.sign({user :data}, private_key, {expiresIn: 60 * 5})
        return tokenSign;
    }
}