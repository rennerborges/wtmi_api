import express from 'express';

import informationController from '../controllers/information-controller';
import { Auth } from '../middleware/auth-middleware';
import ValidationConfirmPresencePost from '../validation/confirm-presence-scheduler-validation';

const router = express.Router();

router.get('/info/schedulers', Auth(), informationController.getSchedulers);
router.get(
  '/info/users/schedulers',
  Auth(),
  informationController.getUsersSchedulers,
);

router.get(
  '/info/room/:nameRoom/scheduler/now',
  informationController.getSchedulersNowByRoom,
);

router.get(
  '/info/room/:nameRoom/schedulers',
  informationController.getSchedulersByRoom,
);

router.post(
  '/scheduler/:code/confirm/presence',
  ValidationConfirmPresencePost,
  informationController.setPresenceScheduler,
);

export default router;
