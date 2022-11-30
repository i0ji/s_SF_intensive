const MENU_LINKS = document.querySelectorAll('.header__menu-link');

MENU_LINKS.forEach(link => link.addEventListener('click', event => {
    event.preventDefault()

    document.querySelector(event.target.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
    });
}));

const HERO_DOTS = document.querySelectorAll('.hero__dot');
const HERO_IMAGE = document.querySelector('.hero__image');
const HERO_TITLE = document.querySelector('.hero__title');
const HERO_TEXT = document.querySelector('.hero__subtitle');

const HERO_TITLES = [
    'Разработано 2000+ приложений',
    'Бесплатные приложения',
    'Тысячи довольных клиентов'
]

const HERO_TEXTS = [
    'Для вашего удобства мы разработали множество приложений для вашего бизнеса и команды, которые доступны в любое время суток',
    'К любому сервисному обслуживанию мы подключим советы по управлению компанией совершенно бесплатно',
    'Накопленный нами опыт позволяет предлагать клиентам обширный спектр качественных приложений и сервисов'
]

HERO_DOTS.forEach((dot, index) => dot.addEventListener('click',() => {
    HERO_DOTS.forEach(el => {
        el.classList.remove('active');
    })

    dot.classList.add('active');

    HERO_IMAGE.src = `img/hero_${index+1}.svg`;
    HERO_TITLE.textContent = HERO_TITLES[index];
    HERO_TEXT.textContent = HERO_TEXTS[index];
}) )



const FEATURES_BUTTONS = document.querySelectorAll('.features__menu-button');
const FEATURES_TEXT = document.querySelector('.features__menu-text');

FEATURES_BUTTONS.forEach((dot, index) => dot.addEventListener('click',() => {
    FEATURES_BUTTONS.forEach(el => {
        el.classList.remove('active');
    })

    dot.classList.add('active');

    FEATURES_TEXT.textContent = HERO_TEXTS[index];
}) )


// const FEATURE_TEXTS = [
//     'Для вашего удобства мы разработали множество приложений для вашего бизнеса и команды, которые доступны в любое время суток',
//     'К любому сервисному обслуживанию мы подключим советы по управлению компанией совершенно бесплатно',
//     'Накопленный нами опыт позволяет предлагать клиентам обширный спектр качественных приложений и сервисов'
// ]