/* eslint-disable max-len */
export const ImportSchedule = async (req, res, next) => {
  /* #swagger.tags = ["Importação"] */
  /* #swagger.description = "Rota responsável por importas as 
  programações do arquivo gerado pelo Even3" */

  /* #swagger.parameters['id'] = {
      in: "path",
      description: "ID da empresa",
      required: true,
      type: "string",
  } */

  try {
    res.json({ jsonFile: req.jsonFile });
  } catch (error) {
    next(error);
  }
};

export default {
  ImportSchedule,
};
