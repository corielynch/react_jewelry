DROP DATABASE IF EXISTS jewelry_db;

CREATE DATABASE jewelry_db;
USE jewelry_db;

CREATE TABLE products (
id int,
handle VARCHAR (50),
title VARCHAR (50),
body VARCHAR (50),
tags VARCHAR (50),
price INTEGER(10)

);

SELECT * FROM products