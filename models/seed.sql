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


INSERT INTO conjugation_present (verb, yo, "tú", "third", nosotros, vosotros, "group" )
  VALUES
  ('ser', 'soy', 'eres', 'es', 'somos', 'sois', 'son'),
  ('estar', 'estoy', 'estás', 'está', 'estamos', 'estáis', 'están'),
  ('tener', 'tengo', 'tienes', 'tiene', 'tenemos', 'tenéis', 'tienen'),
  ('conocer','conozco', 'conoces', 'conocen', 'conocemos', 'conocéis', 'conocen'),
  ('hacer','hago', 'haces', 'hace', 'hacemos', 'hacéis', 'hacen'),
  ('haber','he', 'has', 'ha,hay', 'hemos', 'habéis', 'han'),
  ('beber','bebo', 'bebes', 'bebe', 'bebemos', 'bebéis', 'beben'),
  ('comer','como', 'comes', 'come', 'comemos', 'coméis', 'comen'),
  ('sentir','siento', 'sientes', 'siente', 'sentimos', 'sentís', 'sienten'),
  ('esperar','espero', 'esperas', 'espera', 'esperamos', 'esperáis', 'esperan');


INSERT INTO conjugation_preterite (verb, yo, "tú", "third", nosotros, vosotros, "group" )
  VALUES
  ( 'ser','fui', 'fuiste', 'fue', 'fuimos', 'fuisteis', 'fueron'),
  ( 'estar','estuve', 'estuviste', 'estuvo', 'estuvimos', 'estuvisteis', 'estuvieron'),
  ( 'tener','tuve', 'tuviste', 'tuvo', 'tuvimos', 'tuvisteis', 'tuvieron'),
  ( 'conocer','conocí', 'conociste', 'conoció', 'conocimos', 'conocisteis', 'conocieron'),
  ( 'hacer','hice', 'hiciste', 'hizo', 'hicimos', 'hicisteis', 'hicieron'),
  ( 'haber','hube', 'hubiste', 'hubo', 'hubimos', 'hubisteis', 'hubieron'),
  ( 'beber','bebí', 'bebiste', 'bebió', 'bebimos', 'bebisteis', 'bebieron'),
  ( 'comer','comí', 'comiste', 'comiò', 'comimos', 'comisteis', 'comieron'),
  ( 'sentir','sentí', 'sentiste', 'sintió', 'sentimos', 'sentisteis', 'sintieron'),
  ('esperar','esperé', 'esperaste', 'esperó', 'esperamos', 'esperasteis', 'esperaron');



INSERT INTO conjugation_future (verb, yo,"tú", "third", nosotros, vosotros, "group" )
  VALUES
  ('ser', 'seré', 'serás', 'será', 'seremos', 'seréis', 'serán'),
  ('estar','estaré', 'estarás', 'estará', 'estaremos', 'estaréis', 'estarán'),
  ('tener','tendré', 'tendrás', 'tendrá', 'tendremos', 'tendréis', 'tendrán'),
  ('conocer','conoceré', 'conocerás', 'conocerá', 'conoceremos', 'conoceréis', 'conocerán'),
  ('hacer','haré', 'harás', 'hará', 'haremos', 'haréis', 'harán'),
  ('haber','habré', 'habrás', 'habrá', 'habremos', 'habréis', 'habrán'),
  ('beber','beberé', 'beberás', 'beberá', 'beberemos', 'beberéis', 'beberán'),
  ('comer','comeré', 'comerás', 'comerá', 'comeremos', 'comeréis', 'comerán'),
  ('sentir','sentiré', 'sentirás', 'sentirá', 'sentiremos', 'sentiréis', 'sentirán'),
  ('esperar','esperé', 'esperarás', 'esperará', 'esperaremos', 'esperaréis', 'esperarán');



INSERT INTO conjugation_conditional (verb, yo,"tú", "third", nosotros, vosotros, "group" )
  VALUES
  ('ser','sería', 'serías', 'sería', 'seríamos', 'seríais', 'serían'),
  ('estar','estaría', 'estarías', 'estaría', 'estaríamos', 'estaríais','estarían'),
  ('tener','tendría', 'tendrías', 'tendría', 'tendríamos', 'tendríais', 'tendrían'),
  ('conocer','conocería', 'conocerías', 'conocería', 'conoceríamos', 'conoceríais', 'concocerían'),
  ('hacer','haría', 'harías', 'haría', 'haríamos', 'haríais', 'harían'),
  ('haber','habría', 'habrías', 'habría', 'habríamos', 'habríais', 'habrían'),
  ('beber','bebería', 'beberías', 'bebería', 'beberíamos', 'beberíais', 'beberían'),
  ('comer','comería', 'comerías', 'comería', 'comeríamos', 'comeríais', 'comerían'),
  ('sentir','sentiría', 'sentirías', 'sentiría', 'sentiríamos', 'sentiríais', 'sentirían'),
  ('esperar','esperaría', 'esperarías', 'esperaría', 'esperaríamos', 'esperaríais', 'esperarían');


-- database -server-side -client-side
