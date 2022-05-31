import express from 'express';

import multer from 'multer';
import infoEven3Controller from '../controllers/info-even3-controller';
import { Auth } from '../middleware/auth-middleware';
import { ConverterXLSXToJson } from '../middleware/file-xlsx-middleware';
import ValidationRegisterImport from '../validation/import-register-validation';
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

router.post(
  '/import/registered',
  Auth(),
  multerConfig.single('file'),
  ConverterXLSXToJson,
  ValidationRegisterImport,
  infoEven3Controller.ImportRegistered,
);

export default router;
