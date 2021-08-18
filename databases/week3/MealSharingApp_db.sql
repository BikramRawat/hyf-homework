-- databases/week3 Homework :- creating meal sharing app database and perform queries on it
-- create database and use it
USE meal_sharing_app_db;
SET NAMES utf8mb4;

-- creating meal_sharing database tables 
CREATE TABLE `meal` (
    `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `title` VARCHAR(255) NOT NULL,
    `description` TEXT NOT NULL,
    `location` VARCHAR(255) NOT NULL,
    `when` TIMESTAMP NOT NULL,
    `max_reservations` INT(10) NOT NULL,
    CHECK (max_reservations <= 10),
    `price` DECIMAL(4,2) UNSIGNED NOT NULL,
    `created_date` DATE NOT NULL DEFAULT NOW()
)ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

CREATE TABLE `reservation` (
    `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `number_of_guests` INT(10) NOT NULL,
    `meal_id` INT(10) UNSIGNED NOT NULL,
    `created_date` DATE NOT NULL DEFAULT NOW(),
    `contact_phonenumber` VARCHAR(255) NULL,
    `contact_name` VARCHAR(255) NOT NULL,
    `contact_email` VARCHAR(255) NOT NULL,
    CONSTRAINT `fk_reservation_meal` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
)ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

CREATE TABLE `review` (
    `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `title` VARCHAR(255) NOT NULL,
    `description` TEXT NULL DEFAULT NULL,
    `meal_id` INT(10) UNSIGNED NOT NULL,
    `stars` INT(10) UNSIGNED NOT NULL,
    `created_date` DATE NOT NULL DEFAULT NOW(),
    CONSTRAINT `fk_review_meal` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
)ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

-- Queries : meal TABLE
-- add new meals 
INSERT INTO meal (`title`,`description`,`location`,`when`,`max_reservations`,`price`)
VALUES ('Breakfast','light breakfast','Københavan H','2021-08-12 07:00:00','8','800.00'),
       ('Lunch','Pasta, vegetables and chicken drums','Københavan H','2021-08-12 13:30:00','4','1000.00'),
       ('Snacks','Fried noodles with eggs','Københavan Ø','2021-09-10 16:00:00','3','450.00');

-- get all meals
SELECT * FROM meal;

-- add new meal
INSERT INTO meal (`title`,`description`,`location`,`when`,`max_reservations`,`price`)
VALUES ('Evening drinks','Beer, wine, cola and soft drinks','Københavan V','2021-10-16 20:00:00','5','4500.00');

-- get a meal with any id fx. 1 
SELECT * FROM meal WHERE id = 3;

-- update a meal with any id , update any attribute or multiple 
UPDATE meal SET `location` = 'Århus', `description` = 'Pizza, salats and drinks'
WHERE id = LAST_INSERT_ID();

UPDATE meal SET `description` = 'soft and hard drinks'
-- WHERE id = LAST_INSERT_ID();
WHERE id = 4;

-- delete a meal with any Id
DELETE FROM meal
WHERE id = 2;

-- Queries : reservation TABLE
-- get all reservations
SELECT * FROM reservation;

-- add a new reservation

INSERT INTO reservation (`number_of_guests`,`meal_id`,`contact_phonenumber`,`contact_name`,`contact_email`)
VALUES ('12','1','123456','Michael','michael@mail.com');

INSERT INTO reservation (`number_of_guests`,`meal_id`,`contact_phonenumber`,`contact_name`,`contact_email`)
VALUES ('20','3','1235456','Michael & John','john@mail.com'),
('8','4','3232444','Sara','sara@mail.com');

-- get a reservarion with any ID
SELECT * FROM reservation
WHERE id = LAST_INSERT_ID();

SELECT * FROM reservation
WHERE id = 1;

-- update a reservation with any id , update some attributes too
UPDATE reservation
SET `contact_name` = 'Bikram',
`contact_phonenumber` = '111222',
`contact_email` = 'bikram44@mail.com';

ROLLBACK;

UPDATE reservation
SET `contact_name` = 'Alexander',
`contact_phonenumber` = '456678',
`contact_email` = 'alex44@mail.com'
WHERE id = 6;

UPDATE reservation
SET `contact_name` = 'Marta',
`contact_phonenumber` = '999222',
`contact_email` = 'marta45@mail.com'
WHERE id = 7;

-- delete a reservation with any id 
DELETE FROM reservation
WHERE id = 6;

UPDATE reservation
SET `number_of_guests` = '5'
WHERE id = 7;

-- Queries: review TABLE
-- add some reviews
INSERT INTO review (`title`,`meal_id`,`stars`)
VALUES ('Very Good','3','4'),
('Excellent','4','5'),
('Not good','1','2');
 
 -- get all reviews
 SELECT * FROM review
 ORDER BY stars DESC;

 -- get review, update and delete review
SELECT title AS review_title, stars AS review_stars
FROM review
WHERE id = LAST_INSERT_ID();

UPDATE review
SET `title` = 'Good',
`stars` = '3'
WHERE id = 1;

DELETE FROM review WHERE id = 2;

-- Additional Queries
-- get meals that has a price smaller than a specific price fx 90
SELECT * FROM meal
WHERE price < 1000;

-- get meals that still has available reservations
-- SELECT meal.title, meal.max_reservations,
-- reservation.number_of_guests 
-- FROM meal
-- JOIN reservation ON meal.id = reservation.meal_id
-- WHERE meal.max_reservations >= reservation.number_of_guests;

-- new solution

SELECT 
    COALESCE(SUM(reservation.number_of_guests), 0) AS total_reservation,
    meal.max_reservation,
    meal.title,
    meal.id
FROM
    meal
        LEFT JOIN
    reservation ON reservation.meal_id = meal.id
GROUP BY meal.id
HAVING max_reservation > total_reservation;

-- get meals that partially match a title with fx: drinks 
SELECT * FROM meal
WHERE title LIKE '%drinks%';

-- Get meals that has been created between two dates
SELECT * FROM meal
WHERE created_date BETWEEN '2019-12-12' AND '2021-12-12';

-- Get only specific number of meals fx return only 5 meals
SELECT * FROM meal
LIMIT 2;

SELECT * FROM meal
LIMIT 2,2;

SELECT * FROM meal
LIMIT 2 OFFSET 1;

-- Get the meals that have good reviews
SELECT meal.title AS meal_name, meal.location AS address,
review.title AS cutomer_review, review.stars AS review_stars
FROM meal
JOIN review ON meal.id = review.meal_id
WHERE review.stars >= 3
ORDER BY review.stars DESC;

-- Get reservations for a specific meal sorted by created_date
SELECT meal.title, meal.created_date, reservation.number_of_guests, reservation.contact_phonenumber
FROM meal
JOIN reservation ON meal.id = reservation.meal_id
WHERE meal.id = 4
ORDER BY created_date;

-- Sort all meals by average number of stars in the reviews
SELECT meal.title, meal.price, AVG(review.stars) AS AverageReviews
FROM meal
JOIN review ON meal.id = review.meal_id
GROUP BY meal.id
ORDER BY AverageReviews DESC;

-- THE END -- 
