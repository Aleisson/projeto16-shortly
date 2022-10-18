import connection from "../database/database.js";
import { TABLES_NAMES } from "../Enums/tablesNames.Enum.js";

async function insertUrls(userId, url, shortUrl) {

    return connection
        .query(`INSERT INTO "urls"("userId", "url", "short_url")
                VALUES
                ($1, $2, $3);`,
            [userId, url, shortUrl])


}

async function selectUrl(url, userId) {
    return connection
        .query(`SELECT * FROM ${TABLES_NAMES.URLS}
            WHERE url = $1 AND "userId" = $2 ;` , [url, userId]);
}


async function selectUrlsId(id) {

    return connection
        .query(`SELECT * FROM ${TABLES_NAMES.URLS}
                WHERE id = $1 ;` , [id]);


}

async function selectUrlIdUserId(id, userId) {

    return connection
        .query(`SELECT * FROM ${TABLES_NAMES.URLS}
                WHERE id = $1 AND "userId" = $2 ;` , [id, userId]);
}

async function selectUrlsShortUrl(shortUrl) {

    return connection
        .query(`SELECT * FROM ${TABLES_NAMES.URLS}
                WHERE   short_url = $1; `, [shortUrl]);
}

async function updateVisite(id, visiteCount) {

    return connection
        .query(`UPDATE ${TABLES_NAMES.URLS}
            SET visite_count = $2
            WHERE id = $1;`, [id, visiteCount + 1])

}

async function deleteUrls(id) {

    return connection
        .query(`DELETE FROM ${TABLES_NAMES.URLS}
                WHERE id = $1;`, [id]);

}


export {
    insertUrls,
    selectUrl,
    selectUrlsId,
    selectUrlsShortUrl,
    updateVisite,
    selectUrlIdUserId,
    deleteUrls
};