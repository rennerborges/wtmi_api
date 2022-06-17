import express from 'express';

import emailController from '../controllers/email-controller';
import { Auth } from '../middleware/auth-middleware';
import ValidatorSendEmailDefault from '../validation/send-email-default-validation';

const router = express.Router();

router.post(
  '/invite',
  ValidatorSendEmailDefault,
  Auth(),
  emailController.postInvite,
);
router.post(
  '/reminder/day',
  ValidatorSendEmailDefault,
  Auth(),
  emailController.postReminderDay,
);

router.post(
  '/sponsors/invite',
  ValidatorSendEmailDefault,
  Auth(),
  emailController.postSponsorsInvite,
);

router.post(
  '/invite/reitor',
  ValidatorSendEmailDefault,
  Auth(),
  emailController.postInviteReitor,
);

export default router;
