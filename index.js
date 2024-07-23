const navbarBtn = document.querySelector("#navbaropenbtn")
const closeBtn = document.querySelector(".fa-xmark")


// Events Mouse hadiseleri  
navbarBtn.addEventListener("click", function () {
    document.querySelector(".mobile-menu").classList.add("active")
})

closeBtn.addEventListener("click", function () {
    document.querySelector(".mobile-menu").classList.remove("active")
})

// A O S   3 - C U   P A R T Y   P A K E T I

AOS.init();

//SWIPER JS 
const swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,

    autoplay: {
        delay: 1700,

    }
    ,
    breakpoints: {
        320: {
            slidesPerView: 1.5,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },







});

