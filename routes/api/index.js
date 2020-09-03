require('dotenv').config();
const router = require('express').Router();
const Sequelize = require('sequelize');
const cloudinary = require('cloudinary').v2;

const { Op } = Sequelize;
const db = require('../../models');
const isAuthenticated = require('../../config/middleware/isAuthenticated');

// ----------------------- IMAGE UPLOAD -----------------------
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const uploadPhoto = (image) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(image.path, (err, imageResult) => {
      if (err) {
        reject(err);
      }
      resolve(imageResult.secure_url);
    });
  });
};

router.post('/upload/:userId', (req, res) => {
  console.log(req.files.image);
  uploadPhoto(req.files.image).then((image) => {
    console.log(image);
    db.Profile.update(
      {
        profileImg: image,
      },
      {
        where: {
          UserId: req.params.userId,
        },
      }
    )
      .then(() => {
        res.status(200).json(image);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json('an error occurred');
      });
  });
});

// ----------------------- POSTS -------------------------------

// route to get sales/trade/buy post from other users. will contain user id (GET)
// ----- will return all of the posts with their respective user id for the initial feed page load
router.get('/posts', (req, res) => {
  db.Post.findAll({})
    .then((posts) => {
      res.status(200).json(posts);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: 'an error occurred' });
    });
});

// route for getting posts by specific users
// ----- will return all posts from the specified userId
router.get('/posts/:userId', (req, res) => {
  db.Post.findAll({
    where: {
      UserId: req.params.userId,
    },
  })
    .then((posts) => {
      res.status(200).json(posts);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: 'an error occurred' });
    });
});

// route for getting posts by search result, will contain user id (GET)
// ----- will return all posts that fit the searched criteria and will contain the user id
// ----- unsure if this will actually be implemented
router.get('/posts/search/:query', (req, res) => {
  db.Post.findAll({
    where: {
      name: {
        // allows search parameters to be partial
        // example: search for 'nike' will return all shoe posts containing the word nike, regardless of the full name
        [Op.substring]: req.params.query,
      },
    },
  })
    .then((results) => {
      res.status(200).json(results);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: 'an error occurred' });
    });
});

// route for adding new sales/trade posts (POST)
// ----- user's can create new sales/trade/buy posts. will post with the user's id
router.post('/posts/:userId', (req, res) => {
  // if no photo submitted
  if (req.files.image === undefined) {
    // will create new post without an image
    db.Post.create({
      name: req.body.name,
      content: '',
      size: req.body.size,
      brand: req.body.brand,
      type: req.body.type,
      shoeCondition: req.body.shoeCondition,
      value: req.body.value,
      photoSrc: '',
      UserId: req.params.userId,
    })
      .then((newPost) => {
        res.status(200).json(newPost);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ message: 'an error occurred' });
      });
    return;
  }
  // else it'll upload the image to cloud storage and save the post to the db
  uploadPhoto(req.files.image)
    .then((result) => {
      console.log(result);
      db.Post.create({
        name: req.body.name,
        content: '',
        size: req.body.size,
        brand: req.body.brand,
        type: req.body.type,
        shoeCondition: req.body.shoeCondition,
        value: req.body.value,
        photoSrc: result,
        UserId: req.params.userId,
      })
        .then((newPost) => {
          res.status(200).json(newPost);
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json({ message: 'an error occurred' });
        });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: 'error with image upload' });
    });
});

// route for updated existing posts (PUT)
// ----- user's can edit their own posts by their user id and post id
router.put('/posts/:postId/:userId', (req, res) => {
  db.Post.update(
    {
      name: req.body.name,
      content: req.body.content,
      size: req.body.size,
      brand: req.body.brand,
      type: req.body.type,
      shoeCondition: req.body.shoeCondition,
      value: req.body.value,
      photoSrc: req.body.photoSrc,
    },
    {
      where: {
        id: req.params.postId,
        UserId: req.params.userId,
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
router.delete('/posts/:postId/:userId', (req, res) => {
  db.Post.destroy({
    where: {
      id: req.params.postId,
      UserId: req.params.userId,
    },
  })
    .then(() => {
      db.Post.findAll({
        where: {
          UserId: req.params.userId,
        },
      })
        .then((posts) => {
          res.status(200).json(posts);
        })
        .catch((err) => {
          res.status(500).json({ message: 'an error occured' });
        });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: 'an error occurred' });
    });
});

// --------------------- FAVORITES ----------------------------

// route for getting user's favorited posts by user id (GET)
// ----- will return the post id from the saved post
// ----- will use the post id to search the posts table for the post data
router.get('/favorites/:userId', (req, res) => {
  db.Favorite.findAll({
    where: {
      UserId: req.params.userId,
    },
  })

    // takes each favorite entry's post id and returns all posts from post table
    .then((favorites) => {
      const postIds = [];
      favorites.forEach((favorite) => {
        // push each favorite's postId to the array above
        postIds.push(favorite.postId);
      });

      // search for the posts that the user saved using the postIds
      db.Post.findAll({
        where: {
          id: postIds,
        },

        // returns the post data to populate the user's favorite post section
      }).then((favoritePosts) => {
        res.status(200).json(favoritePosts);
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: 'an error occurred' });
    });
});

// route for adding to the user's favorited posts (POST)
// ----- will contain user id and post id
router.post('/favorites/:postId/:userId', (req, res) => {
  db.Favorite.create({
    postId: req.params.postId,
    UserId: req.params.userId,
  })
    .then(() => {
      res.status(200).json({ message: 'post saved to favorites' });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: 'an error occurred' });
    });
});

// route for removing favorited posts by user id (DELETE)
// ----- will remove the selected post that a user has tracked
router.delete('/favorites/:postId/:userId', (req, res) => {
  db.Favorite.destroy({
    where: {
      id: req.params.postId,
      UserId: req.params.userId,
    },
  })
    .then(() => {
      res.status(200).json({ message: 'favorite removed successfully' });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: 'an error occurred' });
    });
});

