'use strict';
const productJson=require('../data/JSONData/product.json')
const productPlusDate=productJson.map(item=>item={...item , createdAt:new Date(),updatedAt: new Date()})

module.exports = {
  async up (queryInterface, Sequelize) {
    
     try{
      console.log(productPlusDate)
      await queryInterface.bulkInsert('devices', productPlusDate
       
      , {});
     }catch(e){
        comsole.log(e)
     }
     
    
  },

  async down (queryInterface, Sequelize) {
   
     await queryInterface.bulkDelete('devices', null, {});
     
  }
};
