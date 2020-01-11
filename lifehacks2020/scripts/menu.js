const menu = document.querySelector('div.wrapper.menu')

function openMenu() {
  menu.classList.add('menu--opened')
}

function closeMenu() {
  menu.classList.remove('menu--opened')
}