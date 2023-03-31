import { LSK } from "./main.js";


let filter=document.getElementById("filter")
let form=document.getElementById("form")
let category_filter=document.querySelector("#Filter_girl")
let category_filter2=document.querySelector("#Filter_boy")
let Filter_Brand=document.getElementById("Filter_Brand")
let Brand_select=document.getElementById("Brand_select")
let size_2=document.getElementById("size_2")
let size_3=document.getElementById("size_3")
let size_4=document.getElementById("size_4")
let size_5=document.getElementById("size_5")
let paginationContainer = document.getElementById("pagination")






let totalCount = localStorage.getItem("totalCount") || 42
let query = new URLSearchParams(`page=1&limit=12`)

function paginationGenerate(){
    paginationContainer.innerHTML = null
    let pages = Math.ceil(totalCount / query.get("limit"))
    
    for(let i = 1; i <= pages; i++){
        let btn = document.createElement("button")
        btn.textContent = i;
        btn.onclick=() => {
            query.set("page", i)
            fetchProducts()
        }
        paginationContainer.append(btn)
    }
}


let products = document.querySelector('.products');
async function fetchProducts() {
    
    try {
        let data = await fetch(`https://64214f5434d6cd4ebd6fd51c.mockapi.io/products?${query.toString()}`);
        let response = await data.json();


document.addEventListener("DOMContentLoaded",function(){
    async function fecthProducts(url){
        let data= await fetch(url);
        let response= await data.json();

        console.log(response)

        paginationGenerate()
        products.innerHTML=renderingdata(response)

        // form.addEventListener("submit",(e)=>{
        //     e.preventDefault()
        //     let searchpara = form.Search.value
        // console.log(searchpara)
        //     let filtered1 = response.filter((element)=>{
        //         if(element.title.toUpperCase().includes(searchpara.toUpperCase())===true){
        //             return true
        //         }else{
        //             return false
        //         }
        //     })
        //     products.innerHTML = renderingdata(filtered1)
        //   })

          category_filter.addEventListener("click",()=>{
            let filtered=response.filter((element)=>{
                if(element.category=="Girls"){
                    return true
                }else{
                    return false
                }
            })
            products.innerHTML = renderingdata(filtered)
          })
          //boyes category filter
          category_filter2.addEventListener("click",()=>{
            let filtered=response.filter((element)=>{
                if(element.category=="Boys"){
                    return true
                }else{
                    return false
                }
            })
            products.innerHTML = renderingdata(filtered)
          })

          //brand filter

          console.log(Brand_select.value)
        //   Brand_select.forEach((element)=>{
        //     console.log(element)
        //   })

        Brand_select.addEventListener("change",()=>{
            if(Brand_select.value==""){
                products.innerHTML = renderingdata(response)
            }else{
                let filtered=response.filter((element)=>{
                    if(element.brand==Brand_select.value){
                        return true
                    }else{
                        return false
                    }
                })
                products.innerHTML = renderingdata(filtered)
            }
            
          })
          size_2.addEventListener("click",()=>{
            let filtered=response.filter((element)=>{
                if(element.size=="2-3 Y"){
                    return true
                }else{
                    return false
                }
            })
            products.innerHTML = renderingdata(filtered)
          })
          size_3.addEventListener("click",()=>{
            let filtered=response.filter((element)=>{
                if(element.size=="3-4 Y"){
                    return true
                }else{
                    return false
                }
            })
            products.innerHTML = renderingdata(filtered)
          })
          size_4.addEventListener("click",()=>{
            let filtered=response.filter((element)=>{
                if(element.size=="4-5 Y"){
                    return true
                }else{
                    return false
                }
            })
            products.innerHTML = renderingdata(filtered)
          })
          size_5.addEventListener("click",()=>{
            let filtered=response.filter((element)=>{
                if(element.size=="5-6 Y"){
                    return true
                }else{
                    return false
                }
            })
            products.innerHTML = renderingdata(filtered)
          })
       
    } catch (err) {
        console.log(err);
    }

}
fetchProducts();



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
    return `
    <div class="product" onclick='location="product_details.html?pid=${id}"'>
    
    <img src="${image}" alt="${category} "class="product-img">
    <img src="${image2}" alt="${category} "class="product-hover">    
          
        
        
           <div class="product-content">
           <h3 class="product-tittle">${title.length > 15 ? title.substring(0,15).concat('...'):title}</h3>
           
        
           <h6 class="product-brand">${brand}</h6>
           <h4 class="product-category">${category}</h4>
           <h5 class="product-color">Color: ${color}</h5>
           <h5 class="product-discount">${discount}</h5>
           <h6 class="product-size">Size: ${size}</h6>
           <div class="product-price-container">
               <h3 class="product-price">₹${price}</h3>
               <a href="#!" data-productId="${
                 id
               }" class="add-to-cart"><ion-icon name="cart-outline"></ion-icon></a>
           </div>
           </div>
          
       </div>
                      
      `
  }

  

    fecthProducts("https://64214f5434d6cd4ebd6fd51c.mockapi.io/products")
})



