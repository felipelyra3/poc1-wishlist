import { Request, Response } from 'express';
import { addGameIOwnRepository } from '../repositories/gameIOwn.repositories.js';

async function AddGameIOwn(req: Request, res: Response) {
    await addGameIOwnRepository.AddGameIOwn(req.body.userId, req.body.gameId);
    res.sendStatus(201);
}

async function GetGamesIOwn(req: Request, res: Response) {
    const getGamesIOwn = (await addGameIOwnRepository.GetGamesIOwn(res.locals.params)).rows;
    res.status(200).send(getGamesIOwn);
}

async function DeleteGameIOwn(req: Request, res: Response) {
    await addGameIOwnRepository.DeleteGameIOwn(res.locals.body.userId, res.locals.body.gameId);
    res.sendStatus(202);
}

export { AddGameIOwn, GetGamesIOwn, DeleteGameIOwn };