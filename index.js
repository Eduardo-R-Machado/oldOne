window.onscroll = ()=> {
    if (window.scrollY > 0) {
        document.querySelector('.header').classList.add("header-scrolled");
    } else {
        document.querySelector('.header').classList.remove("header-scrolled");
    }
}


const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.thin',
    },
  });