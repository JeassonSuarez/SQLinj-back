CREATE DATABASE IF NOT EXISTS pTres;

CREATE TABLE users (
    id INT(11) NOT NULL AUTO_INCREMENT,
    username VARCHAR(45) DEFAULT NULL,
    pass VARCHAR(45) DEFAULT NULL,
    PRIMARY KEY(id)
)