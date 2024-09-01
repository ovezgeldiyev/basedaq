// menu start
var menu = document.getElementById("menu");
var menuBtn = document.getElementById("menuBtn");
var body = document.body;
let header = document.getElementById("header");
menuBtn.onclick = function () {
  menu.classList.toggle("active");
  menuBtn.classList.toggle("active");
  body.classList.toggle("active");
  header.classList.toggle("active");
};
window.onclick = function (event) {
  if (event.target == menu) {
    menu.classList.remove("active");
    menuBtn.classList.remove("active");
    body.classList.remove("active");
    header.classList.remove("active");
  }
};
// menu end

// scroll start
function scrollFunc() {
  if (window.scrollY >= 60) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
window.onscroll = function () {
  scrollFunc();
};
// scroll end
// sliders
$(function () {
  $(".about__inner-slider").slick({
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    speed: 500,
    responsive: [
      {
        breakpoint: 930,
        settings: {
          slidesToShow: 1.6,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

// showMore start
const showMoreBtns = document.querySelectorAll(".showMoreBtn");
showMoreBtns.forEach((showMoreBtn) => {
  showMoreBtn.onclick = () => {
    const parentElement = showMoreBtn.parentNode.parentNode;
    const showMore = parentElement.querySelector(".showMore");
    showMore.classList.toggle("active");
    showMoreBtn.classList.toggle("active");
    showMoreText = showMoreBtn.querySelector("b");
    if (showMoreBtn.classList.contains("active")) {
      showMoreText.innerHTML = "Show Less";
    } else {
      showMoreText.innerHTML = "See More";
    }
  };
});
// showMore end
