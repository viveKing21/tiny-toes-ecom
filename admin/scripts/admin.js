// <--------- display -------->
let sideContainer = document.getElementById("side-container");
let report = document.getElementById("report-btn");
let product = document.getElementById("product-btn");
let orders = document.getElementById("orders-btn");
let admins = document.getElementById("admins-btn");
let profile = document.getElementById("profile-btn");
// <--------- display -------->




// <---------- Reports Charts & Reports Section ------------->

let displayContainer = document.getElementById("display-container");

async function fetchDataGlobal() {

    let res = await fetch("https://64214f5434d6cd4ebd6fd51c.mockapi.io/products");
    let data = await res.json();
    console.log(data);
    renderDash(data)
}
fetchDataGlobal()

let count1 = 0;
function renderDash(data) {
    count1 = data.length
    console.log(count1);

    report.addEventListener("click", () => {

        displayContainer.innerHTML = "";
        displayContainer.innerHTML = `
        <div id="topdash">
        <h1>DashBoard</h1>
        </div>
        <div id="upperCharts">
        <div id="chart">
            <div id="donutChart1" style="margin-top : 60px;">
            </div>
        </div>
        <div id="chart">
            <div id="donutChart2" style="margin-top : 60px;">
            </div>
        </div>
        <div id="chart">
            <div id="donutChart3" style="margin-top : 60px;">
            </div>
        </div>
        </div>
        <div id ="chartLower">
        <div id="chart3d">
        </div>
        `

        let donutchart1 = document.getElementById("donutChart1");
        let donutchart2 = document.getElementById("donutChart1");
        let donutchart3 = document.getElementById("donutChart1");
        let chart3d = document.getElementById("chart3d");

        google.charts.load("current", { packages: ["corechart"] });
        google.charts.setOnLoadCallback(drawChart);
        function drawChart() {
            var data1 = google.visualization.arrayToDataTable([
                ['Task', 'Hours per Day'],
                ['Total Products', count1],
                ['Boys', 23],
                ['Girls', 12],
                // ['Watch TV', 2],
                // ['Sleep',    7]
            ]);

            var data2 = google.visualization.arrayToDataTable([
                ['Task', 'Hours per Day'],
                ['Total Products', count1],
                ['Boys', 23],
                ['Girls', 12],
                // ['Watch TV', 2],
                // ['Sleep',    7]
            ]);

            var options = {
                title: 'Total Products',
                pieHole: 0.2,
                width: 400,
            };

            var data3 = google.visualization.arrayToDataTable([
                ['Task', 'Hours per Day'],
                ['Total Products', count1],
                ['Boys', 23],
                ['Girls', 12],
                // ['Watch TV', 2],
                // ['Sleep',    7]
            ]);

            var options = {
                title: 'Total Products',
                pieHole: 0.2,
                width: 400,
            };

            var data4 = google.visualization.arrayToDataTable([
                ['Task', 'Hours per Day'],
                ['Work',     11],
                ['Eat',      2],
                ['Commute',  2],
                ['Watch TV', 2],
                ['Sleep',    7]
              ]);
      
              var options4 = {
                title: 'My Daily Activities',
                is3D: true,
                
              };
      

            var chart1 = new google.visualization.PieChart(document.getElementById('donutChart1'));
            chart1.draw(data1, options);
            var chart2 = new google.visualization.PieChart(document.getElementById('donutChart2'));
            chart2.draw(data2, options);
            var chart3 = new google.visualization.PieChart(document.getElementById('donutChart3'));
            chart3.draw(data3, options);
            var chart4 = new google.visualization.PieChart(document.getElementById('chart3d'));
            chart4.draw(data4, options4);
        }
        console.log("reports");
    })
}

// <---------- Reports Charts & Reports Section ------------->


// <----------- order-details & Orders Section----------->
let body = document.querySelector("tbody");
// let orderData = JSON.parse(localStorage.getItem("order-list")) || [];


