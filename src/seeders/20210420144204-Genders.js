'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
        'Genders', 
        [
          {
            gender: 'Female',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            gender: 'Male',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            gender: 'Prefer not to say',
            createdAt: new Date(),
            updatedAt: new Date()
          },
        ]
      );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
