import express from 'express';

import userRouters from './user-router';
import emailRouters from './email-router';

const app = express();

app.get('/', (req, res) => {
  /* #swagger.description = "Rota de teste da API" */
  /* #swagger.security = [] */
  /* #swagger.tags = ["Home"] */
  res.json({ message: 'Hello World' });
});

app.use(userRouters);
app.use(emailRouters);

export default app;
