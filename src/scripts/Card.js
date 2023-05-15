export class Card {
  constructor(data, templateSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._cardElement = this._getTemplate();
    this._cardImage = this._cardElement.querySelector('.element__image');
    this._cardText = this._cardElement.querySelector('.element__text');
    this._cardLike = this._cardElement.querySelector('.element__like');
    this._cardBasket = this._cardElement.querySelector('.element__basket');
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardTemplate = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.element__grid')
      .cloneNode(true);
    return cardTemplate;
  }

  _handleRemoveCard() {
    this._cardElement.remove();
    this._cardBasket.remove();
    this._cardElement = null;
  };

  _handleCardLike() {
    this._cardLike.classList.toggle('element__like_active');
  };

  _setEventListeners() {
    this._cardBasket.addEventListener('click', () => {
      this._handleRemoveCard();
    })

    this._cardLike.addEventListener('click', () => {
      this._handleCardLike();
    })

    this._cardImage.addEventListener('click', () => {
      this._handleCardClick({ name: this._name, link: this._link });
    })
  };

  generateCard() {
    this._cardImage.src = this._link;
    this._cardText.textContent = this._name;
    this._cardImage.alt = this._name;
    this._setEventListeners();
    return this._cardElement;
  };
};