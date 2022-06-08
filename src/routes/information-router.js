import express from 'express';

import informationController from '../controllers/information-controller';
import { Auth } from '../middleware/auth-middleware';

const router = express.Router();

router.get('/info/schedulers', Auth(), informationController.getSchedulers);
router.get(
  '/info/users/schedulers',
  Auth(),
  informationController.getUsersSchedulers,
);

router.get(
  '/info/room/:nameRoom/schedulers',
  informationController.getSchedulersByRoom,
);

export default router;
