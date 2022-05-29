import XLSX from 'xlsx';

export function ConverterXLSXToJson(req, res, next) {
  const { file } = req;
  const { buffer } = file;

  const workbook = XLSX.read(buffer);
  const sheetNameList = workbook.SheetNames;
  const object = XLSX.utils.sheet_to_json(workbook.Sheets[sheetNameList[0]]);

  req.jsonFile = object;

  next();
}

export default {
  ConverterXLSXToJson,
};
