-- create table parents (
-- 	id INT NOT NULL AUTO_INCREMENT unique,
-- 	firstName varchar(255),
-- lastName varchar(255),
--    PRIMARY KEY (id)
-- )
create table children (
	id INT NOT NULL AUTO_INCREMENT unique,
	firstName varchar(255),
	lastName varchar(255),
    parent_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (parent_id) references parents(id)
)