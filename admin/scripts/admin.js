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
    state : "dscsc"
}]

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
      </tr>
    </thead>
    <tbody>
    ${orderData.map((item) => renderorders(item.firstname,item.lastname,item.email,item.address,item.pincode,item.city,item.state)).join("")}
    </tbody>
    </table>
    </div>
    `
    console.log("orders");
})


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



admins.addEventListener("click", () => {
    displayContainer.innerHTML = "";
    console.log("admins");
})

profile.addEventListener("click", () => {
    displayContainer.innerHTML = "";
    console.log("profile");
})


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


function renderBtn(arr) {
    sideContainer.innerHTML = `<div id="crudBtns">
        <button id="addHead" onclick = "this.nextElementSibling.classList.toggle('hide')">Add product</button>
        <div id="addproduct">

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
        <button id="addProductBtn">Add</button>
        </div>
        
        <button onclick = "this.nextElementSibling.classList.toggle('hide')">Update Product</button>
        <div id="update">
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
        <button id="updateProductBtn">Update</button>
        </div>

        <button onclick = "this.nextElementSibling.classList.toggle('hide')">Update Key Value</button>
        <div id="updateprice">
        <label for="id">Product Id</label>
        <input type="number" name="" id="ProductId">
        <label for="price">Product Price</label>
        <input type="number" name="" id="onlyPriceUpdate">
        <button id="updateOnlyPrice">Update Price</button>
        </div>
        
        <button onclick = "this.nextElementSibling.classList.toggle('hide')">Remove Product</button>
        <div id="removeproduct">
        <label for="id">Product Id</label>
        <input type="number" name="" id="removeId">
        <button id="removeProductBtn">Remove Product</button>
        </div>
        
        </div>`
    displayContainer.innerHTML = `
        <div id="product-container">
        ${arr.map((item) => renderProducts(item.image1)).join("")}
        </div>
        `

    function renderProducts(image) {
        let card = `
    <div id="products">
    <div><img src="${image}" alt="err"> </div>
    </div>
    `
        return card
    }


  
  
    // <------------ Adding the Products CRUD -------------->

    let addBtn = document.getElementById("addProductBtn");
    addBtn.addEventListener("click", async () => {

        let addTitle = document.getElementById("titleAdd").value;
        let addImage1 = document.getElementById("image1Add").value;
        let addImage2 = document.getElementById("image2Add").value;
        let addImage3 = document.getElementById("image3Add").value;
        let addImage4 = document.getElementById("image4Add").value;
        let addColor = document.getElementById("colorAdd").value;
        let addPrice = document.getElementById("priceAdd").value;
        let addDiscount = document.getElementById("discountAdd").value;

        addProd(addTitle, addImage1, addImage2, addImage3, addImage4, addPrice, addColor, addDiscount)
    })

    async function addProd(addTitle, addImage1, addImage2, addImage3, addImage4, addPrice, addColor, addDiscount) {
        let addObj = {
            title: addTitle,
            image1: addImage1,
            image2: addImage2,
            image3: addImage3,
            image4: addImage4,
            price: addPrice,
            color: addColor,
            discount: addDiscount
        }

        let res = fetch(`https://64214f5434d6cd4ebd6fd51c.mockapi.io/products`, {
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

        updateAll(updateId, updateTitle, updateImage1, updateImage2, updateImage3, updateImage4, updateColor, updatePrice, updateDiscount)

    })

    async function updateAll(updateId, updateTitle, updateImage1, updateImage2, updateImage3, updateImage4, updateColor, updatePrice, updateDiscount) {

        let updateObj = {
            title: updateTitle,
            image1: updateImage1,
            image2: updateImage2,
            image3: updateImage3,
            image4: updateImage4,
            price: updatePrice,
            color: updateColor,
            discount: updateDiscount
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

    // <-------Remove Product CRUD------->


    //   <-------- Toggle Side-Section--------->
//   let addSectionOfCrud = document.getElementById("addproduct");
//   let addToggleBtn = document.getElementById("addHead");
  
//   let xa = false;
//   addToggleBtn.addEventListener("click", () => {
//     //   xa != xa;
//       if (xa == true) {
//           addSectionOfCrud.style.display = "block";
//       } else {
//           addSectionOfCrud.style.display = "none";
//       }
//       console.log("check");
//   })
  
//   <-------- Toggle Side-Section--------->
}

// <------------- Products CRUD Section Button ----------------->









