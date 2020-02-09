var jwt = require('jsonwebtoken');

const withAuth = function (req, res, next) {
    const private_key= '0djg6lf6jddd66rgj5dvfejbrte35gch6fr28dh6fhrd0gghv65gt6tvv';
    const token = req.cookies.token;
  
    if (! token) {
      res.status(401).send ('No token');
    }
    else {
      jwt.verify (token, private_key, function (err, decoded) {
        if (err) {
          res.status(401).send ('Unauthorized: Invalid token');
        }
        else {
          req.email = decoded.email;
          next();
        }
      });
    }
  }
  module.exports= withAuth;