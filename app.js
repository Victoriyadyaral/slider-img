const refs = {
    downBtn: document.querySelector('.down-button'),
    upBtn: document.querySelector('.up-button'),
    sidebar: document.querySelector('.sidebar'),
    mainSlide: document.querySelector('.main-slide'),
    container: document.querySelector('.container'),
};

let activeSlideIndex = 0;
const slidesCount = refs.mainSlide.querySelectorAll('div').length;
refs.sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

refs.upBtn.addEventListener('click', () => {
    changeSlide('up');
});
refs.downBtn.addEventListener('click', () => {
    changeSlide('down');
});

function changeSlide(direction) {
    if (direction === 'up') {
        activeSlideIndex++;
        if (activeSlideIndex === slidesCount) {
            activeSlideIndex = 0;
        }
    } else if (direction === 'down') {
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1;
        }
    }

    const height = refs.container.clientHeight;
    refs.mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
    refs.sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
}