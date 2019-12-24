class Card {
  constructor(cardData) {
    this.card = this.create(cardData);
    this.popup = new PreviewPopup(cardData);

    this.card.querySelector('.place-card__like-icon').addEventListener('click', this.handleLike);
    this.card.querySelector('.place-card__delete-icon').addEventListener('click', this.handleRemove.bind(this));
    this.card.querySelector('.place-card__image').addEventListener('click', this.handleImagePopupOpening.bind(this));
  }

  create({ name, link }) {
    const template = document.querySelector('#card');
    const card = document.importNode(template.content, true);
    const image = card.querySelector('.place-card__image');
    const nameContainer = card.querySelector('.place-card__name');

    image.style.backgroundImage = `url(${link})`;
    nameContainer.textContent = name;

    return card;
  }

  handleLike(event) {
    event.target.classList.toggle('place-card__like-icon_liked');
  }

  handleRemove(event) {
    const cardToDelete = event.target.closest('.place-card');
    cardToDelete.parentNode.removeChild(cardToDelete);
  }

  handleImagePopupOpening() {
    if (!event.target.classList.contains('place-card__delete-icon')) {
      this.popup.open();
    }
  }
}
