import Joi from "joi";

export const schemaTodo = Joi.object({
  title: Joi.string().min(2).required(),
  body: Joi.string(),
  completed: Joi.bool(),
  created: Joi.date(),
  userId: Joi.string(),
});
