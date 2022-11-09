import express from 'express';
import { AddGameIOwnSchemaValidation, GamesIOwnParamsValidation } from '../middlewares/gameIOwn.middleware.js';
import { AddGameIOwn, GetGamesIOwn } from '../controllers/gameIOwn.controller.js';

const router = express.Router();

router.post('/addgameiown', AddGameIOwnSchemaValidation, AddGameIOwn);
router.get('/gamesiown/:id', GamesIOwnParamsValidation, GetGamesIOwn);

export default router;