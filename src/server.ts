import express from 'express';
import AddUser from "./routes/addGameIOwn.routes.js"
import AddGameIOwn from './routes/addUser.routes.js';
import { listAllJobs, double } from './controllers/AnotherTest.controller.js';
import connection from '../src/db/db.js';

const server = express();
server.use(express.json());

server.use(AddUser);
server.use(AddGameIOwn);

server.get('/jobs', listAllJobs);
server.get('/double', double);

server.get('/', async (req, res) => {
    const search = (await connection.query(`SELECT * FROM users;`)).rows;
    res.send(search);
});


server.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`);
});