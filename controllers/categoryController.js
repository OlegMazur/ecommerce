const path = require('path')
const uuid = require('uuid')
const { uploadFile } = require('../s3')
const { Category } = require('../models/models')
const ApiError = require('../errors/apiError')
class CategoryController {
    async create(req, res,next) {
        try {
            const { title, img } = req.body
            if (req?.files?.img) {
                const fileLocation = await uploadFile(req.files.img)
                const category = await Category.create({ title, img: fileLocation, })
                return res.json(category)
            }
            const category = await Category.create({ title, img })
            return res.json(category)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }


    }
    async getAll(req, res, next) {
        try {
            const categories = await Category.findAll()
            return res.json(categories)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }
    async updateOne(req, res, next) {

        try {
              
             const {id,title}=req.body
             const {img} =req.files
              console.log("img",img)
            //  console.log("id",id)
            //  console.log("title",title)
            
             let category;
             if(typeof(img)==='string'){
                category = await Category.upsert({
                    id ,
                   title,
                   img
               })
               return res.json(category)
             }
            
             const s3data = await uploadFile(img)
             console.log(s3data)
             category = await Category.upsert({
                id ,
               title,
               img:s3data.toString()
            })
            return res.json(category)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

}
module.exports = new CategoryController()