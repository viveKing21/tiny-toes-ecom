


import { LSK } from "./main.js";
// 
let arr2=[{"id":"1","title":"Babyhug Cotton Half Sleeves T-Shirt Tom & Jerry Print","qty":"1","color":"Dark Blue","image1":"https://cdn.fcglcdn.com/brainbees/images/products/438x531/13014437a.jpg","price":"339.15","discount":"15% Off","stock":"In-stock","category":"Boys","brand":"Babyhug","size":"3-4 Y"},{"id":"2","title":"Pine Kids 100% Cotton Biowashed Half Sleeves T-Shirt Trumpet Print","color":"White & Blue","image1":"https://cdn.fcglcdn.com/brainbees/images/products/438x531/13094642a.jpg","image2":"https://cdn.fcglcdn.com/brainbees/images/products/438x531/13094642b.jpg","image3":"https://cdn.fcglcdn.com/brainbees/images/products/438x531/13094642c.jpg","image4":"https://cdn.fcglcdn.com/brainbees/images/products/438x531/13094642d.jpg","price":"424.15","discount":"15% Off","qty":"1","stock":"In-stock","category":"Boys","brand":"Pine Kids","size":"3-4 Y"}]















// local storage-content
let arr=JSON.parse(localStorage.getItem("Address"))
  if(arr==null)
  {
    arr=[]
  }
  
  let obj1={}
 
  
  let userlogin=JSON.parse(localStorage.getItem("logged"))

  // important section of div
let state=document.getElementById("state")

let mainpage=document.querySelector("main")
let superdiv=document.createElement("div")
superdiv.classList.add("super-div")



let wholecontainer=document.createElement("div")
wholecontainer.classList.add("whole-container")
let mainel=document.createElement("div")
    mainel.classList.add("main-el")
superdiv.append(wholecontainer)
mainpage.append(superdiv)



// Appending Address Of the Div


  function address(arr)
  {
    if(arr.length!=0&&arr2.length!=0)
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
par.innerText=`${arr[0].Houseno}--${arr[0].locality}--${arr[0].city}`
housediv.append(par)

let statediv=document.createElement("div")
let statepar=document.createElement("p")
statepar.innerText=`${arr[0].pincode}--${arr[0].state}`
statediv.append(statepar)

mainaddressdiv.append(namediv,housediv,statediv)
wholecontainer.append(mainaddressdiv)
    }
    
  }
 

    
      
    

   

// starting of payment section

 


  function totalcardvalue(arr2)
  {
   mainel.innerHTML=""
    let totalcost=0
    let totaldiscount=0
    if(arr2.length!=0)
    {
    
    for(let i=0;i<arr2.length;i++)
    {
      totalcost+=Number(arr2[i].price)*arr2[i].qty
      
      let data=arr2[i].discount.split(" ")
       data=data[0][0]+data[0][1]
         
      totaldiscount+=Number(data)*Number(arr2[i].price)/100
      totaldiscount*=Number(arr2[i].qty)
       
    
     
    }
    
    let totalgst=totalcost*(10/100)
    let totalpayment=totalcost+totaldiscount+totalgst

    
    totalcost=totalcost.toFixed(2)
    totaldiscount=totaldiscount.toFixed(2)
    totalgst=totalgst.toFixed(2)
    totalpayment=totalpayment.toFixed(2)
  
    

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
    p5.innerText=` Rs ${totalcost}`
    p6.innerText=` Rs  ${totaldiscount}`
    p7.innerText=` Rs  ${totalgst}   `
    p8.innerText=` Free`


paradiv2.append(p5,p6,p7,p8)

    paradiv.append(p1,p2,p3,p4)
    paymentsection.append(paradiv,paradiv2)
    let finalpaymentdiv=document.createElement("div")
    finalpaymentdiv.classList.add("final-payment")
    let h2=document.createElement("h4")
    let h3=document.createElement("h4")
    h2.innerText="Final Payment"
    h3.innerText=`Rs    ${totalpayment}`
    finalpaymentdiv.append(h2,h3)

    mainel.append(maz,paymentsection,finalpaymentdiv)
    superdiv.append(mainel)
  }
  }
  

 


// ending of payment section div


// ending of that section
 function bankoffer()
 {
 if(arr2!=null)
 {
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

 }
}

                                                                                     
// }




// from here i will add dynamic data into the div

