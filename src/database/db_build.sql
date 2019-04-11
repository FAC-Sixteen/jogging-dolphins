BEGIN;

DROP TABLE IF EXISTS programmes CASCADE;
DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE programmes (
    programme_id SERIAL PRIMARY KEY,
    programme_name VARCHAR(100) NOT NULL,
    description VARCHAR(200), 
    length INTEGER, 
    continuity VARCHAR(3), 
    user_id SERIAL 
);

INSERT INTO programmes (programme_name, description, length, continuity) VALUES ('Adventure Time', 'Cartoon, comedy', 11, 'N');
INSERT INTO programmes (programme_name, description, length, continuity) VALUES ('Queer Eye', 'Fabulous reality show, makeovers', 43, 'N');
INSERT INTO programmes (programme_name, description, length, continuity) VALUES ('Big Brother Canada', 'Reality show, features real Canadians', 40, 'Y');

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

INSERT INTO users (name) VALUES ('Rohan');
INSERT INTO users (name) VALUES ('Henry');
INSERT INTO users (name) VALUES ('Joko');

COMMIT; 