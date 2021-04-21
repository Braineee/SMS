const BuildFetchEnrolmentService = ({ enrolmentDao, dateFormat }) => {
  const fetchEnrolmentService = async (requestData) => {

    const results = await enrolmentDao.fetchAll();
    return results
  }

  return fetchEnrolmentService;
}

//specify-more-services

module.exports = { BuildFetchEnrolmentService };
  