let deleteButton = document.getElementById('delete');

deleteButton.addEventListener('click', (event) => {
    let delBtnEvent = new CustomEvent('delete-item', {bubbles: true, cancelable: true});

    if (document.dispatchEvent(delBtnEvent)) {
        alert("Удалено");
    }
});

document.addEventListener('delete-item', event => {
    let arrangement = confirm("Are you sure that you want to delete?");
    if (!arrangement) {
        event.preventDefault();
    }
});