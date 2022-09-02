'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const {DataTypes}=Sequelize;
    await queryInterface.createTable('users', {
      name: Sequelize.DataTypes.STRING,
      id:{type:Sequelize.DataTypes.INTEGER,primaryKey:true, autoIncrement:true},
      email:{type:Sequelize.DataTypes.STRING,unique:true,},
      password:{type:Sequelize.DataTypes.STRING},
      role:{type:Sequelize.DataTypes.STRING,defaultValue:"USER"},
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

     await queryInterface.createTable('baskets',{
      id:{type:DataTypes.INTEGER,primaryKey:true, autoIncrement:true},
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      userId:{
        type:DataTypes.INTEGER
      },
      
      
  })
  await queryInterface.createTable('basket_devices',{
      id:{type:DataTypes.INTEGER,primaryKey:true, autoIncrement:true},
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      basketId:{
        type:DataTypes.INTEGER
      },
      deviceId:{
        type:DataTypes.INTEGER
      },
      
  })
  await queryInterface.createTable('devices',{
      id:{type:DataTypes.INTEGER,primaryKey:true, autoIncrement:true},
      name:{type:DataTypes.STRING,unique:true,allowNull:false},
      price:{type:DataTypes.STRING,allowNull:false},
      reting:{type:DataTypes.INTEGER,defaultValue:0},
      img1:{type:DataTypes.STRING},
      img2:{type:DataTypes.STRING},
      img3:{type:DataTypes.STRING},
      img4:{type:DataTypes.STRING},
      imgArr:{type:DataTypes.STRING(2048)},
      info:{type:DataTypes.STRING},
      searchQueries:{type:DataTypes.STRING(2048)},
      currency:{type:DataTypes.STRING},
      unit:{type:DataTypes.STRING},
      availability:{type:DataTypes.INTEGER},
      label:{type:DataTypes.STRING},
      weight:{type:DataTypes.STRING},
      height:{type:DataTypes.STRING},
      length:{type:DataTypes.STRING},
      location:{type:DataTypes.STRING},
      color:{type:DataTypes.STRING},
      power:{type:DataTypes.STRING},
      capacity:{type:DataTypes.STRING},
      colorTemp:{type:DataTypes.STRING},
      favotite:{type:DataTypes.BOOLEAN},
      model:{type:DataTypes.STRING},
      subModel:{type:DataTypes.STRING},
      madeIn:{type:DataTypes.STRING},
      optPrice:{type:DataTypes.STRING},
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      typeId:{
        type:DataTypes.INTEGER
      },
      brandId:{
        type:DataTypes.INTEGER
      },
      subCategoryId:{
        type:DataTypes.INTEGER
      },
  
  })
  await queryInterface.createTable('types',{
      id:{type:DataTypes.INTEGER,primaryKey:true, autoIncrement:true},
      name:{type:DataTypes.STRING,unique:true,allowNull:false},
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
  })
  await queryInterface.createTable('brands',{
      id:{type:DataTypes.INTEGER,primaryKey:true, autoIncrement:true},
      name:{type:DataTypes.STRING,unique:true,allowNull:false},
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
  })
  await queryInterface.createTable('ratings',{
      id:{type:DataTypes.INTEGER,primaryKey:true, autoIncrement:true},
      rate:{type:DataTypes.STRING,allowNull:false},
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      userId:{
        type:DataTypes.INTEGER
      },
      deviceId:{
        type:DataTypes.INTEGER
      },
  })
  await queryInterface.createTable('sub_categories',{
      id:{type:DataTypes.INTEGER,primaryKey:true, autoIncrement:true},
      title:{type:DataTypes.STRING,unique:true,allowNull:false},
      img:{type:DataTypes.STRING,allowNull:false},
      categoryId:{
        type:DataTypes.INTEGER
      },
      createdAt: {
        
        type: Sequelize.DATE
      },
      updatedAt: {
        
        type: Sequelize.DATE
      },
     
  })
  await queryInterface.createTable('categories',{
      id:{type:DataTypes.INTEGER,primaryKey:true, autoIncrement:true},
      title:{type:DataTypes.STRING,unique:true,allowNull:false},
      img:{type:DataTypes.STRING,allowNull:false},
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
  })
  
  await queryInterface.createTable('device_infos',{
      id:{type:DataTypes.INTEGER,primaryKey:true, autoIncrement:true},
      title:{type:DataTypes.STRING},
      description:{type:DataTypes.STRING,allowNull:false},
      images:{type:DataTypes.STRING},
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deviceId:{
        type:DataTypes.INTEGER
      },
  })
  await queryInterface.createTable('type_brands',{
      id:{type:DataTypes.INTEGER,primaryKey:true, autoIncrement:true},

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      typeId:{
        type:DataTypes.INTEGER
      },
      brandId:{
        type:DataTypes.INTEGER
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
      
  })
//   User.hasOne(Basket)
//   Basket.belongsTo(User)
  
//   User.hasMany(Rating)
//   Rating.belongsTo(User)
  
//   Basket.hasMany(BasketDevice)
//   BasketDevice.belongsTo(Basket)
  
//   Type.hasMany(Device)
//   Device.belongsTo(Type)
  
//   Brand.hasMany(Device)
//   Device.belongsTo(Brand)
  
  
//   Category.hasMany(SubCategory)
//   SubCategory.belongsTo(Category)
  
  
//   Device.hasMany(Rating)
//   Rating.belongsTo(Device)
  
//   Device.hasMany(BasketDevice)
//   BasketDevice.belongsTo(Device)
  
//   Device.hasMany(DeviceInfo,{as:'info'})
//   DeviceInfo.belongsTo(Device)
  
//   SubCategory.hasMany(Device)
//   Device.belongsTo(SubCategory )
  
  
//   Type.belongsToMany(Brand,{through:'type_brand' })
//   Brand.belongsToMany(Type,{through:'type_brand' })
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.dropTable('users')
    await queryInterface.dropTable('baskets')
    await queryInterface.dropTable('basket_devices')
    await queryInterface.dropTable('devices')
    await queryInterface.dropTable('types')
    await queryInterface.dropTable('brands')
    await queryInterface.dropTable('ratings')
    await queryInterface.dropTable('sub_categories')
    await queryInterface.dropTable('categories')
    await queryInterface.dropTable('device_infos')
    await queryInterface.dropTable('type_brands')
    /**
     * Add reverting commands here.
     *
     * Example:
     await queryInterface.dropTable('users');
     */
  }
};
