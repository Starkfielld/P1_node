const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');
module.exports = (req,res, next) => {
    const authHeaders = req.headers.authorization;

    if(!authHeaders){
        return res.status(401).json({
            error: true,
            message: 'Token não informado'
        })
    }

    const parts = authHeaders.split(' ');
    if(parts.length != 2){
        return res.status(401).json({
            error: true,
            message: 'Token inválido'
        })
    }

    const [scheme, token] = parts;
    
    if(scheme.indexOf("Bearer")!= 0){
        return res.status(401).json({
            error: true,
            message: 'Token malformatado'
        })
    }
 
    console.log(authHeaders);
    jwt.verify(token, authConfig.secret,(err, decoded) =>{
 
        if(err){
            return res.status(401).json({
                error: true,
                message: 'Token inválido/expirado'
            })
        }
        req.userLogado = decoded
        return next();
    })
}