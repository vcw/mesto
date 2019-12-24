class CardList {
  constructor({ container, api }) {
    const addButton = document.querySelector('.user-info__new-place-button')
    this.container = container;
    api.getInitialCards()
      .then(this.render.bind(this))
      .catch((error) => console.log(error));

    addButton.addEventListener('click', this.handleAddButtonClick.bind(this));
  }

  addCard(card) {
    this.container.appendChild(card);
  }

  render(initialPlaces) {
    for (let place of initialPlaces) {
      const { card } = new Card(place);
      this.addCard(card);
    }
  }

  handleAddButtonClick() {
    this.popup = new FormPopup({type: 'new-place'});
    this.popup.open();

    this.popup.form.addEventListener('submit', this.handleCardSubmit.bind(this));
  }

  handleCardSubmit(event) {
    event.preventDefault();
    const { name, link } = event.target.elements;
    const { card } = new Card({name: name.value, link: link.value});
    
    this.addCard(card);
    this.popup.close();
  }
}
