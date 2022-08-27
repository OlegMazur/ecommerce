const Router = require('express')
const router = new Router()
const brandRouter=require('./brandRouter')
const typeRouter=require('./typeRouter')
const userRouter=require('./userRouter')
const deviceRouter=require('./deviceRouter')
const categoryRouter=require('./categoryRouter')
const subCategoryRouter=require('./subCategoryRouter')

router.use('/user',userRouter)
router.use('/type',typeRouter)
router.use('/brand',brandRouter)
router.use('/device',deviceRouter)
router.use('/category',categoryRouter)
router.use('/sub-category',subCategoryRouter)


module.exports=router