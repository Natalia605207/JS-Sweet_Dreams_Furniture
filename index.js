const discount = document.querySelector('#discount');

let lastScrollTop = 0;

window.addEventListener("scroll", () => {
    let { pageYOffset } = window;
    if (pageYOffset > lastScrollTop) {
      discount.classList.remove("visible");
    } else if (pageYOffset < lastScrollTop) {
      discount.classList.add("visible");
    } 
    lastScrollTop = pageYOffset <= 0 ? 0 : pageYOffset;
  },
  { passive: true }
);

const burger = document.querySelector('#burger-btn');
const sections = document.querySelectorAll('.menu-link');

const toggleMenu = () => {
    document.body.classList.toggle("open")
};

burger.addEventListener("click", toggleMenu);
sections.forEach(section => {
    section.addEventListener("click", toggleMenu);
});

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
    const salesDate = new Date ("October 10, 2024 00:00");
    const now = new Date();
    const diff = salesDate - now;

    const msInSecond = 1000;
    const msInMinute = 60 * 1000;
    const msInHour = 60 * 60 * 1000;

    let displayHour = Math.floor(diff/msInHour);
    let displayMinute = Math.floor((diff%msInHour) / msInMinute);
    let displaySecond = Math.floor((diff%msInMinute) / msInSecond);

    if (displayHour < 10) {
        displayHour = "0" + displayHour;
    }

    if (displayMinute < 10) {
        displayMinute = "0" + displayMinute;
    }

    if (displaySecond < 10) {
        displaySecond = "0" + displaySecond;
    }

    document.querySelector('.hours').textContent = displayHour;
    document.querySelector('.minutes').textContent = displayMinute;
    document.querySelector('.seconds').textContent = displaySecond;

    if(diff <= 0) {
        document.querySelector('.hours').textContent = 0;
        document.querySelector('.minutes').textContent = 0;
        document.querySelector('.seconds').textContent = 0;
        clearInterval(timerID);
    }
}

let timerID = setInterval(salesCountdown, 1000);




