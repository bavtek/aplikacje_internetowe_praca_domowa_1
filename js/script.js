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

document.addEventListener('DOMContentLoaded', () => {
    const faqQuestions = document.querySelectorAll('.faq-question');
 
    faqQuestions.forEach((question) => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const isOpen = question.getAttribute('aria-expanded') === 'true';
 
            question.setAttribute('aria-expanded', String(!isOpen));
            answer.hidden = isOpen;
            question.closest('.faq-item').classList.toggle('open', !isOpen);
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('nav-toggle');
    const mainNav = document.getElementById('main-nav');
    const desktopQuery = window.matchMedia('(min-width: 769px)');
 
    function setMenu(open) {
        mainNav.classList.toggle('open', open);
        navToggle.setAttribute('aria-expanded', String(open));
        navToggle.setAttribute('aria-label', open ? 'Zamknij menu' : 'Otwórz menu');
        navToggle.textContent = open ? '✕' : '☰';
    }
 
    navToggle.addEventListener('click', () => {
        setMenu(!mainNav.classList.contains('open'));
    });
 
    mainNav.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => setMenu(false));
    });
 
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && mainNav.classList.contains('open')) {
            setMenu(false);
            navToggle.focus();
        }
    });
 
    desktopQuery.addEventListener('change', (event) => {
        if (event.matches) {
            setMenu(false);
        }
    });
});
 
document.addEventListener('DOMContentLoaded', () => {
    const backToTop = document.getElementById('back-to-top');
    const SHOW_AFTER = 400;
 
    function toggleBackToTop() {
        backToTop.hidden = window.scrollY < SHOW_AFTER;
    }
 
    window.addEventListener('scroll', toggleBackToTop, { passive: true });
 
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
 
    toggleBackToTop();
});