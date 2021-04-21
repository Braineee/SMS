const BuildDeleteEnrolmentController = ({ deleteEnrolmentService, Response }) => {
  const deleteEnrolmentController = async (httpRequest) => {
    try {
      const data = await deleteEnrolmentService( httpRequest.params );
      return  Response.OK(`Request successful`);
    } catch (err) {
      console.log(err);
      return Response.UNPROCESSABLE_ENTITY(err.message);
    }
  }

  return deleteEnrolmentController;
}

//specify-more-controller

module.exports = { BuildDeleteEnrolmentController }
  