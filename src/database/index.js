const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://paulo:root@cluster0.szj8ktp.mongodb.net/?retryWrites=true&w=majority')
  .then(() => console.log('Conexão bem sucedida'))
  .catch((err) => console.error('Erro na conexão:', err));

module.exports = mongoose;