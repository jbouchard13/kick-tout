USE kickTout;
-- set the above code to USE (your local db name)

INSERT INTO users (firstName, lastName, email, password, createdAt, updatedAt)
VALUES
('tester', 'tested', 'email1@email.com', 'password', '121212', '121212'),
('testy', 'beentested', 'email2@email.com', 'password', '121212', '121212'),
('test', 'mctesterson', 'email3@email.com', 'password', '121212', '121212'),
('testin', 'testify', 'email4@email.com', 'password', '121212', '121212'),
('test', 'name', 'email5@email.com', 'password', '121212', '121212');

INSERT INTO profiles (bio, profileImg, preferred, createdAt, updatedAt, userId)
VALUES 
('bio stuff', 'images/image1', 'preferred stuff', '121212', '121212', 1),
('bio stuff', 'images/image2', 'preferred stuff', '121212', '121212', 2),
('bio stuff', 'images/image3', 'preferred stuff', '121212', '121212', 3),
('bio stuff', 'images/image4', 'preferred stuff', '121212', '121212', 4),
('bio stuff', 'images/image5', 'preferred stuff', '121212', '121212', 5);

INSERT INTO posts (name, content, brand, type, shoeCondition, value, photoSrc, createdAt, updatedAt, userId)
VALUES
('shoe1', '...stuff', 'thebrand', 'shoe type', 'decent', 4, 'images/post-img.jpg', '121212','121212', 1),
('shoe2', '...stuff', 'thebrand', 'shoe type', 'decent', 4, 'images/post-img.jpg', '121212','121212', 1),
('shoe3', '...stuff', 'thebrand', 'shoe type', 'decent', 4, 'images/post-img.jpg', '121212','121212', 2),
('shoe4', '...stuff', 'thebrand', 'shoe type', 'decent', 4, 'images/post-img.jpg', '121212','121212', 2),
('shoe5', '...stuff', 'thebrand', 'shoe type', 'decent', 4, 'images/post-img.jpg', '121212','121212', 3),
('shoe6', '...stuff', 'thebrand', 'shoe type', 'decent', 4, 'images/post-img.jpg', '121212','121212', 3),
('shoe7', '...stuff', 'thebrand', 'shoe type', 'decent', 4, 'images/post-img.jpg', '121212','121212', 4),
('shoe8', '...stuff', 'thebrand', 'shoe type', 'decent', 4, 'images/post-img.jpg', '121212','121212', 4),
('shoe9', '...stuff', 'thebrand', 'shoe type', 'decent', 4, 'images/post-img.jpg', '121212','121212', 5),
('shoe10', '...stuff', 'thebrand', 'shoe type', 'decent', 4, 'images/post-img.jpg', '121212','121212', 5);