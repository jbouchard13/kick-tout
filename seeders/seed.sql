-- -------THE FOLLOWING TWO LINES OF CODE NEED TO BE RUN BEFORE ANYTHING ELSE ---------
 DROP DATABASE IF EXISTs ; --old database name, check what it is in your .env file.
 CREATE DATABASE kickTout; --(you need to change your .env file DB_NAME to kickTout)
    -- after the above code has been run, clear mysql, and navigate to the root folder of your project
    -- run npm start to start up the server. sequelize will create new tables for the db
    -- after everything is connected open mysql back up and run the code below
    -- once the code below has been run your local db should be seeded with data
    -- 5 users, 5 profiles for them, and 2 posts each by the users.
    -- navigate to the seeds-for-your-user sql file in this same folder to move on.


USE kickTout;
-- set the above code to USE (your local db name)
USE kickTout;

INSERT INTO users (firstName, lastName, email, password, createdAt, updatedAt)
VALUES
('tester', 'tested', 'email1@email.com', 'password', '121212', '121212'),
('testy', 'beentested', 'email2@email.com', 'password', '121212', '121212'),
('test', 'mctesterson', 'email3@email.com', 'password', '121212', '121212'),
('testin', 'testify', 'email4@email.com', 'password', '121212', '121212'),
('test', 'name', 'email5@email.com', 'password', '121212', '121212');

INSERT INTO profiles (bio, profileImg, preferred, createdAt, updatedAt, userId)
VALUES 
('bio stuff', '../assets/images/profile-img.png', 'preferred stuff', '121212', '121212', 1),
('bio stuff', '../assets/images/profile-img.png', 'preferred stuff', '121212', '121212', 2),
('bio stuff', '../assets/images/profile-img.png', 'preferred stuff', '121212', '121212', 3),
('bio stuff', '../assets/images/profile-img.png', 'preferred stuff', '121212', '121212', 4),
('bio stuff', '../assets/images/profile-img.png', 'preferred stuff', '121212', '121212', 5);

INSERT INTO posts (name, content, size, brand, type, shoeCondition, value, photoSrc, createdAt, updatedAt, userId)
VALUES
('shoe1', 'about the post...', '4 1/2', 'thebrand', 'shoe type', 'decent', 4, '../assets/images/nike-tulip-pink.png', '121212','121212', 1),
('shoe2', 'about the post...', '7', 'thebrand', 'shoe type', 'decent', 4, '../assets/images/nike-tulip-pink.png', '121212','121212', 1),
('shoe3', 'about the post...', '10 1/2', 'thebrand', 'shoe type', 'decent', 4, '../assets/images/nike-tulip-pink.png', '121212','121212', 2),
('shoe4', 'about the post...', '9', 'thebrand', 'shoe type', 'decent', 4, '../assets/images/nike-tulip-pink.png', '121212','121212', 2),
('shoe5', 'about the post...', '12', 'thebrand', 'shoe type', 'decent', 4, '../assets/images/nike-tulip-pink.png', '121212','121212', 3),
('shoe6', 'about the post...', '6', 'thebrand', 'shoe type', 'decent', 4, '../assets/images/nike-tulip-pink.png', '121212','121212', 3),
('shoe7', 'about the post...', '5 1/2', 'thebrand', 'shoe type', 'decent', 4, '../assets/images/nike-tulip-pink.png', '121212','121212', 4),
('shoe8', 'about the post...', '11', 'thebrand', 'shoe type', 'decent', 4, '../assets/images/nike-tulip-pink.png', '121212','121212', 4),
('shoe9', 'about the post...', '10', 'thebrand', 'shoe type', 'decent', 4, '../assets/images/nike-tulip-pink.png', '121212','121212', 5),
('shoe10', 'about the post...', '7', 'thebrand', 'shoe type', 'decent', 4, '../assets/images/nike-tulip-pink.png', '121212','121212', 5);