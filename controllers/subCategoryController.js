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
    
    async updateOne(req, res, next) {

        try {
            let img
            let category;
            const { id, title } = req.body
            if (req.body.img) {
                img = req.body.img
                category = await SubCategory.upsert({
                    id,
                    title,
                    img
                })
                return res.json(category)
            }

            img = req.files.img

            const s3data = await uploadFile(img)
            category = await SubCategory.upsert({
                id,
                title,
                img: s3data.toString()
            })
            return res.json(category)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }


}
module.exports = new SubCategoryController()