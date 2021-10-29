const year = document.querySelector('#year');
const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');
const countdown = document.querySelector('#countdown');
const preloader = document.querySelector('#preloader');

const currenYear = new Date().getFullYear();
const nextYear = new Date(`January 01 ${currenYear + 1} 00:00:00`);

year.innerText = currenYear + 1;

function updateCounter() {
    const curentTime = new Date();
    const diff = nextYear - curentTime;

    const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);
    const hoursleft = Math.floor(diff / 1000 / 60 / 60) % 24;
    const minutesLeft = Math.floor(diff / 1000 / 60) % 60;
    const secondsLeft = Math.floor(diff / 1000) % 60;

    days.innerText = daysLeft;
    hours.innerText = hoursleft < 10 ? '0' + hoursleft : hoursleft;
    minutes.innerText = minutesLeft;
    seconds.innerText = secondsLeft;
}
setInterval(updateCounter, 1000);

setTimeout(function () {
    preloader.remove();
    countdown.style.display = 'flex';
}, 1000);