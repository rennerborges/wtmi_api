const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const modelSchema = new mongoose.Schema({
  name: String,
  password: String,
  email: String,
  role: String,
  enabled: Boolean,
});

const modelName = 'users';

if (mongoose.connection && mongoose.connection.models[modelName]) {
  module.exports = mongoose.connection.models[modelName]; // Conexão
} else {
  module.exports = mongoose.model(modelName, modelSchema); // Criar nova conexão
}
