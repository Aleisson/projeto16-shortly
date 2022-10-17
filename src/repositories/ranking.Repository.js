import connection from "../database/database.js";
import { TABLES_NAMES } from "../Enums/tablesNames.Enum.js";

async function selectRanking() {

    return connection.query(`SELECT
                              users.id,
                              users.name,
                              COUNT(urls.url) as conta_urls,
                              SUM(urls.visite_count) as soma_visita
                            FROM
                              users
                              INNER JOIN urls ON urls."userId" = users.id
                            GROUP BY
                              users.id
                            ORDER BY
                              soma_visita DESC
                             LIMIT 10;`)

}

export { selectRanking }