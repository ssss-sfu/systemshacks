let prevScrollpos = window.pageYOffset;
let header = document.querySelector(".header")
// const nav = document.querySelector(".nav");

let scrollYValue = 80;
window.onscroll = () => {
  // nav.style.display = "none";

  if (document.body.scrollTop > scrollYValue || document.documentElement.scrollTop > scrollYValue) {
    header.classList.add("header-scrolled");
  } else if (document.body.scrollTop <= scrollYValue || document.documentElement.scrollTop <= scrollYValue) {
    header.classList.remove("header-scrolled");
  }

  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    header.style.top = "0";
  } else if (currentScrollPos > scrollYValue) {
    header.style.top = "-500px";
  }
  prevScrollpos = currentScrollPos;
}