'use strict';
const subCategoryJson=require('../data/JSONData/subCategory.json')
const subCategoryPlusDate=subCategoryJson.map(item=>item={...item , createdAt:new Date(),updatedAt: new Date()})
//console.log(subCategoryPlusDate)
module.exports = {
  async up(queryInterface, Sequelize) {

     await queryInterface.bulkInsert('sub_categories', subCategoryPlusDate
    //  [{
    //   id: 13743213,
    //   title: "Системи охолодження",
    //   img: "https://customlight.s3.eu-west-2.amazonaws.com/%D0%BB%D1%96%D1%85%D1%82%D0%B0%D1%80%D1%96/category1/convoy/subCatConvoy.jpg",
    //   categoryId: 23676799,
    //   createdAt: new Date(),
    //   updatedAt: new Date(),
      
    // }]
    ,{});},
  //   {
  //     id: 2,
  //     title: "Ліхтарі Wurkkos",
  //     img: "https://customlight.s3.eu-west-2.amazonaws.com/%D0%BB%D1%96%D1%85%D1%82%D0%B0%D1%80%D1%96/category1/convoy/subCatConvoy.jpg" ,
  //     createdAt: new Date(),
  //     updatedAt: new Date(),
  //     categoryId: 1
  //   },
  //   {
  //     id: 3,
  //     title: "Ліхтарі Sofirn",
  //     img: "https://customlight.s3.eu-west-2.amazonaws.com/%D0%BB%D1%96%D1%85%D1%82%D0%B0%D1%80%D1%96/category1/Sofirn/subCatSofirn.png" ,
  //     createdAt: new Date(),
  //     updatedAt: new Date(),
  //     categoryId: 1
  //    },
  //    {
  //     id: 4,
  //     title: "Ліхтарі Skilhunt",
  //     img: "https://customlight.s3.eu-west-2.amazonaws.com/%D0%BB%D1%96%D1%85%D1%82%D0%B0%D1%80%D1%96/category1/NexTool/subCatNextTool.jpg" ,
  //     createdAt: new Date(),
  //     updatedAt: new Date(),
  //     categoryId: 1
  //   },
  //   {
  //     id: 5,
  //     title: "Ліхтарі Astrolux",
  //     img: "https://customlight.s3.eu-west-2.amazonaws.com/%D0%BB%D1%96%D1%85%D1%82%D0%B0%D1%80%D1%96/category1/Astrolux/subCategoryAstrolux.png" ,
  //     createdAt: new Date(),
  //     updatedAt: new Date(),
  //     categoryId: 1
  //   },{
  //     id: 6,
  //     title: "Налобні ліхтарі",
  //     img: "https://customlight.s3.eu-west-2.amazonaws.com/%D0%BB%D1%96%D1%85%D1%82%D0%B0%D1%80%D1%96/category1/onhead/sdfshr.JPG" ,
  //     createdAt: new Date(),
  //     updatedAt: new Date(),
  //     categoryId: 1
  //   },{
  //     id: 7,
  //     title: "Надпотужні ліхтарі",
  //     img: "https://customlight.s3.eu-west-2.amazonaws.com/%D0%BB%D1%96%D1%85%D1%82%D0%B0%D1%80%D1%96/category1/NexTool/subCatNextTool.jpg" ,
  //     createdAt: new Date(),
  //     updatedAt: new Date(),
  //     categoryId: 1
  //   },
  //   {
  //     id: 8,
  //     title: "Ліхтарі для дайвінгу",
  //     img: "https://customlight.s3.eu-west-2.amazonaws.com/%D0%BB%D1%96%D1%85%D1%82%D0%B0%D1%80%D1%96/category1/NexTool/subCatNextTool.jpg" ,
  //     createdAt: new Date(),
  //     updatedAt: new Date(),
  //     categoryId: 1
  //   },
  //   {
  //     id: 9,
  //     title: "Ультрафіолетові ліхтарі",
  //     img: "https://customlight.s3.eu-west-2.amazonaws.com/%D0%BB%D1%96%D1%85%D1%82%D0%B0%D1%80%D1%96/category1/NexTool/subCatNextTool.jpg" ,
  //     createdAt: new Date(),
  //     updatedAt: new Date(),
  //     categoryId: 1
  //   },
  //   {
  //     id: 10,
  //     title: "Наключники",
  //     img: "https://customlight.s3.eu-west-2.amazonaws.com/%D0%BB%D1%96%D1%85%D1%82%D0%B0%D1%80%D1%96/category1/NexTool/subCatNextTool.jpg" ,
  //     createdAt: new Date(),
  //     updatedAt: new Date(),
  //     categoryId: 1
  //   },
  //   {
  //     id: 11,
  //     title: "Ліхтарі з зумом",
  //     img: "https://customlight.s3.eu-west-2.amazonaws.com/%D0%BB%D1%96%D1%85%D1%82%D0%B0%D1%80%D1%96/category1/NexTool/subCatNextTool.jpg" ,
  //     createdAt: new Date(),
  //     updatedAt: new Date(),
  //     categoryId: 1
  //   },
  //   {
  //     id: 12,
  //     title: "Ліхтарі Nex Tool",
  //     img: "https://customlight.s3.eu-west-2.amazonaws.com/%D0%BB%D1%96%D1%85%D1%82%D0%B0%D1%80%D1%96/category1/NexTool/subCatNextTool.jpg" ,
  //     createdAt: new Date(),
  //     updatedAt: new Date(),
  //     categoryId: 1
  //   },
  //   {
  //     id: 13,
  //     title: "Ліхтарі Boruit",
  //     img: "https://customlight.s3.eu-west-2.amazonaws.com/%D0%BB%D1%96%D1%85%D1%82%D0%B0%D1%80%D1%96/category1/boruit/subCatBoruit.jpg" ,
  //     createdAt: new Date(),
  //     updatedAt: new Date(),
  //     categoryId: 1
  //   },
  //   {
  //     id: 14,
  //     title: "Ліхтарі BLF",
  //     img: "https://customlight.s3.eu-west-2.amazonaws.com/%D0%BB%D1%96%D1%85%D1%82%D0%B0%D1%80%D1%96/category1/BLF/101NCD40/subCatBLF.JPG" ,
  //     createdAt: new Date(),
  //     updatedAt: new Date(),
  //     categoryId: 1
  //   }
  // ], 
  //,{});

  //},

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('sub_categories', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
