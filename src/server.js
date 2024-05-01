const express = require('express');
const app = express();
const AuthController = require('./controllers/authController');
const adminController =  require('./controllers/adminController');
const autenticacaoMiddleware = require('./middlewares/Autenticacao');


app.use(express.json());

app.use('/auth', AuthController);
app.use('/admin',autenticacaoMiddleware, adminController);

app.listen(3000,() => {
  console.log('Servidor iniciado na porta 3000');
})