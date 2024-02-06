var swiper = new Swiper(".product-swiper", {
    slidesPerView: 1.3,
    spaceBetween: 15,
    navigation: {
      nextEl: ".swiper-btn-next",
      prevEl: ".swiper-btn-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        575:{
            slidesPerView: 1.6,
            spaceBetween: 20,
        },
        768:{
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1100:{
            slidesPerView: 4,
            spaceBetween: 30,
        }
    }
  });
  document.addEventListener("DOMContentLoaded", function() {
  document.querySelector(".burger2").addEventListener("click", function() {
    document.querySelector(".burger2").classList.toggle("burger2-open");
    document.querySelector('.nav-bar').classList.toggle('show-nav')
});

const allLink = document.querySelectorAll('.nav-bar a');

allLink.forEach(item => {
    item.addEventListener('click', () => {
        if (window.innerWidth <= 865) {
            document.querySelector(".burger2").classList.remove("burger2-open");
            document.querySelector('.nav-bar').classList.remove('show-nav');
        }
    });
});
})

const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});