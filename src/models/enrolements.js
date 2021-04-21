'use strict';
module.exports = (sequelize, DataTypes) => {
  const Enrolements = sequelize.define('Enrolements', {
    enrolment_uuid: DataTypes.STRING,
    student_uuid: DataTypes.STRING,
    course_id: DataTypes.INTEGER,
    course_name: DataTypes.STRING
  }, {});
  Enrolements.associate = function(models) {
    Enrolements.belongsTo(models.Students, { foreignKey: "student_uuid", targetKey: "student_uuid" });
  };
  return Enrolements;
};