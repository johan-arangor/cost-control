const jwt = require('jsonwebtoken');
require('dotenv').config();

const generateJWT = (User) => 
{
    let token = jwt.sign(User, process.env.SECRETORPRIVATEKEY , {
        expiresIn: '2h'
    });

    if(token)
    {
        return token;
    }
    else
    {
        return 'No se pudo generar el Token';
    }
}

module.exports = { generateJWT }