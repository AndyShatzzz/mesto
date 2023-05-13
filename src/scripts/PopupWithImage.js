import Popup from './Popup.js';


export default class PopupWithImage extends Popup {
    constructor(item, popupSelector) {
        super(popupSelector);
        this._image = item;
        this._link = document.querySelector('.popup__image');
        this._name = document.querySelector('.popup__text');
    }

    open() {
        this._link.src = this._image.src;
        this._link.alt = this._image.alt;
        this._name.textContent = this._image.alt;
        super.open();
        super.setEventListeners();
    }
}