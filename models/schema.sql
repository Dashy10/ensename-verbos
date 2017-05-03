DROP DATABASE IF EXISTS spanish_verbs;
CREATE DATABASE spanish_verbs;

\c spanish_verbs;


DROP TABLE IF EXISTS verb_table;

CREATE TABLE verb_table
(id SERIAL PRIMARY KEY,
  verb VARCHAR(255)
);

DROP TABLE IF EXISTS conjugation_present;

CREATE TABLE conjugation_present
(id SERIAL PRIMARY KEY,
  verb_id INTEGER NOT NULL,
  yo VARCHAR(255),
  "tú" VARCHAR(255),
  "él/ella/Usted" VARCHAR(255),
  nosotros VARCHAR(255),
  vosotros VARCHAR(255),
  "ellos/ellas/Ustedes" VARCHAR(255)
);

DROP TABLE IF EXISTS conjugation_preterite;

CREATE TABLE conjugation_preterite
(id SERIAL PRIMARY KEY,
  verb_id INTEGER NOT NULL,
  yo VARCHAR(255),
  "tú" VARCHAR(255),
  "él/ella/Usted" VARCHAR(255),
  nosotros VARCHAR(255),
  vosotros VARCHAR(255),
  "ellos/ellas/Ustedes" VARCHAR(255)
);

DROP TABLE IF EXISTS conjugation_future;

CREATE TABLE conjugation_future
(id SERIAL PRIMARY KEY,
  verb_id INTEGER NOT NULL,
  yo VARCHAR(255),
  "tú" VARCHAR(255),
  "él/ella/Usted" VARCHAR(255),
  nosotros VARCHAR(255),
  vosotros VARCHAR(255),
  "ellos/ellas/Ustedes" VARCHAR(255)
);

DROP TABLE IF EXISTS conjugation_conditional;

CREATE TABLE conjugation_conditional
(id SERIAL PRIMARY KEY,
  verb_id INTEGER NOT NULL,
  yo VARCHAR(255),
  "tú" VARCHAR(255),
  "él/ella/Usted" VARCHAR(255),
  nosotros VARCHAR(255),
  vosotros VARCHAR(255),
  "ellos/ellas/Ustedes" VARCHAR(255)
);



















-- Schema.sql && seed.sql
-- \c connect to database



-- psql -f schema.sql && -f seed.sql
