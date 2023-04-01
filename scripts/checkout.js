import { LSK } from "./main.js";

// local storage content



let obj1=JSON.parse(localStorage.getItem("currentorder"))
  if(obj1.billing_address
    ==undefined)
  {
      obj1={}
  }
console.log(obj1)


let arr4=JSON.parse(localStorage.getItem("Orders"))
  if(arr4==null)
  {
    arr4=[]
  }







let name=document.querySelector("#PayNow")
let name2=document.querySelector("#PayNow1")
let name3=document.querySelector("#PayNow2")
let cardno=document.querySelector(".cardno")
let nameoncard=document.querySelector(".nameoncard")
let expiry=document.querySelector(".expiry")
let cvv=document.querySelector(".cvv")
let email=document.querySelector(".email")
let mobileno=document.querySelector(".mobileno")



name.addEventListener("submit",function(e){
    e.preventDefault()
    console.log("mazhar")
    if(cardno.value!=""&&nameoncard.value!=""&&expiry.value!=""&&cvv.value!="")
    {
        arr4.push(obj1)
        localStorage.setItem("Orders",JSON.stringify(arr4))
        alert("Your order is now placed")
        
    }
    else{
        alert("Please fill all the details")
    }

})

name2.addEventListener("click",function(e){
    e.preventDefault()
    console.log("mazhar")
    if(email.value!="")
    {
        arr4.push(obj1)
        localStorage.setItem("Orders",JSON.stringify(arr4))
        alert("Your order is now placed")
    }
    else{
        alert("Please fill all the details")
    }
})

name3.addEventListener("click",function(e){
    e.preventDefault()
    if(mobileno.value!="")
    {
        arr4.push(obj1)
        localStorage.setItem("Orders",JSON.stringify(arr4))

        alert("Your order is now placed")
    }
    else{
        alert("Please fill all the details")
    }
})