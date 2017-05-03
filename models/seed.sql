\c spanish_verbs;


INSERT INTO verb_table (verb)
  VALUES ('ser');

INSERT INTO conjugation_present (verb_id, yo, "tú", "él/ella/Usted", nosotros, vosotros, "ellos/ellas/Ustedes" )
  VALUES ('1', 'soy', 'eres', 'es', 'somos', 'sois', 'son');


INSERT INTO conjugation_preterite (verb_id, yo, "tú", "él/ella/Usted", nosotros, vosotros, "ellos/ellas/Ustedes" )
  VALUES ( '1', 'fui', 'fuiste', 'fue', 'fuimos', 'fuisteis', 'fueron');


INSERT INTO conjugation_future (verb_id, yo, "tú", "él/ella/Usted", nosotros, vosotros, "ellos/ellas/Ustedes" )
  VALUES ('1', 'seré', 'serás', 'será', 'seremos', 'seréis', 'serán');


INSERT INTO conjugation_conditional (verb_id, yo, "tú", "él/ella/Usted", nosotros, vosotros, "ellos/ellas/Ustedes" )
  VALUES ('1', 'sería', 'serías', 'sería', 'seríamos', 'seríais', 'serían');
