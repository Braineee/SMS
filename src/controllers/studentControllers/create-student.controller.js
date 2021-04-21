const BuildCreateStudentController = ({ createStudentService, Response }) => {
  const createStudentController = async (httpRequest) => {
    try {
      const data = await createStudentService( httpRequest.body );
      return Response.CREATED(`Verification token has been sent to ${data}.`);
    } catch (err) {
      console.log(err);
      return Response.UNPROCESSABLE_ENTITY(err.message);
    }
  }

  return createStudentController;
}

//specify-more-controller

module.exports = { BuildCreateStudentController }
  