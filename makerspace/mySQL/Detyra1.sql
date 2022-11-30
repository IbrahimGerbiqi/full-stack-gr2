CREATE table userat1 (
	id INT PRIMARY KEY AUTO_INCREMENT,
    firstName VARCHAR(40) NOT NULL,
    lastName VARCHAR(40) NOT NULL,
    email VARCHAR(40) NOT NULL,
    password VARCHAR(40) NOT NULL,
    createdAt TIMESTAMP NOT NULL
);