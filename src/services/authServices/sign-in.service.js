const makeSignInEntity = require('../../entities/authEntities');

const BuildSignInService = ({ studentDao, verifyPassword, generateJWT }) => {
  const signInServcice = async (requestData) => {
    // check the sign in info
    const signInEntity = await new makeSignInEntity(requestData).create();

    // fetch the user by their email or username
    let userResult = await studentDao.findByEmail(signInEntity.getEmail());
    if (!userResult) userResult = await studentDao.findByUsername(signInEntity.getUsername());
    if (!userResult)  throw new Error('Incorrect credentials.');

    // verify the password
    const isValidPassword = verifyPassword(userResult.password, signInEntity.getPassword());
    if (!isValidPassword) throw new Error('Incorrect credentials.');

    // create a jwt
    userResult.dataValues.authToken = generateJWT(userResult, signInEntity.getRememberMe());

    // return the user data
    const user = {};
    user.verification_token = userResult.dataValues.student_uuid,
    user.first_name = userResult.dataValues.first_name,
    user.last_name = userResult.dataValues.last_name,
    user.gender = userResult.dataValues.Gender.gender,
    user.age = userResult.dataValues.age,
    user.email = userResult.dataValues.email,
    user.username = userResult.dataValues.username
    user.authToken = userResult.dataValues.authToken
    
    return user;
  }

  return signInServcice;
}

module.exports = BuildSignInService;