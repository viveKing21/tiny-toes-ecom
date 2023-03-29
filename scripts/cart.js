


import { LSK } from "./main.js";

// imprtant section of div

let mainpage=document.querySelector("main")
let superdiv=document.createElement("div")
superdiv.classList.add("super-div")

let wholecontainer=document.createElement("div")
wholecontainer.classList.add("whole-container")
superdiv.append(wholecontainer)
mainpage.append(superdiv)

// starting of payment section
// if(arr!=null)
// {
  let mainel=document.createElement("div")
  mainel.classList.add("main-el")
  function totalcardvalue()
  {
    
    let maz=document.createElement("h1")
    maz.innerText="Payment Information"
    let paymentsection=document.createElement("div")
    paymentsection.classList.add("payment-section")
    let paradiv=document.createElement("div")
    let p1=document.createElement("p")
    let p2=document.createElement("p")
    let p3=document.createElement("p")
    let p4=document.createElement("p")
    p1.innerText="Value of Product(s)"                         
    p2.innerText="Discount(-)"                            
    p3.innerText="Estimated GST (+)"                     
    p4.innerText="Shipping (+)0"                          
     let paradiv2=document.createElement("div")
     let p5=document.createElement("p")
    let p6=document.createElement("p")
    let p7=document.createElement("p")
    let p8=document.createElement("p")
    p5.innerText=` Rs 1612.00`
    p6.innerText=` Rs  683.69`
    p7.innerText=` Rs  30    `
    p8.innerText=` Free`


paradiv2.append(p5,p6,p7,p8)

    paradiv.append(p1,p2,p3,p4)
    paymentsection.append(paradiv,paradiv2)
    let finalpaymentdiv=document.createElement("div")
    finalpaymentdiv.classList.add("final-payment")
    let h2=document.createElement("h4")
    let h3=document.createElement("h4")
    h2.innerText="Final Payment"
    h3.innerText=`Rs 958`
    finalpaymentdiv.append(h2,h3)

    mainel.append(maz,paymentsection,finalpaymentdiv)
    superdiv.append(mainel)
  }
  totalcardvalue()



// }
// ending of payment section div


// ending of that section

// if(arr!=null)
// {
  let bankoffer=document.createElement("div")
  bankoffer.classList.add("bank-offer")
  let offertitle=document.createElement("div")
  offertitle.classList.add("offer-title")
let logodiv=document.createElement("div")
let img=document.createElement("img")
img.src="//cdn.fcglcdn.com/brainbees/checkout/pers.jpg"
logodiv.append(img)

let availableofferdiv=document.createElement("div")
availableofferdiv.innerHTML="Available offers:"
offertitle.append(logodiv,availableofferdiv)


let offerdetaildiv=document.createElement("div")
offerdetaildiv.classList.add("offer-detail")

let contentpara=document.createElement("p")
contentpara.classList.add("content-para")

let span=document.createElement("span")
span.innerText="."

contentpara.innerText="5% cashback upto Rs. 300 on Paytm Postpaid (Minimum Order Value: Rs. 1000)"
contentpara.append(span)
offerdetaildiv.append(contentpara)

let offerdetaildiv1=document.createElement("div")
offerdetaildiv1.classList.add("offer-detail")

let contentpara1=document.createElement("p")
contentpara1.classList.add("content-para")



contentpara1.innerText="5% Cashback upto Rs. 300 on Simpl (Minimum Order Value: Rs 1300)                                                                                        "

offerdetaildiv1.append(contentpara1)

bankoffer.append(offertitle,offerdetaildiv,offerdetaildiv1)
wholecontainer.append(bankoffer)



                                                                                     
// }




// from here i will add dynamic data into the div

function cardappend()
{

    let maindiv=document.createElement("div")
    maindiv.classList.add("card-block")
let productdiv=document.createElement("div")
productdiv.classList.add("product-card")
let imagediv=document.createElement("div")
let contentdiv=document.createElement("div")
contentdiv.classList.add("content-div")
let pricediv=document.createElement("div")
pricediv.classList.add("price-div")

let img=document.createElement("img")
img.src="https://cdn.fcglcdn.com/brainbees/images/products/thumb/cc18283a.webp"
imagediv.append(img)

let h1=document.createElement("h1")
h1.classList.add("description")
h1.innerText="Timios Non-Fried No-Maida Millet Masala flavoured Noodles - 190 gm (Pack of 2)"

contentdiv.append(h1)


let mrpandoff=document.createElement("div")
mrpandoff.classList.add("mrp-and-off")
let off=document.createElement("div")
off.classList.add("off")
let span2=document.createElement("span")
span2.innerText="MRP"
let span3=document.createElement("span")
let originalprice=document.createElement("span")
originalprice.classList.add("rupee-sign")
originalprice.setAttribute("data-icon","")
let itemprice=document.createElement("span")
itemprice.classList.add("item-price")

itemprice.innerText=550
span3.append(originalprice,itemprice)

let span4=document.createElement("span")
span4.classList.add("off-tag")
span4.innerText=`32% OFF`
off.append(span2,span3,span4)
mrpandoff.append(off)
let h2=document.createElement("h2")
h2.innerText=`Rs ${itemprice.innerText*85/100}`

let mrpprice=document.createElement("div")
mrpprice.classList.add("mrp-price")
mrpprice.innerText="MRP Includes all taxes"

mrpandoff.append(mrpprice)
pricediv.append(h2,mrpandoff)

productdiv.append(imagediv,contentdiv,pricediv)
maindiv.append(productdiv)


let deletediv=document.createElement("div")
deletediv.classList.add("delete-div")

let deleteel=document.createElement("div")
deleteel.innerText="REMOVE"

let movetoshortlist=document.createElement("div")
movetoshortlist.innerText="MOVE TO SHORTLIST"
deletediv.append(deleteel,movetoshortlist)

wholecontainer.append(maindiv,deletediv)
console.log(wholecontainer)


}
cardappend()

let bottompart=document.createElement("div")
bottompart.classList.add("bottom-part")
let deleiveryaddress=document.createElement("div")
deleiveryaddress.classList.add("delivery-address")
let h1=document.createElement("h1")
h1.innerText="ADD Delivery ADDRESS"
deleiveryaddress.append(h1)

let placeorder=document.createElement("div")
placeorder.classList.add("place-order")
 let divtotal=document.createElement("div")
 divtotal.classList.add("div-total")
 let p1=document.createElement("div")
 p1.classList.add("total")
 let p2=document.createElement("div")
 p2.classList.add("total-amount")
 p1.innerText="Total"
 p2.innerText=150
 divtotal.append(p1,p2)
 let placeorder2=document.createElement("div")
 placeorder2.classList.add("place-order-text")
 placeorder2.innerText="Place Order"
  placeorder.append(divtotal,placeorder2)
  bottompart.append(deleiveryaddress,placeorder)

wholecontainer.append(bottompart)
console.log("mazhar")



