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
let areAllCardsVisible = false;
const initialVisibleCards = 3;

// Datos de ejemplo.
const artists = [
  {
    name: 'Alberto Ezkivel',
    subtitle: 'Jazz & R&B',
    info: 'Pianist, producer and composer, co-founder of The Secret Rythm Society',
    image: './assets/img/ezkivel.PNG',
  },
  {
    name: 'Joe Kay',
    subtitle: 'R&B, Future Beats & Hip-Hop',
    info: 'Soulection CEO, Executive and Music Producer, DJ',
    image: './assets/img/joekay.PNG',
  },
  {
    name: 'Argo',
    subtitle: 'R&B, Future Beats, Hip-Hop & House',
    info: 'Executive and Music Producer, Finite Founder and CEO, DJ',
    image: './assets/img/argo.PNG',
  },
  {
    name: 'Sade',
    subtitle: 'R&B and Jazz',
    info: 'Singer, Songwriter, Grammy Award Winner and Actress',
    image: './assets/img/sade.PNG',
  },
  {
    name: 'Jhedz',
    subtitle: 'Jazz & R&B',
    info: 'Pianist, Songwriter and composer, co-founder of Finite',
    image: './assets/img/jhedz.PNG',
  },
  {
    name: 'Sabrina Claudio',
    subtitle: 'R&B',
    info: 'Singer, Songwriter and Grammy Award Nominee',
    image: './assets/img/sabrina.PNG',
  },
];

function createCard(artist) {
  const card = document.createElement('article');
  card.classList.add('lineup_section_card');

  const img = document.createElement('img');
  img.classList.add('lineup_section_card_img');
  img.src = artist.image;
  img.alt = '';

  const cardTitle = document.createElement('h3');
  cardTitle.classList.add('lineup_section_card_title', 'lineup_section_card_title--left');
  cardTitle.textContent = artist.name;

  const subtitle = document.createElement('p');
  subtitle.classList.add('lineup_section_card_subtitle');
  subtitle.textContent = artist.subtitle;

  const cardDivLine = document.createElement('div');
  cardDivLine.classList.add('card_div-line');

  const info = document.createElement('p');
  info.classList.add('lineup_section_card_info');
  info.textContent = artist.info;

  card.appendChild(img);
  card.appendChild(cardTitle);
  card.appendChild(subtitle);
  card.appendChild(cardDivLine);
  card.appendChild(info);

  return card;
}

function hideCardsAfterIndex(index) {
  const cards = document.querySelectorAll('.lineup_section_card');
  // eslint-disable-next-line no-plusplus
  for (let i = index; i < cards.length; i++) {
    cards[i].style.display = 'none';
  }
}

function showAllCards() {
  const cards = document.querySelectorAll('.lineup_section_card');
  // eslint-disable-next-line no-restricted-syntax
  for (const card of cards) {
    card.style.display = 'grid';
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const lineupSection = document.querySelector('#lineup');
  if (lineupSection) {
    const lineupSectionContainer = document.createElement('div');
    lineupSectionContainer.classList.add('lineup_section_container');

    const title = document.createElement('h2');
    title.classList.add('lineup_section_title', 'section_title');
    title.textContent = 'Special Lineup';

    const divLine = document.createElement('div');
    divLine.classList.add('div-line');

    lineupSectionContainer.appendChild(title);
    lineupSectionContainer.appendChild(divLine);

    const lineupSectionWrapper = document.createElement('div');
    lineupSectionWrapper.classList.add('lineup_section_wrapper');

    artists.forEach((artist, index) => {
      const card = createCard(artist);
      lineupSectionWrapper.appendChild(card);
      if (index >= initialVisibleCards) {
        card.style.display = 'none';
      }
    });

    lineupSectionContainer.appendChild(lineupSectionWrapper);
    lineupSection.appendChild(lineupSectionContainer);
    if (window.innerWidth <= 768) {
      const moreContainer = document.createElement('div');
      moreContainer.classList.add('more-container');

      const button = document.createElement('button');
      button.classList.add('see-more');
      button.textContent = 'MORE';

      button.addEventListener('click', () => {
        if (!areAllCardsVisible) {
          showAllCards();
          button.textContent = 'HIDE';
        } else {
          hideCardsAfterIndex(initialVisibleCards);
          button.textContent = 'MORE';
        }
        areAllCardsVisible = !areAllCardsVisible;
      });

      moreContainer.appendChild(button);
      lineupSection.appendChild(moreContainer);
    } else {
      showAllCards();
    }
  }
});
