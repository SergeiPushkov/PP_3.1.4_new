const Url = "http://localhost:8080/api/user"

const postsUserList = document.getElementById("dataUser");// get list by class

// хранилище где будет список постов
const stateUser = {
    usersUser: []
}

// переменная - функция для сборки одной строки таблицы
const createPostUser = (user, roles) =>
    `
    <tr>
        <td>${user.id}</td>
        <td>${user.username}</td>
        <td>${user.age}</td>
        <td>${user.email}</td>
        <td>${roles}</td>
    </tr> 
    `
// заполняем таблицу
const fillUserPostsList = (usersUser) => {
    postsUserList.innerHTML = "";
    let rolesUser;
    if (usersUser.length) {
        usersUser.forEach((user) => {
            rolesUser = '';
            user.roles.forEach(user => {
                rolesUser += user.name + ' '
            })
            postsUserList.innerHTML += createPostUser(user, rolesUser)
        });
    }
}

// получаем данные с сервера
function getPostsRequestUser() {
    return fetch(Url, {
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then((res) => res.json())
        .then((usersUser) => stateUser.usersUser = stateUser.usersUser.concat(usersUser))

}

// функция запуска заполнения таблицы
async function startUser() {
    await getPostsRequestUser();
    fillUserPostsList(stateUser.usersUser)
}

startUser();

async function reStart() {
    stateUser.users.length = 0;
    await getPostsRequestUser();
    fillUserPostsList(stateUser.usersUser);

}