'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const {DataTypes}=Sequelize;
    const User=await queryInterface.createTable('user', {
      name: Sequelize.DataTypes.STRING,
      id:{type:Sequelize.DataTypes.INTEGER,primaryKey:true, autoIncrement:true},
      email:{type:Sequelize.DataTypes.STRING,unique:true,},
      password:{type:Sequelize.DataTypes.STRING},
      role:{type:Sequelize.DataTypes.STRING,defaultValue:"USER"},
    });

    const Basket = await queryInterface.createTable('basket',{
      id:{type:DataTypes.INTEGER,primaryKey:true, autoIncrement:true},
      
  })
  const BasketDevice = await queryInterface.createTable('basket_device',{
      id:{type:DataTypes.INTEGER,primaryKey:true, autoIncrement:true},
      
  })
  const Device =await queryInterface.createTable('device',{
      id:{type:DataTypes.INTEGER,primaryKey:true, autoIncrement:true},
      name:{type:DataTypes.STRING,unique:true,allowNull:false},
      price:{type:DataTypes.INTEGER,allowNull:false},
      reting:{type:DataTypes.INTEGER,defaultValue:0},
      img1:{type:DataTypes.STRING,allowNull:false},
      img2:{type:DataTypes.STRING},
      img3:{type:DataTypes.STRING},
      img4:{type:DataTypes.STRING},
      searchQueries:{type:DataTypes.STRING},
      currency:{type:DataTypes.STRING},
      unit:{type:DataTypes.STRING},
      availability:{type:DataTypes.INTEGER},
      label:{type:DataTypes.STRING},
      weight:{type:DataTypes.INTEGER},
      height:{type:DataTypes.INTEGER},
      length:{type:DataTypes.INTEGER},
      location:{type:DataTypes.STRING},
      color:{type:DataTypes.STRING},
      power:{type:DataTypes.INTEGER},
      capacity:{type:DataTypes.INTEGER},
      colorTemp:{type:DataTypes.INTEGER},
      favotite:{type:DataTypes.BOOLEAN},
      model:{type:DataTypes.STRING},
      subModel:{type:DataTypes.STRING},
      madeIn:{type:DataTypes.STRING},
      floatPrice:{type:DataTypes.FLOAT},
  
  })
  const Type =await queryInterface.createTable('type',{
      id:{type:DataTypes.INTEGER,primaryKey:true, autoIncrement:true},
      name:{type:DataTypes.STRING,unique:true,allowNull:false},
  })
  const Brand =await queryInterface.createTable('brand',{
      id:{type:DataTypes.INTEGER,primaryKey:true, autoIncrement:true},
      name:{type:DataTypes.STRING,unique:true,allowNull:false},
  })
  const Rating =await queryInterface.createTable('rating',{
      id:{type:DataTypes.INTEGER,primaryKey:true, autoIncrement:true},
      rate:{type:DataTypes.STRING,allowNull:false},
  })
  const SubCategory =await queryInterface.createTable('sub_category',{
      id:{type:DataTypes.INTEGER,primaryKey:true, autoIncrement:true},
      title:{type:DataTypes.STRING,unique:true,allowNull:false},
      img:{type:DataTypes.STRING,allowNull:false},
  })
  const Category =await queryInterface.createTable('category',{
      id:{type:DataTypes.INTEGER,primaryKey:true, autoIncrement:true},
      title:{type:DataTypes.STRING,unique:true,allowNull:false},
      img:{type:DataTypes.STRING,allowNull:false},
  })
  
  const DeviceInfo =await queryInterface.createTable('device_info',{
      id:{type:DataTypes.INTEGER,primaryKey:true, autoIncrement:true},
      title:{type:DataTypes.STRING},
      description:{type:DataTypes.STRING,allowNull:false},
      images:{type:DataTypes.STRING},
  })
  const TypeBrand =await queryInterface.createTable('type_brand',{
      id:{type:DataTypes.INTEGER,primaryKey:true, autoIncrement:true},
      
  })
  User.hasOne(Basket)
  Basket.belongsTo(User)
  
  User.hasMany(Rating)
  Rating.belongsTo(User)
  
  Basket.hasMany(BasketDevice)
  BasketDevice.belongsTo(Basket)
  
  Type.hasMany(Device)
  Device.belongsTo(Type)
  
  Brand.hasMany(Device)
  Device.belongsTo(Brand)
  
  
  Category.hasMany(SubCategory)
  SubCategory.belongsTo(Category)
  
  
  Device.hasMany(Rating)
  Rating.belongsTo(Device)
  
  Device.hasMany(BasketDevice)
  BasketDevice.belongsTo(Device)
  
  Device.hasMany(DeviceInfo,{as:'info'})
  DeviceInfo.belongsTo(Device)
  
  SubCategory.hasMany(Device)
  Device.belongsTo(SubCategory )
  
  
  Type.belongsToMany(Brand,{through:'type_brand' })
  Brand.belongsToMany(Type,{through:'type_brand' })
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.dropTable('user')
    await queryInterface.dropTable('basket')
    await queryInterface.dropTable('basket_device')
    await queryInterface.dropTable('device')
    await queryInterface.dropTable('type')
    await queryInterface.dropTable('brand')
    await queryInterface.dropTable('rating')
    await queryInterface.dropTable('sub_category')
    await queryInterface.dropTable('category')
    await queryInterface.dropTable('device_info')
    await queryInterface.dropTable('type_brand')
    /**
     * Add reverting commands here.
     *
     * Example:
     await queryInterface.dropTable('users');
     */
  }
};
