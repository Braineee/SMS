const BuildStudentDataAccess = ({ studentModel, genderModel }) => {
  const studentDataAccess = {
    async findById(id) {
      const result = await studentModel.findOne({ where: { id } });
      return result;
    },
    async findByUuid(student_uuid) {
      const result = await studentModel.findOne({ 
        where: { student_uuid }, 
        attributes: { exclude: ['id', 'roleUuid', 'password'] }
      });
      return result;
    },
    async findByEmail(email) {
      const result = await studentModel.findOne({ 
        where: { email },
        include: [{
          model: genderModel,
          attributes: { exclude: ['createdAt', 'updatedAt'] }
        }] 
      });
      return result;
    },
    async findByUsername(username) {
      const result = await studentModel.findOne({ where: { username } });
      return result;
    },
    async fetchAll() {
      const result = await studentModel.findAll();
      return result;
    },
    async store(studentData) {
      const result = await studentModel.create(studentData);
      if (result) return true;
      return false;
    },
    async update(studentData) {
      const update = await studentModel.update(studentData, { where: { student_uuid: studentData.student_uuid } });
      if (update) return true;
      return false;
    },
    async removeId(id) {
      const destroy = studentModel.destroy({ where: { id } });
      if (destroy) return true;
      return false;
    },
    async removeUuid(student_uuid) {
      const destroy = studentModel.destroy({ where: { student_uuid } });
      if (destroy) return true;
      return false;
    }
  }
  return studentDataAccess;
}
module.exports = BuildStudentDataAccess;
  