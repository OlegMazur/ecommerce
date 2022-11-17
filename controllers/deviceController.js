const uuid = require('uuid')
const path = require('path')
const ApiError = require('../errors/apiError')
const { Device, DeviceInfo, TypeBrand } = require('../models/models')
const { uploadFile } = require('../s3')
class DeviceController {
    async create(req, res, next) {
        try {
            let { name, price, brandId, typeId, info, subCategoryId,
                searchQueries, currency, unit, availability,
                label, weight, height, length, location, color, power, capacity,
                colorTemp, favorite, model, subModel, madeIn, floatPrice, img1, img2, img3, img4 } = req.body

            if (req?.files?.img1) {
                const { img1, img2, img3, img4 } = req.files

                const fileLocation1 = await uploadFile(img1)
                const fileLocation2 = await uploadFile(img2)
                const fileLocation3 = await uploadFile(img3)
                const fileLocation4 = await uploadFile(img4)
                const device = await Device.create({
                    name, price, brandId, typeId, img1: fileLocation1,
                    img2: fileLocation2, img3: fileLocation3, img4: fileLocation4, subCategoryId,
                    searchQueries, currency, unit, availability,
                    label, weight, height, length, location, color, power, capacity,
                    colorTemp, favorite, model, subModel, madeIn, floatPrice
                })
                if (info) {
                    info = JSON.parse(info)
                    info.forEach(i => {
                        DeviceInfo.create({
                            title: i.title,
                            description: i.description,
                            deviceId: device.id,
                            images: i.images
                        })
                    });
                }
                return res.json(device)
            }

            //  const { img1,img2,img3,img4 } = req.files
            // const { img2 } = req.files
            // const { img3 } = req.files
            // const { img4 } = req.files
            // let fileName1 = uuid.v4() + ".jpg"
            // let fileName2 = uuid.v4() + ".jpg"
            // let fileName3 = uuid.v4() + ".jpg"
            // let fileName4 = uuid.v4() + ".jpg"
            // img1.mv(path.resolve(__dirname, '..', 'static', fileName1))
            // img2.mv(path.resolve(__dirname, '..', 'static', fileName2))
            // img3.mv(path.resolve(__dirname, '..', 'static', fileName3))
            // img4.mv(path.resolve(__dirname, '..', 'static', fileName4))
            const device = await Device.create({
                name, price, brandId, typeId, img1,
                img2, img3, img4, subCategoryId,
                searchQueries, currency, unit, availability,
                label, weight, height, length, location, color, power, capacity,
                colorTemp, favorite, model, subModel, madeIn, floatPrice
            })

            if (info) {
                info = JSON.parse(info)
                info.forEach(i => {
                    DeviceInfo.create({
                        title: i.title,
                        description: i.description,
                        deviceId: device.id,
                        images: i.images
                    })
                });
            }
            //TypeBrand.create({typeId,brandId});
            return res.json(device)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }
    async getAll(req, res, next) {
        try {
            let { brandId, typeId, limit, page, title, subCategoryId } = req.query
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
            if (title === 'title') {
                devices = await Device.findAll({ attributes: ['brandId', 'typeId', 'name', 'id', 'price', 'subCategoryId', 'availability', 'img1', 'brandName', 'typeName'] })
            }
            if (subCategoryId) {
                devices = await Device.findAndCountAll({ where: { subCategoryId }, limit, offset })
            }

            return res.json(devices)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getOne(req, res, next) {
        try {
            const { id } = req.params
            const device = await Device.findOne({
                where: { id },
                include: [{ model: DeviceInfo, as: 'info' }]
            })

            return res.json(device)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async updateOne(req, res, next) {

        try {
            let img
            let device;
            let { id, name, price, imgArr, subCategoryId, availability, currency,
                unit,
                label,
                color,
                power,
                capacity,
                colorTemp,
                favotite,
                model,
                madeIn,
                optPrice,
                typeName,
                brandName } = req.body;
                console.log("id",id)
                // if (req.files?.uploadImg){
                //     console.log("req.files",req.files.uploadImg)
                // } 
            if (req.files?.uploadImg) {
                console.log("req.files.uploadImg", req.files.uploadImg);
                img = req.files.uploadImg;

                const s3data = await uploadFile(img);
                let deviceData = await Device.findOne({
                    where: { id },
                    include: [{ model: DeviceInfo, as: 'info' }]
                });
                
                let newImgArr;

                if (deviceData.dataValues.imgArr) {
                    newImgArr = deviceData.dataValues.imgArr.split(',');
                    newImgArr.unshift(s3data);
                }
                let joinImgArr = newImgArr.join(',');
                device = await Device.upsert({
                    ...deviceData.dataValues,
                    img1: s3data.toString(),
                    imgArr: joinImgArr,
                   
                })
                // device = await Device.upsert({
                //     id,
                //     name,
                //     price,
                //     subCategoryId,
                //     availability,
                //     img1: s3data.toString(),
                //     imgArr: joinImgArr,
                //     currency,
                //     unit,
                //     label,
                //     color,
                //     power,
                //     capacity,
                //     colorTemp,
                //     favotite,
                //     model,
                //     madeIn,
                //     optPrice,
                //     typeName,
                //     brandName
                // })
                console.log("device", device);
                return res.json(device)
            };

            if (req.body.img1) {

                device = await Device.upsert({
                    id,
                    name,
                    price,
                    subCategoryId,
                    img1: req.body.img1,
                    availability,
                    imgArr,
                    currency,
                    unit,
                    label,
                    color,
                    power,
                    capacity,
                    colorTemp,
                    favotite,
                    model,
                    madeIn,
                    optPrice,
                    typeName,
                    brandName
                })

                return res.json(device)
            }


        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

}
module.exports = new DeviceController()