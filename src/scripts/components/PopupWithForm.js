import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor( popupSelector, submitForm ) {
        super(popupSelector);
        this._submitForm = submitForm;
        this._inputList = this._popup.querySelectorAll('.popup__input');
    }

    _getInputValues() {
        const formElement = {};
        this._inputList.forEach( (item) => {
            formElement[item.name] = item.value;
        });
        return formElement;
    }

    setEventListeners() {
        this._form = this._popup.querySelector('.popup__form');
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submitForm(this._getInputValues());
            // this.close();
        });
        super.setEventListeners();
    }

    close() {
        super.close();
        this._form.reset();
    }
}