
const authorizedmodel= require('./utherauthorized.model')
const usermodel=require("./usermodel")

const authorized =require('./authorization')
const auth= require("./auth")


exports.addpermision=((req,res,next)=>{
  
    // auth.verficationtoken((req.headers['tokenverfy'])).then(isauth=>{
        //if(isauthorized.name=="admin"){
            console.log("check permision")
            console.log(req.body.admin)

       
        if (req.body.admin=="aser"){
            authorizedmodel.addauthorizeduser(req.body.username,req.body.url,req.body.method).then((result)=>{
                res.status(200).json({success:true,
                msg:"user saved to be admin"})
                    }).catch(err=>{               
                                        res.status(401).json({success:false,
                            msg:"you are not authorized to make any user admin"})
                    })
        }else{

            return res.status(401).json({
                success:false,
                msg:"access denied"
            })
        }
    // }).catch(err=>{
    //     res.status(500).json({sucess :false,
    //     msg:"not authenticated "})
    // })

 




})

exports.isAdmin=(req,res,next)=>{
    console.log("chek for admin: " +req.body.admin)
    usermodel.isadmin(req.body.admin).then((data)=>{
        
        if(data.name=="admin"){
        res.status(200).json({
            sucess:true,
        

        })}else{
            res.status(200).json({
                sucess:false,
            msg:"not admin"
            
    
            })
            
        }
    }).catch(err=>{
        res.status(500).json({
            err:err.message
        })
    })
    
    
}
