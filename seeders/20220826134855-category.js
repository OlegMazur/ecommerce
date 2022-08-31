'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('categories', [{
      id: 1,
      title: 'Ліхтарі',
      img: 'https://customlight.s3.eu-west-2.amazonaws.com/%D0%BB%D1%96%D1%85%D1%82%D0%B0%D1%80%D1%96/category/photo5.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      title: 'Акумулятори',
      img: 'https://customlight.s3.eu-west-2.amazonaws.com/%D0%BB%D1%96%D1%85%D1%82%D0%B0%D1%80%D1%96/category/-1782629911-1573423688.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 3,
      title: 'Зарядні пристрої',
      img: 'https://customlight.s3.eu-west-2.amazonaws.com/%D0%BB%D1%96%D1%85%D1%82%D0%B0%D1%80%D1%96/category/DSC_3398-001.JPG',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 4,
      title: 'Запчастини до ліхтарів',
      img: 'https://customlight.s3.eu-west-2.amazonaws.com/%D0%BB%D1%96%D1%85%D1%82%D0%B0%D1%80%D1%96/category/-16440225891864209617.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 5,
      title: 'Аксесуари до ліхтарів',
      img: 'https://customlight.s3.eu-west-2.amazonaws.com/%D0%BB%D1%96%D1%85%D1%82%D0%B0%D1%80%D1%96/category/%D0%9C1.JPG',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 6,
      title: 'Велозапчастини та велоаксесуари',
      img: 'https://customlight.s3.eu-west-2.amazonaws.com/%D0%BB%D1%96%D1%85%D1%82%D0%B0%D1%80%D1%96/category/Team+Pro+Classic+Saddle+Unisize+brown.JPG',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    // {
    //   id: 7,
    //   title: 'Велоодяг',
    //   img: '17a5f3df-b81f-443f-9e1d-ea067427c5af.jpg',
    //   createdAt: new Date(),
    //   updatedAt: new Date(),
    // },
    {
      id: 8,
      title: 'Відпочинок на природі',
      img: 'https://customlight.s3.eu-west-2.amazonaws.com/%D0%BB%D1%96%D1%85%D1%82%D0%B0%D1%80%D1%96/category/79300092_xxl.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 9,
      title: 'Одяг',
      img: 'https://customlight.s3.eu-west-2.amazonaws.com/%D0%BB%D1%96%D1%85%D1%82%D0%B0%D1%80%D1%96/category/ONeill+District+Jacket+Mens.JPG',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 10,
      title: 'Радіокомпоненти',
      img: 'https://customlight.s3.eu-west-2.amazonaws.com/%D0%BB%D1%96%D1%85%D1%82%D0%B0%D1%80%D1%96/category/5A-DC-to-DC-CC-CV-Lithium-Battery-Step-down-Charging-Board-Led-Power-Converter-YKS.JPG',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 11,
      title: 'Вимирювальні прилади',
      img: 'https://customlight.s3.eu-west-2.amazonaws.com/%D0%BB%D1%96%D1%85%D1%82%D0%B0%D1%80%D1%96/category/HTB1L.1yKVXXXXcNXXXXq6xXFXXXh.jpg',
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

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categories', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
