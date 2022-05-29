import express from 'express';

import multer from 'multer';
import infoEven3Controller from '../controllers/info-even3-controller';
import { ConverterXLSXToJson } from '../middleware/file-xlsx-middleware';

const multerConfig = multer();
const router = express.Router();

router.post(
  '/import/schedule',
  multerConfig.single('file'),
  ConverterXLSXToJson,
  infoEven3Controller.ImportSchedule,
);

export default router;
