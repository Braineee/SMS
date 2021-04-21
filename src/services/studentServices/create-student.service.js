const makeStudentEntity = require("../../entities/studentEntities");

const BuildCreateStudentService = ({ studentDao }) => {
  const createStudentService = async (requestData) => {

    // make new student entity
    const studentEntity = await new makeStudentEntity(requestData).create();

    //check if email the student already exists
    const studentEmailExists = await studentDao.findByEmail(studentEntity.getEmail());
    if (studentEmailExists) throw new Error('This email has been registered previously.');

    //check if username already exists
    if (studentEntity.getUsername() !== '') {
      const studentUsernameExists = await studentDao.findByUsername(studentEntity.getUsername());
      if (studentUsernameExists) throw new Error('This username has been taken.');
    }

    // create the new student
    const createStudent = await studentDao.store(studentEntity.getStudentData());
    
    // check if the student was created
    if (!createStudent) throw new Error("Registration failed.");

    // fetch the new student data
    const newStudent = await studentDao.findByEmail(studentEntity.getStudentUuid());

    // return the student data
    return studentEntity.getEmail();

  }

  return createStudentService;
}

//specify-more-services

module.exports = { BuildCreateStudentService };
  