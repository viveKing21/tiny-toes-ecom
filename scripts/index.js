
import { LSK } from "./main.js";
var log=JSON.parse(localStorage.getItem("logged"))
var user=JSON.parse(localStorage.getItem("user"))
var logout=document.getElementById("logout")
var wlcm=document.getElementById("welcome")
   for(let i=0;i<user.length;i++){
    if(log==user[i].id){
        wlcm.innerHTML=user[i].name
    }
   }
   logout.addEventListener("click",function(){
       localStorage.setItem("logged",0)
       alert("Log Out Successfully")
       setTimeout(function(){
        location="./index.html"
       },300)

   })

