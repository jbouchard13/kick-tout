const router = require('express').Router();
const db = require('../../models');
const isAuthenticated = require('../../config/middleware/isAuthenticated');

// router.get('/secrets', isAuthenticated, (req, res) => {
//   res.json('Talk is cheap. Show me the code. -Linus Torvalds');
// });

// ----------------------- POSTS -------------------------------

// route to get sales/trade/buy post from other users. will contain user id (GET)
// ----- will return all of the posts with their respective user id for the initial feed page load

// route for getting posts by search result, will contain user id (GET)
// ----- will return all posts that fit the searched criteria and will contain the user id

// route for adding new sales/trade posts (POST)
// ----- user's can create new sales/trade/buy posts. will post with the user's id

// route for updated existing posts (PUT)
// ----- user's can edit their own posts by their user id

// route for deleting existing posts (DELETE)
// ----- user's can delete posts manually, by user id
// ----- may also need to be done automatically if item is bought/sold/traded

// --------------------- FAVORITES ----------------------------

// route for getting user's favorited posts by user id (GET)
// ----- will return the posts that a user has tracked

// route for removing favorited posts by user id (DELETE)
// ----- will remove the selected post that a user has tracked

// --------------------- COLLECTION ----------------------------

// route for getting user's collection info by user id (GET)
// ----- will return all of the collection results for the user by their user id

// route for adding to user's collection by user id (POST)
// ----- users can add new item's to their collection through a form

// route for updating user's collection entries by user id and collection id (PUT)
// ----- users can update info in their collection entries
// ----- will be done with the collection entry's id

// route for deleting item's from user's collection by user id and collection id (DELETE)
// ----- will delete the selected collection entry by user id and collection id

// -------------------- PROFILE ---------------------------------

// route for getting user's profile info by id (GET)

// route for creating user's profile with user id (POST)
// ----- profile should be created initially when new user is made
// ----- will contain blank info at first

// route for updating user's profile by id (PUT)
// ----- this will be done on the user's bio page through a form

module.exports = router;
