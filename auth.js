// npm install --save jsomwebtoken
const jwt =require('jsonwebtoken')

const secret ="my name is omar aaa"


class auth{
    static  createtoken (tokenpayload){
        return new Promise((resolve, reject) => {
            try{
                let token= jwt.sign(tokenpayload ,secret,{
                    expiresIn:"1h"})
                    resolve(token)
            }
            catch(err){
                reject(err)
            }        
        })
         
    }
    static verficationtoken(token){
        return new Promise((resolve, reject) => {
           try{ let verfytoken= jwt.verify(token,secret)
            resolve(verfytoken)
           }catch(err){

            reject("cont verfy")
           }
                      
        })
    }
}
//انا كده هيئت التكوم هروح بقي عند انشاء مستخدم وانا بنشا مستخدم جديد هنشا معاه توكن عشان اقدر استخدمها 

// tokenpayload دس التادا اللي علي اساسها هبعت عليها التوكن 
//  بمعني انا لما انشا مستخدم جديد هبعت الايميل واسم المستخدم عشان اعمل عليه التوكن 
module.exports=auth