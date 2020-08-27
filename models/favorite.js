// table for handling user's favorites section

// contains favorited posts by post id

// unique by user id

module.exports = function (sequelize, DataTypes) {
  const Favorite = sequelize.define('Favorite', {
    // users can save the id of a post to their favorites, to then grab the post info
    postId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  Favorite.associate = (models) => {
    Favorite.belongsTo(models.User);
  };

  return Favorite;
};
