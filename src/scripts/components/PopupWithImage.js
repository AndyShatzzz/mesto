import Popup from './Popup.js';


export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._link = document.querySelector('.popup__image');
        this._name = document.querySelector('.popup__text');
    }

    open(data) {
        this._link.src = data.link;
        this._link.alt = data.name;
        this._name.textContent = data.name;
        super.open();
    }
}