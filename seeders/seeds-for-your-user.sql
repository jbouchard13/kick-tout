-- -------IMPORTANT----------
-- Before running the following code you will need to open the app completely
    -- npm start in the root folder, npm run start in the client folder
    -- once everything is up and running, sign up a new user
    -- the new user you create will be who the following seeded data is for
    -- after you create your user, open mysql, clear out the previous code, and run the code below.
    -- to ensure everything went in correctly you can run a few queries
    -- 'select * from users' should show 6 users with yours as id # 6
    -- 'select * from profiles' should have 6 profiles with unique userIds
    -- 'select * from collections' should have 5 collection entries with a userId of 6
    -- 'select * from favorites' should have 5 favorites with a userId of 6 and different postIds
    -- 'select * from posts' should have 10 posts with each userId showing up twice
    -- if everything looks good then you're done :)

INSERT INTO collections 
(photoSrc, brand, type, size, shoeCondition, updatedAt, createdAt, UserId)
VALUES 
('../assets/images/nike-tulip-pink.png', 'shoe-brand1', 'shoe-type', 'shoe-size', 'rough', '121212', '121212', 6),
('../assets/images/nike-tulip-pink.png', 'shoe-brand2', 'shoe-type', 'shoe-size', 'rough', '121212', '121212', 6),
('../assets/images/nike-tulip-pink.png', 'shoe-brand3', 'shoe-type', 'shoe-size', 'rough', '121212', '121212', 6),
('../assets/images/nike-tulip-pink.png', 'shoe-brand4', 'shoe-type', 'shoe-size', 'rough', '121212', '121212', 6),
('../assets/images/nike-tulip-pink.png', 'shoe-brand5', 'shoe-type', 'shoe-size', 'rough', '121212', '121212', 6);

INSERT INTO favorites
(postId, createdAt, updatedAt, UserId)
VALUES
(1, '121212', '121212', 6),
(2, '121212', '121212', 6),
(3, '121212', '121212', 6),
(4, '121212', '121212', 6),
(5, '121212', '121212', 6);