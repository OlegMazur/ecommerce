'use strict';
const productJson=require('../data/JSONData/product.json')
const productPlusDate=productJson.map(item=>item={...item , createdAt:new Date(),updatedAt: new Date()})
module.exports = {
  async up (queryInterface, Sequelize) {
    
   
      await queryInterface.bulkInsert('devices', productPlusDate
       
      , {});
    
  },

  async down (queryInterface, Sequelize) {
   
     await queryInterface.bulkDelete('devices', null, {});
     
  }
};
