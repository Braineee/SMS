const BuildMakeAuthEntity = ({ validateSignInData }) => {
  class makeAuthEntity {
    constructor(requestData) {
      this._validateSignInData = validateSignInData;
      this._requestData = requestData;
    }
    async _validateSignInDataEntity() {
      await this._validateSignInData(this._requestData);
    }
    getStudentUuid() {
      return this._requestData.student_uuid;
    }
    getEmail() {
      return this._requestData.email;
    }
    getUsername() {
      return this._requestData.username;
    }
    getPassword() {
      return this._requestData.password;
    }
    getRememberMe() {
      return this._requestData.remember_me;
    }
    getToken() {
      return this._requestData.token;
    }

    async create() {
      await this._validateSignInDataEntity();
      Object.freeze(this._requestData);
      return this;
    }
  }
  
  return makeAuthEntity
}

module.exports = BuildMakeAuthEntity;