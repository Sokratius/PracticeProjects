let p = document.querySelector('p');

p.innerHTML = p.textContent
    .split("")
    .map(char => `<span>${char}</span>`)
    .join("");

p.firstElementChild.setAttribute('data-current', '');
p.firstElementChild.classList.add('current');

let current = document.querySelector('[data-current]');

setInterval(() => {
    current.classList.toggle('current');
}, 700);

document.addEventListener('keydown', event => {
    if (current.innerHTML === event.key) {
        current.setAttribute('data-passed', '');
        current.classList.remove('current');
        current.removeAttribute('data-current');
        current = current.nextElementSibling;
        current.classList.toggle('current');
    } else if (current.innerHTML !== event.key && event.key !== 'Backspace' && !event.shiftKey) {
        current.setAttribute('data-incorrect', '');
        current.classList.remove('current');
        current.removeAttribute('data-current');
        current = current.nextSibling;
        current.classList.toggle('current');
    } else if (event.key === 'Backspace') {
        current.classList.remove('current');
        current.removeAttribute('data-current');
        current = current.previousSibling;
        current.setAttribute('data-current', '');
        current.removeAttribute('data-passed');
        current.classList.toggle('current');
    }
});