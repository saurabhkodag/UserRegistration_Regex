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
//UC 3 
let email="abc.xyz@bl.co.in";
let eregx=/^([a-zA-Z0-9_]+)(.)([a-zA-Z0-9_]+)(@)([a-zA-Z0-9_]+)(.)([a-zA-Z0-9_]+)(.)([a-zA-Z0-9_]+)$/;
if(eregx.test(email)){
    console.log("successfull");
}
else{
    console.log("unsuccessfull");
}
//UC4
let phone="91 9922992299";
let pregx=/^([0-9]+)[ ]([0-9]{10})$/;
if(pregx.test(phone)){
    console.log("successfull");
}
else{
    console.
    log("unsuccessfull");
}
//Password
let pass="Sourabhkoda2@"
let ppregx = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z]).{8,}$/;
if(ppregx.test(pass)){
    console.log("successfull");
}
else{
    console.
    log("unsuccessfull");
}