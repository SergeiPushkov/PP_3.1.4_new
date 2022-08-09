const formEditAddUser = document.getElementById('formEditUser')

let idEditUser;
let editUserName;
let editPassword;
let editAge;
let editEmail;
let editRoles;

formEditAddUser.addEventListener('submit', event => {
    event.preventDefault();
    // присваиваем значение айди пользователя
    idEditUser = document.getElementById('id').value
    editUserName = document.getElementById('username').value
    editPassword = document.getElementById('password').value
    editAge = document.getElementById('age').value
    editEmail = document.getElementById('email').value
    editRoles = document.getElementById('editRole').value

    let user = {
        id: idEditUser,
        username: editUserName,
        password: editPassword,
        age: editAge,
        email: editEmail,
        roles: editRoles
    }

    console.log(user)

    editUser(user)
        .then(() => reStart());

    // alert('user - ' + firstName + ' ' + lastName + ' added')

})

// отправляем данные юзера на сервер
function editUser(user) {
    return fetch(myUrl, {
        method: 'PUT',
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(user)
    })
}