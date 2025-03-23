let input = document.querySelector('input');
let btn = document.getElementById('btn');

btn.onclick = function() {
    let inputChanged = new CustomEvent('input-changed', {bubbles: true, detail: {name: 'input-changed', value: input.value}});
    btn.dispatchEvent(inputChanged);
};

btn.addEventListener('input-changed', event => {
    alert(event.detail.value);
});

document.addEventListener('input-changed', event => {
    alert(event.detail.value);
});