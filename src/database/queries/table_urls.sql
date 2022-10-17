CREATE TABLE
  "urls"(
    "id" SERIAL PRIMARY KEY,
    "userId" INTEGER REFERENCES users(id),
    "url" TEXT NOT NULL,
    "short_url" VARCHAR(10) NOT NULL,
    "visite_count" INTEGER DEFAULT 0,
    "creatAt" TIMESTAMP DEFAULT  CURRENT_TIMESTAMP
  );

-- INSERT INTO
--   "urls"("userId", "url", "short_url")
-- VALUES
-- (1, 'www.teste.comd', 'teste');

-- SELECT
--   *
-- FROM
--   urls;