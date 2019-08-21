DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db; 

select * from burgers;

CREATE TABLE burgers (
id INTEGER AUTO_INCREMENT NOT NULL,
burger_name VARCHAR (255) NOT NULL, 
devoured BOOLEAN,

PRIMARY KEY(id) 
); 
