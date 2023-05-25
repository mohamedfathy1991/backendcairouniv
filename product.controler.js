
const productModel= require('./productmode')
const bodyParser = require('body-parser')

exports.getproduct=((req,res,next)=>{

    productModel.getproduct().then(proudct=>{
        
    //    proudct.forEach(element => {
    //     console.log(element.name)
    //     res.status(200).json("element.name")
    //    });
    res.status(200).json(proudct)
 
    
        
    }).catch(err=>{
        res.status(500).json(err)
    })
    
})

exports.newsite=((req,res,nex)=>{
    res.json({
        message:'wellcome'
    })
})


exports.addproduct=(req,res,next)=>{
    productModel.addproduct({name:req.body.name,
    price:req.body.price,
category:req.body.category}).then(()=>{
    res.status(200).json('data save')
}).catch(err=>{
    res.status(500).json(err.message)
})
}


exports.updateone=((req,res,next)=>{
    
    productModel.updateone(req.body.update,{name:req.body.name,
    price:req.body.price,
category:req.body.category}).then(()=>{
    res.status(200).json('data update')
}).catch(err=>{
    res.status(500).json(err.message)
})
})