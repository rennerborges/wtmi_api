import * as yup from 'yup';

const ValidationConfirmPresencePost = (req, res, next) => {
  const schema = yup.object().shape({
    email: yup.string().email().required('O e-mail é necessário'),
  });

  return schema
    .validate(req.body)
    .then(() => next())
    .catch((error) => next(error));
};

export default ValidationConfirmPresencePost;
