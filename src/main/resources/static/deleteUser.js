const formDeleteModal = document.querySelector(".formDeleteModal")
let idUserDelete; // тутаньки будем хранить айди пользователя

formDeleteModal.addEventListener("submit", event => {
    event.preventDefault();
    // присваиваем значение айди пользователя
    idUserDelete = document.getElementById('del-id').value
    console.log(idUserDelete)

    deleteUserById();
})

function deleteUserById() {
    let request = new XMLHttpRequest();
    request.open("DELETE", "http://localhost:8080/api/users/delete/" + idUserDelete);
    request.setRequestHeader("Content-type", "application/jason; charset=utf-8");
    request.send()

    // как только получаем ответ ок, обновляем содержимое таблицы
    request.addEventListener("loadend", (event) => {
        event.preventDefault()
        console.log(" PRESS DELETE - ")
        setTimeout(reStart, 500); // Надо бы этот момент переделать потом
        alert("User - id:" + idUserDelete + " deleted");
    })
}