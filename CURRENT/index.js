function setExpanderPosition(expander) {
    let articleCoords = article.getBoundingClientRect();
    expander.style.top = `${articleCoords.bottom + 20}px`;
    expander.style.left = `${articleCoords.right - article.offsetWidth / 2 - expander.offsetWidth / 2}px`;
}

let article = document.querySelector('.article');
let expander = document.querySelector('.expander');

let articleInstanceHeight = getComputedStyle(article).height;

setExpanderPosition(expander);

let expanderClicked = false;
expander.addEventListener('click', () => {
    if (!expanderClicked) {
        article.style.height = `${article.scrollHeight}px`;
        expander.textContent = "Hide";
        expanderClicked = true;
        setExpanderPosition(expander);
    } else {
        article.style.height = articleInstanceHeight;
        expander.textContent = "Expand";
        expanderClicked = false;
        setExpanderPosition(expander);
    }
})

let articleScrollWidth = article.offsetWidth - article.clientLeft - article.clientWidth;
console.log(articleScrollWidth)