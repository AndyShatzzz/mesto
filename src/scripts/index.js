import '../pages/index.css';

import {
    buttonEdit,
    buttonAdd,
    formElementEdit,
    nameInput,
    jobInput,
    element,
    formElementAdd,
    initialCards,
    validationSettings,
} from './Constans.js';
import { FormValidation } from './FormValidator.js';
import { Card } from './Card.js';
import { Section } from './Section.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';
import UserInfo from './UserInfo.js';

const popupImage = new PopupWithImage('.popup_type_img-fullscreen');
popupImage.setEventListeners();

// Функция создания попапа с картинками на весь экран.
function handleCardClick(data) {
    popupImage.open(data);
};

// Валидация форм по классу.
const validFormEdit = new FormValidation(validationSettings, formElementEdit);
validFormEdit.enableValidation();
const validFormAdd = new FormValidation(validationSettings, formElementAdd);
validFormAdd.enableValidation();

// Функция создания новой карточки.
function createCard(item) {
    const card = new Card(item, '#element__grid', handleCardClick).generateCard();
    return card;
};

// Добавление карточек из массива через класс.
const initialCardsSection = new Section({
    data: initialCards.reverse(),
    renderer: (item) => {
        initialCardsSection.addItem(createCard(item));
    }
}, element);

initialCardsSection.renderer();

// Функция добавление карточек по инпутам.
function submitFormAdd(item) {
    const newCard = createCard(item);
    element.prepend(newCard);
};

// Вызов класса PopupWithForm для создания карточки по инпутам.
const popupClassAdd = new PopupWithForm('.popup_type_add-card', submitFormAdd);
popupClassAdd.setEventListeners();

// Создание класса UserInfo.
const userInfo = new UserInfo({
    nameSelector: '.profile__name',
    aboutSelector: '.profile__about',
});

// Функция сабмита формы редактирования информации о пользователе.
function submitFormEdit(item) {
    userInfo.setUserInfo(item);
};

// Создание класса сабмита формы редактирования информации о пользователе.
const popupClassEditSubmit = new PopupWithForm('.popup_type_edit-profile', submitFormEdit);
popupClassEditSubmit.setEventListeners();

// Функция переноса информации о пользователе в инпут.
function exportFormValues() {
    const infoValues = userInfo.getUserInfo();
    nameInput.value = infoValues.name;
    jobInput.value = infoValues.about;
};

// Слушатель открытия попапа добавления карточки.
buttonAdd.addEventListener('click', () => {
    popupClassAdd.open();
    validFormAdd.removeErrors();
    validFormAdd.disabledButtonSubmit();
});

// Слушатель открытия попапа изменения информации о пользователе.
buttonEdit.addEventListener('click', () => {
    popupClassEditSubmit.open();
    exportFormValues();
    validFormEdit.removeErrors();
    validFormEdit.disabledButtonSubmit();
});