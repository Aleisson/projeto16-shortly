CREATE TABLE
  "sessions"(
    "id" serial PRIMARY KEY,
    "userId" INTEGER REFERENCES users(id),
    "token" TEXT UNIQUE NOT NULL,
    "valid" BOOLEAN DEFAULT TRUE,
    "creatAt" TIMESTAMP DEFAULT  CURRENT_TIMESTAMP
  );
-- INSERT INTO
--   sessions("userId", "token")
-- VALUES
-- (1, 'teste');
-- SELECT * FROM sessions;