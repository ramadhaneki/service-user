'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  async up (queryInterface, Sequelize) {
   
    await queryInterface.bulkInsert('users', [
      {
        name: "Eki Ramadhan",
        profession: "Programmer",
        role: "admin",
        email: "ramadhaneki91@gmail.com",
        password: await bcrypt.hash('admin12345', 10),
        created_at: new Date(), 
        updated_at: new Date() 
      }, {
        name: "Johan",
        profession: "Programmer Web",
        role: "student",
        email: "johan@gmail.com",
        password: await bcrypt.hash('student12345', 10),
        created_at: new Date(), 
        updated_at: new Date() 
      }
        
    ]);
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('users', null, {});
     
  }
};
