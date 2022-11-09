import { NextFunction, Request, Response } from 'express';
import { addGameIOwnchema } from '../schemas/gameIOwnSchema.js';
import { addGameIOwnRepository } from '../repositories/gameIOwn.repositories.js';

async function AddGameIOwnSchemaValidation(req: Request, res: Response, next: NextFunction) {
    const validation = await addGameIOwnchema.validate(req.body, {
        abortEarly: false,
    });

    if (validation.error) {
        const errors = validation.error.details.map((error) => error.message);
        res.status(422).send({ message: errors });
        return;
    }

    res.locals.body = req.body;
    next();
};

async function GamesIOwnParamsValidation(req: Request, res: Response, next: NextFunction) {
    if (!req.params.id) {
        res.sendStatus(404);
        return;
    }

    const userId = Number(req.params.id);
    const searchUserById = (await addGameIOwnRepository.VerifyIfUserIdExists(userId)).rows;

    if (searchUserById.length <= 0) {
        res.status(401).send("This user does not exists");
        return;
    }

    res.locals.params = req.params.id;
    next();
}

export { AddGameIOwnSchemaValidation, GamesIOwnParamsValidation };