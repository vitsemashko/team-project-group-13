(() => {
  const refs = {
    openMenuBtn: document.querySelector('.burger-icon'),
    // closeMenuBtn: document.querySelector('.menu-close'),
    menu: document.querySelector('.phone-modal'),
    body: document.querySelector('body'),
    menuList: document.querySelector('.phone-modal__list'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  refs.menuList.addEventListener('click', removeMenu);

  function toggleMenu() {
    document.body.classList.toggle('menu-open');
    refs.menu.classList.toggle('visually-hidden');
    refs.body.classList.toggle('no-scroll');
    refs.body.classList.toggle('no-scroll');
  }

  function removeMenu() {
    refs.menu.classList.add('visually-hidden');
  }
})();
