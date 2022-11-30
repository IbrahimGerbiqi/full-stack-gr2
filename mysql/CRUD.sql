
-- insertim i te dhenave
 INSERT INTO users (firstName,lastName,email,password)
	VALUES ('Enis','Qafleshi','enisqafeleshi@gmail.com','KosovaRepublike');

-- leximi i te gjitha te dhenave
-- SELECT * FROM users;

-- leximi i disa kolonave
-- SELECT id,firstName FROM users;

-- Alias - riemertimi i koolonave ne rezultat
-- SELECT id,firstName AS emri, lastName mbiemri FROM users;

-- CONCAT - lidhja e dy kolonave
-- SELECT CONCAT(firstName,'_',lastName)  fullName FROM users;



-- CONCAT dhe lowercase/uppercase - lidhja e dy kolonave
-- SELECT LOWER(CONCAT(firstName,'_',lastName))  fullName FROM users;

-- insert multiple records at once
-- INSERT INTO users (firstName,lastName,email,password)
-- VALUES 
-- ('Endrit','Tytynxhiu','endrit_formula_1@gmail.com','Ferrari'),
-- ('Shpend','Matusha','shpendm@gmail.com','KosovaeshteShqiperi');

-- SET SQL_SAFE_UPDATES=0;
-- UPDATE users SET firstName='Shpendi';
-- ndryshimi i nje rreshti te caktuar
-- UPDATE users SET firstName='Shpend' WHERE id=4;
 
-- UPDATE users SET firstName='Shpendi' WHERE firstName='Shpend';

-- UPDATE users SET firstName=LOWER(firstName);
-- SELECT * FROM users;

-- UPDATE users SET firstName=(CONCAT(UPPER(SUBSTRING(firstName,1,1)),'',LOWER(SUBSTRING(firstName,2))));

-- SELECT * FROM users;
-- fshiji te gjitha te dhenat
-- DELETE FROM users;

-- fshiji te gjitha te dhenat me nje kusht specifik
 -- DELETE FROM users WHERE id=3;

SELECT * FROM users;

-- INSERT INTO users (firstName,lastName,email,password)
-- VALUES 
-- ('Endrit','Tytynxhiu','endrit_formula_1@gmail.com','Ferrari');

