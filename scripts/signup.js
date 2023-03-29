import { LSK } from "./main.js";
var name=document.getElementById("name")
var email=document.getElementById("email")
var phone=document.getElementById("mobile")
var address=document.getElementById("address")
var conPswrd=document.getElementById("password")
var rowPswrd=document.getElementById("rowpswrd")
var continuBtn=document.getElementById("registerBtn")

continuBtn.addEventListener("click",function(){
    if(name.value==""||email.value==""||address.value==""||conPswrd.value==""||phone.value==""){
        alert("Please Enter Valid Details")
    }
    else if(conPswrd.value!==rowPswrd.value){
        alert("Password not matched")
    }
    else{
        LSK.name=name.value
        LSK.email=email.value
        LSK.phone=phone.value
        LSK.password=conPswrd.value
        LSK.address=address.value
        
        
    }
})