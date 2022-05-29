/* eslint-disable max-len */
export const ImportSchedule = async (req, res, next) => {
  /* #swagger.tags = ["Importação"] */
  /* #swagger.description = "Rota responsável por importas as programações do arquivo gerado pelo Even3" */
  /* #swagger.requestBody = { 
    required: true, 
    content: { 
      "multipart/form-data": { 
        schema: {
          type: "object",
          properties: {
            file: {
              type: "string",
              format: "binary"
            }
          } 
        }, 
      } 
    } 
    } 
  */
  try {
    res.json({ jsonFile: req.jsonFile });
  } catch (error) {
    next(error);
  }
};

export default {
  ImportSchedule,
};
