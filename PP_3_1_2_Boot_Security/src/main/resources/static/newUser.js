const username = document.getElementById('new-username')
const password = document.getElementById('new-password')
const age = document.getElementById('new-age')
const email = document.getElementById('new-eMail')
const addForm = document.querySelector('.addForm')
const formDataNewUser = new FormData(addForm);

let currentRoleNew = [];

addForm.addEventListener('submit', e => {
    const formDataNewUser = new FormData(addForm);
    formDataNewUser.forEach((value, key) =>
        {
            if(key === "new-Role") {
                currentRoleNew.push({name:value})
                console.log(value)
                console.log(value)
                console.log(currentRoleNew)
                console.log(currentRoleNew)

            }
            console.log(key,value)
        }
    )
    e.preventDefault();

    console.log('Form submitted');
    console.log(currentRoleNew)

    fetch("/api/users/new", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user = {
            username: username.value,
            password: password.value,
            age: age.value,
            email: email.value,
            roles: currentRoleNew
        })
    }).then(()=> reStart())
        .then(() => addForm.reset())

    return show('showUsers','addUser')
})
