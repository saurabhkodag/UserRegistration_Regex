//UC1 first name
let name="souras"
let nregx=/^([A-Z])([a-zA-Z]{3,})$/;
if(nregx.test(name)){
    console.log("successfull");
}
else{
    console.log("unsuccessfull");
}
//UC2 last name
let last="Koda"
let lregx=/^([A-Z])([a-zA-Z]{3,})$/;
if(lregx.test(last)){
    console.log("successfull");
}
else{
    console.log("unsuccessfull");
}