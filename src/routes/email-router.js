import express from 'express';

import emailController from '../controllers/email-controller';
import { Auth } from '../middleware/auth-middleware';

const router = express.Router();

router.post('/invite', Auth(), emailController.postInvite);
router.post('/reminder/day', Auth(), emailController.postReminderDay);

export default router;
