const BuildMakeEnrolementEntity = ({ validateCreateEnrolmentData, dateFormat, getId }) => {
  class makeEnrolmentEntity {
    constructor(currentEnrolmentData = {}, updatedEnrolmentData = {}) {
      this._getId = getId;
      this._updatedEnrolmentData = updatedEnrolmentData;
      this._currentEnrolmentData = currentEnrolmentData;
      this._validateCreateEnrolmentData = validateCreateEnrolmentData;
    }
    
    async _validateCreateEnrolmentDataEntity() {
      await this._validateCreateEnrolmentData(this._currentEnrolmentData);
    }

    async _generateEnrolmentUuid() {
      this._currentEnrolmentData.enrolment_uuid = await this._getId();
    }

    getId() {
      return this._currentEnrolmentData.id;
    }
    
    getEnrolmentUuid() {
      return this._currentEnrolmentData.enrolment_uuid;
    }

    getStudentUuid() {
      return this._currentEnrolmentData.student_uuid;
    }

    getCourseId() {
      return this._currentEnrolmentData.course_id;
    }

    getCourseName() {
      return this._currentEnrolmentData.courseName;
    }

    getCreatedAt() {
      return this._currentEnrolmentData.createdAt;
    }

    getEnrolmentData() {
      return this._currentEnrolmentData;
    }


    async create(){
      await this._validateCreateEnrolmentDataEntity(); // validate the create enrolment request data
      await this._generateEnrolmentUuid(); //  generate Enrolment ID

      Object.freeze(this._currentEnrolmentData);
      return this;
    }
  }

  return makeEnrolmentEntity;
}
module.exports = BuildMakeEnrolementEntity;