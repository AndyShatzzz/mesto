import {
    placeInput,
    linkInput,
    imgPopup,
    imageFromPopup,
    textFromPopup,
    buttonCloseImage,
    popupContainers,
  } from './Constans.js'
  
export class Card {
    constructor(name, link, templateSelector) {
      this._templateSelector = templateSelector;
      this._name = name;
      this._link = link;
    }
  
    _getTemplate () {
      const cardTemplate = document
        .querySelector('#element__grid')
        .content
        .querySelector('.element__grid')
        .cloneNode(true);
  
      return cardTemplate;
    }
  
      _handleOpenPopup () {
      imgPopup.classList.add('popup_opened');
      document.addEventListener('keydown', this._closeByEscape);
    };
  
    _handleClosePopup () {
      imgPopup.classList.remove('popup_opened');
      document.removeEventListener('keydown', this._closeByEscape);
    };
  
    _openImgPopup(evt) {
    this._createImgPopup(evt);
    this._handleOpenPopup(imgPopup);
  };
  
    _createImgPopup(evt) {
      const eTarget = evt.target;
      imageFromPopup.src = eTarget.src;
      textFromPopup.textContent = eTarget.alt;
      imageFromPopup.alt = eTarget.alt;
    };
  
    _handleRemoveCard(evt) {
      if (evt.target.classList.contains('element__basket')) {
        const cardTarget = evt.target.closest('.element__grid');
      cardTarget.remove();
      };
    };
    
    _handleCardLike(evt) {
      if (evt.target.classList.contains('element__like')) {
        evt.target.classList.toggle('element__like_active');
      };
    };
  
    _addCard() {
      this._templateSelector.append(this._element);
    };
  
    _setEventListeners() {
      let image = document.querySelectorAll('.element__image');
      image.forEach(item => {
        item.addEventListener('click', (evt) => {
          this._openImgPopup(evt);
        });
      })
        
      buttonCloseImage.addEventListener('click', () => {
        this._handleClosePopup();
      });
      document.addEventListener('keydown', (evt) => {
        if (evt.key === 'Escape') {
          this._handleClosePopup();
        }
      });
      popupContainers.forEach((item) => {
      const popup = item.closest('.popup');
      popup.addEventListener('click', (evt) => {
        if (evt.currentTarget === evt.target) {
          this._handleClosePopup();
        }
      });
    });
      this._element.addEventListener('click', evt => {
      this._handleRemoveCard(evt);
      this._handleCardLike(evt);
    });
    };
  
    createCard() {
      this._element = this._getTemplate();
      this._element.querySelector('.element__image').src = linkInput.value || this._link;
      this._element.querySelector('.element__text').textContent = placeInput.value || this._name;
      this._element.querySelector('.element__image').alt = placeInput.value || this._name;
      this._addCard();
      this._setEventListeners();
      return this._element;
      
    };
    };