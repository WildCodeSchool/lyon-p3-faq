const jwt = require('jsonwebtoken');

const JWT_KEY = 'some_rand0m_$tring';

exports.createToken = (user,ip)=> (

       jwt.sign({
        id: user.id,
        ip: ip
      }, JWT_KEY, { expiresIn: 60 * 60 })
);

exports.verifyToken= (req,res, next) => {

    try {
        jwt.verify(req.headers.authentication, JWT_KEY);
        next();
      } catch(err) {
        res.status(500).send("invalid token")
      }
}

