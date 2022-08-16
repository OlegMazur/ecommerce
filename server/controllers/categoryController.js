const path = require('path')
const {Category}=require('../models/models')
class CategoryController {
    async create(req,res){
        const {title }=req.body
        const { img } = req.files
        let fileName = title + ".jpg"
        img.mv(path.resolve(__dirname, '..', 'static', fileName))
        const category =await Category.create({title, img: fileName,})
        return res.json(category)
    }
    async getAll(req, res){
        const categories = await Category.findAll()
        return res.json(categories)
    }

}
module.exports = new CategoryController()