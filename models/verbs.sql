DROP DATABASE IF EXISTS spanish_verbs;
CREATE DATABASE spanish_verbs;

\c spanish_verbs;


DROP TABLE IF EXISTS present_tense;

CREATE TABLE present_tense
(id SERIAL PRIMARY KEY,
  verb VARCHAR(255),
  yo VARCHAR(255),
  tú VARCHAR(255),
  él_ella_Ud VARCHAR(255),
  nosotros VARCHAR(255),
  vosotros VARCHAR(255),
  ellos_ellas_Uds VARCHAR(255)
);

INSERT INTO present_tense
(verb, yo, tú, él_ella_Ud, nosotros, vosotros, ellos_ellas_Uds)
      VALUES('ser', 'soy', 'eres', 'es', 'somos', 'sois', 'son')