var orderData = [{
    firstname : "ansh",
    lastname : "check",
    email : "ddscs",
    address : "cscscs",
    pincode : 1233,
    city : "dcscs",
    state : "Rajasthan"
},
{
    firstname : "ansh",
    lastname : "check",
    email : "ddscs",
    address : "cscscs",
    pincode : 1233,
    city : "dcscs",
    state : "Delhi"
},
{
    firstname : "ansh",
    lastname : "check",
    email : "ddscs",
    address : "cscscs",
    pincode : 1233,
    city : "dcscs",
    state : "Punjab"
},
{
    firstname : "ansh",
    lastname : "check",
    email : "ddscs",
    address : "cscscs",
    pincode : 1233,
    city : "dcscs",
    state : "Madhya Pradesh"
},
{
    firstname : "ansh",
    lastname : "check",
    email : "ddscs",
    address : "cscscs",
    pincode : 1233,
    city : "dcscs",
    state : "Delhi"
},
{
    firstname : "ansh",
    lastname : "check",
    email : "ddscs",
    address : "cscscs",
    pincode : 1233,
    city : "dcscs",
    state : "Jammu and Kashmir"
},
{
    firstname : "ansh",
    lastname : "check",
    email : "ddscs",
    address : "cscscs",
    pincode : 1233,
    city : "dcscs",
    state : "Jammu and Kashmir"
}

]

orders.addEventListener("click", () => {
    displayContainer.innerHTML = "";
    displayContainer.innerHTML = `
    <div id="orderTable">
    <table id="headings">
    <thead >
      <tr>
        <th class="orderHeadings">First Name</th>
        <th class="orderHeadings">Last Name</th>
        <th class="orderHeadings">E-mail</th>
        <th class="orderHeadings">Address</th>
        <th class="orderHeadings">Pincode</th>
        <th class="orderHeadings">City</th>
        <th class="orderHeadings">State</th>
        <th class="orderHeadings">Product Status</th>
        <th class="orderHeadings"></th>
      </tr>
    </thead>
    <tbody>
    ${orderData.map((item) => renderorders(item.firstname,item.lastname,item.email,item.address,item.pincode,item.city,item.state)).join("")}
    </tbody>
    </table>
    </div>
    <div id= "map">
    <div id="chartOrder">
    </div>
    </div>
    `
    console.log("orders");


// <------------- India Order Map ---------------->


    let obj={}
let Arr=[['State','Popularity']]
orderData.map((item)=>{
  if(obj[item.state]==undefined){
      obj[item.state]=1;  
  }
  else{
      obj[item.state]++;
  }
})

for(let key in obj){
  let arr2=[]
  arr2.push(key)
  arr2.push(obj[key])
  Arr.push(arr2)
}
console.log(Arr)


    google.load('visualization', '1', {'packages': ['geochart']});
google.setOnLoadCallback(drawVisualization);

function drawVisualization() {
  var dataOrder = google.visualization.arrayToDataTable(
    // [
        // ['State Code', 'State', 'Temperature'],     
        Arr
    //       [ 'IN-UP','Uttar Pradesh', 33],
    // ['IN-MH','Maharashtra', 32],
    // ['IN-BR','Bihar', 31],
    // ['IN-WB','West Bengal', 32],
    // ['IN-MP','Madhya Pradesh', 30],
    // ['IN-TN','Tamil Nadu', 33],
    // ['IN-RJ','Rajasthan', 33],
    // ['IN-KA','Karnataka', 29],
    // ['IN-GJ','Gujarat', 34],
    // ['IN-AP','Andhra Pradesh', 32],
    // ['IN-OR','Orissa', 33],
    // ['IN-TG','Telangana', 33],
    // ['IN-KL','Kerala', 31],
    // ['IN-JH','Jharkhand', 29],
    // ['IN-AS','Assam', 28],
    // ['IN-PB','Punjab', 30],
    // ['IN-CT','Chhattisgarh', 33],
    // ['IN-HR','Haryana', 30],
    // ['IN-JK','Jammu and Kashmir', 20],
    // ['IN-UT','Uttarakhand', 28],
    // ['IN-HP','Himachal Pradesh', 17],
    // ['IN-TR','Tripura', 31],
    // ['IN-ML','Meghalaya', 21],
    // ['IN-MN','Manipur', 22],
    // ['IN-NL','Nagaland', 22],
    // ['IN-GA','Goa', 32],
    // ['IN-AR', 'Arunachal Pradesh', 33],
    // ['IN-MZ','Mizoram', 23],
    // ['IN-SK','Sikkim', 24],
    // ['IN-DL','Delhi', 31],
    // ['IN-PY','Puducherry', 33],
    // ['IN-CH','Chandigarh', 30],
    // ['IN-AN','Andaman and Nicobar Islands', 30],
    // ['IN-DN','Dadra and Nagar Haveli', 30],
    // ['IN-DD','Daman and Diu', 29],
    // ['IN-LD','Lakshadweep', 31]
// ]
);

      var opts = {
        region: 'IN',
        domain:'IN',
        displayMode: 'regions',
        colorAxis: {colors: ['#e5ef88', '#d4b114', '#e85a03']},
        resolution: 'provinces',
        /*backgroundColor: '#81d4fa',*/
        /*datalessRegionColor: '#81d4fa',*/
        defaultColor: '#f5f5f5',
        width: 640, 
        height: 480
      };
      var geochart = new google.visualization.GeoChart(
          document.getElementById('chartOrder'));
      geochart.draw(dataOrder, opts);
    };

})

