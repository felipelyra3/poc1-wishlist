import express from 'express';
import { AddUserSchemaValidation, VerifyIfEmailExists, UpdateUserNameSchemaValidation } from '../middlewares/addUser.middleware.js';
import { GamesIOwnParamsValidation } from '../middlewares/gameIOwn.middleware.js';
import { AddUser, UpdateUserName } from '../controllers/addUser.controller.js';

const router = express.Router();

router.post('/adduser', AddUserSchemaValidation, VerifyIfEmailExists, AddUser);
router.put('/updateusername/:id', GamesIOwnParamsValidation, UpdateUserNameSchemaValidation, UpdateUserName);

export default router;