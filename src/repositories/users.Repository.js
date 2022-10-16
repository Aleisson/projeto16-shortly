import connection from "../database/database.js";
import { TABLES_NAMES } from "../Enums/tablesNames.Enum.js";

async function selectUsersId(id) {

    return connection
        .query(`SELECT * FROM 
                    ${TABLES_NAMES.USERS} 
                WHERE id = $1 ;`,
            [id]);

}

return {selectUsersId}