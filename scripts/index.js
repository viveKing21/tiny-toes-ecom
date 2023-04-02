
import { LSK } from "./main.js";

let sidebar = document.querySelector(".sidebar")
let openBtnSidebar = document.querySelector("#nav1 .bar")
let closeBtnSidebar = sidebar.querySelector(".sidebar-container .title .button")
let items = sidebar.querySelectorAll(".sidebar-items > .item")

items.forEach((item, id) => {
    let itemContainer = item.parentElement

    let btns = Array.from(item.querySelectorAll("div.item-heading:not(.not-expandable) span"))
    if(btns.length == 0) return

    let mainBtn = btns.shift()
    // main btn
    mainBtn.onclick = () => {
        if(itemContainer.dataset.open && itemContainer.dataset.open != id){
            let pvpItem = items[itemContainer.dataset.open].querySelector(".item-heading")
            pvpItem.classList.remove("open")
            pvpItem.querySelector("span").textContent = "add"

            if(items[itemContainer.dataset.open].dataset.open){
                let btns = items[itemContainer.dataset.open].querySelectorAll("div.item-heading:not(.not-expandable) span")
                let btn = btns[+items[itemContainer.dataset.open].dataset.open + 1]
                btn.parentElement.classList.remove("open")
                btn.textContent = "add"
            }
        }
        let pItem = mainBtn.parentElement
        pItem.classList.toggle("open")
        let isOpen = pItem.classList.contains("open")

        if(isOpen == false && item.dataset.open){
            btns[item.dataset.open].parentElement.classList.remove("open")
            btns[item.dataset.open].textContent = "add"
            delete item.dataset.open
        }

        mainBtn.textContent = isOpen ? "remove":"add"
        if(isOpen) itemContainer.dataset.open = id
        else delete itemContainer.dataset.open
    }
    btns.forEach((btn, id_) => {
        let pItem = btn.parentElement
        btn.onclick = () => {
            if(item.dataset.open && item.dataset.open != id_){
                btns[item.dataset.open].parentElement.classList.remove("open")
                btns[item.dataset.open].textContent = "add"
            }
            pItem.classList.toggle("open")
            let isOpen = pItem.classList.contains("open")
            btn.textContent = isOpen ? "remove":"add"
            if(isOpen) item.dataset.open = id_
            else delete item.dataset.open
        }
    })
})

openBtnSidebar.onclick = () => {
    sidebar.classList.add("open")
}
closeBtnSidebar.onclick = () => {
    sidebar.classList.remove("open")
}
sidebar.onclick = (e) => {
    if(e.target === sidebar) closeBtnSidebar.onclick()
}
