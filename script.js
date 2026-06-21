const desktopWrapper = document.querySelector('.desktop-wrapper');
const showAll = document.querySelector('.show-all');
const readMore = document.querySelector('.show-all');
  const arrow = document.querySelector('.arrow-btn');
readMore.addEventListener('click', () => {

  desktopWrapper.classList.toggle('expanded');

  arrow.classList.toggle('expand');
  if (desktopWrapper.classList.contains('expanded')){
    showAll.innerHTML ='Hide' ;
  }
  else{
    showAll.innerHTML =`Show all`;
  }


});



    const swiper = new Swiper(".mySwiper", {
       slidesPerView: "1.9",
      centeredSlides: true,
      spaceBetween: 0,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

