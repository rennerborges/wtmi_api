import express from 'express';

import multer from 'multer';
import infoEven3Controller from '../controllers/info-even3-controller';
import { Auth } from '../middleware/auth-middleware';
import { ConverterXLSXToJson } from '../middleware/file-xlsx-middleware';
import ValidationScheduleImport from '../validation/import-schedule-validation';

const multerConfig = multer();
const router = express.Router();

router.post(
  '/import/schedule',
  Auth(),
  multerConfig.single('file'),
  ConverterXLSXToJson,
  ValidationScheduleImport,
  infoEven3Controller.ImportSchedule,
);

export default router;
