-- HOMEWORK databases/week2 Part 2: School database
-- Create a new database containing the following tables:
-- Class: with the columns: id, name, begins (date), ends (date)
-- Student: with the columns: id, name, email, phone, class_id (foreign key)
CREATE DATABASE MySchool;
USE MySchool;

SET NAMES utf8mb4;
CREATE TABLE `class` (
    `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` TEXT NOT NULL,
    `begins` DATETIME NOT NULL,
    `ends` DATETIME NOT NULL
);

CREATE TABLE `student` (
    `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `phone` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`id`),
    `class_id` INT(10) UNSIGNED NOT NULL,
    CONSTRAINT `fk_class` FOREIGN KEY (`class_id`) REFERENCES `class` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);

INSERT INTO class
VALUES (2, 'Computer Engineering', '2021-08-10', '2022-08-10');

UPDATE class
SET name = 'Electronics'
WHERE id = 1;


INSERT INTO student
VALUES (1, 'Bikram', 'mail2bikram@gmail.com', '222-333-444', '2');

-- If you are done with the above tasks, you can continue with these advanced tasks:
-- Create an index on the name column of the student table.
CREATE UNIQUE INDEX index_name ON student (name);

-- Add a new column to the class table named status which can only have the following values: not-started, ongoing, finished (hint: enumerations).
ALTER TABLE class
ADD status ENUM('not-started', 'ongoing', 'finished') NOT NULL;
