import { LSK } from "./main.js";
var name=document.getElementById("name")
var email=document.getElementById("email")
var phone=document.getElementById("mobile")

var conPswrd=document.getElementById("password")
var rowPswrd=document.getElementById("rowpswrd")
var continuBtn=document.getElementById("registerBtn")
  var user=JSON.parse(localStorage.getItem("users"))||[]
  var count=0
  if(user.length==0){
    count=0
  }
  else{
    count=user[user.length-1].id
  }
continuBtn.addEventListener("click",function(){
    if(name.value==""||email.value==""||conPswrd.value==""||phone.value==""){
        alert("Please Enter Valid Details")
    }
    else if(conPswrd.value!==rowPswrd.value){
        alert("Password not matched")
    }
    else{
        count++
        let obj={}
        obj.id=count
        obj.name=name.value
        obj.email=email.value
        obj.phone=phone.value
        obj.password=conPswrd.value
        user.push(obj)
        localStorage.setItem("users",JSON.stringify(user))
        alert("Registration Successful")
        setTimeout(function(){
            location="./signin.html"
        },500)
       
    }
})
        
        
