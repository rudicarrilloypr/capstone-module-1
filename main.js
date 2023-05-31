// ----------BURGER MENU----------------- //
const navbar = document.querySelector('#nav-bar');
const burger = document.querySelector('#hamb');
const menuLinks = document.querySelectorAll('.nav_links a');

let isMenuVisible = false;

function toggleMenu() {
  if (!isMenuVisible) {
    navbar.classList.remove('navbar');
    navbar.classList.add('nav-bar-active');
    burger.classList.remove('hamb');
    burger.classList.add('nav-bar_menu-active');

    // Update menu state
    isMenuVisible = true;
  } else {
    // eslint-disable-next-line no-use-before-define
    closeMenu();

    // Update menu state
    isMenuVisible = false;
  }
}

function closeMenu() {
  navbar.classList.remove('nav-bar-active');
  navbar.classList.add('navbar');
  burger.classList.remove('nav-bar_menu-active');
  burger.classList.add('nav-bar_menu');

  // Update menu state
  isMenuVisible = false;
}

burger.addEventListener('click', toggleMenu);

menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (isMenuVisible) {
      closeMenu();
    }
  });
});

// ----------LINEUP SHOW MORE BUTTON----------------- //
const seeMoreButton = document.querySelector('.see-more');
const lineupSectionCards = document.querySelectorAll('.lineup_section_card');

const initialVisibleCards = 3; // Número inicial de tarjetas visibles
let areAllCardsVisible = false;

function hideCardsAfterIndex(index) {
  // eslint-disable-next-line no-plusplus
  for (let i = index; i < lineupSectionCards.length; i++) {
    lineupSectionCards[i].style.display = 'none';
  }
}

function showAllCards() {
  lineupSectionCards.forEach((card) => {
    card.style.display = ''; // Dejar vacío para mantener el estilo original
  });
}
if (window.innerWidth <= 768) {
  hideCardsAfterIndex(initialVisibleCards);
}

seeMoreButton.addEventListener('click', () => {
  if (window.innerWidth <= 768) {
    areAllCardsVisible = !areAllCardsVisible;

    if (areAllCardsVisible) {
      showAllCards();
      seeMoreButton.textContent = 'Hide';
    } else {
      hideCardsAfterIndex(initialVisibleCards);
      seeMoreButton.textContent = 'Full Lineup';
    }
  }
});
