import { LSK } from "./main.js";

let dropdown=document.getElementById("dropdown")
let heading=document.getElementById("heading")
heading.addEventListener("click",function(){
    dropdown.classList.add("drop-show")
    console.log("ma")
    console.log(dropdown)
})

let id=document.getElementById("PayNow")
let id1=document.getElementById("PayNow1")
let id2=document.getElementById("PayNow2")
let cardno=document.querySelector("cardno")
let nameoncard=document.querySelector("nameoncard")
let expiry=document.querySelector("expiry")
let cvv=document.querySelector("cvv")
let email=document.querySelector("email")
let mobileno=document.querySelector("mobileno")


id.addEventListener("click",function(e){
    e.preventDefault()
    console.log(cardno.value)
})

id1.addEventListener("click",function(e){
    e.preventDefault()
    if(email.value!="")
    {
        alert("Your order is now placed")
    }
    else{
        alert("Please fill all the details")
    }
})

id2.addEventListener("click",function(e){
    e.preventDefault()
    if(mobileno.value!="")
    {
        alert("Your order is now placed")
    }
    else{
        alert("Please fill all the details")
    }
})