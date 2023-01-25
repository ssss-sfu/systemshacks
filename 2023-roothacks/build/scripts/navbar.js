const nav = document.querySelector(".nav");
const dropdown = document.querySelector(".hamburger");
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
    dropdown.onclick = null;
    dropdown.style.cursor = "auto"
    open = true;
  } else {
    nav.style.display = "none";
    open = false;
    dropdown.onclick = openMenu;
    dropdown.style.cursor = "pointer";
  }
}
let minTabletWidth = 768;

// make sure resized navbar in tablet or desktop not disappear
window.addEventListener("resize", checkWindowWidth);
checkWindowWidth(); // called once when page loaded


