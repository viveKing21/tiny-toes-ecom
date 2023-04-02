export const LSK = {
    USERS: "users",
    ORDERS: "orders",
    CARTS: "carts",
    AUTH: "auth"
}

export const API = "https://64214f5434d6cd4ebd6fd51c.mockapi.io/products"

export const currency = (digit) => {
    return Number(digit).toLocaleString('en-IN', {
        style: 'currency',
        currency: 'INR',
    });
}


// header code

try{
    let uid = localStorage.getItem("logged")

    var log=JSON.parse(localStorage.getItem("logged"))
var user=JSON.parse(localStorage.getItem("users"))
var logout=document.getElementById("logout")
var logview=document.getElementById("loginview")
var registerview=document.getElementById("registerview")
var wlcm=document.getElementById("welcome")

    if(log>0){
     logview.style.display="none";
     registerview.style.display="none";
    }
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

   
    let searchBox = document.querySelector(".search-box")
    let input = searchBox.firstElementChild
    let searchResult = searchBox.lastElementChild

    input.oninput = () => {
        findItem(input.value)
    }

    let timer = null
    const findItem = (value) => {
        let t = timer == null ? 1:1000
        clearTimeout(timer)
        timer = setTimeout(() => {
            searchResult.innerHTML = ""
            if(value)
            fetch(API + `?brand=${value}&title=${value}&category=${value}`)
            .then((res) => res.json())
            .then((res) => {
                res.forEach(p => {
                    searchResult.innerHTML += `<a href='/product_details.html?pid=${p.id}' class="search-item">${p.title}</a>`
                })
            })
        }, t)
    }

    if(uid){
        let count = document.getElementById("item-count")
        let carts = JSON.parse(localStorage.getItem("carts"))
        count.textContent = carts.filter(cart => cart.uid == uid).length
    }
}
catch(e){
    
}
