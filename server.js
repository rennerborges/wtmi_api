/* eslint-disable no-console */
import cors from 'cors';
import dotenv from 'dotenv';

import mongoose from 'mongoose';
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerFile from './swagger/swagger_output.json';
import app from './app';

dotenv.config({ path: './variables.env' });

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (error) => {
  console.error(`ERRO: ${error.message}`);
});

const server = express();
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(
  '/docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerFile, {
    swaggerOptions: { persistAuthorization: true },
  }),
);
server.use('/', app);

server.listen(process.env.PORT, () => {
  console.log(`Servidor rodando na porta: ${process.env.PORT}`);
});
