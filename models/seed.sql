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


INSERT INTO conjugation_present (yo, "tú", "third", nosotros, vosotros, "group" )
  VALUES
  ('soy', 'eres', 'es', 'somos', 'sois', 'son'),
  ('estoy', 'estás', 'está', 'estamos', 'estáis', 'están'),
  ('tengo', 'tienes', 'tiene', 'tenemos', 'tenéis', 'tienen'),
  ('conozco', 'conoces', 'conocen', 'conocemos', 'conocéis', 'conocen'),
  ('hago', 'haces', 'hace', 'hacemos', 'hacéis', 'hacen'),
  ('he', 'has', 'ha,hay', 'hemos', 'habéis', 'han'),
  ('bebo', 'bebes', 'bebe', 'bebemos', 'bebéis', 'beben'),
  ('como', 'comes', 'come', 'comemos', 'coméis', 'comen'),
  ('siento', 'sientes', 'siente', 'sentimos', 'sentís', 'sienten'),
  ('espero', 'esperas', 'espera', 'esperamos', 'esperáis', 'esperan');


INSERT INTO conjugation_preterite (yo, "tú", "third", nosotros, vosotros, "group" )
  VALUES
  ( 'fui', 'fuiste', 'fue', 'fuimos', 'fuisteis', 'fueron'),
  ( 'estuve', 'estuviste', 'estuvo', 'estuvimos', 'estuvisteis', 'estuvieron'),
  ( 'tuve', 'tuviste', 'tuvo', 'tuvimos', 'tuvisteis', 'tuvieron'),
  ( 'conocí', 'conociste', 'conoció', 'conocimos', 'conocisteis', 'conocieron'),
  ( 'hice', 'hiciste', 'hizo', 'hicimos', 'hicisteis', 'hicieron'),
  ( 'hube', 'hubiste', 'hubo', 'hubimos', 'hubisteis', 'hubieron'),
  ( 'bebí', 'bebiste', 'bebió', 'bebimos', 'bebisteis', 'bebieron'),
  ( 'comí', 'comiste', 'comiò', 'comimos', 'comisteis', 'comieron'),
  ( 'sentí', 'sentiste', 'sintió', 'sentimos', 'sentisteis', 'sintieron'),
  ('esperé', 'esperaste', 'esperó', 'esperamos', 'esperasteis', 'esperaron');



INSERT INTO conjugation_future (yo, "tú", "third", nosotros, vosotros, "group" )
  VALUES
  ('seré', 'serás', 'será', 'seremos', 'seréis', 'serán'),
  ('estaré', 'estarás', 'estará', 'estaremos', 'estaréis', 'estarán'),
  ('tendré', 'tendrás', 'tendrá', 'tendremos', 'tendréis', 'tendrán'),
  ('conoceré', 'conocerás', 'conocerá', 'conoceremos', 'conoceréis', 'conocerán'),
  ('haré', 'harás', 'hará', 'haremos', 'haréis', 'harán'),
  ('habré', 'habrás', 'habrá', 'habremos', 'habréis', 'habrán'),
  ('beberé', 'beberás', 'beberá', 'beberemos', 'beberéis', 'beberán'),
  ('comeré', 'comerás', 'comerá', 'comeremos', 'comeréis', 'comerán'),
  ('sentiré', 'sentirás', 'sentirá', 'sentiremos', 'sentiréis', 'sentirán'),
  ('esperé', 'esperarás', 'esperará', 'esperaremos', 'esperaréis', 'esperarán');



INSERT INTO conjugation_conditional (yo, "tú", "third", nosotros, vosotros, "group" )
  VALUES
  ('sería', 'serías', 'sería', 'seríamos', 'seríais', 'serían'),
  ('estaría', 'estarías', 'estaría', 'estaríamos', 'estaríais','estarían'),
  ('tendría', 'tendrías', 'tendría', 'tendríamos', 'tendríais', 'tendrían'),
  ('conocería', 'conocerías', 'conocería', 'conoceríamos', 'conoceríais', 'concocerían'),
  ('haría', 'harías', 'haría', 'haríamos', 'haríais', 'harían'),
  ('habría', 'habrías', 'habría', 'habríamos', 'habríais', 'habrían'),
  ('bebería', 'beberías', 'bebería', 'beberíamos', 'beberíais', 'beberían'),
  ('comería', 'comerías', 'comería', 'comeríamos', 'comeríais', 'comerían'),
  ('sentiría', 'sentirías', 'sentiría', 'sentiríamos', 'sentiríais', 'sentirían'),
  ('esperaría', 'esperarías', 'esperaría', 'esperaríamos', 'esperaríais', 'esperarían');


-- database -server-side -client-side
