const mongoose = require('mongoose')

const db = 'mongodb://0.0.0.0/NEWDATA'


const productSchema= mongoose.Schema({
    name:{type:String,
        required:true
    },
    price:{
        type :String
    },
    category:{
       type: String,
        required:true

    }
    
})

const Product =mongoose.model('products',productSchema)


exports.getproduct= (()=>{
    return new Promise((resolve, reject) => {
        mongoose.connect(db).then(()=>{
            return  Product.find({},{_id:false},{sort:{name:-1}})
        }).then(item=>{
            mongoose.disconnect()
            resolve(item)
        }).catch(err=>{
            mongoose.disconnect()
            reject(err)
        })
    })
})

exports.addproduct=( async(data)=>{
try{
    await mongoose.connect(db)
      let newproduct = new Product({
    name: data.name,
    price:data.price,
    category:data.category
})
   await newproduct.save()
      mongoose.disconnect()
      return newproduct
}catch(err){
    mongoose.disconnect()
    throw new Error(err)
    
}})
exports.updateone=( async(updatename,data)=>{
    try{
        await mongoose.connect(db)
        await Product.updateOne({name:updatename},{$set:data})
        await Product.deleteOne

      
      
    }catch(err){
        mongoose.disconnect()
        throw new Error(err)
        
    }})


