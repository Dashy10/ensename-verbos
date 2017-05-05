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
(verb_id SERIAL PRIMARY KEY,
  yo VARCHAR(255),
  "tú" VARCHAR(255),
  "third" VARCHAR(255),
  nosotros VARCHAR(255),
  vosotros VARCHAR(255),
  "group" VARCHAR(255)
);

DROP TABLE IF EXISTS conjugation_preterite;

CREATE TABLE conjugation_preterite
(verb_id SERIAL PRIMARY KEY,
  yo VARCHAR(255),
  "tú" VARCHAR(255),
  "third" VARCHAR(255),
  nosotros VARCHAR(255),
  vosotros VARCHAR(255),
  "group" VARCHAR(255)
);

DROP TABLE IF EXISTS conjugation_future;

CREATE TABLE conjugation_future
(verb_id SERIAL PRIMARY KEY,
  yo VARCHAR(255),
  "tú" VARCHAR(255),
  "third" VARCHAR(255),
  nosotros VARCHAR(255),
  vosotros VARCHAR(255),
  "group" VARCHAR(255)
);

DROP TABLE IF EXISTS conjugation_conditional;

CREATE TABLE conjugation_conditional
(verb_id SERIAL PRIMARY KEY,
  yo VARCHAR(255),
  "tú" VARCHAR(255),
  "third" VARCHAR(255),
  nosotros VARCHAR(255),
  vosotros VARCHAR(255),
  "group" VARCHAR(255)
);

-- CHANGE verb_idto verb_verb_id


-- Schema.sql && seed.sql
-- \c connect to database



-- psql -f schema.sql && -f seed.sql
