import { Request, Response } from 'express';
import { addUserRepository } from '../repositories/addUser.repository.js';

async function AddUser(req: Request, res: Response) {
    await addUserRepository.addUser(req.body.name, req.body.email);
    res.sendStatus(201);
}

async function UpdateUserName(req: Request, res: Response) {
    const userId = Number(req.params.id);
    await addUserRepository.updateUserName(res.locals.body.name, userId);
    res.sendStatus(200);
}

export { AddUser, UpdateUserName };