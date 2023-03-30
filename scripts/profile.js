import { LSK } from "./main.js";

// localStorage.setItem(LSK.USERS, JSON.stringify([{
//     id: 1,
//     name: "Vivek Sharma",
//     email: "test@2001",
//     phone: "7010000100",
//     password: "test@123",
//     address: "HN. 31, Shahadra, New Delhi - 110001",
//     status: 1
//   }
//   ]))

let uid = localStorage.getItem("logged")

if(uid == null) location = "/"

let users =  JSON.parse(localStorage.getItem("users")) || []
let user_details = users.find(({id}) => id==uid)

document.form_details.onsubmit = formHandler(updateDetails)
document.form_email.onsubmit = formHandler(updateEmail)
document.form_password.onsubmit = formHandler(updatePassword)

function formHandler(handler){
    return function(e){
        e.preventDefault()
        let error = this.querySelector(".error")
        let success = this.querySelector(".success")
        error.textContent = ""
        success.textContent = ""
        handler.call(this)
        .then(txt => {
            localStorage.setItem(LSK.USERS, JSON.stringify(users))
            success.textContent = txt
            error.textContent = ""
        })
        .catch(txt => {
            error.textContent = txt
            success.textContent = ""
        })
    }
}

async function updateDetails(e){
    let name = this.name.value
    let address = this.address.value
    let phone = this.phone.value

    if(name === user_details.name && address === user_details.address && phone === user_details.phone) 
      throw "No changes found!"
    
    user_details.phone = phone
    user_details.name = name
    user_details.address = address
    return "Account details updated successfully!"
}

async function updateEmail(){
    let email = this.email.value
    
    if(email === user_details.email) throw "Please use a different email!"
    
    user_details.email = email
    return "Email updated successfully!"
}

async function updatePassword(e){
    let current_password = this.current_password.value
    let new_password = this.new_password.value
    let confirm_password = this.confirm_password.value

    if(current_password != user_details.password) throw "Current Password does't match!"
    if(current_password == new_password) throw "New password must be different!"
    if(new_password != confirm_password) throw "Confirm password doesn't match!"

    user_details.password = new_password
    return "Password changed successfully!"
}

// initialize
function updateForms(){
    // details form
    document.form_details.name.value = user_details.name
    document.form_details.address.value = user_details.address
    document.form_details.phone.value = user_details.phone

    // email form
    document.form_email.email.value = user_details.email
}

updateForms()