const VACATION_MONTH = 6;
const VACATION_DAY = 1;

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

function getNextVacationDate() {
    const now = new Date();
    let target = new Date(now.getFullYear(), VACATION_MONTH, VACATION_DAY);

    if (target <= now) {
        target = new Date(now.getFullYear() + 1, VACATION_MONTH, VACATION_DAY);
    }
    return target;
}

function pad(number) {
    return String(number).padStart(2, "0");
}

function updateCountdown() {
    const diff = getNextVacationDate() - new Date();

    const totalSeconds = Math.floor(diff / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    daysEl.textContent = days;
    hoursEl.textContent = pad(hours);
    minutesEl.textContent = pad(minutes);
    secondsEl.textContent = pad(seconds);
}

updateCountdown();
setInterval(updateCountdown, 1000);

document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.card-grid .card');
 
    function filterCards(category) {
        cards.forEach((card) => {
            const matches = category === 'all' || card.dataset.category === category;
            card.hidden = !matches;
        });
    }
 
    filterButtons.forEach((button) => {
        button.addEventListener('click', () => {
            filterButtons.forEach((btn) => {
                btn.classList.remove('active');
                btn.setAttribute('aria-pressed', 'false');
            });
            button.classList.add('active');
            button.setAttribute('aria-pressed', 'true');
 
            filterCards(button.dataset.filter);
        });
    });
 
    filterCards('all');
});