const ApiError = require('../errors/apiError')
const { Brand } = require('../models/models')
class BrandController {
    async create(req, res) {
        try {
            const { name } = req.body
            const brand = await Brand.create({ name })
            return res.json(brand)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }
    async getAll(req, res) {
        try {
            const brands = await Brand.findAll()
            return res.json(brands)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

}
module.exports = new BrandController()