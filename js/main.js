document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll('.slider__slide');
    const prevBtn = document.querySelector('.slider__prev');
    const nextBtn = document.querySelector('.slider__next');

    let slideIndex = 0;

    function showSlide(index) {
        let slide = document.querySelector('.big');

        slide.classList.remove('big');
        slides[index].classList.add('big');
    };

    function changeSlide(num) {
        slideIndex += num;

        if (slideIndex < 0) {
            slideIndex = slides.length - 1;
        } else if (slideIndex >= slides.length) {
            slideIndex = 0;
        }

        showSlide(slideIndex);
    }

    function changeClickSlide() {
        if (slides.length === 1) {
            prevBtn.style.display = 'none';
            nextBtn.style.display = 'none';
        } else {
            slides.forEach((slide, index) => {
                slide.addEventListener('click', function () {
                    slideIndex = index;
                    showSlide(slideIndex);
                });
            });

            prevBtn.addEventListener('click', () => changeSlide(-1));
            nextBtn.addEventListener('click', () => changeSlide(1));
        }
    };

    changeClickSlide();
});



