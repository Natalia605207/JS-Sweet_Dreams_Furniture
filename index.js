const items = document.querySelectorAll('.item');

items.forEach(item => {
    item.addEventListener('mouseover', () => {
        removeFocus();
        item.classList.add('selected');
    })
    removeFocus = () => {
        items.forEach(item => {
            item.classList.remove('selected');
        })
    }
})

const back = document.querySelector('#back');
const next = document.querySelector('#next');
const photos = ["assets/one.jpg", "assets/two.jpg", "assets/three.jpg", "assets/four.jpg", "assets/five.jpg"];
let i = 0;

next.addEventListener('click', () => {
    i++;
    if (i > photos.length - 1) {
        i = 0;
    }
    document.querySelector('#furniture').src = photos[i];
})

back.addEventListener('click', () => {
    i--;
    if (i < 0) {
        i = photos.length - 1;
    }
    document.querySelector('#furniture').src = photos[i];
})

function salesCountdown() {
    const salesDate = new Date ("December 26, 2024 00:00");
    const now = new Date();
    const diff = salesDate - now;

    const msInSecond = 1000;
    const msInMinute = 60 * 1000;
    const msInHour = 60 * 60 * 1000;

    const displayHour = Math.floor(diff/msInHour);
    document.querySelector('.hours').textContent = displayHour;

    const displayMinute = Math.floor((diff%msInHour) / msInMinute);
    document.querySelector('.minutes').textContent = displayMinute;

    const displaySecond = Math.floor((diff%msInMinute) / msInSecond);
    document.querySelector('.seconds').textContent = displaySecond;

    if(diff <= 0) {
        document.querySelector('.hours').textContent = 0;
        document.querySelector('.minutes').textContent = 0;
        document.querySelector('.seconds').textContent = 0;
        clearInterval(timerID);
    }
}

let timerID = setInterval(salesCountdown, 1000);




