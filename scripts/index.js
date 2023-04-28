import {
  buttonEdit,
  buttonAdd,
  formElementEdit,
  nameInput,
  jobInput,
  profileName,
  profileAbout,
  popupEdit,
  popupAdd,
  element,
  formElementAdd,
  placeInput,
  linkInput,
  closeButtons,
  popupContainers,
} from './Constans.js';
import { validationSettings, FormValidation } from './FormValidator.js';
import {Card} from './Card.js';



// Массив карточек по умолчанию.
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

//функция открытия попапа
function openPopup (item) {
  item.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape);
};

//функция закрытия попапа
function closePopup (item) {
  item.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape);
};

// Функция закрытия всех попапов по крестику
closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

// Функции для закрытия попапов по оверлею по Esc 
function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

// Функции для закрытия попапов по оверлею
popupContainers.forEach((item) => {
  const popup = item.closest('.popup');
  popup.addEventListener('click', (evt) => {
    if (evt.currentTarget === evt.target) {
      closePopup(popup);
    }
  });
});

// Функция изменения Имени и Профессии.
function handleFormEditSubmit (evt) {
  evt.preventDefault(); 
  profileName.textContent = nameInput.value;
  profileAbout.textContent = jobInput.value;
  closePopup(popupEdit);
};

// Слушатель открытия формы редактирования профиля.
buttonEdit.addEventListener('click', function () {
  nameInput.value = profileName.textContent;
  jobInput.value = profileAbout.textContent;
  validFormEdit.disableValidation();
  openPopup(popupEdit);
  validFormEdit.disabledButtonSubmit();
});

// Слушатель открытия попапа добавления карточки
buttonAdd.addEventListener('click', function () {
  formElementAdd.reset();
  validFormAdd.disableValidation();
  openPopup(popupAdd);
  validFormAdd.disabledButtonSubmit();
});

// Слушатель изменения Имени и Профессии.
formElementEdit.addEventListener('submit', handleFormEditSubmit);

// Валидация форм по классу.
const validFormEdit = new FormValidation(validationSettings, formElementEdit);
validFormEdit.enableValidation();
const validFormAdd = new FormValidation(validationSettings, formElementAdd);
validFormAdd.enableValidation();

// Добавление карточек по из массива.
initialCards.forEach(item => {
  const cardFromArr = new Card(item.name, item.link, element);
  cardFromArr.createCard();
});

// Добавление карточек через форму по инпутам.
formElementAdd.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const cardFromInput = new Card(placeInput.value, linkInput.value, element);
  const cardElement = cardFromInput.createCard();
  element.prepend(cardElement);
  closePopup(popupAdd);
});