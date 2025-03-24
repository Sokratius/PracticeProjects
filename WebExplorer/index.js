let ul = document.querySelector('ul');

ul.addEventListener('click', event => {
    if (event.target.tagName !== 'LI') return undefined;
    if (event.ctrlKey || event.metaKey) {
        event.target.classList.add('selected');
    } else {
        for (let i of event.target.parentNode.children) {
            i.classList.remove('selected');
            event.target.classList.add('selected');
        }
    }
});