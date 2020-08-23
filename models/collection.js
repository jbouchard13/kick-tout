// table containing each user's collection of items

// contains photo, brand, type, size, condition

// unique to one user by id

module.exports = function (sequelize, DataTypes) {
  const Collection = sequelize.define('Collection', {
    photoSrc: {
      type: DataTypes.STRING,
    },
    brand: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    size: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    condition: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  // create association for collection items for their user
  Collection.associate = (models) => {
    Collection.belongsTo(models.User);
  };

  return Collection;
};
