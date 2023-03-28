// import { LSK } from "./main.js";
 
   window.addEventListener("load",function(){
    var ImgSlider=document.getElementById("slider")
    var arr=["./assets/indexImage/sliderpic1.jpg","./assets/indexImage/sliderpic2.jpg","./assets/indexImage/sliderpic3.jpg"]
    count=0
    setInterval(display,1000)
    function display(){
      
        ImgSlider.innerHTML=""
       var  img=document.createElement("img")
        img.setAttribute("src",arr[count])
        
        ImgSlider.append(img)
        count++
        if(count==3){
            count=0
        }
    }
   
   })
