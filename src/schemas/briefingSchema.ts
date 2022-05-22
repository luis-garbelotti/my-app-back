import Joi from 'joi';

const briefingSchema = Joi.object({
  question: Joi.string().trim().required(),
  answer: Joi.string().trim().required(),
});

export default briefingSchema;