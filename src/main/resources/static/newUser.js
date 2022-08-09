const username = document.getElementById('new-username')
const password = document.getElementById('new-password')
const age = document.getElementById('new-age')
const email = document.getElementById('new-eMail')
const role = document.getElementById('new-Role')
const addForm = document.querySelector('.addForm')

addForm.addEventListener('submit', e => {
    e.preventDefault();

    console.log('Form submitted');
    console.log(role.value)

    fetch("/api", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user = {
            username: username.value,
            password: password.value,
            age: age.value,
            email: email.value,
            roles: role.value
        })
    }).then(()=> reStart())
        .then(() => addForm.reset())

    return show('showUsers','addUser')
})
