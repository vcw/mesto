class Api {
  constructor(options) {
    this.options = options;
  }

  checkResponse(response) {
    if (response.ok) {
      return response.json();
    } else {
      return Promise.reject(`Ошибка: ${response.status}: ${response.statusText}`);
    }
  }

  formUserInfo(response) {
    const userInfo = { name: response.name, job: response.about, avatar: response.avatar };
    return userInfo;
  }

  prepareCards(response) {
    return response.map((card) => {
      return { name: card.name, link: card.link };
    });
  }

  getMyInfo() {
    return fetch(`${this.options.baseUrl}/users/me`, {
      headers: {
        authorization: this.options.token,
        'Content-Type': 'application/json'
      }
    })
      .then(this.checkResponse)
      .then(this.formUserInfo);
  }

  getInitialCards() {
    return fetch(`${this.options.baseUrl}/cards`, {
      headers: {
        authorization: this.options.token,
        'Content-Type': 'application/json'
      }
    })
      .then(this.checkResponse)
      .then(this.prepareCards);
  }

  editMyInfo(profileInfo) {
    return fetch(`${this.options.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: this.options.token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: profileInfo.name,
        about: profileInfo.job
      })
    })
      .then(this.checkResponse)
      .then(this.formUserInfo);

  }
}
