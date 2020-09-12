DROP DATABASE IF EXISTS jewelry_db;

CREATE DATABASE jewelry_db;
USE jewelry_db;

CREATE TABLE products (
id int AUTO_INCREMENT,
handle VARCHAR (500),
title VARCHAR (500),
body VARCHAR (500),
tags VARCHAR (500),
price INTEGER(200)

PRIMARY KEY ( `id` ) 


);

SELECT * FROM products