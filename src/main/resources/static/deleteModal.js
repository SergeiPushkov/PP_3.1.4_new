const deleteModal = document.getElementById('deleteModal');
deleteModal.addEventListener('show.bs.modal', function (event) {
    const button = event.relatedTarget;

    deleteModal.querySelector('.modal-id-del input').value =
        button.getAttribute('data-bs-id')
    deleteModal.querySelector('.modal-username-del input').value =
        button.getAttribute('data-bs-username')
    deleteModal.querySelector('.modal-password-del input').value =
        button.getAttribute('data-bs-password')
    deleteModal.querySelector('.modal-age-del input').value =
        button.getAttribute('data-bs-age')
    deleteModal.querySelector('.modal-email-del input').value =
        button.getAttribute('data-bs-email')
})