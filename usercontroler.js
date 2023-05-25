const usermodel= require('./usermodel')

const auth =require('./auth')





exports.creatnewuser=(req,res,next)=>{
   

    usermodel.createuser({name:req.body.name,email:req.body.email,
        password:req.body.password,tele:req.body.telephone}).then(userdata=>{
            
            res.status(200).json({
                msg:'succes save',
            token:userdata})
        }).catch(err=>{

            console.log(err)
            res.status(500).json({message:err})
        })
}


exports.login=(req,res,next)=>{
    console.log('header at controll is ')
   

    
    // usermodel.login(req.body.email,req.body.password)
    usermodel.login(req.headers.email,req.headers.password).then((userdata)=>{
        auth.createtoken({password:userdata.password,email:userdata.email,name:userdata.name}).then((tok)=>{
            
            res.status(200).json({succes:true,token:tok,userdata:userdata})
            

        })

    }).catch(err=>{
        res.status(500).json({message:err})
    })
}


exports.getusers=(req,res,next)=>{
    usermodel.getusers().then(users=>{
        res.status(200).json(
            users
        )

    }).catch(err=>{
        res.status(401).json({
            msg:err
        })
    })


}


exports.getmyuser=(req,res,next)=>{
    usermodel.getmyuser(req.body.email).then(users=>{
        res.status(200).json({
           msg: users
        })

    }).catch(err=>{
        res.status(401).json({
            msg:err
        })
    })


}