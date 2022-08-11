const myUrl = "http://localhost:8080/api/users"

const postsList = document.getElementById("data");// get list by class

// хранилище где будет список постов
const state = {
    users: []
}

// переменная - функция для сборки одной строки таблицы
const createPost = (user, roles) =>
    `
    <tr>
        <td>${user.id}</td>
        <td>${user.username}</td>
        <td>${user.age}</td>
        <td>${user.email}</td>
        <td>${roles}</td>
        <td>
            <button type="button" class=" btn btn-sm btn-info text-white"
                data-bs-toggle="modal"
                data-bs-target="#editModal"
                data-bs-id="${user.id}"
                data-bs-username="${user.username}"
                data-bs-password="${user.password}"
                data-bs-age="${user.age}"
                data-bs-email="${user.email}">Edit
            </button>
        </td>
        <td>
            <button type="button" class="btn btn-danger btn-sm"
                data-bs-toggle="modal"
                data-bs-target="#deleteModal"
                data-bs-id="${user.id}"
                data-bs-username="${user.username}"
                data-bs-age="${user.age}"
                data-bs-email="${user.email}">Delete
            </button>
        </td>
    </tr> 
    `
// заполняем таблицу
const fillPostsList = (users) => {
    postsList.innerHTML = "";

    let roles;

    console.log("--------------------------" + users.length + "--------------------------------")

    if (users.length) {
        users.forEach((user) => {
            roles = '';
            user.roles.forEach(user => {
                roles += user.name + ' '
            })
            postsList.innerHTML += createPost(user, roles)
        });
    }
}

// получаем данные с сервера
function getPostsRequest() {
     return fetch(myUrl, {
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then((res) => res.json())
        .then((users) => state.users = state.users.concat(users))

}

// функция запуска заполнения таблицы
async function start() {
    await getPostsRequest();
    fillPostsList(state.users)
}

start();

async function reStart() {
    state.users.length = 0;
    await getPostsRequest();
    fillPostsList(state.users);
    console.log("RESTART OK")
}