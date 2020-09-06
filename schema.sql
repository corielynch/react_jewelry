DROP DATABASE IF EXISTS jewelry_db;
CREATE database jewelry_db;

USE jewelry_db;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  handle VARCHAR(30) NULL,
  title VARCHAR(30) NULL,
  body VARCHAR(30) NULL,
  tags VARCHAR(30) NULL,
  price INT NULL,
  img src VARCHAR(50) NULL,
img alt txt VARCHAR(50) NULL
  PRIMARY KEY (id)
);