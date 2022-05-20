import Joi from 'joi';

const projectSchema = Joi.object({
  title: Joi.string().required(),
  resume: Joi.string().required(),
  importantInfos: Joi.string().required(),
  startDate: Joi.date().required(),
  limitDate: Joi.date().required(),
  clientId: Joi.number().required(),
});

export default projectSchema;