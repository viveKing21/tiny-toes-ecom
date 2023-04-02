import { LSK } from "./main.js";

let filter=document.getElementById("filter")
let form=document.getElementById("form")
let category_filter=document.querySelector("#Filter_girl")
let category_filter2=document.querySelector("#Filter_boy")
let category_filter3=document.querySelector("#Filter_All")
let Filter_Brand=document.getElementById("Filter_Brand")
let Brand_select=document.getElementById("Brand_select")
let size_1=document.getElementById("size_1")
let size_2=document.getElementById("size_2")
let size_3=document.getElementById("size_3")
let size_4=document.getElementById("size_4")
let size_5=document.getElementById("size_5")
let paginationContainer = document.getElementById("pagination")
let Sort_filter=document.getElementById("Sort_filter")

let count = document.getElementById("item-count") // header

let uid = localStorage.getItem("logged")
let carts = JSON.parse(localStorage.getItem("carts")) || []

if(uid){
    carts = carts.filter(cart => cart.uid == uid)
}

let productData = []

let limit = 12
let page = 1

// filters & sorting
let filters = {
    category: "",
    brand: "",
    size: ""
}
let sort = ""

const Stocks = function(limit){
    this.stocks = null
    this.totalPage = 0

    // event
    this.onUpdate = null

    fetchProducts()
    .then(stocks => {
        this.stocks = stocks
        this.totalPage = Math.ceil(this.stocks.length / limit)
        if(typeof this.onUpdate === 'function') this.onUpdate()
    })

    this.updateStocks = (stocks) => {
        this.stocks = stocks
        this.totalPage = Math.ceil(this.stocks.length / limit)
        page = 1
        if(typeof this.onUpdate === 'function') this.onUpdate()
    }

    this.getStocks = (page = 1) => {
        if(page < 1 || page > this.totalPage) return []

        let data = []

        let currentPage = (page - 1) * limit

        for(let i = 0; i < limit && currentPage < this.stocks.length; i++){
            let stock = this.stocks[currentPage]
            data.push(stock)
            currentPage++
        }

        return data
    }

}

let products = document.querySelector('.products');

async function fetchProducts() {
    let data = await fetch(`https://64214f5434d6cd4ebd6fd51c.mockapi.io/products`);
    productData = await data.json()
    return productData;
}

const filteredData = (data) => {
    if(filters.category || filters.brand || filters.size){
        data = data.filter(d => {
            if(filters.category && d.category != filters.category) return false
            if(filters.brand && d.brand != filters.brand) return false
            if(filters.size && d.size != filters.size) return false
            return true
        })
    }
    else{
        data = [...data]
    }

    if(sort){
        data.sort((a, b) => {
            a = parseInt(a.price * (1 - parseInt(a.discount) / 100))
            b = parseInt(b.price * (1 - parseInt(b.discount) / 100))
            if(sort == "Low to High"){
                return a-b
            }
            return b-a
        })
    }
    return data
}

function generateUi(productData){
    products.innerHTML=renderingdata(productData)

    // add to cart
    Array.from(products.children).forEach(card => {
    let btn = card.querySelector(".add-to-cart")
    btn.onclick = () => {
        if(uid == null) location = "/signin.html"
        let isAdded = carts.some(cart => cart.pid == btn.dataset.productid)

        if(isAdded == false){
            // add to cart
            let id = carts.reduce((acc, cur) => Math.max(acc, cur.id), 0) + 1
            let data = productData.find(p => p.id == btn.dataset.productid)
            let cart = {
                pid: btn.dataset.productid,
                uid,
                qty:1,
                ...data,
                id
            }
            carts.push(cart)
            localStorage.setItem(LSK.CARTS, JSON.stringify(carts))
            btn.firstElementChild.textContent = "delete"
            alert("Product added to cart")
        }
        else{
            carts = carts.filter(cart => cart.pid != btn.dataset.productid)
            localStorage.setItem(LSK.CARTS, JSON.stringify(carts))
            btn.firstElementChild.textContent = "shopping_cart"
            alert("Product removed to cart")
        }
        count.textContent = carts.length
    }
    })
}

const createPagination = (totalPage, callback) => {
    paginationContainer.innerHTML = null
    for(let i = 0; i < totalPage; i++){
        let button = document.createElement("button")
        button.textContent = i+1
        button.onclick = () => callback(i+1)
        paginationContainer.append(button)
    }
}


let stocks = new Stocks(limit)

stocks.onUpdate = function(){
    generateUi(stocks.getStocks(page))
    createPagination(stocks.totalPage, (num) => {
        page = num
        generateUi(stocks.getStocks(num))
    })
}


category_filter.onclick = () => {
    filters.category = "Girls"
    stocks.updateStocks(filteredData(productData))
}
category_filter2.onclick = () => {
    filters.category = "Boys"
    stocks.updateStocks(filteredData(productData))
}
category_filter3.onclick = () => {
    filters.category = ""
    stocks.updateStocks(filteredData(productData))
}

size_1.onclick = size_2.onclick = size_3.onclick = size_4.onclick = size_5.onclick  = function(){
    filters.size = this.dataset.size
    stocks.updateStocks(filteredData(productData))
}

Brand_select.onchange = () => {
    filters.brand = Brand_select.value
    stocks.updateStocks(filteredData(productData))
}

Sort_filter.onchange = () => {
    sort = Sort_filter.value
    stocks.updateStocks(filteredData(productData))
}

// let filter=document.getElementById("filter")
// let Search=document.getElementById("Search")

function renderingdata(data){
    return `
      ${data.map((item)=>{
    return getcard(item.id, item.image1,item.image2 , item.title,item.brand, item.category,item.price ,item.color,item.discount,item.size)
  }).join("")}
  
    `
  }
  function getcard(id,image,image2,title, brand , category, price, color,discount,size){
    let sp = parseInt(price * (1 - parseInt(discount) / 100))
    return `
    <div class="product">
    
    <img src="${image}" alt="${category} "class="product-img" onclick='location="product_details.html?pid=${id}"'>
    <img src="${image2}" alt="${category} "class="product-hover" onclick='location="product_details.html?pid=${id}"'>    
          
        
        
           <div class="product-content">
           <h3 class="product-tittle">${title.length > 15 ? title.substring(0,15).concat('...'):title}</h3>
           
        
           <h6 class="product-brand">${brand}</h6>
           <h4 class="product-category">${category}</h4>
           <h5 class="product-color">Color: ${color}</h5>
           <h5 class="product-discount">${discount}</h5>
           <h6 class="product-size">Size: ${size}</h6>
           <div class="product-price-container">
               <h3 class="product-price">₹${sp}</h3>
               <a href="#" data-productId="${
                 id
               }" class="add-to-cart">
               <span class='material-symbols-outlined'>
               ${carts.some((cart) => cart.pid == id) ? "delete":"shopping_cart"}
               </span>
               </a>
           </div>
           </div>
          
       </div>
                      
      `
  }


  