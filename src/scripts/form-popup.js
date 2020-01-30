import Popup from './popup.js';
import Form from './form.js';

class FormPopup extends Popup {
  create() {
    const { title, form }  = new Form(this.data);
    const template = document.querySelector('#popup__form');
    const content = document.importNode(template.content, true).querySelector('.popup__content');

    content.appendChild(title);
    content.appendChild(form);
    this.container.appendChild(content);
    this.form = form;
  }
}

export default FormPopup;
