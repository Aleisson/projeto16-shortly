CREATE TABLE
  users (
    id serial PRIMARY KEY,
    name character varying(80) NOT NULL,
    email character varying(120) NOT NULL,
    hash_password text NOT NULL,
    "creatAt" TIMESTAMP DEFAULT  CURRENT_TIMESTAMP
  );