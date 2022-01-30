document.addEventListener('DOMContentLoaded', function() {

    const menu = document.querySelector(".menu");
    const menuToggle = document.querySelector(".hamburger-menu");
    const menuClose = document.querySelector(".close-menu");

    menuToggle.addEventListener('click', () => {
        if (menuClose.addEventListener('click', () => {menu.classList.remove("active");})){

        }
        else {
            menu.classList.add("active");
        }
    });

    const showSlider = new Swiper('.testimonials-slider',  {
		loop: true,
		slidesPerView: 1,
		speed: 2000,
        spaceBetween: 30,
		centeredSlides: true,
		navigation: {
			nextEl: '.testimonials-nav-left',
			prevEl: '.testimonials-nav-right'
		}
	});
});