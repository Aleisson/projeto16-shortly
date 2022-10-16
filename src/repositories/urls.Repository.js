import connection from "../database/database.js";
import { TABLES_NAMES } from "../Enums/tablesNames.Enum.js";

async function insertUrls(userId, url, shortUrl) {

    return connection
        .query(`INSERT INTO "urls"("userId", "url", "short_url")
                VALUES
                ($1, $2, $3)`,
            [userId, url, shortUrl])


}

export { insertUrls }