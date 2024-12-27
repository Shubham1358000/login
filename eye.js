document.addEventListener('DOMContentLoaded', () => {

document.querySelector( 'body' ).addEventListener('mousemove', eyeball);

function eyeball() {
    let eyes = document.querySelectorAll('.eye')

    eyes.forEach(eye => {
        let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
        let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);
        let rad = Math.atan2(event.pageX - x, event.pageY - y);
        let rotate = rad * (180 / Math.PI) * -1 + 270;
        eye.style.transform =  `rotate(${rotate}deg)`;
    });
}

})