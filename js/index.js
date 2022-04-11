import Calculator from './Calculator.js';
const container = document.querySelector('.container');
const switchBtn = document.querySelector('.calc_switch-btn');
const switchAreas = document.querySelectorAll('.calc_switch-area');
const themeClasses = [
    { slider: 'calc_switch-btn--first', container: 'container--first' },
    { slider: 'calc_switch-btn--second', container: 'container--second' },
    { slider: 'calc_switch-btn--third', container: 'container--third' },
];
const calc = new Calculator();
switchAreas.forEach((item, index) => {
    item.addEventListener('click', () => setTheme(index));
});
if (localStorage.getItem('theme')) {
    setTheme(parseInt(localStorage.getItem('theme')));
}
function setTheme(index) {
    if (index < 0 || index >= themeClasses.length)
        return;
    themeClasses.forEach((item) => {
        switchBtn.classList.remove(item.slider);
        container.classList.remove(item.container);
    });
    switchBtn.classList.add(themeClasses[index].slider);
    container.classList.add(themeClasses[index].container);
    localStorage.setItem('theme', index.toString());
}
