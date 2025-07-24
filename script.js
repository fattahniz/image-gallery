let scrollContainer = document.querySelector('.gallery');
let backBtn = document.querySelector('backBtn');
let nextBtn = document.querySelector('nextBtn');

scrollContainer.addEventListener('wheel', (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.computedStyleMap.scrllBehavior = 'auto';
});

nextBtn.addEventListener('click', () => {
    scrollContainer.computedStyleMap.scrllBehavior = 'smooth';
    scrollContainer.scrollLeft += 900;
});

nextBtn.addEventListener('click', () => {
    scrollContainer.computedStyleMap.scrllBehavior = 'smooth';
    scrollContainer.scrollLeft -= 900;
});