import { LSK } from "./main.js";

var email=document.getElementById("email")
var conPswrd=document.getElementById("password")
var continuBtn=document.getElementById("registerBtn")
  var user=JSON.parse(localStorage.getItem("user"))||[]
continuBtn.addEventListener("click",function(){
   var  flag=true
    var id=0
    for(let i=0;i<user.length;i++){
        if(user[i].email==email.value && user[i].password==conPswrd.value ){
           id=user[i].id
            flag=false
            break;
        }
    }
    if(flag==false){
        alert("LogIn Successful")
        localStorage.setItem("logged",id)
        setTimeout(function(){
            location="./index.html"
        },500)
        
    }
    else{
        alert("Register First")
    }
   
})