const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const modelSchema = new mongoose.Schema({
  codePartcipant: String,
  codeSchedule: String,
  titleSchedule: String,
  registrationDate: String,
  typeTicket: String,
  email: String,
  name: String,
  isPresence: Boolean,
});

const modelName = 'registers';

if (mongoose.connection && mongoose.connection.models[modelName]) {
  module.exports = mongoose.connection.models[modelName]; // Conexão
} else {
  module.exports = mongoose.model(modelName, modelSchema); // Criar nova conexão
}
