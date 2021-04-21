'use strict';
module.exports = (sequelize, DataTypes) => {
  const Students = sequelize.define('Students', {
    student_uuid: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    dob: DataTypes.STRING,
    genderId: DataTypes.INTEGER,
    is_verified: DataTypes.INTEGER,
    age: DataTypes.INTEGER
  }, {
    freezeTableName: true,
    tableName: "Students",
    references: {
      model: 'Students',
      key: 'id'
    },
  });
  Students.associate = function(models) {
    Students.belongsTo(models.Genders, { foreignKey: "genderId", targetKey: "id" });
    Students.hasMany(models.Enrolements, { foreignKey: "student_uuid", sourceKey: 'student_uuid' });
  };
  return Students;
};
