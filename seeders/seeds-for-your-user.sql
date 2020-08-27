-- may need to adjust values
-- run the seed file before this one
-- open up the app both front and backend (npm run start in client folder and npm start in root folder)
-- create a new user with the signup form
-- if this is done from a fresh db your new user id should be 6
-- open mysql workbench and type 'select * from users'
-- make sure the id for your created user is 6
-- if it isn't 6 then change the following code below

INSERT INTO collections 
(photoSrc, brand, type, size, shoeCondition, updatedAt, createdAt, UserId)
VALUES 
('/images/test-photo', 'shoe-brand1', 'shoe-type', 'shoe-size', 'rough', '121212', '121212', 6),
('/images/test-photo', 'shoe-brand2', 'shoe-type', 'shoe-size', 'rough', '121212', '121212', 6),
('/images/test-photo', 'shoe-brand3', 'shoe-type', 'shoe-size', 'rough', '121212', '121212', 6),
('/images/test-photo', 'shoe-brand4', 'shoe-type', 'shoe-size', 'rough', '121212', '121212', 6),
('/images/test-photo', 'shoe-brand5', 'shoe-type', 'shoe-size', 'rough', '121212', '121212', 6);

INSERT INTO favorites
(postId, createdAt, updatedAt, UserId)
VALUES
(1, '121212', '121212', 6),
(2, '121212', '121212', 6),
(3, '121212', '121212', 6),
(4, '121212', '121212', 6),
(5, '121212', '121212', 6);