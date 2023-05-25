



  const bcrypt= require('bcrypt')
  class encriptpass{

    static encriptpassword(password){
        return new Promise((resolve, reject) => {
    
            bcrypt.hash(password,10).then((hasspass)=>{
               resolve(hasspass)
       
            }).catch(err=>{
               reject(err)
            })
       
       
         })

    }

    static decodingpassword (oldpass,newpass){
      return new Promise((resolve, reject) => {
         
      bcrypt.compare(oldpass,newpass).then((verfy)=>{
      resolve(verfy)
     }).catch(err=>{
      reject(err.message)
     })


      })
    }
 

  }

  exports.encriptpass=encriptpass