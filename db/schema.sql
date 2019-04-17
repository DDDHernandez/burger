###Schema

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burger VARCHAR(250) NOT NULL,
    devoured BOOLEAN NOT NULL,
    PRIMARY KEY(id)
);