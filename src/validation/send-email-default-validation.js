import * as yup from 'yup';

const ValidatorSendEmailDefault = (req, res, next) => {
  const schema = yup.object().shape({
    email: yup.string().email().required('É necessário informar o e-mail'),
    name: yup.string().required('É necessário informar o nome'),
  });

  return schema
    .validate(req.body)
    .then(() => next())
    .catch((error) => next(error));
};

export default ValidatorSendEmailDefault;
