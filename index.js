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


function aparecerBoxDev() {
    let boxDev = document.querySelector('.box-logo-dev');
    boxDev.style.display = 'flex';
    setTimeout(function () {
        boxDev.style.opacity = '1';
    }, 1);

}
function desaparecerBoxDev() {
    let boxDev = document.querySelector('.box-logo-dev');

    setTimeout(function () {
        boxDev.style.opacity = '0';
    }, 3000);
    setTimeout(function () {
        boxDev.style.display = 'none';
    }, 3500);
}


//Testando git
