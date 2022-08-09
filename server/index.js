require('dotenv').config()
const express = require('express')
const sequelize=require('./db')
const app = express()
const models =require('./models/models')
const port = process.env.port||3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
const start=async()=>{
    try{
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
          })
    }catch(e){
        console.log(e)
    }
}
start()
