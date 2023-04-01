// <--------- display -------->
let sideContainer = document.getElementById("side-container");
let report = document.getElementById("report-btn");
let product = document.getElementById("product-btn");
let orders = document.getElementById("orders-btn");
let admins = document.getElementById("admins-btn");
let profile = document.getElementById("profile-btn");
let displayContainer = document.getElementById("display-container");
// <--------- display -------->


if(sessionStorage.getItem("login") == null && (prompt("Username") !== "Ansh" || prompt("Password") !== "ansh")){

sessionStorage.setItem("login",1)
location = "/"
}

// <---------- Reports Charts & Reports Section ------------->

async function fetchDataGlobal() {
    let res = await fetch("https://64214f5434d6cd4ebd6fd51c.mockapi.io/products");
    let data = await res.json();
    console.log(data);
    renderDash(data)
}
fetchDataGlobal()

let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
let count5 = 0;
let count6 = 0;
let count7 = 0;
function renderDash(data) {
    count1 = data.length
    console.log(count1);

    for(let x=0;x<=data.length-1;x++){
        if(data[x].stock == "In-stock"){
            count2++;
        }
        if(data[x].stock == "Out-of-stock"){
            count3++;
        }
        if(data[x].category == "Boys"){
            count4++;
        }
        if(data[x].category == "Girls"){
            count5++;
        }
        if(data[x].rating == 5){
            count6++;
        }
        if(data[x].rating < 5){
            count7++;
        }
    }
    console.log("instock", count2);
    console.log("outstock", count3);
    console.log("boys",count4);
    console.log("girls",count5);
    console.log("best",count6);
    console.log("notbest",count7);

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
        <div id="chart3d"></div>
        <div id="lineChart"></div>
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
                ['Boys', count4],
                ['Girls', count5],
                // ['Watch TV', 2],
                // ['Sleep',    7]
            ]);

            var options1 = {
                title: 'Total Products Category',
                pieHole: 0.2,
                width: 340,
                legend: { position: 'bottom' }
            };

            var data2 = google.visualization.arrayToDataTable([
                ['Task', 'Hours per Day'],
                ['Total Products', count1],
                ['In-Stock', count2],
                ['Out-of-Stock', count3],
                // ['Watch TV', 2],
                // ['Sleep',    7]
            ]);

            var options2 = {
                title: 'Total Stock',
                pieHole: 0.2,
                width: 340,
                legend: { position: 'bottom' }
            };

            var data3 = google.visualization.arrayToDataTable([
                ['Task', 'Hours per Day'],
                ['Total Products', count1],
                ['Best Sellers', count6],
                // ['Girls', 12],
                // ['Watch TV', 2],
                // ['Sleep',    7]
            ]);

            var options3 = {
                title: 'Best Sellers',
                pieHole: 0.2,
                width: 340,
                legend: { position: 'bottom' }
            };

            var data4 = google.visualization.arrayToDataTable([
                ['Task', 'Hours per Day'],
                ['In-stock', count2],
                ['Out-Stock', count3],
                ['Best-Sellers', count6],
                ['Boys', count4],
                ['Girls', count5]
            ]);

            var options4 = {
                title: 'Product-Summary',
                is3D: true,
                width: 480,
                height: 400,
                legend: { position: 'right' },
            };

        var data5 = google.visualization.arrayToDataTable([
          ['Year', 'Sales', 'Expenses'],
          ['2019',  1000,      400],
          ['2020',  1170,      460],
          ['2021',  660,       1120],
          ['2022',  1030,      540]
        ]);

        var options5 = {
          title: 'Company Performance',
          curveType: 'function',
          legend: { position: 'bottom' },
          width : 540
        };

        


            var chart1 = new google.visualization.PieChart(document.getElementById('donutChart1'));
            chart1.draw(data1, options1);
            var chart2 = new google.visualization.PieChart(document.getElementById('donutChart2'));
            chart2.draw(data2, options2);
            var chart3 = new google.visualization.PieChart(document.getElementById('donutChart3'));
            chart3.draw(data3, options3);
            var chart4 = new google.visualization.PieChart(document.getElementById('chart3d'));
            chart4.draw(data4, options4);

            var chart = new google.visualization.LineChart(document.getElementById('lineChart'));
        chart.draw(data5, options5);
        }
        console.log("reports");
    })

    report.click()
}
// <---------- Reports Charts & Reports Section ------------->

