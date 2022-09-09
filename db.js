
const {Sequelize}=require('sequelize')
require('dotenv').config()
// module.exports=new Sequelize({
//     database:process.env.DB_NAME,
//     username: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
     
      
//         dialect:'postgres',
//      host:process.env.DB_HOST,
//       port:process.env.DB_PORT
      
// })
// const devConfig={
//     database:process.env.DB_NAME,
//     username: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
     
      
//         dialect:'postgres',
//      host:process.env.DB_HOST,
//       port:process.env.DB_PORT
      
// }
//const devConfig=`postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`
// const proConfig = process.env.DATABASE_URL
// module.exports = process.env.NODE_ENV==="production"?new Sequelize({
    
//     conectionString: proConfig
// }):new Sequelize({
    
//     devConfig
// })
// //postgres://ltsjtinsizgkny:1d79fe0d45946bfb15bdf559d87f0b4d1746daf06232f6c91d60f32e5e66b5fa@ec2-52-51-3-22.eu-west-1.compute.amazonaws.com:5432/d7rrm41mp565v8
module.exports=new Sequelize({
    
    database: "d7rrm41mp565v8",
  username: "ltsjtinsizgkny",
  password: "1d79fe0d45946bfb15bdf559d87f0b4d1746daf06232f6c91d60f32e5e66b5fa",
  host: "ec2-52-51-3-22.eu-west-1.compute.amazonaws.com",
  port: 5432,
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true, // This will help you. But you will see nwe error
      rejectUnauthorized: false // This line will fix new error
    }
  },

})
// const devConfig={
//     database: process.env.DB_NAME,
//    user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
    
//        // dialect:'postgres',
//     host:process.env.DB_HOST,
//      port:process.env.DB_PORT
// }
//  const proComfig={}   

