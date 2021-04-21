const BuildValidateUserService = ({ verifyToken }) => {
  class validateUserService {
    constructor(request) {
      this._verifyToken = verifyToken;
      this._req = request
      this._studentData = {}
    }

    async _validateUserToken() {
      this._studentData = await this._verifyToken(this._req);
    }

    getStudentUuid() {
      return this._studentData.data.student_uuid;
    }


    getStudentDetails() {
      return this._studentData.data;
    }

    async validateUser() {
      await this._validateUserToken();
      return Object.freeze(this);
    }
  }

  return validateUserService;
}

module.exports = BuildValidateUserService;