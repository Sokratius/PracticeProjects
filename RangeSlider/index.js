let slider = document.getElementById('slider');
let thumb = slider.querySelector('.thumb');

thumb.addEventListener('mousedown', (event) => {
    event.preventDefault();

    let shiftX = event.clientX - thumb.getBoundingClientRect().left;


    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    function onMouseMove(event) {
        let newLeft = event.clientX - shiftX - slider.getBoundingClientRect().left;

        if (newLeft < 0) newLeft = 0;
        let rightEdge = slider.offsetWidth - thumb.offsetWidth;
        if (newLeft > rightEdge) newLeft = rightEdge;

        thumb.style.left = newLeft + 'px';
    }

    function onMouseUp() {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    }

});