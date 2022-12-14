import Joi from "joi";
import { UserType } from "../protocols/job.js";

const addUserSchema = Joi.object({
    name: Joi.string().empty().max(255).required(),
    email: Joi.string().empty().email().max(255).required()
});

const updateUserNameSchema = Joi.object({
    name: Joi.string().empty().max(255).required()
});

export { addUserSchema, updateUserNameSchema };