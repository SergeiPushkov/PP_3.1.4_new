const editModal = document.getElementById('editModal');
editModal.addEventListener('show.bs.modal', function (event) {
    const button = event.relatedTarget;
    const user_id = button.getAttribute('data-bs-id');
    const user_username = button.getAttribute('data-bs-username');
    const user_password = button.getAttribute('data-bs-password');
    const user_age = button.getAttribute('data-bs-age');
    const user_email = button.getAttribute('data-bs-email');
    const modalBodyInputId = editModal.querySelector('.modal-id input');
    const modalBodyInputUserName = editModal.querySelector('.modal-username input');
    const modalBodyInputPassword = editModal.querySelector('.modal-password input');
    const modalBodyInputAge = editModal.querySelector('.modal-age input');
    const modalBodyInputEmail = editModal.querySelector('.modal-email input');
    modalBodyInputId.value = user_id
    modalBodyInputUserName.value = user_username
    modalBodyInputPassword.value = user_password
    modalBodyInputAge.value = user_age
    modalBodyInputEmail.value = user_email
})