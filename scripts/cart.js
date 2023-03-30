


import { LSK } from "./main.js";


// local storage-content
let arr=JSON.parse(localStorage.getItem("Address"))
  if(arr==null)
  {
    arr=[]
  }

  // important section of div


let mainpage=document.querySelector("main")
let superdiv=document.createElement("div")
superdiv.classList.add("super-div")



let wholecontainer=document.createElement("div")
wholecontainer.classList.add("whole-container")
superdiv.append(wholecontainer)
mainpage.append(superdiv)


// Appending Address Of the Div


  function address(arr)
  {
  
let mainaddressdiv=document.createElement("div")
mainaddressdiv.classList.add("main-address")
let namediv=document.createElement("div")
let h3=document.createElement("h3")
let buttondiv1=document.createElement("div")
buttondiv1.classList.add("button-for-changing")
let anchor=document.createElement("a")
h3.innerText=`Deliver to ${arr[0].name}`

buttondiv1.append(anchor)
namediv.append(h3,buttondiv1)

let housediv=document.createElement("div")
let par=document.createElement("p")
par.innerText=`${arr[0].Houseno}${arr[0].locality}${arr[0].city}`
housediv.append(par)

let statediv=document.createElement("div")
let statepar=document.createElement("p")
statepar.innerText=`${arr[0].pincode}${arr[0].state}`
statediv.append(statepar)

mainaddressdiv.append(namediv,housediv,statediv)
wholecontainer.append(mainaddressdiv)
  }

    if(arr.length!=0)
    {
      address(arr)
    }

   

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




// bottom div content

let bottompart=document.createElement("div")
bottompart.classList.add("bottom-part")
let deleiveryaddress=document.createElement("div")
deleiveryaddress.classList.add("delivery-address")
let h1=document.createElement("h1")
h1.innerText="ADD Delivery ADDRESS"
deleiveryaddress.append(h1)

deleiveryaddress.addEventListener("click",function(){
  addressdiv.classList.add("open-pop")
 

})






let placeorder=document.createElement("div")
placeorder.addEventListener('click',function(){
    let format=document.getElementById("Formating")
    format.classList.add("creditcard-popup")
    console.log(format)


})
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

// bottom div content end





// Form for address

let form=document.createElement("form")
let addressdiv=document.createElement("div")
  addressdiv.classList.add("address-div")
  let headingdiv=document.createElement("div")
  headingdiv.classList.add("heading-div")
  let headingofaddress=document.createElement("h3")
  headingofaddress.innerText="Change/Save Address"
  headingdiv.append(headingofaddress)

   let inpnamediv=document.createElement("div")
  let inputname=document.createElement('input')
  inputname.setAttribute("placeholder","Full Name*")
  inputname.setAttribute("type","text")
  inputname.setAttribute("required","")

  inpnamediv.append(inputname)
  console.log(inpnamediv)
   
  let inputmobilediv=document.createElement("div")
  let inputmobile=document.createElement("input")
  inputmobile.setAttribute("type","number")
  inputmobile.setAttribute("placeholder","Mobile no")
  inputmobile.setAttribute("required","")
  inputmobilediv.append(inputmobile)

  let inputPincodediv=document.createElement("div")
  let inputpincode=document.createElement("input")
  inputpincode.setAttribute("type","number")
  inputpincode.setAttribute("placeholder","Pincode")
  inputpincode.setAttribute("required","")
 inputPincodediv.append(inputpincode)


  let inputcitydiv=document.createElement("div")
  let  inputcity=document.createElement("input")
  inputcity.setAttribute("type","text")
    inputcity.setAttribute("placeholder","City")
    inputcity.setAttribute("required","")
    inputcitydiv.append(inputcity)

    let inputStateDiv=document.createElement("div")
  let  inputstate=document.createElement("input")
  inputstate.setAttribute("type","text")
  inputstate.setAttribute("placeholder","State")
  inputstate.setAttribute("required","")
  inputStateDiv.append(inputstate)

  let inputlocalitydiv=document.createElement("div")
  let inputlocality=document.createElement("input")
  inputlocality.setAttribute("type","text")
  inputlocality.setAttribute("placeholder","Locality")
  inputlocality.setAttribute('required',"")
inputlocalitydiv.append(inputlocality)

  let Flathousediv=document.createElement("div")
  let flateHouse=document.createElement("input")
  flateHouse.setAttribute("type","text")
  flateHouse.setAttribute("placeholder","Flat/House No")
  flateHouse.setAttribute("required","")
  Flathousediv.append(flateHouse)

  let buttondiv=document.createElement("div")
  buttondiv.classList.add("button-div1")
  
  let cancelbtn=document.createElement("button")
  cancelbtn.innerText="CANCEL"
  cancelbtn.addEventListener("click",function(){
    addressdiv.classList.remove("open-pop")
  })
  let savebutton=document.createElement("button")
  savebutton.innerText="SAVE ADDRESS"
  savebutton.addEventListener("click",function(){

    if(inputname.value!=""&&inputmobile.value!=""&&inputpincode.value!=""&&inputcity.value!=""&&inputstate.value!=""&&inputlocality.value!=""&&flateHouse.value!="")
    {
    let obj={}
    obj.name=inputname.value;
    obj.mobileNo=inputmobile.value;
    obj.pincode=inputpincode.value;
    obj.city=inputcity.value;
    obj.state=inputstate.value;
    obj.locality=inputlocality.value;
    obj.Houseno=flateHouse.value;

    arr.push(obj)
    localStorage.setItem("Address",JSON.stringify(arr))
    alert("Address Saved")
  
    
  }
  
  
  })

  buttondiv.append(cancelbtn,savebutton)

  addressdiv.append(headingdiv,inpnamediv,inputmobilediv,inputPincodediv,inputlocalitydiv,Flathousediv,inputcitydiv,inputStateDiv,buttondiv)
  form.append(addressdiv)
  superdiv.append(form)




  //  Checkout Page Orientation


 
  let Maindivofcheckout=document.createElement("div")
  
  let headingtagdiv=document.createElement("div")
  let headingtag=document.createElement("h1")
  headingtag.innerText="Select Payment Method"
  headingtagdiv.append(headingdiv)

  // 
  let CreditCardDiv=document.createElement("div")
  let imageofcredit=document.createElement("img")
  imageofcredit.classList.add("image-of-credit")

  let creditcardheading=document.createElement("h2")
  creditcardheading.innerText=" CREDIT/DEBIT CARDS"

  


  // 
