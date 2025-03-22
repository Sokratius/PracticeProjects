document.addEventListener('click', (event) => {
    let thumbnail = event.target.closest('a');
    if (!thumbnail) return undefined;

    showThumbnail(thumbnail.href, thumbnail.title)
    event.preventDefault();

    function showThumbnail(href, title) {
        largeImg.src = href;
        largeImg.alt= title;
    }

});