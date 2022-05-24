import express from 'express';

import emailController from '../controllers/email-controller';

const router = express.Router();

router.post('/invite', emailController.postInvite);
router.post('/reminder/day', emailController.postReminderDay);

export default router;
