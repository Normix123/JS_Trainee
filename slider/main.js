const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

var index = 0;
var lastActionTime = Date.now();

const showCurrentSlide = () =>
{
    for (slide of slides) 
        slide.classList.remove('active');

    for (dot of dots) 
        dot.classList.remove('active');

    slides[index].classList.add('active');
    dots[index].classList.add('active');
    lastActionTime = Date.now();
}

const showNextSlide = () =>
{
    if( Date.now() - lastActionTime > 2000)
    {
        if (index == slides.length - 1 ) index = 0;
        else index++;
        showCurrentSlide();
    }
}

btnPrev.addEventListener('click', () =>
{
    if (index == 0 ) index = slides.length - 1;
    else index--;
    showCurrentSlide();
})

btnNext.addEventListener('click', () =>
{
    if (index == slides.length - 1 ) index = 0;
    else index++;
    showCurrentSlide();
})

dots.forEach((itemDot, indexDot) =>
{
    itemDot.addEventListener('click', () =>
    {
        index = indexDot;
        showCurrentSlide();
    })
})

setInterval(showNextSlide, 2000);
