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
img_src VARCHAR (550),
PRIMARY KEY ( `id` )
);


CREATE TABLE checkout (
    id int NOT NULL AUTO_INCREMENT,
    products_id int NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (products_id) REFERENCES products(id)
);

SELECT * FROM products;
SELECT * FROM checkout;