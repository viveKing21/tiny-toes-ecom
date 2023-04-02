import { LSK } from "./main.js";


const table = document.querySelector("table tbody")
let empty = document.querySelector(".empty")

let uid = localStorage.getItem("logged")

if(uid == null) location = "/"

let all_orders = JSON.parse(localStorage.getItem(LSK.ORDERS)) || []

let orders = all_orders.filter((order) => order.uid == uid)

generateUi()

function createRow(order) {
    let tr = document.createElement("tr")
    let add = order.billing_address[0]
    let tds = [
        "",
        order.id,
        order["product-id"].length,
        `${add.Houseno} ${add.city} ${add.state} ${add.pincode}`,
        "₹" + order.price,
        order.status,
        ""
    ]
    tds = tds.map(t => {
        let td = document.createElement("td")
        td.innerHTML = t
        return td
    })

    let cancel = document.createElement("button")
    cancel.textContent = "Cancel"
    cancel.onclick = () => cancelOrder(order.id)
    tds.at(-1).append(cancel)

    if(['returned', 'delivered'].includes(order.status.toLowerCase())) cancel.disabled = true

    tr.append(...tds)
    return tr
}

function cancelOrder(order_id){
    all_orders = all_orders.filter(({id}) => id != order_id)
    orders = orders.filter(({id}) => id != order_id)
    if(all_orders.length){
        localStorage.setItem(LSK.ORDERS, JSON.stringify(all_orders))
    }
    else localStorage.removeItem(LSK.ORDERS)
    generateUi()
}

function generateUi(){
    table.innerHTML = ""
    table.append(...orders.map(createRow))
    empty.style.display = orders.length == 0 ? "flex":"none"
}