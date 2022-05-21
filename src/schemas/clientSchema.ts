import Joi from 'joi';

const clientSchema = Joi.object({
  name: Joi.string().trim().required(),
  email: Joi.string().email().trim().required(),
  phone: Joi.string().trim().required(),
});

export default clientSchema;