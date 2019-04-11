BEGIN;

DROP TABLE IF EXISTS brexit CASCADE;


CREATE TABLE brexit (
    id SERIAL PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    brexitType VARCHAR(30) NOT NULL
);

INSERT INTO users (name, brexitType) VALUES ('Theresa', 'Scrambled-Brexit');

COMMIT;
