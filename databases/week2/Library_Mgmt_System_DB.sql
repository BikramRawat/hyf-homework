-- databses/week2 Homework
-- PART 4 : Creating a database: Using an entity relationship diagram, 
-- design the data model for an application of your choice
-- Iam designing a database model for a simple library management system
-- for this i need following tables and the relationships between them
use LibraryMgmtSystemDB;
-- each book has a unique id, members of the library can search books by title, author, category or publication year
CREATE TABLE `book` (
    `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `title` VARCHAR(100) NOT NULL,
    `author` VARCHAR(255) NOT NULL,
    `category` VARCHAR(255) NOT NULL,
    `publication_year` DATE NOT NULL
);
-- a book can have multiple authors
CREATE TABLE `author` (
    `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `first_name` VARCHAR(150) NOT NULL,
    `last_name` VARCHAR(150) NOT NULL
);
-- book author relationship table: many to many relationship: a book can have multiple authors
-- and at the same time an author can write multiple books
CREATE TABLE `book_author` (
    `book_id` INT(10) UNSIGNED NOT NULL,
    `author_id` INT(10) UNSIGNED NOT NULL,
    PRIMARY KEY (`book_id`, `author_id`),
    CONSTRAINT `fk_book_author_book` FOREIGN KEY (`book_id`) REFERENCES `book` (`id`) ON DELETE CASCADE,
    CONSTRAINT `fk_book_author_author` FOREIGN KEY (`author_id`) REFERENCES `author` (`id`) ON DELETE CASCADE
);
-- members table that shows the member that can borrow book from library
CREATE TABLE `member` (
    `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `first_name` VARCHAR(150) NOT NULL,
    `last_name` VARCHAR(150) NOT NULL
);
-- system store the date of borrow as loan date , book infom and member who borrowed the book
CREATE TABLE `loan` (
    `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `book_id` INT(10) UNSIGNED NOT NULL,
    `member_id` INT(10) UNSIGNED NOT NULL,
    `loan_date` DATETIME NOT NULL,
    CONSTRAINT `fk_loan_book` FOREIGN KEY (`book_id`) REFERENCES `book` (`id`) ON DELETE CASCADE,
    CONSTRAINT `fk_loan_member` FOREIGN KEY (`member_id`) REFERENCES `member` (`id`) ON DELETE CASCADE
);

-- fines can be imposed to the members under certrain conditions
-- that needs loan info, member info, fine days and the amount
CREATE TABLE `fine` (
    `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `loan_id` INT(10) UNSIGNED NOT NULL,
    `member_id` INT(10) UNSIGNED NOT NULL,
    `fine_date` DATETIME NOT NULL,
    `fine_amount` DECIMAL(10,2) NOT NULL,
    CONSTRAINT `fk_fine_loan` FOREIGN KEY (`loan_id`) REFERENCES `loan` (`id`) ON DELETE CASCADE,
    CONSTRAINT `fk_fine_member` FOREIGN KEY (`member_id`) REFERENCES `member` (`id`) ON DELETE CASCADE
);
-- members can pay the fines that have been added to their account by issueing payment date
-- and the fine amount of the member
CREATE TABLE `fine_payment` (
    `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `member_id` INT(10) UNSIGNED NOT NULL,
    `payment_date` DATETIME NOT NULL,
    `payment_amount` DECIMAL(10,2) NOT NULL,
     CONSTRAINT `fk_fine_payment_member` FOREIGN KEY (`member_id`) REFERENCES `member` (`id`) ON DELETE CASCADE
);

-- this table adds the info to the loan table, if the book is returned 
-- the returned date column will be added after the loan date column in the loan table
ALTER TABLE `loan`
ADD `returned_date` DATETIME NOT NULL
AFTER `loan_date`;

