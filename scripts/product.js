import { LSK } from "./main.js";
document.addEventListener("DOMContentLoaded",function(){
    async function fecthProducts(url){
        let data= await fetch(url);
        let response= await data.json();
        console.log(response)
    }
    fecthProducts("https://64214f5434d6cd4ebd6fd51c.mockapi.io/products")
})