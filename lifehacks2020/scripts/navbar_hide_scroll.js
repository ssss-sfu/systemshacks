let prevScrollpos = window.pageYOffset;
let navbar = document.getElementById("nav");

window.onscroll = () => {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    navbar.classList.add("nav--scrolled");
  } else if (document.body.scrollTop <= 80 || document.documentElement.scrollTop <= 80) {
    navbar.classList.remove("nav--scrolled");
  }

  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = "-150px";
  }
  prevScrollpos = currentScrollPos;
}