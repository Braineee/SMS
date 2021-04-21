const BuildEnrolmentDataAccess = ({ enrolmentModel }) => {
  const EnrolmentDataAccess = {
    async findById(id) {
      const result = await enrolmentModel.findOne({ where: { id } });
      return result;
    },
    async findByUuid(enrolment_uuid) {
      const result = await enrolmentModel.findOne({ 
        where: { enrolment_uuid },
      });
      return result;
    },
    async checkForDuplicates(student_uuid, course_id) {
      const result = await enrolmentModel.findOne({ where: { student_uuid, course_id } });
      return result;
    },
    async fetchAll() {
      const result = await enrolmentModel.findAndCountAll({
        attributes: ['student_uuid', 'course_name', 'createdAt']
      });
      return result;
    },
    async store(enrolmentData) {
      const result = await enrolmentModel.create(enrolmentData);
      if (result) return true;
      return false;
    },
    async updateById(enrolmentData) {
      const update = await enrolmentModel.update(enrolmentData, { where: { id: enrolmentData.id } });
      if (update) return true;
      return false;
    },
    async updateByUuid(enrolmentData) {
      const update = await enrolmentModel.update(enrolmentData, { where: { id: enrolmentData.enrolment_uuid } });
      if (update) return true;
      return false;
    },
    async removeId(id) {
      const destroy = enrolmentModel.destroy({ where: { id } });
      if (destroy) return true;
      return false;
    },
    async removeUuid(enrolment_uuid) {
      const destroy = enrolmentModel.destroy({ where: { enrolment_uuid } });
      if (destroy) return true;
      return false;
    }
  }
  return EnrolmentDataAccess;
}
module.exports = BuildEnrolmentDataAccess;
  