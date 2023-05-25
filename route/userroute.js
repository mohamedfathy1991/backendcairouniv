const express= require('express')

const router= express.Router()
const usercontroller=require('../usercontroler')
// const bodyParser = require('body-parser')




router.post('/adduser',usercontroller.creatnewuser)
router.post('/login',usercontroller.login)

router.get('/users',usercontroller.getusers)
router.get('/firstuser',usercontroller.getmyuser)


module.exports=router