DROP DATABASE IF EXISTS jewelry_db;

CREATE DATABASE jewelry_db;
USE jewelry_db;

CREATE TABLE products (
id int AUTO_INCREMENT,
handle VARCHAR (250),
title VARCHAR (250),
body VARCHAR (250),
tags VARCHAR (250),
price INTEGER(200),
img_src VARCHAR (250),

PRIMARY KEY ( `id` ) 

);

SELECT * FROM products;