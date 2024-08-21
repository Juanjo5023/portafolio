let currentIndex = 0;

document.querySelector('.prev').addEventListener('click', () => {
    const slides = document.querySelector('.slides');
    const totalSlides = slides.children.length;
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalSlides - 1;
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
});

document.querySelector('.next').addEventListener('click', () => {
    const slides = document.querySelector('.slides');
    const totalSlides = slides.children.length;
    currentIndex = (currentIndex < totalSlides - 1) ? currentIndex + 1 : 0;
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
});
