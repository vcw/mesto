class Popup {
  constructor(data) {
    this.data = data;
    this.container = document.querySelector('#popup');
  }

  open() {
    this.create();
    this.container.classList.add('popup_is-opened');

    const closeButton = this.container.querySelector('.popup__close');
    closeButton.addEventListener('click', this.close.bind(this));
  }

  close() {
    this.container.classList.remove('popup_is-opened');
    this.container.innerHTML = '';
  }
}
