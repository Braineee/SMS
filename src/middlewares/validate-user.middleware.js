const BuildValidateUserMiddleware = ({ validateUserService, HTTPStatus }) => {
  const validateUserMiddleware = async (req, res, next) => {
    try {
      const user = await new validateUserService(req).validateUser();
      
      req.authUser = user.getStudentDetails();

      if (req.body) req.body.student_uuid = user.getStudentUuid();
      if (req.query) req.query.student_uuid = user.getStudentUuid();
      if (req.params) req.params.student_uuid = user.getStudentUuid();
      
      next();

    } catch(err) {
      return res.status(HTTPStatus.UNPROCESSABLE_ENTITY).json({ message: err.message, error: true });
    }
  }

  return validateUserMiddleware;
}

module.exports = BuildValidateUserMiddleware;