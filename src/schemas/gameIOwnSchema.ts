import Joi from "joi";

const addGameIOwnchema = Joi.object({
    userId: Joi.number().min(1).required(),
    gameId: Joi.number().min(1).required()
});

export { addGameIOwnchema };