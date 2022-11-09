var Joi = require("joi");
var addUserSchema = Joi.object({
    name: Joi.string().empty().max(255).required(),
    email: Joi.string().empty().email().max(255).required()
});
export { addUserSchema };
