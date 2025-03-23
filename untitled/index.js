function myFunc(event) {
    if (event.target.tagName === 'DIV' && !event.target.classList.contains('parent')) {
        let customClick = new CustomEvent('custom-click', {bubbles: true, cancelable: true});
        event.target.dispatchEvent(customClick);
    }
}

document.onclick = myFunc;

document.addEventListener('custom-click', event => {
    alert('custom-click');
})