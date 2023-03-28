


import { LSK } from "./main.js";

let mainpage=document.querySelector("main")
let maindiv=document.createElement("div")
maindiv.classList.add("card-block")

let productdiv=document.createElement("div")
productdiv.classList.add("product-card")
let imagediv=document.createElement("div")
let contentdiv=document.createElement("div")
let pricediv=document.createElement("div")

let img=document.createElement("img")
img.src="https://cdn.fcglcdn.com/brainbees/images/products/438x531/13014437a.jpg"
imagediv.append(img)

let h1=document.createElement("h1")
h1.innerText="Babyhug Cotton Half Sleeves T-Shirt Tom & Jerry Print"

contentdiv.append(h1)

let p=document.createElement("p")
p.innerText=550;

pricediv.append(p)

productdiv.append(imagediv,contentdiv,pricediv)
maindiv.append(productdiv)
mainpage.append(maindiv)

console.log("mazhar")


