const sequelize=require('../db')
const {DataTypes}=require('sequelize')
const User = sequelize.define('user',{
    id:{type:DataTypes.INTEGER,primaryKey:true, autoIncrement:true},
    email:{type:DataTypes.STRING,unique:true,},
    password:{type:DataTypes.STRING},
    role:{type:DataTypes.STRING,defaultValue:"USER"},
})

const Basket = sequelize.define('basket',{
    id:{type:DataTypes.INTEGER,primaryKey:true, autoIncrement:true},
    
})
const BasketDevice = sequelize.define('basket_device',{
    id:{type:DataTypes.INTEGER,primaryKey:true, autoIncrement:true},
    
})
const Device = sequelize.define('device',{
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
const Type =sequelize.define('type',{
    id:{type:DataTypes.INTEGER,primaryKey:true, autoIncrement:true},
    name:{type:DataTypes.STRING,unique:true,allowNull:false},
})
const Brand =sequelize.define('brand',{
    id:{type:DataTypes.INTEGER,primaryKey:true, autoIncrement:true},
    name:{type:DataTypes.STRING,unique:true,allowNull:false},
})
const Rating =sequelize.define('rating',{
    id:{type:DataTypes.INTEGER,primaryKey:true, autoIncrement:true},
    rate:{type:DataTypes.STRING,allowNull:false},
})
const SubCategory =sequelize.define('sub_category',{
    id:{type:DataTypes.INTEGER,primaryKey:true, autoIncrement:true},
    title:{type:DataTypes.STRING,unique:true,allowNull:false},
    img:{type:DataTypes.STRING,allowNull:false},
})
const Category =sequelize.define('category',{
    id:{type:DataTypes.INTEGER,primaryKey:true, autoIncrement:true},
    title:{type:DataTypes.STRING,unique:true,allowNull:false},
    img:{type:DataTypes.STRING,allowNull:false},
})

const DeviceInfo =sequelize.define('device_info',{
    id:{type:DataTypes.INTEGER,primaryKey:true, autoIncrement:true},
    title:{type:DataTypes.STRING},
    description:{type:DataTypes.STRING,allowNull:false},
    images:{type:DataTypes.STRING},
})
const TypeBrand =sequelize.define('type_brand',{
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

module.exports={
    User, Basket, BasketDevice, Device, Type, Brand, Rating, TypeBrand, DeviceInfo,Category, SubCategory
}