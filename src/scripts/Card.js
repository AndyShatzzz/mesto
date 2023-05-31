export class Card {
  constructor(data, templateSelector, handleCardClick, handleOpenPopupDelete, userId, handleCardLikeState) {
    this._name = data.name;
    this._link = data.link;
    this._owner = data.owner;
    this._id = data._id;
    this._userId = userId;
    this._like = data.likes;
    this._likes = [...data.likes].length;
    this._handleCardLikeState = handleCardLikeState;
    this._templateSelector = templateSelector;
    this._cardElement = this._getTemplate();
    this._cardImage = this._cardElement.querySelector('.element__image');
    this._cardText = this._cardElement.querySelector('.element__text');
    this._cardLike = this._cardElement.querySelector('.element__like');
    this._cardLikeCounter = this._cardElement.querySelector('.element__counter');
    this._cardBasket = this._cardElement.querySelector('.element__basket');
    this._handleCardClick = handleCardClick;
    this._handleOpenPopupDelete = handleOpenPopupDelete;
    if(this._checkLike(this._like)) {
      this._handleCardLike();
    }
  }

  _getTemplate() {
    const cardTemplate = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.element__grid')
      .cloneNode(true);
    return cardTemplate;
  }

  handleRemoveCard() {
    this._cardElement.remove();
    this._cardElement = null;
  };

  _handleCardLikeCounter() {
    this._cardLikeCounter.textContent = this._like.length;
  }

  _handleCardLike() {
    this._cardLike.classList.toggle('element__like_active');
  };

  removeCardBasket() {
    if(this._owner._id !== this._userId) {
      this._cardBasket.remove();
    }
  }

  getCardId() {
      return this._id;
  }

  _checkLike(arr) {
    return [...arr].some((item) => {
      return item._id === this._userId;
    })
  }

  changeLikeStatus(like) {
    this._like = like;
    this._handleCardLikeCounter();
    this._handleCardLike();
  }

  setEventListeners() {
    this.removeCardBasket();
    this._cardBasket.addEventListener('click', () => {
      this._handleOpenPopupDelete(this);
    })

    this._cardLike.addEventListener('click', () => {
      if(this._checkLike(this._like)) {
        this._handleCardLikeState(this._id, 'DELETE');
      } else {
        this._handleCardLikeState(this._id, 'PUT');
      }
    })

    // this._cardLike.addEventListener('click', () => {
    //   this._handleCardLike();
    // })

    this._cardImage.addEventListener('click', () => {
      this._handleCardClick({ name: this._name, link: this._link });
    })
  };

  generateCard() {
    this._cardImage.src = this._link;
    this._cardText.textContent = this._name;
    this._cardImage.alt = this._name;
    this._handleCardLikeCounter();
    this.setEventListeners();
    return this._cardElement;
  };
};