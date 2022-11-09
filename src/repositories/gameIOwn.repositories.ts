import connection from '../db/db.js';

async function AddGameIOwn(userId: number, gameId: number) {
    return connection.query(`INSERT INTO "gamesIOwn" ("userId", "gameId") VALUES($1, $2);`, [userId, gameId]);
}
async function VerifyIfUserIdExists(userId: number) {
    return connection.query(`SELECT * FROM users WHERE id = $1;`, [userId]);
}

async function GetGamesIOwn(userId: number) {
    return connection.query(`SELECT games.name AS "name", companies.name AS "companyName", genres.genre AS "genre" FROM "gamesIOwn" JOIN games ON "gamesIOwn"."gameId" = games.id JOIN companies ON games."companyId" = companies.id JOIN genres ON games."genreId" = genres.id WHERE "gamesIOwn"."userId" = $1;`, [userId]);
}

const addGameIOwnRepository = {
    AddGameIOwn,
    VerifyIfUserIdExists,
    GetGamesIOwn
}

export { addGameIOwnRepository };