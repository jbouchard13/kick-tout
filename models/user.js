const bcrypt = require('bcryptjs');

module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define('User', {
    // The email cannot be null, and must be a proper email before creation
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    // The password cannot be null
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  // create association for each user's profile table
  // if user is deleted, then their profile entries are as well
  User.associate = (models) => {
    User.hasOne(models.Profile, { onDelete: 'cascade' });
  };
  // user can create many posts
  User.associate = (models) => {
    User.hasMany(models.Post, { onDelete: 'cascade' });
  };
  // user can have many favorites
  User.associate = (models) => {
    User.hasMany(models.Favorite, { onDelete: 'cascade' });
  };
  // user can have many collection entries
  User.associate = (models) => {
    User.hasMany(models.Collection, { onDelete: 'cascade' });
  };
  // Creating a custom method for our User model. This will check if an unhashed
  // password entered by the user can be compared to the hashed password stored in our database
  User.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };

  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  User.addHook('beforeCreate', (user) => {
    user.password = bcrypt.hashSync(
      user.password,
      bcrypt.genSaltSync(10),
      null
    );
  });
  return User;
};
