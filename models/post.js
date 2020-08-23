// table containing sale/trade/buy posts

// will have values for name, content(description of post), brand, type(trade, sale, looking for), condition, $ value, photo source

// unique to user by id

module.exports = function (sequelize, DataTypes) {
  const Post = sequelize.define('Post', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    brand: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    condition: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    value: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    photoSrc: {
      type: DataTypes.STRING,
    },
  });
  // create association between posts and the user who created them
  Post.associate = (models) => {
    Post.belongsTo(models.User);
    Post.belongsTo(models.Favorite);
  };

  return Post;
};