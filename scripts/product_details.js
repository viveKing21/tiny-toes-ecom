import { LSK, API, currency } from "./main.js";

let query = new URLSearchParams(location.search)

let uid = localStorage.getItem("logged")

if(query.has("pid") == false) {
    alert("Invalid URL")
    location = "/"
}

let count = document.getElementById("item-count") // header

const loader = document.querySelector(".loading_screen")
const error = document.querySelector(".error")
const sliderItems = document.querySelector(".slider-wrapper")

let pid = query.get("pid")

let productData = null
let carts = JSON.parse(localStorage.getItem(LSK.CARTS)) || []
let similarProducts = []

const getProduct = async () => {
    let res = await fetch(`${API}/${pid}`)
    if(res.ok) return await res.json()
    throw res.statusText
}

const getAllProducts = async () => {
    let res = await fetch(API)
    if(res.ok) return await res.json()
    throw res.statusText
}

getProduct()
.then((data) => {
    loader.removeAttribute("show")
    error.removeAttribute("show")
    productData = data

    // similar products
    let reg = new RegExp(productData.color.split(" & "), "ig")
    return getAllProducts()
    .then(products => {
        let othersProduct = products.filter((product) => {
            if(reg.test(product.color) && product.id != pid){
                similarProducts.push(product)
                return false
            }
            return true
        })
        similarProducts.push(...othersProduct.slice(0, Math.max(0, 10 - similarProducts.length)))
    })
})
.then(updateUi)
.catch((e) => loader.removeAttribute("show"))

function updateUi(){
    let container = document.querySelector("main")

    // setting image
    let imgElm = container.querySelector(".content .image-view .images")
    let image = container.querySelector(".content .image-view .image img")
    let previewImg = container.querySelector(".content .image-view .preview-image")

    let images = []
    while(productData['image'+(images.length+1)]) images.push(productData['image'+(images.length+1)])
    
    previewImg.style.backgroundImage = `url(${image.src = images[0]})`

    imgElm.innerHTML = null
    imgElm.append(...images.map((url, i) => {
        let img = new Image
        img.src = url
        img.setAttribute("onclick", "changeImage(this)")
        if(i == 0) img.className = "selected"
        return img
    }))

    // details
    let productDetails = container.querySelector(".product-details")
    let title = productDetails.querySelector(".title")
    let productId = productDetails.querySelector(".p-id")
    let selling = productDetails.querySelector(".price .selling")
    let mrp = productDetails.querySelector(".price .mrp")
    let discount = productDetails.querySelector(".price .discount")
    let addCart = container.querySelectorAll(".add-cart")

    title.textContent = productData.title
    productId.textContent = "Product ID: "+pid

    mrp.textContent = currency(productData.price)
    selling.textContent = currency(parseInt(productData.price * (1 - parseInt(productData.discount) / 100)))
    discount.textContent = `(${productData.discount})`

    // cart
    let curProduct = carts.find((cart) => cart.pid == pid)

    const removeToCart = () => {
        carts = carts.filter((cart) => cart.pid != pid)
        if(carts.length)
            localStorage.setItem(LSK.CARTS, JSON.stringify(carts))
        else localStorage.removeItem(LSK.CARTS)

        addCart.forEach(cartBtn => {
            cartBtn.onclick = addToCart
            cartBtn.textContent ="Add to Cart"
        })
        alert("Product removed to cart")
        count.textContent = carts.length
    }
    const addToCart = () => {
        if(uid == null) location = "/signin.html"

        let id = carts.reduce((acc, cur) => Math.max(acc, cur.id), 0) + 1
        let cart = {
            pid,
            uid,
            qty:1,
            ...productData,
            id
        }
        carts.push(cart)
        localStorage.setItem(LSK.CARTS, JSON.stringify(carts))

        addCart.forEach(cartBtn => {
            cartBtn.onclick = removeToCart
            cartBtn.textContent ="Remove to Cart"
        })
        alert("Product added to cart")
        count.textContent = carts.length
    }

    addCart.forEach(cartBtn => {
        cartBtn.onclick = curProduct ? removeToCart:addToCart
        cartBtn.textContent = (curProduct ? "Remove":"Add") + " to Cart"
    })

    // similar product
    sliderItems.innerHTML = null
    if(similarProducts.length == 0){
        document.querySelector(".products").style.display = "none"
    }
    else {
        sliderItems.append(...similarProducts.map(productCard))
    }

}

function productCard(data){
    let sliderItem = document.createElement('div')
    sliderItem.className = "slider-item"

    let mrp = currency(productData.price)
    let selling = currency(parseInt(productData.price * (1 - parseInt(productData.discount) / 100)))

    sliderItem.innerHTML = `
        <img src="${data.image1}" />
        <div class='title'>${data.title}</div>
        <div class='prices'><b>${selling}</b><strike>${mrp}</strike><span>(${productData.discount})</span></div>
    `
    sliderItem.onclick = () => location = "?pid="+data.id

    return sliderItem
}
