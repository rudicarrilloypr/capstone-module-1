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
      seeMoreButton.textContent = 'Less';
    } else {
      hideCardsAfterIndex(initialVisibleCards);
      seeMoreButton.textContent = 'More';
    }
  }
});
