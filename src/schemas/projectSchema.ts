import Joi from 'joi';

const projectSchema = Joi.object({
  title: Joi.string().trim().required(),
  resume: Joi.string().required(),
  importantInfos: Joi.string().required(),
  startDate: Joi.date().required(),
  limitDate: Joi.date().required(),
  clientId: Joi.number().required(),
  value: Joi.number().required(),
});

export default projectSchema;