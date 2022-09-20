'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('sub_categories', [
    
        {
          id: 21,
          title: "Акумулятори доліхтарів ",
          img: "https://customlight.s3.eu-west-2.amazonaws.com/category2/subcategoryPhoto/subcategory2.jpg" ,
          createdAt: new Date(),
          updatedAt: new Date(),
          categoryId: 2
        },
        {
          id: 22,
          title: "Li-ion 18650 ",
          img: "https://customlight.s3.eu-west-2.amazonaws.com/category2/subcategoryPhoto/subcategory2.jpg" ,
          createdAt: new Date(),
          updatedAt: new Date(),
          categoryId: 2
        },
        {
          id: 23,
          title: "Акумулятори 21700 ",
          img: "https://customlight.s3.eu-west-2.amazonaws.com/category2/subcategoryPhoto/subcategory2.jpg" ,
          createdAt: new Date(),
          updatedAt: new Date(),
          categoryId: 2
        },
        {
          id: 24,
          title: "Li-ion 18650 з платою захисту ",
          img: "https://customlight.s3.eu-west-2.amazonaws.com/category2/subcategoryPhoto/subcategory2.jpg" ,
          createdAt: new Date(),
          updatedAt: new Date(),
          categoryId: 2
        },
        {
          id: 25,
          title: "Li-ion інші формати ",
          img: "https://customlight.s3.eu-west-2.amazonaws.com/category2/subcategoryPhoto/subcategory2.jpg" ,
          createdAt: new Date(),
          updatedAt: new Date(),
          categoryId: 2
        },
        {
          id: 26,
          title: "Високотокові акумулятори ",
          img: "https://customlight.s3.eu-west-2.amazonaws.com/category2/subcategoryPhoto/subcategory2.jpg" ,
          createdAt: new Date(),
          updatedAt: new Date(),
          categoryId: 2
        },
        {
          id:27,
          title: "LIFEPO4 ",
          img: "https://customlight.s3.eu-west-2.amazonaws.com/category2/subcategoryPhoto/subcategory2.jpg" ,
          createdAt: new Date(),
          updatedAt: new Date(),
          categoryId: 2
        },
        {
          id:28,
          title: "Ni-Mg AA, AAA",
          img: "https://customlight.s3.eu-west-2.amazonaws.com/category2/subcategoryPhoto/subcategory2.jpg" ,
          createdAt: new Date(),
          updatedAt: new Date(),
          categoryId: 2
        },
        {
          id: 29,
          title: "Батареї для велофари ",
          img: "https://customlight.s3.eu-west-2.amazonaws.com/category2/subcategoryPhoto/subcategory2.jpg" ,
          createdAt: new Date(),
          updatedAt: new Date(),
          categoryId: 2
        },
        {
          id: 30,
          title: "Літієві елементи живлення ",
          img: "https://customlight.s3.eu-west-2.amazonaws.com/category2/subcategoryPhoto/subcategory2.jpg" ,
          createdAt: new Date(),
          updatedAt: new Date(),
          categoryId: 2
        },
        {
          id: 31,
          title: "Аксесуари для акумуляторів ",
          img: "https://customlight.s3.eu-west-2.amazonaws.com/category2/subcategoryPhoto/subcategory2.jpg" ,
          createdAt: new Date(),
          updatedAt: new Date(),
          categoryId: 2
        },
        {
          id: 32,
          title: "Літієві батарейки ",
          img: "https://customlight.s3.eu-west-2.amazonaws.com/category2/subcategoryPhoto/subcategory1.jpg" ,
          createdAt: new Date(),
          updatedAt: new Date(),
          categoryId: 2
        },



      ], {});
    
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('sub_categories', null, {});
     
  }
};
