DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department (
    id INT,
    name VARCHAR(30),
    PRIMARY KEY (id)
);

CREATE TABLE reviews (
    id INT,
    movie_id INT,
    review TEXT,

    FOREIGN KEY (movie_id)
    REFERENCES movies(id)
);