function cardappend(arr2)
{
  wholecontainer.innerHTML=""
  if(arr2.length!=0)
  {
    totalcardvalue(arr2)
    address(arr)
  bankoffer()
    

    for(let i=0;i<arr2.length;i++)
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
img.src=arr2[i].image1
imagediv.append(img)

let h1=document.createElement("h1")
h1.classList.add("description")
h1.innerText=arr2[i].title
let button=document.createElement("button")
button.classList.add("increase")
let button2=document.createElement("button")
button2.classList.add("decrease")
button.innerText="+"
button2.innerText="-"
let head=document.createElement("p")

button.addEventListener("click",function(e){
  e.preventDefault()

  arr2[i].qty++
  head.innerText=arr2[i].qty
  totalcardvalue(arr2)

})
button2.addEventListener("click",function(e){
  e.preventDefault()
  if(arr2[i].qty>1)
  {
    arr2[i].qty--
    head.innerText=arr2[i].qty
  }
  else{
    head.innerText=arr2[i].qty
  }
  totalcardvalue(arr2)
})

head.innerText=arr2[i].qty
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

itemprice.innerText=arr2[i].price
span3.append(originalprice,itemprice)

let span4=document.createElement("span")
span4.classList.add("off-tag")
span4.innerText=arr2[i].discount
off.append(span2,span3,span4)
mrpandoff.append(off)
let h2=document.createElement("h2")
let data=arr2[i].discount.split(" ")
    data=data[0][0]+data[0][1]
    data=Number(data)
    data=100-data
         let price=Number(arr2[i].price)
         let actualcost=price*data/100
         actualcost=actualcost.toFixed(2)
h2.innerText=`Rs ${actualcost}`

let mrpprice=document.createElement("div")
mrpprice.classList.add("mrp-price")
mrpprice.innerText="MRP Includes all taxes"

mrpandoff.append(mrpprice)
pricediv.append(h2,mrpandoff,button,button2,head)

productdiv.append(imagediv,contentdiv,pricediv)
maindiv.append(productdiv)


let deletediv=document.createElement("div")
deletediv.classList.add("delete-div")

let deleteel=document.createElement("div")
deleteel.innerText="REMOVE"

deleteel.addEventListener("click",function(){
  arr2.splice(i,1)
  cardappend(arr2)
  totalcardvalue(arr2)
})

let movetoshortlist=document.createElement("div")
movetoshortlist.innerText="MOVE TO SHORTLIST"
deletediv.append(deleteel,movetoshortlist)

wholecontainer.append(maindiv,deletediv)
console.log(wholecontainer)


}
bottomdiv()
  }
}
cardappend(arr2)




// bottom div content

function bottomdiv()
{
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




let current_id=0

let placeorder=document.createElement("div")
placeorder.addEventListener('click',function(e){
e.preventDefault()
  if(arr.length!=0)
  {
  
    obj1["product-id"]=[]
    for(let i=0;i<arr2.length;i++)
    {
      obj1["product-id"].push(arr2[i].id)
    }
    current_id++
    obj1.id=current_id
    let currentdate=new Date()
    let currentday=currentdate.getDate()
    let currentmonth=currentdate.getMonth()+1
    let currentyear=currentdate.getFullYear()
    
    obj1.createdAt=`${currentday}-${currentmonth}-${currentyear}`

    // obj1.user_id=userlogin.id
    obj1.billing_address=[]
    obj1.billing_address.push(arr[0])
   
    localStorage.setItem("currentorder",JSON.stringify(obj1))

    window.location.href="checkout.html"
  }
  else{
    alert("please enter your address for checkout")
  }
    


})
placeorder.classList.add("place-order")
 let divtotal=document.createElement("div")
 divtotal.classList.add("div-total")
 let p1=document.createElement("div")
 p1.classList.add("total")
 let p2=document.createElement("div")
 p2.classList.add("total-amount")
 p1.innerText="Total"

 divtotal.append(p1,p2)
 let placeorder2=document.createElement("div")
 placeorder2.classList.add("place-order-text")
 placeorder2.innerText="Place Order"
  placeorder.append(divtotal,placeorder2)
  bottompart.append(deleiveryaddress,placeorder)

wholecontainer.append(bottompart)
console.log("mazhar")

// bottom div content end

}



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
    let label=document.createElement("label")
    label.innerText="Please Select your state"
    let input=document.createElement("input")
    inputStateDiv.append(label,state)
  

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
  buttondiv.classList.add("button-div2")
  
  let cancelbtn=document.createElement("button")
  cancelbtn.classList.add("cancel-button")
  cancelbtn.innerText="CANCEL"
  cancelbtn.addEventListener("click",function(){
    addressdiv.classList.remove("open-pop")
  })
  let savebutton=document.createElement("button")
  savebutton.classList.add("save-button")
  savebutton.innerText="SAVE ADDRESS"
  savebutton.addEventListener("click",function(){

    if(inputname.value!=""&&inputmobile.value!=""&&inputpincode.value!=""&&inputcity.value!=""&&state.value!=""&&inputlocality.value!=""&&flateHouse.value!="")
    {
    let obj={}
    obj.name=inputname.value;
    obj.mobileNo=inputmobile.value;
    obj.pincode=inputpincode.value;
    obj.city=inputcity.value;
    obj.state=state.value;
    obj.locality=inputlocality.value;
    obj.Houseno=flateHouse.value;
     
    arr.pop()
    arr.push(obj)
    localStorage.setItem("Address",JSON.stringify(arr))
    alert("Address Saved")
  address(arr)
    
  }
  
  
  })

  buttondiv.append(cancelbtn,savebutton)

  addressdiv.append(headingdiv,inpnamediv,inputmobilediv,inputPincodediv,inputlocalitydiv,Flathousediv,inputcitydiv,inputStateDiv,buttondiv)
  form.append(addressdiv)
  superdiv.append(form)




  //  Checkout Page Orientation


 

  


  // 
