const makeEnrolmentEntity = require("../../entities/enrolmentEntities")

const BuildCreateEnrolmentService = ({ enrolmentDao }) => {
  const createEnrolmentService = async (requestData) => {

    // make new enrolment entity
    const enrolmentEntity = await new makeEnrolmentEntity(requestData).create();

    console.log(requestData);

    //check if already enroled
    const alreadyEnroled = await enrolmentDao.checkForDuplicates(enrolmentEntity.getStudentUuid(), enrolmentEntity.getCourseId());
    if (alreadyEnroled) throw new Error('You have enroled for this course previously.');

    // create the enrolment
    const createEnrolment = await enrolmentDao.store(enrolmentEntity.getEnrolmentData());
    
    // check if the enrolment was created
    if (!createEnrolment) throw new Error("Request failed.");

    // fetch the new enrolment data
    const newEnrolment = await enrolmentDao.findByUuid(enrolmentEntity.getEnrolmentUuid());

    // return the enrolment data
    return newEnrolment;

  }

  return createEnrolmentService;
}

//specify-more-services

module.exports = { BuildCreateEnrolmentService };
  