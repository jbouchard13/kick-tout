const router = require('express').Router();
const db = require('../../models');
const isAuthenticated = require('../../config/middleware/isAuthenticated');

// ----------------------- POSTS -------------------------------

// route to get sales/trade/buy post from other users. will contain user id (GET)
// ----- will return all of the posts with their respective user id for the initial feed page load
router.get('/api/posts/', (req, res) => {
  db.Post.findAll({})
    .then((posts) => {
      res.status(200).json(posts);
    })
    .catch((err) => {
      res.status(500).json({ message: 'an error occurred' });
    });
});

// route for getting posts by search result, will contain user id (GET)
// ----- will return all posts that fit the searched criteria and will contain the user id
// ----- unsure if this will actually be implemented
router.get('/api/posts/:query', (req, res) => {
  db.Post.findAll({
    where: {
      name: req.params.query,
    },
  })
    .then((results) => {
      res.status(200).json(results);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: 'an error occured' });
    });
});

// route for adding new sales/trade posts (POST)
// ----- user's can create new sales/trade/buy posts. will post with the user's id
router.post('/api/posts/:userId', (req, res) => {
  db.Post.create({
    name: req.body.name,
    content: req.body.content,
    brand: req.body.brand,
    type: req.body.type,
    condition: req.body.condition,
    value: req.body.value,
    photoSrc: req.body.photoSrc,
    userId: req.params.userId,
  })
    .then(() => {
      res.status(200).res.json({ message: 'post added successfully' });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).res.json({ message: 'an error occurred' });
    });
});

// route for updated existing posts (PUT)
// ----- user's can edit their own posts by their user id and post id
router.put('/api/posts/:postId/:userId', (req, res) => {
  db.Post.update(
    {
      name: req.body.name,
      content: req.body.content,
      brand: req.body.brand,
      type: req.body.type,
      condition: req.body.condition,
      value: req.body.value,
      photoSrc: req.body.photoSrc,
    },
    {
      where: {
        postId: req.params.postId,
        userId: req.params.userId,
      },
    }
  )
    .then(() => {
      res.status(200).json({ message: 'post updated successfully' });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: 'an error occurred' });
    });
});

// route for deleting existing posts (DELETE)
// ----- user's can delete posts manually, by user id and post id
// ----- may also need to be done automatically if item is bought/sold/traded
router.delete('/api/posts/:postId/:userId', (req, res) => {
  db.Post.destroy({
    where: {
      postId: req.params.postId,
      userId: req.params.userId,
    },
  })
    .then(() => {
      res.status(200).json({ message: 'post deleted successfully' });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json((message: 'an error occurred'));
    });
});

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
