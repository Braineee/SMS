const BuildSignInController = ({ signInService, Response }) => {
  const signInSController = async (httpRequest) => {
    try {
      const data = await signInService(httpRequest.body);
      return Response.OK(`Login successful.`, data);
    } catch (err) {
      console.log(err);
      return Response.UNPROCESSABLE_ENTITY(err.message);
    }
  }
  return signInSController;
}
module.exports = BuildSignInController;