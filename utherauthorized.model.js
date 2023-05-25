const mongoose = require('mongoose')

const auth =require('./auth')
//  new encription way#####
const hashpassword=require('./encriptpassword')
// #####
const db = 'mongodb://0.0.0.0/NEWDATA'
const bcrypt =require('bcrypt')


const userSchema= mongoose.Schema({
    name:{type:String,
        required:true
    },
    method:{
        type :String,
        required:true

    },
    url:{type :String,
        required:true
     }
  
    
})

const Userathorized =mongoose.model('userauthorized',userSchema)


exports.addauthorizeduser=(name,url,method)=>{
    return new Promise((resolve, reject) => {
    mongoose.connect(db).then(()=>{
        let newuser=new Userathorized({
            name :name,
            url:url,
            method:method
        
        })
        
        return newuser.save()
    }).then(newpermission=>{
        mongoose.disconnect()
        resolve(newpermission)
    }).catch(err=>{
        mongoose.disconnect()
        reject(err)
    })
    
    
    
    })

}


exports.isauthorized=(username,url,method)=>{
    console.log(username)
    console.log(url)
    console.log(method)



    return new Promise((resolve, reject) => {
        mongoose.connect(db).then(()=>{
           return Userathorized.find({
           $and:[{$or:[{username:username},{username:"normal"}]},
                {$or:[{url:url},{url:"*"}]},
                {$or:[{method:method},{method:"*"}]}
            ]})
        }).then(result=>{
            mongoose.disconnect()
            resolve(result)

        }).catch(err=>{
            mongoose.disconnect()
            reject(err)

        })
    })
}