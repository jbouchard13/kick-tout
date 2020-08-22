// table for handling user's favorites section

// contains favorited posts by post id

// unique by user id

module.exports = function (sequelize, DataTypes) {
  const Favorite = sequelize.define('Favorite');

  Favorite.associate = (models) => {
    Favorite.belongsTo(models.User);
  };

  Favorite.associate = (models) => {
    Favorite.hasMany(models.Post);
  };

  return Favorite;
};