// <----------- order-details & Orders Section----------->
let body = document.querySelector("tbody");
// let orderData = JSON.parse(localStorage.getItem("Address")) || [];


var orderData = [{
    id: 1,
    firstname: "ansh",
    lastname: "check",
    email: "ddscs",
    address: "cscscs",
    pincode: 1233,
    city: "dcscs",
    state: "Rajasthan"
},
{
    id: 2,
    firstname: "ansh",
    lastname: "check",
    email: "ddscs",
    address: "cscscs",
    pincode: 1233,
    city: "dcscs",
    state: "Delhi"
},
{
    id: 3,
    firstname: "ansh",
    lastname: "check",
    email: "ddscs",
    address: "cscscs",
    pincode: 1233,
    city: "dcscs",
    state: "Punjab"
},
{
    id: 4,
    firstname: "ansh",
    lastname: "check",
    email: "ddscs",
    address: "cscscs",
    pincode: 1233,
    city: "dcscs",
    state: "Madhya Pradesh"
},
{
    id: 5,
    firstname: "ansh",
    lastname: "check",
    email: "ddscs",
    address: "cscscs",
    pincode: 1233,
    city: "dcscs",
    state: "Delhi"
}


]

orders.addEventListener("click", () => {
    displayContainer.innerHTML = "";
    displayContainer.innerHTML = `
    <div id="topOrder">
        <h1>Order Status</h1>
        </div>

    <table>
    <thead >
      <tr>
        <th class="orderHeadings">Product Id</th>
        <th class="orderHeadings">First Name</th>
        <th class="orderHeadings">Last Name</th>
        <th class="orderHeadings">E-mail</th>
        <th class="orderHeadings">Address</th>
        <th class="orderHeadings">Pincode</th>
        <th class="orderHeadings">City</th>
        <th class="orderHeadings">State</th>
        <th class="orderHeadings">Product Status</th>
      </tr>
    </thead>
    <tbody>
    ${orderData.map((item) => renderorders(item.id, item.firstname, item.lastname, item.email, item.address, item.pincode, item.city, item.state)).join("")}
    </tbody>
    </table>

    <div id="divMapHead">
    <h2>Order Network</h2>
    </div>
    <hr>
    <div id= "map">
    <div id="chartOrder">
    </div>
    </div>
    `
    console.log("orders");


    let statusCheck = document.querySelectorAll(".status-Order");

    statusCheck.forEach((el)=>{
        el.addEventListener("change", (e) => {
            if (el.value == "processed") {
                console.log("processed");
                console.log(e)
                el.style.backgroundColor = "orange";
            } else if (el.value == "delivered") {
                console.log("delivered");
                el.style.backgroundColor = "green";
            } else if (el.value == "returned") {
                console.log("returned");
                el.style.backgroundColor = "red";
            } else if (el.value == "") {
                console.log("not selected");
                el.style.backgroundColor = "";
            }
        })
    })

    


    // <------------- India Order Map ---------------->

    let obj = {}
    let Arr = [['State', 'Popularity']]
    orderData.map((item) => {
        if (obj[item.state] == undefined) {
            obj[item.state] = 1;
        }
        else {
            obj[item.state]++;
        }
    })

    for (let key in obj) {
        let arr2 = []
        arr2.push(key)
        arr2.push(obj[key])
        Arr.push(arr2)
    }
    console.log(Arr)


    google.load('visualization', '1', { 'packages': ['geochart'] });
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
            domain: 'IN',
            displayMode: 'regions',
            colorAxis: { colors: ['#e5ef88', '#d4b114', '#e85a03'] },
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

function renderorders(id, firstname, lastname, email, address, pincode, city, state) {
    let orderTable = `
    <tbody>
    <tr>
    <td>${id}</td>
    <td>${firstname}</td>
    <td>${lastname}</td>
    <td>${email}</td>
    <td>${address}</td>
    <td>${pincode}</td>
    <td>${city}</td>
    <td>${state}</td>
    <td> <select id="statusOrder" class="status-Order">
    <option class="options" value = ""> Choose Status </option>
    <option class="options" value = "processed"> Processed </option>
    <option class="options" value = "returned"> Returned </option>
    <option class="options" value = "delivered"> Delivered </option>
     </select>
    </td>
    </tr>
</tbody>
`
    return orderTable
}
// <----------- order-details & Orders Section----------->




admins.addEventListener("click", async () => {
    displayContainer.innerHTML = "";

    let res = await fetch(`https://642537b39e0a30d92b2bb1bb.mockapi.io/login`);
    let data = await res.json();
    console.log(data);
    console.log("admins");
    // renderProfile(data)

    displayContainer.innerHTML = `
    <div id="profileTop">Admin Profile</div>
    <div id="parent">
    ${data.map((item)=>renderProfile(item.image,item.firstname,item.surname,item.email,item.department,item.mobile)).join("")}
    </div>
    `

    function renderProfile(image,firstname,surname,email,department,mobile) {
        // let a = ``;
        // arr.map((item) => {
        //     a += `
          let cards = ` <div id="card">
            <img src="${image}" alt="err">
        <div id="sideSection">
            <h2>${firstname} ${surname}</h2>
            <p>${email}</p>
            <p>${department}</p>
            <p>${mobile}</p>
        </div>
    </div>
            `
        return cards
    }
})

// <-------------- Create Profile Section ---------------------->

profile.addEventListener("click", () => {
    // displayContainer.innerHTML = "";
    // sideContainer.innerHTML = `
    // <div style = "border:solid red">
    // <form>
    // <lable>FirstName</lable><br>
    // <input id="firstnameAdmin" type="text"><br>
    // <lable>LastName</lable><br>
    // <input id="lastnameAdmin" type="text"><br>
    // <lable>Email</lable><br>
    // <input id="emailAdmin" type="email"><br>
    // <lable>Phone No.</lable><br>
    // <input id="phoneAdmin" type="number"><br>
    // <lable>Department</lable><br>
    // <input id="departmentAdmin" type="text"><br>
    // <lable>Image</lable><br>
    // <input id="imageAdmin" type="text"><br>
    // <lable>Password</lable><br>
    // <input id="passwordAdmin" type="password"><br>
    // <input id="createAdmin" type="submit"><br>
    // </form>
    // </div>
    // `;
    console.log("profile");

    let form = document.querySelector("form");
    form.addEventListener("submit", async (e) => {
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

        let res = await fetch(`https://642537b39e0a30d92b2bb1bb.mockapi.io/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(adminObj)
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

var checkArr = [];

async function fetchData() {

    let res = await fetch("https://64214f5434d6cd4ebd6fd51c.mockapi.io/products");
    let data = await res.json();
    checkArr = data
    console.log(checkArr);
    renderBtn(data)
}


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
        <button class= "crudoprBtn" id="addProductBtn">Add</button>

      
        </div>
        <hr>
        
        <button id="updateHead" onclick = "this.nextElementSibling.classList.toggle('hide')">Update Product</button>
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
        <label for="size">Product Size</label>
        <input type="text" name="" id="sizeUpdate">
        <label for="">Product Category</label>
        <input type="text" name="" id="categoryUpdate">
        <label for="brand">Product Brand</label>
        <input type="text" name="" id="brandUpdate">
        <button class= "crudoprBtn" id="updateProductBtn">Update</button>
        
        </div>
        <hr>

        <button id="replaceHead" onclick = "this.nextElementSibling.classList.toggle('hide')">Update Key Value</button>
        <div id="updateprice" class='hide'>
        <label for="id">Product Id</label>
        <input type="number" name="" id="ProductId">
        <label for="price">Product Price</label>
        <input type="number" name="" id="onlyPriceUpdate">
        <button class= "crudoprBtn" id="updateOnlyPrice">Update Price</button>
        </div>
        <hr>
        
        <button id="removeHead" onclick = "this.nextElementSibling.classList.toggle('hide')">Remove Product</button>
        <div id="removeproduct" class='hide'>
        <label for="id">Product Id</label>
        <input type="number" name="" id="removeId">
        <button class= "crudoprBtn" id="removeProductBtn">Remove Product</button>
        </div>
        <hr>
        
        </div>`
    displayContainer.innerHTML = `
    <div id="topdash">
    <div>
    <input oninput="search()" id="search-inp" type = "text"></input>
    <button>Search</button>
    </div>
        <h1>Products</h1>
        </div id="search-bar">
        <div id="product-container">
        ${arr.map((item) => renderProducts(item.id, item.image1, item.title,item.brand, item.category, item.color,  item.discount, item.size, item.price)).join("")}
        </div>
        `

        // <div><img src="${image1}" alt="err"> </div>

    function renderProducts(id, image1,title,brand,category, color, discount, size, price  ) {
        let card = `
    <div id="products" data-id=${id} class="eachdiv">
    <img src="${image1}" alt="${category}" class="product-img">
    <div class="product-content">
    <h3 class="product-tittle">${title.length > 20 ? title.substring(0,20).concat('...'):title}</h3>
    <h6 class="product-brand">${brand}</h6>
    <h4 class="product-category">${category}</h4>
    <h5 class="product-color">Color: ${color}</h5>
    <h5 class="product-discount">${discount}</h5>
    <h6 class="product-size">Size: ${size}</h6>
    <div class="product-price-container">
    <h3 class="product-price">₹${price}</h3>
    </div>
    </div>
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

        addProd(addTitle, addImage1, addImage2, addImage3, addImage4, addPrice, addColor, addDiscount, addStock, addBrand, addSize, addCategory)
    })

    async function addProd(addTitle, addImage1, addImage2, addImage3, addImage4, addPrice, addColor, addDiscount, addStock, addBrand, addSize, addCategory) {
        let addObj = {
            title: addTitle,
            image1: addImage1,
            image2: addImage2,
            image3: addImage3,
            image4: addImage4,
            price: addPrice,
            color: addColor,
            discount: addDiscount,
            stock: addStock,
            category: addCategory,
            size: addSize,
            brand: addBrand
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

let updateId = document.getElementById("idProduct").value
let updateTitle = document.getElementById("titleUpdate").value
        let updateImage1 = document.getElementById("image1Update").value
        let updateImage2 = document.getElementById("image2Update").value
        let updateImage3 = document.getElementById("image3Update").value
        let updateImage4 = document.getElementById("image4Update").value
        let updateColor = document.getElementById("colorUpdate").value
        let updatePrice = document.getElementById("priceUpdate").value
        let updateDiscount = document.getElementById("discountUpdate").value
        let updateStock = document.getElementById("stockUpdate").value
        let updateBrand = document.getElementById("brandUpdate").value
        let updateSize = document.getElementById("sizeUpdate").value
        let updateCategory = document.getElementById("categoryUpdate").value


        // console.log('updatedid', updateId)
        updateAll(updateId, updateTitle, updateImage1, updateImage2, updateImage3, updateImage4, updateColor, updatePrice, updateDiscount, updateStock, updateBrand, updateSize, updateCategory)

    })

    async function updateAll(updateId, updateTitle, updateImage1, updateImage2, updateImage3, updateImage4, updateColor, updatePrice, updateDiscount, updateStock, updateBrand, updateSize, updateCategory) {

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
        alert("Product-Updated");
        fetchData();
    }
    // <-----Updating the Product CRUD------->

    // <-------Update Price of the Product CRUD------->

    let updatePriceBtn = document.getElementById("updateOnlyPrice");

    updatePriceBtn.addEventListener("click", async () => {

        let updateOnlyId = document.getElementById("ProductId")
        let updateOnlyPrice = document.getElementById("onlyPriceUpdate")

        updatePrice(updateOnlyId, updateOnlyPrice);

    })

    async function updatePrice(updateOnlyId, updateOnlyPrice) {

        let priceUpdateObj = {
            price: updateOnlyPrice.value
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
        alert("Price-Updated");
        fetchData();
    }
    // <-------Update Price of the Product CRUD------->

    // <-------Remove Product CRUD------->

    let removeProductId = document.getElementById("removeProductBtn");

    removeProductId.addEventListener("click", async () => {

        let removedId = document.getElementById("removeId")

        removeProduct(removedId.value);
    })

    async function removeProduct(removedId) {

        let res = await fetch(`https://64214f5434d6cd4ebd6fd51c.mockapi.io/products/${removedId}`, {
            method: "DELETE"
        })
        let data = await res.json();
        console.log(data);
        alert("Product-Removed");
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
            updateId.value = data.id;
            updateTitle.value = data.title;
            updateImage1.value = data.image1;
            updateImage2.value = data.image2;
            updateImage3.value = data.image3;
            updateImage4.value = data.image4;
            updatePrice.value = data.price;
            updateDiscount.value = data.discount;
            updateColor.value = data.color;
            updateCategory.value = data.category
            updateStock.value = data.stock;
            updateSize.value = data.size;
            updateBrand.value = data.brand;

            removedId.value = data.id;
            updateOnlyId.value = data.id;
            updateOnlyPrice.value = data.price;
            // })
        })

    }

    // <-------Remove Product CRUD------->

    // search functionality starts here


}





// <------------- Products CRUD Section Button ----------------->









