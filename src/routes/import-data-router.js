import express from 'express';

import multer from 'multer';
import { ImportSchedule } from '../controllers/import-data-controller';
import { ConverterXLSXToJson } from '../middleware/file-xlsx-middleware';

const router = express.Router();
const multerConfig = multer();

router.post(
  '/import/schedule',
  multerConfig.single('file'),
  ConverterXLSXToJson,
  ImportSchedule,
);

export default router;
