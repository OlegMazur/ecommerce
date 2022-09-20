'use strict';
const deviceInfo=require('../data/JSONData/deviceInfoData.json')
const deviceInfoPlusDate=deviceInfo.map(item=>item={...item , createdAt:new Date(),updatedAt: new Date()})
module.exports = {
  async up (queryInterface, Sequelize) {
    
   
      await queryInterface.bulkInsert('device_infos', deviceInfoPlusDate
       
      , {});
    
  },

  async down (queryInterface, Sequelize) {
   
     await queryInterface.bulkDelete('device_infos', null, {});
     
  }
};