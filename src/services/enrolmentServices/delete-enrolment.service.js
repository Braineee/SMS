const BuildDeleteEnrolmentService = ({ enrolmentDao }) => {
  const deleteEnrolmentService = async (requestData) => {
    if (!requestData.enrolment_uuid) throw new Error('No enrolment uuid was provided.')
    const results = await enrolmentDao.removeUuid(requestData.enrolment_uuid);
    return results

  }

  return deleteEnrolmentService;
}

//specify-more-services

module.exports = { BuildDeleteEnrolmentService };
  