
const auth =require('./auth')

const userauthorizedModle=require('./utherauthorized.model')

class Authorization{
    // static addpermission(username,url,method){
        // userauthorizedModle.addauthorized(username,url,method,res).then(newpermission=>{
        //     res.status(200).json({success:true,msg:"permisson added"})
        // })
        // .catch(err=>{
        //     res.status(500).json({
        //         success:false,msg:'permission not add'
        //     })
        // })
    // }

static authrized(username,url,method,req,res,next){
    console.log(username)
    console.log(url)
    console.log(method)

    userauthorizedModle.isauthorized(username,url,method).then(result=>{
        console.log(result)
        console.log("authorized ......")
       

        if(result.length==0){
            
          return  res.status(401).json({
                success:false,
                msg:"you are not authorized"
            })
            
        }else{
            next()
        }
    }).catch(err=>{
        res.status(500).json({msg:"not authorized"})


        
    })

    

    

}

}




module.exports=Authorization