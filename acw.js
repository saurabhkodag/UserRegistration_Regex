let valid=function(str,r){
    return new Promise((resolve,reject)=>{
        while(result==true){
          if(r.test(str)){
              result =true;
              return resolve(true);
          }
          else{
            result =false;
            return reject("error in "+str);
          }  
        }
    })
};
let result=true;
valid("Souras",/^([A-Z])([a-zA-Z]{3,})$/).then(()=>valid("Koda",/^([A-Z])([a-zA-Z]{3,})$/).then(()=>valid("abc.xyz@bl.com.in",/^([a-zA-Z0-9_]+)(.)([a-zA-Z0-9_]+)(@)([a-zA-Z0-9_]+)(.)([a-zA-Z0-9_]+)(.)([a-zA-Z0-9_]+)$/)).then(()=>valid("91 9922992299",/^([0-9]+)[ ]([0-9]{10})$/)).then(val => console.log(val))).catch(val=>console.log(val));