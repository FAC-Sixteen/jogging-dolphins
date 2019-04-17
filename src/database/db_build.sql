BEGIN;

    DROP TABLE IF EXISTS programmes
    CASCADE;
DROP TABLE IF EXISTS users
CASCADE;

CREATE TABLE users
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    password VARCHAR NOT NULL
);

INSERT INTO users
    (name)
VALUES
    ('Rohan'),
    ('Henry'
),
    ('Joko'
);


CREATE TABLE programmes
(
    programme_id SERIAL PRIMARY KEY,
    programme_name VARCHAR(100) NOT NULL,
    description VARCHAR(200),
    length INTEGER,
    continuity VARCHAR(3),
    user_id INTEGER REFERENCES users(id)
);

INSERT INTO programmes
    (programme_name, description, length, continuity)
VALUES
    ('Adventure Time', 'Cartoon, comedy', 11, 'No'),
    ('Queer Eye', 'Fabulous reality show, makeovers', 43, 'No'
),
    ('Big Brother Canada', 'Reality show, features real Canadians', 40, 'Yes'
);


COMMIT; 