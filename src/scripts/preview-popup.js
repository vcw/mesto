import Popup from './popup.js';

class PreviewPopup extends Popup {
  create() {
    const { name, link } = this.data;
    const template = document.querySelector('#popup__preview')
    const content = document.importNode(template.content, true);
    const image = content.querySelector('.popup__image');

    image.alt = name;
    image.src = link;

    this.container.appendChild(content);
  }
}

export default PreviewPopup;
