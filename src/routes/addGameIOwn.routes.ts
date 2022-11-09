import express from 'express';
import { AddGameIOwnSchemaValidation, GamesIOwnParamsValidation, ValidateIfUserExists } from '../middlewares/gameIOwn.middleware.js';
import { AddGameIOwn, GetGamesIOwn, DeleteGameIOwn } from '../controllers/gameIOwn.controller.js';

const router = express.Router();

router.post('/addgameiown', AddGameIOwnSchemaValidation, AddGameIOwn);
router.get('/gamesiown/:id', GamesIOwnParamsValidation, GetGamesIOwn);
router.delete('/deletegameiown', AddGameIOwnSchemaValidation, ValidateIfUserExists, DeleteGameIOwn);

export default router;