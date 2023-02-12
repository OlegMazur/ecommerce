'use strict';
const subCategoryJson = require('../data/JSONData/subCategory.json')
const subCategoryPlusDate = subCategoryJson.map(item => item = { ...item, createdAt: new Date(), updatedAt: new Date() })
//console.log(subCategoryPlusDate)
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('sub_categories', subCategoryPlusDate

      , {});
  },


  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('sub_categories', null, {});

  }
};
