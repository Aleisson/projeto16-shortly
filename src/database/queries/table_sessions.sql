CREATE TABLE "sessions"(
    "id" serial PRIMARY KEY,
    "userId" INTEGER REFERENCES users(id),
    "token" TEXT  NOT NULL,
    "valid" BOOLEAN DEFAULT TRUE
);
-- INSERT INTO
--   sessions("userId", "token")
-- VALUES
-- (1, 'teste');
-- SELECT * FROM sessions;