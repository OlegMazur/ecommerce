
const {Sequelize}=require('sequelize')
require('dotenv').config()
module.exports=new Sequelize({
    database:process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
     
      
        dialect:'postgres',
     host:process.env.DB_HOST,
      port:process.env.DB_PORT
      
})

// module.exports=new Sequelize({
    
//     database: "d7rrm41mp565v8",
//   username: "ltsjtinsizgkny",
//   password: "1d79fe0d45946bfb15bdf559d87f0b4d1746daf06232f6c91d60f32e5e66b5fa",
//   host: "ec2-52-51-3-22.eu-west-1.compute.amazonaws.com",
//   port: 5432,
//   dialect: "postgres",
//   dialectOptions: {
//     ssl: {
//       require: true, // This will help you. But you will see nwe error
//       rejectUnauthorized: false // This line will fix new error
//     }
//   },

// })