// <------------- India Order Map ---------------->


let orderList = document.getElementById("orders-btn");

function renderorders(firstname,lastname,email,address,pincode,city,state) {
    let orderTable = `
    <tbody>
    <tr>
    <td>${firstname}</td>
    <td>${lastname}</td>
    <td>${email}</td>
    <td>${address}</td>
    <td>${pincode}</td>
    <td>${city}</td>
    <td>${state}</td>
    </tr>
</tbody>
`
    return  orderTable
}
// <----------- order-details & Orders Section----------->



admins.addEventListener("click", async () => {
    displayContainer.innerHTML = "";

    let res = await fetch(`https://642537b39e0a30d92b2bb1bb.mockapi.io/login`);
    let data = await res.json();
    console.log(data);
    console.log("admins");
    renderProfile(data)


    function renderProfile(arr){
        let a = ``;
        arr.map((item)=>{
            a += `
            <div>
            <img src = "${item.image}" alt = "err">
            <h2>${item.firstname} ${item.lastname}</h2>
            <h2>${item.email}</h2>
            <h2>${item.department}<h2>
            <h2>${item.mobile}<h2>
            </div>
            `
        })
        displayContainer.innerHTML = a;
    }
})

// <-------------- Create Profile Section ---------------------->


profile.addEventListener("click", () => {
    displayContainer.innerHTML = "";
    displayContainer.innerHTML = `
    <div>
    <form>
    <lable>FirstName</lable><br>
    <input id="firstnameAdmin" type="text"><br>
    <lable>LastName</lable><br>
    <input id="lastnameAdmin" type="text"><br>
    <lable>Email</lable><br>
    <input id="emailAdmin" type="email"><br>
    <lable>Phone No.</lable><br>
    <input id="phoneAdmin" type="number"><br>
    <lable>Department</lable><br>
    <input id="departmentAdmin" type="text"><br>
    <lable>Image</lable><br>
    <input id="imageAdmin" type="text"><br>
    <lable>Password</lable><br>
    <input id="passwordAdmin" type="password"><br>
    <input id="createAdmin" type="submit"><br>
    </form>
    </div>
    `;
    console.log("profile");

    let form = document.querySelector("form");
    form.addEventListener("submit",async (e)=>{
        e.preventDefault();

        let adminObj = {
    "image": form.imageAdmin.value,
    "firstname": form.firstnameAdmin.value,
    "surname": form.lastnameAdmin.value,
    "mobile": form.phoneAdmin.value,
    "email": form.emailAdmin.value,
    "department": form.departmentAdmin.value,
    "password": form.passwordAdmin.value
        }

       let res = await fetch(`https://642537b39e0a30d92b2bb1bb.mockapi.io/login`,{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(adminObj)
        })
        let data = await res.json();
        console.log(data);
    })
})

