import Popup from './Popup.js';

export default class PopupWithSubmit extends Popup {
    constructor(popupSelector, handleRemoveCards) {
        super(popupSelector);
        this._buttonSubmit = this._popup.querySelector('.popup__submit');
        this._popupForm = this._popup.querySelector('.popup__form');
        this._handleRemoveCards = handleRemoveCards;
        this._card = null;
    }

    open(card) {
        super.open();
        this._card = card;
    }

    setEventListeners(){
        super.setEventListeners();
        this._popupForm.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleRemoveCards(this._card);
        })
    }
}