let sideContainer = document.getElementById("side-container");
let report = document.getElementById("report-btn");
let product = document.getElementById("product-btn");
let orders = document.getElementById("orders-btn");
let admins = document.getElementById("admins-btn");
let profile = document.getElementById("profile-btn");

let displayContainer = document.getElementById("display-container");


report.addEventListener("click", () => {
    displayContainer.innerHTML = "";
    console.log("reports");

})

product.addEventListener("click", () => {
    displayContainer.innerHTML = "";
    // report.innerHTML = "";
    // orders.innerHTML = "";
    // admins.innerHTML = "";
    // profile.innerHTML = "";
    sideContainer.innerHTML = "";
    console.log("product");
    fetchData()
})

orders.addEventListener("click", () => {
    displayContainer.innerHTML = "";
    console.log("orders");
})

admins.addEventListener("click", () => {
    displayContainer.innerHTML = "";
    console.log("admins");
})

profile.addEventListener("click", () => {
    displayContainer.innerHTML = "";
    console.log("profile");
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
        <button id="addHead">Add product</button>
        <div id="add-product">
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
        
        <button>Update Product</button>
        <div id="update-product">
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

        <button>Update Key Value</button>
        <div id="update-price">
        <label for="id">Product Id</label>
        <input type="number" name="" id="ProductId">
        <label for="price">Product Price</label>
        <input type="number" name="" id="onlyPriceUpdate">
        <button id="updateOnlyPrice">Update Price</button>
        </div>
        

        <button>Remove Product</button>
        <div id="remove-product">
        <label for="id">Product Id</label>
        <input type="number" name="" id="removeId">
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


    // <------------ Adding the Products -------------->

    let addToggle = document.getElementById("addHead");
    let addBtn = document.getElementById("addProductBtn");
    let addDiv = document.getElementById("add-product");


    let flagAdd = false;
    addToggle.addEventListener("click", () => {
        flagAdd != flagAdd
        if (flagAdd == true) {
            addDiv.style.display === "block"
        } else {
            addDiv.style.display === "none"
        }

        console.log("check")
    })

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


    // <-----Updating the Product------->

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

    // <-------Update Price of the Product------->

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

    // <-------Remove Product------->

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

}


