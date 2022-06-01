const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const modelSchema = new mongoose.Schema({
  code: String,
  title: String,
  initialDate: String,
  finalDate: String,
  location: String,
  vacancyLimit: Number,
  numberOfSubscribers: Number,
  pendingRegistrations: Number,
});

const modelName = 'schedulers';

if (mongoose.connection && mongoose.connection.models[modelName]) {
  module.exports = mongoose.connection.models[modelName]; // Conexão
} else {
  module.exports = mongoose.model(modelName, modelSchema); // Criar nova conexão
}
