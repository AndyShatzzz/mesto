import '../pages/index.css';

import {
    buttonEdit,
    buttonAdd,
    formElementEdit,
    nameInput,
    jobInput,
    element,
    formElementAdd,
    validationSettings,
    popupAvatarEdit,
    formAvatarEdit,
    buttonSubmitEdit,
    buttonSubmitAdd,
    buttonSubmitAvatar,
    buttonSubmitDeleteCard,
    loadingFormAdd,
    loadingFormEdit,
    loadingFormDeleteCard
} from './Constans.js';
import { FormValidation } from './FormValidator.js';
import { Card } from './Card.js';
import { Section } from './Section.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';
import UserInfo from './UserInfo.js';
import PopupWithSubmit from './PopupWithSubmit.js';

import { api } from './Api.js';

// Вызов класса картинки карточки на весь экран
const popupImage = new PopupWithImage('.popup_type_img-fullscreen');
popupImage.setEventListeners();

// Вызов класса попапа подтверждения удаления карточки
const popupDeleteCard = new PopupWithSubmit('.popup_type_delete-card', handleRemoveCards);
popupDeleteCard.setEventListeners();

// Функция открытия попапа подтверждения удаления карточки
function handleOpenPopupDelete(card) {
  popupDeleteCard.open(card);
};

// Функция изменения состояния кнопки сабмита
function toogleLoadingButton(buttonSubmit, content, isLoading) {
  if(isLoading) {
    buttonSubmit.textContent = content.loading;
  } else {
    buttonSubmit.textContent = content.start;
  }
}

// Функция создания попапа с картинками на весь экран.
function handleCardClick(data) {
    popupImage.open(data);
};

// Валидация форм по классу.
const validFormEdit = new FormValidation(validationSettings, formElementEdit);
validFormEdit.enableValidation();
const validFormAdd = new FormValidation(validationSettings, formElementAdd);
validFormAdd.enableValidation();
const validAvatarEdit = new FormValidation(validationSettings, formAvatarEdit);
validAvatarEdit.enableValidation();

// Вызов класса Section для отрисовки карточек на странице
const initialCardsSection = new Section({
  renderer: (item) => {
      initialCardsSection.addItem(createCard(item));
  }
}, element);

// Промис для одновременной подгрузки информации о пользователе и карточек
Promise.all([api.getUserInfoValues(), api.getInitialCards()])
  .then(([data, InitialCards]) => {
    userInfo.setUserInfo(data);
    initialCardsSection.renderer(InitialCards.reverse());
    })
  .catch((err) => {
      console.log(err);
    });

// Функция создания новой карточки.
function createCard(item) {
  const card = new Card(item, '#element__grid', handleCardClick, handleOpenPopupDelete, userInfo.getUserId(), handleCardLikeState).generateCard();
  return card;
};

// Функция добавление карточек по инпутам.
function submitFormAdd(item) {
  toogleLoadingButton(buttonSubmitAdd, loadingFormAdd, true);
  return api
  .addNewCard(item)
  .then((item) => initialCardsSection.addItem(createCard(item)))
  .then(() => this.close())
  .catch((err) => {
    console.log(err);
  })
  .finally(() => toogleLoadingButton(buttonSubmitAdd, loadingFormAdd, false));
};

// Вызов класса PopupWithForm для создания карточки по инпутам.
const popupClassAdd = new PopupWithForm('.popup_type_add-card', submitFormAdd);
popupClassAdd.setEventListeners();

// Создание класса UserInfo.
const userInfo = new UserInfo({
    nameSelector: '.profile__name',
    aboutSelector: '.profile__about',
    avatarSelector: '.profile__avatar',
});

// Функция сабмита формы редактирования информации о пользователе.
function submitFormEdit(item) {
  toogleLoadingButton(buttonSubmitEdit, loadingFormEdit, true);
  return api
  .editProfile(item)
  .then((res) => {
    userInfo.setUserInfo(res);
  })
  .then(() => this.close())
  .catch((err) => {
    console.log(err);
  })
  .finally(() => toogleLoadingButton(buttonSubmitEdit, loadingFormEdit, false));
};

// Функция удаления карточек
function handleRemoveCards(card) {
  toogleLoadingButton(buttonSubmitDeleteCard, loadingFormDeleteCard, true);
  return api.
  handleDeleteCard(card.getCardId())
  .then(card.handleRemoveCard())
  .then(() => this.close())
  .catch((err) => {
    console.log(err);
  })
  .finally(() => toogleLoadingButton(buttonSubmitDeleteCard, loadingFormDeleteCard, false));
}

// Функция постановки/снятия лайка
function handleCardLikeState(id, state) {
  return api
  .toogleStateLike(id, state)
  .then((res) => {
    this.changeLikeStatus(res.likes);
  })
  .catch((err) => {
    console.log(err);
  });
}

// Создание класса сабмита формы редактирования информации о пользователе.
const popupClassEditAvatar = new PopupWithForm('.popup_type_edit-avatar', submitFormAvatar);
popupClassEditAvatar.setEventListeners();

// Функция изменения аватара на странице
function submitFormAvatar(link) {
  toogleLoadingButton(buttonSubmitAvatar, loadingFormEdit, true);
  return api
  .editAvatar(link)
  .then(res => userInfo.setUserInfo(res))
  .then(() => this.close())
  .catch((err) => {
    console.log(err);
  })
  .finally(() => toogleLoadingButton(buttonSubmitAvatar, loadingFormEdit, false));
}

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

// Слушатель для открытия попапа изменения аватара
popupAvatarEdit.addEventListener('click', () => {
  popupClassEditAvatar.open();
  validFormEdit.removeErrors();
  validFormEdit.disabledButtonSubmit();
})

