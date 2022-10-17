CREATE TABLE
  users (
    id serial PRIMARY KEY,
    name VARCHAR(80) NOT NULL,
    email VARCHAR(120) UNIQUE NOT NULL,
    hash_password text NOT NULL,
    "creatAt" TIMESTAMP DEFAULT  CURRENT_TIMESTAMP
  );