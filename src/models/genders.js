'use strict';
module.exports = (sequelize, DataTypes) => {
  const Genders = sequelize.define('Genders', {
    gender: DataTypes.STRING,
    alias: DataTypes.STRING
  }, {});
  Genders.associate = function(models) {
    Genders.hasMany(models.Students, { foreignKey: "genderId", sourceKey: 'id', });
  };
  return Genders;
};