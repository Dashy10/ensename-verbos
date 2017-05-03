# Spanish Conjugator Application

### INSTALLATION & SETUP 

1. Generate an express application
2. Configure npm modules: 
	- pg-promise
	- nodemon
	- bluebird
3. Setup local server
4. Create a Heroku application
5. Initiate and push to git repo && heroku master
6. Create a schema:
	- create a database
	- organize tables based on verbs && tenses

## Back-end Development

### SQL Pseudocode

	verb_table
	ID| VERB
	1 |	SER       
	2 |	ESTAR   
	
	
	
	CONJUGATION_PRESENT TABLE
	ID|Verb_id| Yo  | Tú | [Él/Ella/Usted]| nosotros |vosotros |[ellos/ellas/Ustedes]
	1 |1      | soy |eres|	es            | somos    | sois    |       son
	
	CONJUGATION_PRETERITE TABLE
	ID| Verb_id | Yo  | Tú   | [Él/Ella/Usted] | nosotros  |vosotros     |[ellos/ellas/Ustedes]
	1 |	1       | fui |fuiste|	fue            | fuimos    | fuisteis    |       fueron
	
	CONJUGATION_FUTURE TABLE
	ID| Verb_id | Yo   | Tú  | [Él/Ella/Usted] | nosotros   |vosotros     |[ellos/ellas/Ustedes]
	1 |	1       | seré |serás|	será           | seremos    | seréis      |       serán
	
	CONJUGATION_CONDITIONAL TABLE
	ID| Verb_id | Yo    | Tú     | [Él/Ella/Usted] | nosotros |vosotros |[ellos/ellas/Ustedes]
	1 |	1       | sería |seriás  |	sería          | seríamos | seríais |     serían

#### Code Example Of A Join
``` SQL
SELECT * FROM verb_table
JOIN
conjugation_present
ON verb_table.id = conjugation_present.verb_id;

```
### CRUD Functionality 

## Front-end Development



