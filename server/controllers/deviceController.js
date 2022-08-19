const uuid = require('uuid')
const path = require('path')
const ApiError = require('../errors/apiError')
const { Device, DeviceInfo,TypeBrand } = require('../models/models')
class DeviceController {
    async create(req, res, next) {
        try {
            let { name, price, brandId, typeId, info,subCategoryId,
                searchQueries,currency,unit,availability,
                label,weight, height, length, location,  } = req.body
            const { img1,img2,img3,img4 } = req.files
            // const { img2 } = req.files
            // const { img3 } = req.files
            // const { img4 } = req.files
            let fileName1 = uuid.v4() + ".jpg"
            let fileName2 = uuid.v4() + ".jpg"
            let fileName3 = uuid.v4() + ".jpg"
            let fileName4 = uuid.v4() + ".jpg"
            img1.mv(path.resolve(__dirname, '..', 'static', fileName1))
            img2.mv(path.resolve(__dirname, '..', 'static', fileName2))
            img3.mv(path.resolve(__dirname, '..', 'static', fileName3))
            img4.mv(path.resolve(__dirname, '..', 'static', fileName4))
            const device = await Device.create({ 
                name, price, brandId, typeId, img1: fileName1,
                img2: fileName2,img3: fileName3, img4: fileName4, subCategoryId,
                searchQueries,currency,unit,availability,
                label,weight, height, length, location            
            })
                   
            if (info) {
                info = JSON.parse(info)
                info.forEach(i => {
                    DeviceInfo.create({
                        title: i.title,
                        description: i.description,
                        deviceId: device.id
                    })
                });
            }
            //TypeBrand.create({typeId,brandId});
            return res.json(device)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }
    async getAll(req, res) {
        let { brandId, typeId, limit, page,title } = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let devices;
        if (!brandId && !typeId) {
            devices = await Device.findAndCountAll({ limit, offset })
        }
        if (brandId && !typeId) {
            devices = await Device.findAndCountAll({ where: { brandId }, limit, offset })
        }
        if (!brandId && typeId) {
            devices = await Device.findAndCountAll({ where: { typeId }, limit, offset })
        }
        if (brandId && typeId) {
            devices = await Device.findAndCountAll({ where: { typeId, brandId }, limit, offset })
        }
        if (title==='title') {
            devices = await Device.findAndCountAll( {attributes:['brandId', 'typeId', 'name', 'id', 'price','subCategoryId','availability']})
        }

        return res.json(devices)
    }
    
    async getOne(req, res) {
        const { id } = req.params
        const device = await Device.findOne({
            where: { id },
            include: [{ model: DeviceInfo, as: 'info' }]
        })
        return res.json(device)
    }
    
}
module.exports = new DeviceController()