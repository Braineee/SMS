const BuildCreateEnrolmentController = ({ createEnrolmentService, Response }) => {
  const createEnrolmentController = async (httpRequest) => {
    try {
      const data = await createEnrolmentService( httpRequest.body );
      return Response.CREATED(`Request successful`, data);
    } catch (err) {
      console.log(err);
      return Response.UNPROCESSABLE_ENTITY(err.message);
    }
  }

  return createEnrolmentController;
}

//specify-more-controller

module.exports = { BuildCreateEnrolmentController }
  