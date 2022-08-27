const path = require('path')
const uuid = require('uuid')
const {SubCategory }=require('../models/models')
class SubCategoryController {
    async create(req,res){
        const {title, categoryId}=req.body
        const { img } = req.files
        let fileName = uuid.v4() + ".jpg"
        img.mv(path.resolve(__dirname, '..', 'static', fileName))
        const subCategory =await SubCategory.create({title, categoryId, img: fileName})
        return res.json(subCategory)
    }
    async getAll(req, res){
        const subCategories = await SubCategory.findAll()
        return res.json(subCategories)
    }

}
module.exports = new SubCategoryController()