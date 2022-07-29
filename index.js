window.onscroll = ()=> {
    if (window.scrollY > 0) {
        document.querySelector('.header').classList.add("header-scrolled");
    } else {
        document.querySelector('.header').classList.remove("header-scrolled");
    }
}
