const swiper = new Swiper('.swiper', {
   // Optional parameters
   direction: 'horizontal',
   loop: true,
   slidesPerView: 1,
   spaceBetween: 16,
   
   thumbs:{
      swiper: {
         el: '.swiper-mini',
         slidesPerView: 3,
         spaceBetween: 16,
      }
   }

});