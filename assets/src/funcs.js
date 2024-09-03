const showSearchButton = document.querySelector('[data-show-search]');
const hideSearchButton = document.querySelector('[data-hide-search]');

showSearchButton.addEventListener('click', () => {
    document.querySelector(".search-wrapper").classList.add('active');
})
hideSearchButton.addEventListener('click', () => {
    document.querySelector(".search-wrapper").classList.remove('active');
})