const jwt = require('jsonwebtoken');

const JWT_KEY = 'some_rand0m_$tring';

exports.createToken = (user)=> (
console.log(user.id),
       jwt.sign({
        id: user.id
      }, JWT_KEY, { expiresIn: 60 * 60 })
);

exports.verifyToken= (req,res, next) => {

    try {
       let decoded= jwt.verify(req.headers.authentication, JWT_KEY);
        next();
      } catch(err) {
        res.status(500).send("invalid token")
      }
}

