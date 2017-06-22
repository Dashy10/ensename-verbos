\c spanish_verbs;


INSERT INTO verb_table (verb)
  VALUES
  ('ser'),
  ('estar'),
  ('tener'),
  ('conocer'),
  ('hacer'),
  ('haber'),
  ('beber'),
  ('comer'),
  ('sentir'),
  ('esperar');


INSERT INTO conjugation_present (verb, yo, tu, third, nosotros, vosotros, plural )
  VALUES
  (1, 'soy', 'eres', 'es', 'somos', 'sois', 'son'),
  (2, 'estoy', 'estás', 'está', 'estamos', 'estáis', 'están'),
  (3, 'tengo', 'tienes', 'tiene', 'tenemos', 'tenéis', 'tienen'),
  (4,'conozco', 'conoces', 'conocen', 'conocemos', 'conocéis', 'conocen'),
  (5,'hago', 'haces', 'hace', 'hacemos', 'hacéis', 'hacen'),
  (6,'he', 'has', 'ha,hay', 'hemos', 'habéis', 'han'),
  (7,'bebo', 'bebes', 'bebe', 'bebemos', 'bebéis', 'beben'),
  (8,'como', 'comes', 'come', 'comemos', 'coméis', 'comen'),
  (9,'siento', 'sientes', 'siente', 'sentimos', 'sentís', 'sienten'),
  (10,'espero', 'esperas', 'espera', 'esperamos', 'esperáis', 'esperan');


INSERT INTO conjugation_preterite (verb, yo, tu, third, nosotros, vosotros, plural )
  VALUES
  ( 1,'fui', 'fuiste', 'fue', 'fuimos', 'fuisteis', 'fueron'),
  ( 2,'estuve', 'estuviste', 'estuvo', 'estuvimos', 'estuvisteis', 'estuvieron'),
  ( 3,'tuve', 'tuviste', 'tuvo', 'tuvimos', 'tuvisteis', 'tuvieron'),
  ( 4,'conocí', 'conociste', 'conoció', 'conocimos', 'conocisteis', 'conocieron'),
  ( 5,'hice', 'hiciste', 'hizo', 'hicimos', 'hicisteis', 'hicieron'),
  ( 6,'hube', 'hubiste', 'hubo', 'hubimos', 'hubisteis', 'hubieron'),
  ( 7,'bebí', 'bebiste', 'bebió', 'bebimos', 'bebisteis', 'bebieron'),
  ( 8,'comí', 'comiste', 'comió', 'comimos', 'comisteis', 'comieron'),
  ( 9,'sentí', 'sentiste', 'sintió', 'sentimos', 'sentisteis', 'sintieron'),
  (10,'esperé', 'esperaste', 'esperó', 'esperamos', 'esperasteis', 'esperaron');



INSERT INTO conjugation_future (verb, yo, tu, third, nosotros, vosotros, plural )
  VALUES
  (1, 'seré', 'serás', 'será', 'seremos', 'seréis', 'serán'),
  (2,'estaré', 'estarás', 'estará', 'estaremos', 'estaréis', 'estarán'),
  (3,'tendré', 'tendrás', 'tendrá', 'tendremos', 'tendréis', 'tendrán'),
  (4,'conoceré', 'conocerás', 'conocerá', 'conoceremos', 'conoceréis', 'conocerán'),
  (5,'haré', 'harás', 'hará', 'haremos', 'haréis', 'harán'),
  (6,'habré', 'habrás', 'habrá', 'habremos', 'habréis', 'habrán'),
  (7,'beberé', 'beberás', 'beberá', 'beberemos', 'beberéis', 'beberán'),
  (8,'comeré', 'comerás', 'comerá', 'comeremos', 'comeréis', 'comerán'),
  (9,'sentiré', 'sentirás', 'sentirá', 'sentiremos', 'sentiréis', 'sentirán'),
  (10,'esperé', 'esperarás', 'esperará', 'esperaremos', 'esperaréis', 'esperarán');



INSERT INTO conjugation_conditional (verb, yo,tu, third, nosotros, vosotros, plural )
  VALUES
  (1,'sería', 'serías', 'sería', 'seríamos', 'seríais', 'serían'),
  (2,'estaría', 'estarías', 'estaría', 'estaríamos', 'estaríais','estarían'),
  (3,'tendría', 'tendrías', 'tendría', 'tendríamos', 'tendríais', 'tendrían'),
  (4,'conocería', 'conocerías', 'conocería', 'conoceríamos', 'conoceríais', 'concocerían'),
  (5,'haría', 'harías', 'haría', 'haríamos', 'haríais', 'harían'),
  (6,'habría', 'habrías', 'habría', 'habríamos', 'habríais', 'habrían'),
  (7,'bebería', 'beberías', 'bebería', 'beberíamos', 'beberíais', 'beberían'),
  (8,'comería', 'comerías', 'comería', 'comeríamos', 'comeríais', 'comerían'),
  (9,'sentiría', 'sentirías', 'sentiría', 'sentiríamos', 'sentiríais', 'sentirían'),
  (10,'esperaría', 'esperarías', 'esperaría', 'esperaríamos', 'esperaríais', 'esperarían');


-- database -server-side -client-side
