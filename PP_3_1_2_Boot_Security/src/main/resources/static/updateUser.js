const formEditAddUser = document.getElementById('formEditUser')
let idEditUser;
let editUserName;
let editPassword;
let editAge;
let editEmail;




let currentRole = [];

formEditAddUser.addEventListener('submit', event => {
    event.preventDefault();
    idEditUser = document.getElementById('id').value
    editUserName = document.getElementById('username').value
    editPassword = document.getElementById('password').value
    editAge = document.getElementById('age').value
    editEmail = document.getElementById('email').value
    const formData = new FormData(formEditAddUser);
    formData.forEach((value, key) =>
        {
            if(key === "editRole") {
                currentRole.push({name:value})
                console.log(currentRole)
            }
        }
    )


    let user = {
        id: idEditUser,
        username: editUserName,
        password: editPassword,
        age: editAge,
        email: editEmail,
        roles: currentRole
    }

    console.log(user)

    editUser(user)
        .then(() => reStart());

    currentRole.length = 0;

})

function editUser(user) {
    return fetch(myUrl + "/edit", {
        method: 'PUT',
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(user)
    })
}