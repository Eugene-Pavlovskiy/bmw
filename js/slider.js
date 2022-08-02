const swiper = new Swiper('.swiper', {
  spaceBetween: 40,
  slidesPerView: 'auto',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});