// --------------------- COLLECTION ----------------------------

// route for getting user's collection info by user id (GET)
// ----- will return all of the collection results for the user by their user id
router.get('/collections/:userId', (req, res) => {
  db.Collection.findAll({
    where: {
      UserId: req.params.userId,
    },
  })
    .then((collectionItems) => {
      res.status(200).json(collectionItems);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: 'an error occurred' });
    });
});

// route for adding a users name to the feed page
router.get('/users/:id', (req, res) => {
  db.users
    .find({
      where: {
        id: req.params.id,
      },
    })
    .then((firstName) => {
      res.status(200).json(firstName);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: 'user not found' });
    });
});

// route for adding to user's collection by user id (POST)
// ----- users can add new item's to their collection through a form
router.post('/collections/:userId', (req, res) => {
  db.Collection.create({
    photoSrc: req.body.photoSrc,
    brand: req.body.brand,
    type: req.body.type,
    size: req.body.size,
    condition: req.body.condition,
    UserId: req.params.userId,
  })
    .then(() => {
      res
        .status(200)
        .json({ message: 'item added to collection successfully' });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: 'an error occurred' });
    });
});

// route for updating user's collection entries by user id and collection id (PUT)
// ----- users can update info in their collection entries
// ----- will be done with the collection entry's id
router.put('/collections/:collectionId/:userId', (req, res) => {
  db.Collection.update(
    {
      photoSrc: req.body.photoSrc,
      brand: req.body.brand,
      type: req.body.type,
      size: req.body.size,
      condition: req.body.condition,
    },
    {
      where: {
        id: req.params.collectionId,
        UserId: req.params.userId,
      },
    }
  )
    .then(() => {
      res.status(200).json({ message: 'collection item updated successfully' });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: 'an error occurred' });
    });
});

// route for deleting item's from user's collection by user id and collection id (DELETE)
// ----- will delete the selected collection entry by user id and collection id
router.delete('/collections/:collectionId/:userId', (req, res) => {
  db.Collection.destroy({
    where: {
      id: req.params.collectionId,
      UserId: req.params.userId,
    },
  })
    .then(() => {
      res.status(200).json({ message: 'collection item deleted successfully' });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: 'an error occurred' });
    });
});

// -------------------- PROFILE ---------------------------------

// route for getting user's profile info by id (GET)
router.get('/profiles/:userId', (req, res) => {
  db.Profile.findAll({
    where: {
      UserId: req.params.userId,
    },
  })
    .then((profileData) => {
      res.status(200).json(profileData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: 'an error occurred' });
    });
});

// route for creating user's profile with user id (POST)
// ----- profile should be created initially when new user is made
// ----- will contain blank info at first
router.post('/profiles/:userId', (req, res) => {
  console.log(req.params.userId);
  db.Profile.create({
    bio: '',
    profileImg: '../assets/images/profile-img.png',
    preferred: '',
    UserId: req.params.userId,
  })
    .then(() => {
      res.status(200).json({ message: 'user profile created' });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: 'an error occurred' });
    });
});

// route for updating user's profile by id (PUT)
// ----- this will be done on the user's bio page through a form
router.put('/profiles/:userId', (req, res) => {
  db.User.update(
    {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
    },
    {
      where: {
        id: req.params.userId,
      },
    }
  )
    .then(() => {
      db.Profile.update(
        {
          bio: req.body.bio,
          profileImg: req.body.profileImg,
          preferred: req.body.preferred,
        },
        {
          where: {
            UserId: req.params.userId,
          },
        }
      )
        .then(() => {
          res.status(200).json({ message: 'user profile updated' });
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json({ message: 'an error occurred' });
        });
    })
    .catch((err) => {
      console.log(err.errors);
      if (err.errors[0].message === 'Validation isEmail on email failed') {
        res.status(500).json('enter valid email');
      } else {
        res.status(500).json({ message: 'an error occurred' });
      }
    });
});

module.exports = router;
