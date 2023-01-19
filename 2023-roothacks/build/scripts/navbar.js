const nav = document.querySelector(".nav");
const logo = document.querySelector(".logo");
let open;

function openMenu() {
  if (open) {
    nav.style.display = "none";
    open = false;
  } else if (!open) {
    nav.style.display = "block";
    open = true;
  }
}

function checkWindowWidth() {
  if (window.innerWidth >= minTabletWidth) {
    nav.style.display = "block"
    logo.onclick = null;
    logo.style.cursor = "auto"
    open = true;
  } else {
    nav.style.display = "none";
    open = false;
    logo.onclick = openMenu;
    logo.style.cursor = "pointer";
  }
}
let minTabletWidth = 768;
// make sure resized navbar in tablet or desktop not disappear
window.addEventListener("resize", checkWindowWidth);
checkWindowWidth(); // called once when page loaded


