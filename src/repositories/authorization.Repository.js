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




export { insertUsers, selectUsers }