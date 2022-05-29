import express from 'express';

import multer from 'multer';
import { ConverterXLSXToJson } from '../middleware/file-xlsx-middleware';

const router = express.Router();
const multerConfig = multer();

router.post(
  '/import/schedule',
  multerConfig.single('file'),
  ConverterXLSXToJson,
  async (req, res) => res.json({ jsonFile: req.jsonFile }),
);

export default router;
