let tabPanelAllUsers = document.getElementById("users_table")
let tabPanelAddNewUser = document.getElementById("add_user")

let btnAllUsers = document.getElementById("all_users")
let btnAddNewUser = document.getElementById("new_user")

tabPanelAddNewUser.style.display = 'none'

btnAllUsers.addEventListener('click', () => {
    tabPanelAddNewUser.style.display = 'none'
    tabPanelAllUsers.style.display = 'block'
});

btnAddNewUser.addEventListener( 'click', () => {
    tabPanelAllUsers.style.display = 'none'
    tabPanelAddNewUser.style.display = 'block'
});