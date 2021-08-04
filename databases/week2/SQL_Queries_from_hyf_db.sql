use mysql_hyf;
-- Homework databases/week2
-- This file contains PART 1 , PART 3 of the homework and the classwork exercises:
-- PART 1: working with the tasks, write the following queries

-- 1.Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id
ALTER TABLE task
  ADD user_id VARCHAR(40) NOT NULL
    AFTER status_id;
INSERT INTO task (title, description, created, updated, due_date, status_id, user_id)
VALUES (
  'Celebrate birthday',
  'Decide the location and time',
  '2021-08-06 08:30:33',
  '2021-08-06 08:50:23',
  '2021-08-08 23:00:00',
  '2',
  3
);

-- 2.Change the title of a task
UPDATE task
SET title = 'Celebrate 8th birthday'
WHERE id = LAST_INSERT_ID();

-- 3.Change a task due date
UPDATE task
SET due_date = '2018-08-10 23:00:00'
WHERE id = 29;

-- 4.Change a task status
UPDATE task
SET status_id = 1
WHERE user_id = 3;

-- 5.Mark a task as complete
UPDATE task 
SET status_id = 3
WHERE id = LAST_INSERT_ID();

-- 6.Delete a task
DELETE FROM task
WHERE id = LAST_INSERT_ID();

-- PART 3: More Queries using database hyf-lession2

-- 1.Get all the tasks assigned to users whose email ends in @spotify.com
SELECT user.name, task.title AS tasks , user.email
FROM task
JOIN user_task ON task.id = user_task.task_id
JOIN user ON user_task.user_id = user.id
WHERE user.email LIKE '%@spotify.com';

-- 2.Get all the tasks for 'Donald Duck' with status 'Not started'
SELECT user.name AS user_name , task.title AS tasks, status.name AS status
FROM task
JOIN user_task ON task.id = user_task.task_id
JOIN user ON user_task.user_id = user.id
JOIN status ON status.id = task.status_id
WHERE
status.name REGEXP 'Not started'
AND
user.name REGEXP 'Donald Duck';

-- 3.Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)
SELECT user.name AS user_name, task.title AS tasks, task.created
FROM task
JOIN user_task ON user_task.task_id = task.id
JOIN user ON user_task.user_id = user.id 
WHERE month(task.created) = 9
AND user.name REGEXP 'Maryrose Meadows';

-- 4.Find how many tasks were created in each month, e.g. how many tasks were created in october, how many tasks were created in november, etc. (hint: use group by)
SELECT COUNT(task.id) as NoOftasks, month(task.created) as MonthOfCreation
FROM task
GROUP BY MonthOfCreation;

-- databases/week2 Classwork exercises solutions

-- 1. Get all the tasks assigned to Pavel:
SELECT user.name as userName, task.title as tasks
from task  
join user_task on task.id = user_task.task_id
join user on user.id = user_task.user_id
where user.name like '%Pavel%';

-- same solution using the aliases as:
SELECT u.name as userName, t.title as tasks
from task t 
join user_task ut on t.id = ut.task_id
join user u on u.id = ut.user_id
where u.name like '%Pavel%';

-- 2.Find how many tasks each user is responsible for
SELECT user.name, COUNT(user_task.task_id) as tasks
FROM user
JOIN user_task ON user.id = user_task.user_id
WHERE user.id = user_task.user_id
GROUP BY user.name
ORDER BY tasks DESC;

-- 3.Find how many tasks with a status=Done each user is responsible for
SELECT user.name, COUNT(user_task.task_id) as tasks, status.name as status 
FROM user
JOIN user_task ON user.id = user_task.user_id
JOIN  task ON task.id = user_task.task_id
JOIN status ON status.id = task.status_id
WHERE status.name = 'Done'
GROUP BY user.id
ORDER BY tasks DESC;

-- Design an ER model and implement the respective database for the data in the given JSON file
-- create database articles and use it and also create the table articles
CREATE DATABASE articles;
Use articles;
CREATE TABLE `article` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `content` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
);

-- create the table tags
CREATE TABLE `tags` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `tag` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
);

-- create the table author
CREATE TABLE `author` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
);

-- create táble that shows the relationship between article and author tables
CREATE TABLE `article_author` (
  `article_id` int(10) unsigned NOT NULL,
  `author_id` int(10) unsigned NOT NULL,
  PRIMARY KEY(`article_id`, `author_id`),
  CONSTRAINT `fk_article_author_article` FOREIGN KEY (`article_id`) REFERENCES `article` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_article_author_author` FOREIGN KEY (`author_id`) REFERENCES `author` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);

-- create táble that shows the relationship between article and tags tables
CREATE TABLE `article_tag` (
  `article_id` int(10) unsigned NOT NULL,
  `tags_id` int(10) unsigned NOT NULL,
  PRIMARY KEY(`article_id`, `tags_id`),
  CONSTRAINT `fk_article_tags_article` FOREIGN KEY (`article_id`) REFERENCES `article` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_article_tags_tag` FOREIGN KEY (`tags_id`) REFERENCES `tags` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);
