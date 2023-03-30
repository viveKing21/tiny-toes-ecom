import { LSK } from "./main.js";

let dropdown=document.getElementById("dropdown")
let heading=document.getElementById("heading")
heading.addEventListener("click",function(){
    dropdown.classList.add("drop-show")
    console.log("ma")
    console.log(dropdown)
})

