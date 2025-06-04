const slider = document.querySelector('.slider');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

const productWidth = slider.querySelector('.pro').offsetWidth +36; // Product width including the gap
let currentIndex = 0;

nextBtn.addEventListener('click', () => {
  const maxScroll = slider.scrollWidth - slider.clientWidth;
  currentIndex = (currentIndex + productWidth) > maxScroll ? 0 : currentIndex + productWidth;
  slider.style.transform = `translateX(-${currentIndex}px)`;
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - productWidth) < 0 ? slider.scrollWidth - slider.clientWidth : currentIndex - productWidth;
  slider.style.transform = `translateX(-${currentIndex}px)`;
});


const slider1 = document.querySelector('.slider1');
const nextBtn1 = document.querySelector('.next1');
const prevBtn1 = document.querySelector('.prev1');

const productWidth1 = slider1.querySelector('.pro').offsetWidth +36; 
let currentIndex1 = 0;

nextBtn1.addEventListener('click', () => {
  const maxScroll1 = slider1.scrollWidth - slider1.clientWidth;
  currentIndex1 = (currentIndex1 + productWidth1) > maxScroll1 ? 0 : currentIndex1 + productWidth1;
  slider1.style.transform = `translateX(-${currentIndex1}px)`;
});

prevBtn1.addEventListener('click', () => {
  currentIndex1 = (currentIndex1 - productWidth1) < 0 ? slider1.scrollWidth - slider1.clientWidth : currentIndex1 - productWidth1;
  slider1.style.transform = `translateX(-${currentIndex1}px)`;
});