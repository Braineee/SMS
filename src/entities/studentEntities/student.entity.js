const BuildMakeStudentEntity = ({ validateCreateStudentData, validateUpdatedStudentData, encryptPassword, getId, generatePassword }) => {
  class makeStudentEntity {
    constructor(currentStudentData = {}, updatedStudentData = {}) {
      this._getId = getId;
      this._encryptPassword = encryptPassword;
      this._updatedStudentData = updatedStudentData;
      this._currentStudentData = currentStudentData;
      this._generatePassword = generatePassword;
      this._validateCreateStudentData = validateCreateStudentData;
      this._validateUpdatedStudentData = validateUpdatedStudentData;
    }
    
    async _validateCreateStudentDataEntity() {
      await this._validateCreateStudentData(this._currentStudentData);
    }

    async _validateUpdatedStudentDataEntity() {
      await this._validateUpdatedStudentData(this._updatedStudentData);
    }

    async _generateStudentUuid() {
      this._currentStudentData.student_uuid = await this._getId();
    }

    async _generateStudentPassword() {
      this._currentStudentData.defaultPassword = await this._generatePassword();
    }

    async _encryptStudentPassword() {
      this._currentStudentData.password = await this._encryptPassword(this._currentStudentData.password);
    }

    _calculateAge() { 
      let dob = this._currentStudentData.dob.split('-');
      if (dob[0].lenght !== 4) throw new Error('Please enter your date using "YYYY-MM-DD" format.')
      dob = new Date(dob[0], dob[1], dob[2])
      var diff_ms = Date.now() - dob.getTime();
      var age_dt = new Date(diff_ms); 
    
      this._currentStudentData.age = Math.abs(age_dt.getUTCFullYear() - 1970);
    }

    getId() {
      return this._currentStudentData.id;
    }
    
    getStudentUuid() {
      return this._currentStudentData.student_uuid;
    }

    getFirstname() {
      return this._currentStudentData.first_name;
    }

    getLastname() {
      return this._currentStudentData.last_name;
    }

    getEmail() {
      return this._currentStudentData.email;
    }

    getUsername() {
      return this._currentStudentData.username ? this._currentStudentData.username : '';
    }

    getPassword() {
      return this._currentStudentData.password;
    }

    getDob() {
      return this._currentStudentData.dob;
    }

    getGender() {
      return this._currentStudentData.gender;
    }

    getDefaultPassword() {
      return this._currentStudentData.defaultPassword;
    }

    getIsVerified() {
      return this._currentStudentData.is_verified;
    }

    getStudentData() {
      return this._currentStudentData;
    }

    updateByKey(currentState, updatedState) {
      if (!updatedState) return currentState;
      if (updatedState !== currentState) return updatedState;
      return currentState;
    }

    getUpdatedStudentData() {
      return this._updatedStudentData;
    }

    verify() {
      return this._currentStudentData.is_verified = 1;
    }

    async create(){
      await this._validateCreateStudentDataEntity(); // validate the create Student request data
      await this._generateStudentUuid(); //  generate Student ID
      await this._calculateAge();// calculate student age
      await this._encryptStudentPassword();//

      Object.freeze(this._currentStudentData);
      return this;
    }

    async update(){
      await this._validateUpdatedStudentDataEntity();// validate the update course request data
      Object.freeze(this._updatedStudentData);
      Object.freeze(this._currentStudentData);
      return this;
    }
  }

  return makeStudentEntity;
}
module.exports = BuildMakeStudentEntity;