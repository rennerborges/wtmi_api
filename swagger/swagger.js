/* eslint-disable import/order */
const dotenv = require('dotenv');
const swaggerOptions = require('./swagger-autogen.options');
const swaggerAutogen = require('swagger-autogen')(swaggerOptions);

dotenv.config({ path: './variables.env' });

const outputFile = './swagger/swagger_output.json';
const endpointsFiles = ['./server.js'];

const doc = {
  openapi: '3.0.0',
  info: {
    version: '1.0.0',
    title: 'API 4° WTMI',
    description:
      'Ambiente com todos os endpoints referentes a API do 4° Workshop de Tecnologias Móveis e para a Internet ',
    contact: {
      name: 'Workshop de Tecnologias Móveis e para a Internet',
      email: 'wtmi.ifgoiano@gmail.com',
      url: 'https://www.even3.com.br/wtmi/',
    },
  },
  servers: [
    {
      url: `http://localhost:${process.env.PORT}`,
      description: 'Local',
    },
    {
      url: `https://wtmi-api.herokuapp.com`,
      description: 'Produção',
    },
  ],
  basePath: '/',
  schemes: ['http', 'https'],
  consumes: ['application/json', 'multipart/form-data'],
  produces: ['application/json', 'multipart/form-data'],
  tags: [
    {
      name: 'Autenticação',
      description:
        'Responsável por todo gerenciamento da autenticação no software',
    },
    {
      name: 'Informações',
      description:
        'Responsável por todo gerenciamento das informações contidas no software',
    },
    {
      name: 'Envio de e-mail',
      description:
        'Responsável por todo gerenciamento de envio de e-mail no software',
    },
    {
      name: 'Importação',
      description:
        'Responsável pelo gerenciamento das importações de dados do Even3',
    },
    {
      name: 'Usuários',
      description: 'Responsável pelo gerenciamento dos usuários',
    },
  ],
  securityDefinitions: {
    bearerAuth: {
      type: 'apiKey',
      name: 'token',
      in: 'header',
    },
  },
  security: [
    {
      bearerAuth: [],
    },
  ],
  definitions: {},
  components: {
    schemas: {
      SendEmailDefault: {
        email: 'rennerferreira23@gmail.com',
        name: 'Renner',
      },
      ConfirmPresence: {
        email: 'rennerferreira23@gmail.com',
      },
      PostUser: {
        name: 'Renner Borges',
        password: '12345678@Re',
        email: 'rennerferreira23@gmail.com',
        role: 'g',
        enabled: true,
      },
      EditUser: {
        name: 'Renner Ferreira',
      },
      Login: {
        email: 'renner@gmail.com',
        password: '12345678@Re',
      },
    },
  },
};

swaggerAutogen(outputFile, endpointsFiles, doc);
