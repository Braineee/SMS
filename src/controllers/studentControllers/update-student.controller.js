const BuildVerifyStudentEmailController = ({ verifyStudentEmailService, Response }) => {
  const verifyStudentEmailController = async (httpRequest) => {
    try {
      const data = await verifyStudentEmailService( httpRequest.params );
      return Response.CREATED("Registration successful.");
    } catch (err) {
      console.log(err);
      return Response.UNPROCESSABLE_ENTITY(err.message);
    }
  }

  return verifyStudentEmailController;
}

//specify-more-controller

module.exports = { BuildVerifyStudentEmailController }
  