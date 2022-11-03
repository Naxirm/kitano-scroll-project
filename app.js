const nvToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

nvToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
});

const nav = document.querySelector("nav");

// bouton
let mybutton = document.getElementById("myBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    mybutton.style.display = "block";
    nav.classList.add("show-nav");
  } else {
    mybutton.style.display = "none";
    nav.classList.remove("show-nav");
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
