CREATE TABLE
  "users"(
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(80) NOT NULL,
    "email" VARCHAR(120) NOT NULL UNIQUE,
    "hash_password" VARCHAR(120) NOT NULL
  );