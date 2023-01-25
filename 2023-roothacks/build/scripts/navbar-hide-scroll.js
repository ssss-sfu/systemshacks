let prevScrollpos = window.pageYOffset;
let header = document.querySelector(".header")
let scrollYValue = 80;
window.onscroll = () => {
  
  if (document.body.scrollTop > scrollYValue || document.documentElement.scrollTop > scrollYValue) {
    header.classList.add("header-scrolled");
  } else if (document.body.scrollTop <= scrollYValue || document.documentElement.scrollTop <= scrollYValue) {
    header.classList.remove("header-scrolled");
  }

  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    header.style.top = "0";
    console.log("MEME")
  } else if (currentScrollPos > scrollYValue) {
    header.style.top = "-150px";
  }
  prevScrollpos = currentScrollPos;
}