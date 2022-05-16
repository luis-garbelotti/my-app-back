import joi from "joi";

const userSchema = joi.object({
  name: joi.string().trim().required(),
  email: joi.string().email().trim().required(),
  password: joi.string().trim().required()
})

export default userSchema;