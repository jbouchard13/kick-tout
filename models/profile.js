// contains info for each users profile

// contains bio, profile image, preferred shoe styles/brands

// unique to user by id, can be updated as needed

module.exports = function (sequelize, DataTypes) {
  const Profile = sequelize.define('Profile', {
    // user's bio, can be null
    bio: {
      type: DataTypes.TEXT,
    },
    // user's profile icon, can be null
    profileImg: {
      type: DataTypes.STRING,
      unique: true,
    },
    // user's preferred items, can be null
    preferred: {
      type: DataTypes.TEXT,
    },
  });
  // create association for the profile to it's user
  Profile.associate = (models) => {
    Profile.belongsTo(models.User);
  };
  return Profile;
};
