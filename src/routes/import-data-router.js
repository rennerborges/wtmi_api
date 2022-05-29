import express from 'express';

import multer from 'multer';

import XLSX from 'xlsx';

const router = express.Router();
const multerConfig = multer();

router.post(
  '/import/schedule',
  multerConfig.single('file'),
  async (req, res) => {
    const { file } = req;
    const { buffer } = file;

    const workbook = XLSX.read(buffer);
    const sheetNameList = workbook.SheetNames;
    const object = XLSX.utils.sheet_to_json(workbook.Sheets[sheetNameList[0]]);

    return res.json({ object });
  },
);

export default router;
