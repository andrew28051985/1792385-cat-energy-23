const navToggle = document.querySelector('.page-header__toggle');
const navMain = document.querySelector('.main-nav');
const navContainerLogo = document.querySelector('.page-header__container-logo');

navContainerLogo.classList.add('page-header__container-logo--closed-nav');
navToggle.classList.remove('page-header__toggle--no-js');
navMain.classList.remove('main-nav--no-js');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navToggle.classList.remove('page-header__toggle--closed-nav');
    navToggle.classList.add('page-header__toggle--opened-nav');
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    navContainerLogo.classList.remove('page-header__container-logo--closed-nav');
  } else {
    navToggle.classList.remove('page-header__toggle--opened-nav');
    navToggle.classList.add('page-header__toggle--closed-nav');
    navMain.classList.remove('main-nav--opened');
    navMain.classList.add('main-nav--closed');
    navContainerLogo.classList.add('page-header__container-logo--closed-nav');
  }
});
