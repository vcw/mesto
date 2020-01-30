import '../pages/index.css';

import Api from './api.js';
import Profile from './profile.js';
import CardList from './card-list.js';

const serverUrl = NODE_ENV === 'development' ? 'http://praktikum.tk/cohort3' : 'https://praktikum.tk/cohort3';

const container = document.querySelector('.places-list');
const api = new Api({
  baseUrl: serverUrl,
  token: 'abb390f5-9d80-40e6-a897-8c949e4d255b'
});
const profile = new Profile(api);
const cardList = new CardList({api, container});
