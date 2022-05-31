import express from 'express';

import informationController from '../controllers/information-controller';
import { Auth } from '../middleware/auth-middleware';

const router = express.Router();

router.get('/info/schedulers', Auth(), informationController.getSchedulers);

export default router;
