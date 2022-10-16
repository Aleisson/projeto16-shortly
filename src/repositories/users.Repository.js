import connection from "../database/database.js";
import { TABLES_NAMES } from "../Enums/tablesNames.Enum.js";

async function selectUsersId(id) {

    return connection
        .query(`SELECT * FROM 
                    ${TABLES_NAMES.USERS} 
                WHERE id = $1 ;`,
            [id]);

}

async function selectUrlsUserId(userId) {

    return connection.query(
        `SELECT * FROM ${TABLES_NAMES.URLS}
        WHERE "userId" = $1;`, [userId]
    )

}


async function selectUrlsSum(userId) {

    return connection.query(`SELECT SUM(visite_count)  
                    FROM urls WHERE "userId" = $1;`,[userId])
}


export { selectUsersId, selectUrlsUserId, selectUrlsSum }