const swiperWrapper = document.querySelector('.swiper-wrapper');
const showAll = document.querySelector('.show-all');
const readMore = document.querySelector('.show-all');
  const arrow = document.querySelector('.arrow-btn');
readMore.addEventListener('click', () => {

  swiperWrapper.classList.toggle('expanded');

  arrow.classList.toggle('expand');
  if (swiperWrapper.classList.contains('expanded')){
    showAll.innerHTML ='Hide' ;
  }
  else{
    showAll.innerHTML =`Show all`;
  }


});
