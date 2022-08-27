'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('categories', [{
      id:1,
        title: 'Ліхтар',
         img: '17a5f3df-b81f-443f-9e1d-ea067427c5af.jpg' ,
        createdAt: new Date(),
       updatedAt: new Date(),
       },
       {
        id:2,
          title: 'Акумулятор',
           img: '17a5f3df-b81f-443f-9e1d-ea067427c5af.jpg' ,
          createdAt: new Date(),
         updatedAt: new Date(),
         },
         {
          id:3,
            title: 'Зарядний пристрій',
             img: '17a5f3df-b81f-443f-9e1d-ea067427c5af.jpg' ,
            createdAt: new Date(),
           updatedAt: new Date(),
           },
      //  {
      //   title: 'Акумулятори',
      //    img: '17a5f3df-b81f-443f-9e1d-ea067427c5af.jpg' ,
      //   createdAt: new Date(),
      //  updatedAt: new Date(),
      //  }
      ], {});
    
      //  firstName: 'John',
      //  lastName: 'Smith',
      //  email: 'john@mail.com',
      //  createdAt: new Date(),
      //  updatedAt: new Date(),
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categories', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
