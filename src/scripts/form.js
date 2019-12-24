class Form {
  constructor({ type, inputValues }) {
    this.type = type;
    this.inputValues = inputValues;
    const { title, form } = this.create();
    this.title = title;
    this.form = form;
  }

  create() {
    const template = document.querySelector(`#form__${this.type}`);
    const content = document.importNode(template.content, true);
    const title = content.querySelector('.popup__title');
    const form = content.querySelector('.popup__form');
    const inputs = form.querySelectorAll('.popup__input');

    if (this.inputValues) {
      inputs.forEach((input) => {
        input.value = this.inputValues[input.name];
      });
    }

    inputs.forEach((input) => {
      input.addEventListener('input', this.fieldInputHandler.bind(this));
    });
    this.validateForm(form);
    
    return { title, form };
  }

  fieldInputHandler(event) {
    const form = event.target.closest('.popup__form');
    this.validateForm(form);

    const field = event.target;
    if (field.tagName == 'INPUT') {
      this.validateField(field);
    }
  }

  validateForm(form) {
    const button = form.querySelector('button');

    if (form.checkValidity()) {
      this.enableButton(button);
    } else {
      this.disableButton(button);
    }
  }

  validateField(field) {
    const errorMessages = {
      valueMissing: 'Это обязательное поле',
      patternMismatch: 'Должно быть от 2 до 30 символов',
      typeMismatch: 'Здесь должна быть ссылка'
    }
  
    const errorElement = field.nextElementSibling;
  
    if (!field.checkValidity()) {
      for (let error in errorMessages) {
        if (field.validity[error]) {
          errorElement.textContent = errorMessages[error];
          break;
        }
      }
    } else {
      errorElement.textContent = '';
    }
  }

  enableButton(button) {
    if (button.disabled === true && !button.classList.contains('popup__button_active')) {
      button.disabled = false;
      button.classList.add('popup__button_active');
    }
  }

  disableButton(button) {
    if (button.disabled === false && button.classList.contains('popup__button_active')) {
      button.disabled = true;
      button.classList.remove('popup__button_active');
    }
  }
}
