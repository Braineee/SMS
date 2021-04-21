const makeStudentEntity = require("../../entities/studentEntities");

const BuildVerifyEmailAddressService = ({ studentDao }) => {
  const verifyEmailAddress = async (requestData) => {
    if (!requestData.student_uuid) throw new Error('Student verification was unsuccessful.');

    // make new student entity
    const studentEntity = await new makeStudentEntity(requestData);

    // check if student exists
    const studentExists = await studentDao.findByUuid(studentEntity.getStudentUuid());
    if (!studentExists) throw new Error('This student does not exists.');

    // update the student
    const updateStudent = await studentDao.update({
      student_uuid: studentEntity.getStudentUuid(),
      is_verified: studentEntity.verify()
    });

    // check if the student was updated
    if (!updateStudent) throw new Error("Student verification was unsuccessful.");

    // fetch the new student data
    const updatedStudent = await studentDao.findByUuid(studentEntity.getStudentUuid());

    // return the student data
    return updatedStudent;
  }

  return verifyEmailAddress;
}

module.exports = { BuildVerifyEmailAddressService }