const express= require('express')

const router= express.Router()
const productControler=require('./product.controler')
// const bodyParser = require('body-parser')




router.get('/product',productControler.getproduct)




router.get('/new',productControler.newsite)

router.post('/addproduct',productControler.addproduct)

router.patch('/productupdate',productControler.updateone)









module.exports= router

















