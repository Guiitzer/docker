CREATE DATABASE IF NOT EXISTS
  guilhermedocker;
USE guilhermedocker;

CREATE TABLE IF NOT EXISTS products (
  id INT(11) AUTO_INCREMENT,
  name VARCHAR(255),
  price DECIMAL(10,2),
  PRIMARY KEY (id)
);

INSERT INTO products VALUE(0, 'Curso descomplicando Docker', 600);
INSERT INTO products VALUE(0, 'Curso Especialização em Front-End', 2600);