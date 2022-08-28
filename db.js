const {Sequelize}=require('sequelize')
module.exports=new Sequelize({
    
    database: "dbf7djvih2tl9t",
  username: "kfyggdrtvkltmc",
  password: "c9c4b76179eb97d500c10d05dafab2ac909d559ea316296af8d88e90c1a42ec5",
  host: "ec2-176-34-215-248.eu-west-1.compute.amazonaws.com",
  port: 5432,
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true, // This will help you. But you will see nwe error
      rejectUnauthorized: false // This line will fix new error
    }
  },

})
    // process.env.DB_NAME,
    // process.env.DB_USER,
    // process.env.DB_PASSWORD,
    // {
    //     dialect:'postgres',
    //     host:process.env.DB_HOST,
    //     port:process.env.DB_PORT
    // }

