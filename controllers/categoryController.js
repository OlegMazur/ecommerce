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

}
module.exports = new CategoryController()