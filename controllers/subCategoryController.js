const path = require('path')
const uuid = require('uuid')
const { uploadFile } = require('../s3')
const { SubCategory } = require('../models/models')
const ApiError = require('../errors/apiError')
class SubCategoryController {
    async create(req, res, next) {
        try {
            const { title, categoryId, img } = req.body
            if (req?.files?.img) {
                const fileLocation = await uploadFile(req.files.img)
                const subCategory = await SubCategory.create({ title, categoryId, img: fileLocation, })
                return res.json(subCategory)
            }
            const subCategory = await SubCategory.create({ title, categoryId, img })
            return res.json(subCategory)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }
    async getAll(req, res, next) {
        try {
            const subCategories = await SubCategory.findAll()
            return res.json(subCategories)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }


}
module.exports = new SubCategoryController()