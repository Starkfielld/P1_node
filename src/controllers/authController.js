const UserModel = require("../models/User");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth.json");

const gerecaoToken = (user = {}) => {
    return jwt.sign({
        id: user.id,
        name: user.name,
        email: user.email
    }, authConfig.secret ,{
        expiresIn: 86400
    });
}
router.post("/registro", async (req, res) => {

    const {email} = req.body;
    if(await UserModel.findOne({email})){
        return res.status(400).json({error: true, message: "Email ja existe"});
    }
    const user = await UserModel.create(req.body);
    user.password = undefined;
    console.log(req.body);
    return res.json({
        error: false,
        message: "registrado com sucesso",
        data: user
    });   
})

router.post("/autenticacao", async (req, res) => {
    const {email, password} = req.body;

    const user = await UserModel.findOne({email}).select("+password");
    if (!user){
        return res.status(400).json({
            error: true,
            message: "Usuário não encontrado"
        })
    }
    if(!await bcrypt.compare(password, user.password)){
        return res.status(400).send({
            error: true,
            message: "Senha incorreta"
        })
    }

    user.password = undefined

    return res.json({
        user,
        token: gerecaoToken(user)
    });
})


module.exports = router;