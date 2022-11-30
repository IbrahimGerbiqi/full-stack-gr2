 INSERT INTO users (firstName,lastName,email,password)
	VALUES ('Ali','Hajdari','alihajdari@hotmail.com','123456789'),
		   ('Adem','Marashi','ademmarashi@gmail.com','11223344');
           
           
SELECT * FROM users WHERE id <= 2;

SELECT * FROM users WHERE char_length(firstName) = 4;

SELECT * FROM users WHERE email LIKE '%@gmail.com';

SELECT COUNT(*) FROM users;

SELECT * FROM users LIMIT 3,6;