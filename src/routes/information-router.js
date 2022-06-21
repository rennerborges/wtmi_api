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
  '/info/scheduler/:codeScheduler',
  Auth('gc'),
  informationController.getSchedulerByCode,
);

router.get(
  '/info/room/:nameRoom/schedulers',
  informationController.getSchedulersByRoom,
);

router.post(
  '/scheduler/:code/confirm/presence',
  ValidationConfirmPresencePost,
  Auth('gc'),
  informationController.setPresenceScheduler,
);

router.get(
  '/info/scheduler/:codeScheduler/random/participant',
  Auth('gc'),
  informationController.getParticipantSchedulerByCode,
);

export default router;
