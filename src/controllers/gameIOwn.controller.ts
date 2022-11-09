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

export { AddGameIOwn, GetGamesIOwn };