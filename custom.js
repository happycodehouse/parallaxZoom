let scrollNumber = 0;

const imageAll = document.querySelectorAll('.imageWrap .parallaxImage');
const totalNumber = imageAll.length;
const subPageImage = document.querySelector('.subPage .parallaxImage');

window.addEventListener('scroll', () => {
  scrollNumber = window.scrollY;

  imageAll.forEach((image, index) => {
    image.style.transform = `perspective(400px) translate3d(0, 0, ${scrollNumber / (2 * (totalNumber - index))}px)`;
  })
})