// <-------------- Create Profile Section ---------------------->

// <------------- Products CRUD Section Button ----------------->
product.addEventListener("click", () => {
    displayContainer.innerHTML = "";
    sideContainer.innerHTML = "";
    console.log("product");
    fetchData()
})




//<--------------- Product Data -------------->

// Fetching the Products data

async function fetchData() {

    let res = await fetch("https://64214f5434d6cd4ebd6fd51c.mockapi.io/products");
    let data = await res.json();
    console.log(data);
    renderBtn(data)
}

// 


function renderBtn(arr) {
    sideContainer.innerHTML = `<div id="crudBtns">
    <img id="logoImg"  src = "/assets/images/logo.png" alt= "err">
        <button id="addHead" onclick = "this.nextElementSibling.classList.toggle('hide')" >Add Product</button>

        <div id="addproduct" class='hide'>
        <label for="title">Product Title</label>
        <input type="text" name="" id="titleAdd">
        <label for="image1">Product Image1</label>
        <input type="text" name="" id="image1Add">
        <label for="image2">Product Image2</label>
        <input type="text" name="" id="image2Add">
        <label for="image3">Product Image3</label>
        <input type="text" name="" id="image3Add">
        <label for="image4">Product Image4</label>
        <input type="text" name="" id="image4Add">
        <label for="color">Product Color</label>
        <input type="text" name="" id="colorAdd">
        <label for="price">Product Price</label>
        <input type="number" name="" id="priceAdd">
        <label for="discount">Product Discount</label>
        <input type="text" name="" id="discountAdd">
        <label for="stock">Product Stock</label>
        <input type="text" name="" id="stockAdd">
        <label for="category">Product Category</label>
        <input type="text" name="" id="categoryAdd">
        <label for="size">Product Size</label>
        <input type="text" name="" id="sizeAdd">
        <label for="brand">Product Brand</label>
        <input type="text" name="" id="brandAdd">
        <button id="addProductBtn">Add</button>

      
        </div>
        <hr>
        
        <button onclick = "this.nextElementSibling.classList.toggle('hide')">Update Product</button>
        <div id="update" class='hide'>
        <label for="id">Product Id</label>
        <input type="number" name="" id="idProduct">
        <label for="title">Product Title</label>
        <input type="text" name="" id="titleUpdate">
        <label for="image1">Product Image1</label>
        <input type="text" name="" id="image1Update">
        <label for="image2">Product Image2</label>
        <input type="text" name="" id="image2Update">
        <label for="image3">Product Image3</label>
        <input type="text" name="" id="image3Update">
        <label for="image4">Product Image4</label>
        <input type="text" name="" id="image4Update">
        <label for="color">Product Color</label>
        <input type="text" name="" id="colorUpdate">
        <label for="price">Product Price</label>
        <input type="number" name="" id="priceUpdate">
        <label for="discount">Product Discount</label>
        <input type="text" name="" id="discountUpdate">

        <label for="stock">Product Stock</label>
        <input type="text" name="" id="stockUpdate">
        <label for="category">Product Category</label>
        <input type="text" name="" id="categoryUpdate">
        <label for="size">Product Size</label>
        <input type="text" name="" id="sizeUpdate">
        <label for="">Product Category</label>
        <input type="text" name="" id="categoryUpdate">
        <label for="brand">Product Brand</label>
        <input type="text" name="" id="brandUpdate">
        <button id="updateProductBtn">Update</button>
        
        </div>
        <hr>

        <button onclick = "this.nextElementSibling.classList.toggle('hide')">Update Key Value</button>
        <div id="updateprice" class='hide'>
        <label for="id">Product Id</label>
        <input type="number" name="" id="ProductId">
        <label for="price">Product Price</label>
        <input type="number" name="" id="onlyPriceUpdate">
        <button id="updateOnlyPrice">Update Price</button>
        </div>
        <hr>
        
        <button onclick = "this.nextElementSibling.classList.toggle('hide')">Remove Product</button>
        <div id="removeproduct" class='hide'>
        <label for="id">Product Id</label>
        <input type="number" name="" id="removeId">
        <button id="removeProductBtn">Remove Product</button>
        </div>
        <hr>
        
        </div>`
    displayContainer.innerHTML = `
    <div id="productTop"></div>
        <div id="product-container">
        ${arr.map((item) => renderProducts(item.id,item.image1,item.color,item.price,item.stock,item.brand,item.size,item.category,item.discount)).join("")}
        </div>
        `

    function renderProducts(id,image1,color,price,stock,brand,size,category,discount) {
        let card = `
    <div id="products" data-id=${id} class="eachdiv">
    <div><img src="${image1}" alt="err"> </div>
    </div>
    `
        return card
    }


  
  
    // <------------ Adding the Products CRUD -------------->


    let eachDiv = document.querySelectorAll(".eachdiv");

    let addBtn = document.getElementById("addProductBtn");
    addBtn.addEventListener("click", async () => {

        let addTitle = document.getElementById("titleAdd").value;
        let addImage1 = document.getElementById("image1Add").value;
        let addImage2 = document.getElementById("image2Add").value;
        let addImage3 = document.getElementById("image3Add").value;
        let addImage4 = document.getElementById("image4Add").value;
        let addColor = document.getElementById("colorAdd").value;
        let addPrice = document.getElementById("priceAdd").value;
        let addStock = document.getElementById("stockAdd").value;
        let addBrand = document.getElementById("brandAdd").value;
        let addSize = document.getElementById("sizeAdd").value;
        let addCategory = document.getElementById("categoryAdd").value;
        let addDiscount = document.getElementById("discountAdd").value;

        addProd(addTitle, addImage1, addImage2, addImage3, addImage4, addPrice, addColor, addDiscount,addStock,addBrand,addSize,addCategory)
    })

    async function addProd(addTitle, addImage1, addImage2, addImage3, addImage4, addPrice, addColor, addDiscount,addStock,addBrand,addSize,addCategory) {
        let addObj = {
            title: addTitle,
            image1: addImage1,
            image2: addImage2,
            image3: addImage3,
            image4: addImage4,
            price: addPrice,
            color: addColor,
            discount: addDiscount,
            stock : addStock,
            category : addCategory,
            size : addSize,
            brand : addBrand
        }

        let res = await fetch(`https://64214f5434d6cd4ebd6fd51c.mockapi.io/products`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(addObj)
        })
        let data = await res.json()
        console.log(data);
        alert("Product-added");
        fetchData()
    }
    // <------------ Adding the Products CRUD -------------->


    // <-----Updating the Product CRUD------->

    let updateBtn = document.getElementById("updateProductBtn");

    updateBtn.addEventListener("click", async () => {

        let updateId = document.getElementById("idProduct").value;
        let updateTitle = document.getElementById("titleUpdate").value;
        let updateImage1 = document.getElementById("image1Update").value;
        let updateImage2 = document.getElementById("image2Update").value;
        let updateImage3 = document.getElementById("image3Update").value;
        let updateImage4 = document.getElementById("image4Update").value;
        let updateColor = document.getElementById("colorUpdate").value;
        let updatePrice = document.getElementById("priceUpdate").value;
        let updateDiscount = document.getElementById("discountUpdate").value;
        let updateStock = document.getElementById("stockUpdate").value;
        let updateBrand = document.getElementById("brandUpdate").value;
        let updateSize = document.getElementById("sizeUpdate").value;
        let updateCategory = document.getElementById("categoryUpdate").value;


        updateAll(updateId, updateTitle, updateImage1, updateImage2, updateImage3, updateImage4, updateColor, updatePrice, updateDiscount,updateStock,updateBrand,updateSize,updateCategory)

    })

    async function updateAll(updateId, updateTitle, updateImage1, updateImage2, updateImage3, updateImage4, updateColor, updatePrice, updateDiscount,updateStock,updateBrand,updateSize,updateCategory) {

        let updateObj = {
            title: updateTitle,
            image1: updateImage1,
            image2: updateImage2,
            image3: updateImage3,
            image4: updateImage4,
            price: updatePrice,
            color: updateColor,
            discount: updateDiscount,
            category: updateCategory,
            stock: updateStock,
            brand: updateBrand,
            size: updateSize
        }

        let res = await fetch(`https://64214f5434d6cd4ebd6fd51c.mockapi.io/products/${updateId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updateObj)
        })
        let data = await res.json();
        console.log(data);
        fetchData();
    }
    // <-----Updating the Product CRUD------->

    // <-------Update Price of the Product CRUD------->

    let updatePriceBtn = document.getElementById("updateOnlyPrice");

    updatePriceBtn.addEventListener("click", async () => {

        let updateOnlyId = document.getElementById("ProductId").value;
        let updateOnlyPrice = document.getElementById("onlyPriceUpdate").value;

        updatePrice(updateOnlyId, updateOnlyPrice);

    })

    async function updatePrice(updateOnlyId, updateOnlyPrice) {

        let priceUpdateObj = {
            price: updateOnlyPrice
        }

        let res = await fetch(`https://64214f5434d6cd4ebd6fd51c.mockapi.io/products/${updateOnlyId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(priceUpdateObj)
        })
        let data = await res.json();
        console.log(data);
        fetchData();
    }
    // <-------Update Price of the Product CRUD------->

    // <-------Remove Product CRUD------->

    let removeProductId = document.getElementById("removeProductBtn");

    removeProductId.addEventListener("click", async () => {

        let removedId = document.getElementById("removeId").value;

        removeProduct(removedId);
    })

    async function removeProduct(removedId) {

        let res = await fetch(`https://64214f5434d6cd4ebd6fd51c.mockapi.io/products/${removedId}`, {
            method: "DELETE"
        })
        let data = await res.json();
        console.log(data);
        fetchData();

    }


    for (let each of eachDiv) {
        each.addEventListener("click", async (e) => {
            e.preventDefault()
            let idofproduct = each.getAttribute("data-id")
            let res = await fetch(`https://64214f5434d6cd4ebd6fd51c.mockapi.io/products/${idofproduct}`)
            let data = await res.json();    
            console.log(data);
            // .then((res) => {
            //         return res.json()
            //     })
                // .then((data) => {
                    updateId = data.id;
                    updateTitle = data.title;
                    updateImage1 = data.image1;
                    updateImage2 = data.image2;
                    updateImage3 = data.image3;
                    updateImage4 = data.image4;
                    updatePrice = data.price;
                    updateDiscount = data.discount;
                    updateColor = data.color;
                    updateCategory = data.category
                    updateStock = data.stock;
                    updateSize = data.size;
                    updateBrand = data.brand;
                   
                    removedId = data.id;
                    updateOnlyId = data.id;
                    updateOnlyPrice = data.price;
                // })
        })
        
    }

    // <-------Remove Product CRUD------->

}



// <------------- Products CRUD Section Button ----------------->









