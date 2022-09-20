const path = require('path')
const uuid = require('uuid')
const { uploadFile } = require('../s3')
const { Category } = require('../models/models')
const ApiError = require('../errors/apiError')
class CategoryController {
    async create(req, res, next) {
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
            let img
            let category;
            const { id, title } = req.body
            if (req.body.img) {
                img = req.body.img
                category = await Category.upsert({
                    id,
                    title,
                    img
                })
                return res.json(category)
            }

            img = req.files.img

            const s3data = await uploadFile(img)
            category = await Category.upsert({
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
module.exports = new CategoryController()