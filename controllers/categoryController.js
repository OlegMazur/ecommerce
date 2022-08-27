const path = require('path')
const uuid = require('uuid')
const {Category}=require('../models/models')
class CategoryController {
    async create(req,res){
        const {title }=req.body
        const { img } = req.files
        console.log(img)
        let fileName = uuid.v4() + ".jpg"
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