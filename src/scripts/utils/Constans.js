const buttonEdit = document.querySelector('.profile__edit-button');
const buttonAdd = document.querySelector('.profile__add-button');
const formElementEdit = document.querySelector('#form-edit');
const nameInput = formElementEdit.querySelector('#name-input');
const jobInput = formElementEdit.querySelector('#job-input');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
const profileAvatar = document.querySelector('.profile__avatar');
const buttonCloseEdit = document.querySelector('.popup__close_type_edit-profile');
const buttonCloseAdd = document.querySelector('.popup__close_type_add-card');
const popupEdit = document.querySelector('.popup_type_edit-profile');
const popupAdd = document.querySelector('.popup_type_add-card');
const buttonSubmitEdit = document.querySelector('#submit__edit');
const buttonSubmitAdd = document.querySelector('#submit__add');
const buttonSubmitAvatar = document.querySelector('#submit__avatar');
const buttonSubmitDeleteCard = document.querySelector('#submit__delete-card');
const cardTemplate = document.querySelector('#element__grid').content;
const element = document.querySelector('#el__card');
const elementGrid = cardTemplate.querySelector('.element__grid');
const buttonBasket = elementGrid.querySelector('#element__basket');
const image = elementGrid.querySelector('.element__image');
const formElementAdd = document.querySelector('#form-add');
const placeInput = document.querySelector('#place-input');
const linkInput = document.querySelector('#link-input');
const imgPopup = document.querySelector('.popup_type_img-fullscreen');
const imageFromPopup = document.querySelector('.popup__image');
const textFromPopup = document.querySelector('.popup__text');
const buttonCloseImage = document.querySelector('.popup__close_type_img-fullscreen');
const closeButtons = document.querySelectorAll('.popup__close');
const popupContainers = document.querySelectorAll('.popup__overlay');
const popupAvatarEdit = document.querySelector('.profile__avatar-edit');
const formAvatarEdit = document.querySelector('#form-edit-avatar');

const loadingFormEdit = {
  start: 'Сохранить',
  loading: 'Сохранение...'
};

const loadingFormAdd = {
  start: 'Создать',
  loading: 'Создание...'
};

const loadingFormDeleteCard = {
  start: 'Да',
  loading: 'Удаление...'
};

const validationSettings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  buttonSelector: '.popup__submit',
  fieldSetSelector: '.popup__set',
  inactiveButtonClass: 'popup__submit_type_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_type_active'
};

export {
    buttonEdit,
    buttonAdd,
    formElementEdit,
    nameInput,
    jobInput,
    profileName,
    profileAbout,
    profileAvatar,
    buttonCloseEdit,
    buttonCloseAdd,
    popupEdit,
    popupAdd,
    buttonSubmitEdit,
    buttonSubmitAdd,
    buttonSubmitAvatar,
    buttonSubmitDeleteCard,
    cardTemplate,
    element,
    elementGrid,
    buttonBasket,
    image,
    formElementAdd,
    placeInput,
    linkInput,
    imgPopup,
    imageFromPopup,
    textFromPopup,
    buttonCloseImage,
    closeButtons,
    popupContainers,
    validationSettings,
    popupAvatarEdit,
    formAvatarEdit,
    loadingFormEdit,
    loadingFormAdd,
    loadingFormDeleteCard,
};