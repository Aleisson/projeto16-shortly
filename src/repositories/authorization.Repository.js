import connection from "../database/database.js";
import { TABLES_NAMES } from "../Enums/tablesNames.Enum.js";

async function selectUsers(email) {

    return connection
        .query(`SELECT * FROM 
                    ${TABLES_NAMES.USERS} 
                WHERE email = $1 ;`,
            [email]);

}


async function insertUsers(name, email, passwordHash) {

    return connection
        .query(`INSERT INTO ${TABLES_NAMES.USERS} 
                        (name, email, hash_password)
               VALUES($1, $2, $3)`,
            [name, email, passwordHash]);

}

async function insertSession(userId, token) {

    return connection
        .query(`INSERT INTO ${TABLES_NAMES.SESSION}
                        ("userId", token)
                VALUES($1, $2)`,
            [userId, token]);

}

async function selectSessionId(id) {

    return connection
        .query(`SELECT * FROM ${TABLES_NAMES.SESSION}
            WHERE "userId" = $1;`, [id]);

}

async function updateSession(id, token) {

    return connection
        .query(`UPDATE ${TABLES_NAMES.SESSION}
        SET token = $1
        WHERE "userId" = $2;`, [token, id]);

}


export { insertUsers, selectUsers, insertSession, selectSessionId, updateSession }