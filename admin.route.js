const express= require('express')

const adminControler= require("./admin.controler")

const router= express.Router()


router.post('/addpermision',adminControler.addpermision)


router.get('/isadmin',adminControler.isAdmin)





module.exports=router