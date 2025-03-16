let field = document.getElementById('field');
let ball = document.getElementById('ball');

field.addEventListener('click', setBallCoords);

function setBallCoords(event) {
    let fieldCoords = field.getBoundingClientRect();
    let ballCoords = {
        top: event.y - fieldCoords.top - field.clientTop - ball.offsetHeight / 2,
        left: event.x - fieldCoords.left - field.clientLeft - ball.offsetWidth / 2,
    };

    if (ballCoords.top < 0) ballCoords.top = 0;
    if (ballCoords.left < 0) ballCoords.left = 0;
    if (ballCoords.left + ball.clientWidth > field.clientWidth) {
        ballCoords.left = field.clientWidth - ball.clientWidth;
    }


    if (ballCoords.top + ball.clientHeight > field.clientHeight) {
        ballCoords.top = field.clientHeight - ball.clientHeight;
    }

    ball.style.left = ballCoords.left + 'px';
    ball.style.top = ballCoords.top + 'px';
}