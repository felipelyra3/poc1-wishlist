import connection from '../db/db.js';

async function verifyIfEmailExists(email: string) {
    return connection.query(`SELECT * FROM users WHERE email = $1;`, [email]);
}

async function addUser(name: string, email: string) {
    return connection.query(`INSERT INTO users (name, email) VALUES($1, $2);`, [name, email]);
}

async function updateUserName(name: string, userId: number) {
    return connection.query(`UPDATE users SET name = $1 WHERE id = $2;`, [name, userId]);
}

const addUserRepository = {
    verifyIfEmailExists,
    addUser,
    updateUserName
}

export { addUserRepository };