const BuildFetchEnrolmentController = ({ fetchEnrolmentService, Response }) => {
  const fetchEnrolmentController = async (httpRequest) => {
    try {
      const data = await fetchEnrolmentService( httpRequest.body );
      return Response.OK(`You have ${data.count} enrollments`, data);
    } catch (err) {
      console.log(err);
      return Response.UNPROCESSABLE_ENTITY(err.message);
    }
  }

  return fetchEnrolmentController;
}

//specify-more-controller

module.exports = { BuildFetchEnrolmentController }
  