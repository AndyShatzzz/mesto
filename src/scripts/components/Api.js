export default class Api {
    constructor({ baseUrl, headers }) {
      this.baseUrl = baseUrl;
      this.headers = headers;
    }

    _checkResult(res) {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
    };
  
    getInitialCards() {
        return fetch(`${this.baseUrl}/cards`, { headers: this.headers })
          .then(this._checkResult);
    }

    getUserInfoValues() {
        return fetch(`${this.baseUrl}/users/me`, { headers: this.headers })
            .then(this._checkResult);
    }

    editProfile({ name, about }) {
      return fetch(`${this.baseUrl}/users/me`, {
        method: 'PATCH',
        headers: this.headers,
        body: JSON.stringify({
          name: name,
          about: about,
        })
      })
      .then(this._checkResult);
    }

    addNewCard({ name, link }) {
      return fetch(`${this.baseUrl}/cards`, {
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify({
          name: name,
          link: link,
        })
      })
          .then(this._checkResult);
    }

    handleDeleteCard(id) {
      return fetch(`${this.baseUrl}/cards/${id}`, {
        method: 'DELETE',
        headers: this.headers,
      })
          .then(this._checkResult);
    }

    toogleStateLike(id, state) {
      return fetch(`${this.baseUrl}/cards/${id}/likes`, {
        method: state,
        headers: this.headers,
        })
          .then(this._checkResult);
    }

    editAvatar({ link }) {
      return fetch(`${this.baseUrl}/users/me/avatar`, {
        method: 'PATCH',
        headers: this.headers,
        body: JSON.stringify({
          avatar: link,
        })
      })
      .then(this._checkResult);
    }
  }

  export const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-66',
    headers: {
      authorization: '6ce3bb91-dfbd-483e-a160-0bbf58c05194',
      'Content-Type': 'application/json'
    }
  });
  
 

  