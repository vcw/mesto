import Api from './api.js';
import Profile from './profile.js';
import CardList from './card-list.js';

const container = document.querySelector('.places-list');
const api = new Api({
  baseUrl: 'http://95.216.175.5/cohort3',
  token: 'abb390f5-9d80-40e6-a897-8c949e4d255b'
});
const profile = new Profile(api);
const cardList = new CardList({api, container});
