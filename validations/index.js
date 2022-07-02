const Joi = require('joi')

exports.userValidate = Joi.object().keys({
  name: Joi.string().min(10).max(50).required(),
  sex: Joi.string().valid('male','female').required(),
  age: Joi.number().required(),
  phone: Joi.string().min(8).max(16).empty('').required(),
  address: Joi.string().min(10).max(50).required()
})