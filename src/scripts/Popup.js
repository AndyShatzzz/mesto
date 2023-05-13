export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
    }

    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this.close();
        }
    }

    setEventListeners() {
        document.addEventListener('mousedown', (evt) => {
            this._handleEscClose(evt);
        });

        this._popup.addEventListener('mousedown', (evt) => {
                if (evt.target.classList.contains('popup_opened')) {
                    this.close();
                }
                if (evt.target.classList.contains('popup__close')) {
                    this.close();
                }
            })
        document.addEventListener('keydown', (evt) =>{
            this._handleEscClose(evt);
        });
    }

    open() {
        this._popup.classList.add('popup_opened');
    }

    close() {
        this._popup.classList.remove('popup_opened');
    }
}