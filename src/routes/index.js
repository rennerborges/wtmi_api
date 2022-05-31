import express from 'express';

import userRouters from './user-router';
import emailRouters from './email-router';
import infoEven3Routers from './info-even3-router';
import informationsRouters from './information-router';

const app = express();

app.get('/', (req, res) => {
  /* #swagger.description = "Rota de teste da API" */
  /* #swagger.security = [] */
  /* #swagger.tags = ["Home"] */
  res.json({ message: 'Hello World' });
});

app.use(userRouters);
app.use(emailRouters);
app.use(infoEven3Routers);
app.use(informationsRouters);

export default app;
