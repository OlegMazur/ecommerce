require('dotenv').config()
const express = require('express')
const sequelize=require('./db')

const models =require('./models/models')
const cors =require('cors')
const router =require('./routes/index')
const errorHandler=require('./middleware/errorHandlingMiddleware')
const port = process.env.port||5000
const fileUpload = require('express-fileupload')
const path = require('path')
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname,'static')))
app.use(express.static(path.join(__dirname,"client/build")))
if(process.env.NODE_ENV ==="production"){
    
    app.use(express.static(path.join(__dirname,"client/build")))
}
app.use(fileUpload({}))
app.use('/api',router)
app.use(errorHandler)
app.get("*",(req,res)=>{
    res.sendFile((path.join(__dirname,"client/build/index.html")))
} )
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
