import { NextFunction, Request, Response } from 'express';
import { addUserSchema, updateUserNameSchema } from "../schemas/addUserSchema.js";
import { addUserRepository } from "../repositories/addUser.repository.js";

async function AddUserSchemaValidation(req: Request, res: Response, next: NextFunction) {
    const validation = await addUserSchema.validate(req.body, {
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

async function VerifyIfEmailExists(req: Request, res: Response, next: NextFunction) {
    const searchByEmail = (await addUserRepository.verifyIfEmailExists(req.body.email)).rows;

    if (searchByEmail.length > 0) {
        res.status(401).send("This e-mail aready exists");
        return;
    }

    next();
}

async function UpdateUserNameSchemaValidation(req: Request, res: Response, next: NextFunction) {
    const validation = await updateUserNameSchema.validate(req.body, {
        abortEarly: false,
    });

    if (validation.error) {
        const errors = validation.error.details.map((error) => error.message);
        res.status(422).send({ message: errors });
        return;
    }

    res.locals.body = req.body;
    next();
}

export { AddUserSchemaValidation, VerifyIfEmailExists, UpdateUserNameSchemaValidation };