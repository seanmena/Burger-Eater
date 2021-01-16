DROP DATABASE IF EXISTS burger_db;
CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers
(
  id int NOT NULL
  auto_increment,
  burger_name varchar
  (300),
  devoured boolean DEFAULT false,
  PRIMARY KEY
  (id)
);