const buttonEdit = document.querySelector('.profile__edit-button');
const buttonAdd = document.querySelector('.profile__add-button');
const formElementEdit = document.querySelector('#form-edit');
const nameInput = formElementEdit.querySelector('#input-name');
const jobInput = formElementEdit.querySelector('#input-job');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
const buttonCloseEdit = document.querySelector('.popup__close_type_edit-profile');
const buttonCloseAdd = document.querySelector('.popup__close_type_add-card');
const popupEdit = document.querySelector('.popup_type_edit-profile');
const popupAdd = document.querySelector('.popup_type_add-card');
const submitEdit = document.querySelector('#submit__edit');
const submitAdd = document.querySelector('#submit__add');
const cardTemplate = document.querySelector('#element__grid').content;
const element = document.querySelector('#el__card');
const elementGrid = cardTemplate.querySelector('.element__grid');
const buttonBasket = elementGrid.querySelector('#element__basket');
const image = elementGrid.querySelector('.element__image');
const formElementAdd = document.querySelector('#form-add');
const placeInput = document.querySelector('#input-place');
const linkInput = document.querySelector('#input-link');
const imgPopup = document.querySelector('.popup_type_img-fullscreen');
const imageFromPopup = document.querySelector('.popup__image');
const textFromPopup = document.querySelector('.popup__text');
const buttonCloseImage = document.querySelector('.popup__close_type_img-fullscreen');

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
};
//функция закрытия попапа
function closePopup (item) {
  item.classList.remove('popup_opened');
};

// Функция открытие попапа картинки на весь экран
function openImgPopup(evt) {
  createImgPopup(evt);
  openPopup(imgPopup);
};

// Функция изменения Имени и Профессии.
function handleFormEditSubmit (evt) {
  evt.preventDefault(); 
  profileName.textContent = nameInput.value;
  profileAbout.textContent = jobInput.value;
  closePopup(popupEdit);
};

// Функция добавления новой карточки по event
function handleSubmitAddCard (evt) {
  evt.preventDefault();
  const newCardElement = createCard(evt);
  element.prepend(newCardElement);
  closePopup(popupAdd);
};

// Функция для лайков
function handleCardLike(evt) {
  if (evt.target.classList.contains('element__like')) {
    evt.target.classList.toggle('element__like_active');
  };
};

// Функция для удаления по клику на корзинку
function handleRemoveCard(evt) {
  if (evt.target.classList.contains('element__basket')) {
    const cardTarget = evt.target.closest('.element__grid');
  cardTarget.remove();
  };
};

// Функция создания карточки
function createCard (item) {
  const elementGrid = cardTemplate.querySelector('.element__grid').cloneNode(true);
  elementGrid.querySelector('.element__image').src = item.link || linkInput.value;
  elementGrid.querySelector('.element__text').textContent = item.name || placeInput.value;
  elementGrid.querySelector('.element__image').alt = item.name || placeInput.value;
  elementGrid.querySelector('.element__image').addEventListener('click', function(evt){
    openImgPopup(evt);
  });
  return elementGrid;
};

// Функция добавления карточки
function addCard(item) {
  element.append(item);
};

// Функция рендера карточек
function renderCards () {
  initialCards.forEach(item => {
    const cardElement = createCard(item);
    addCard(cardElement);
  });
};
renderCards();

// Функция создания попапа с картинками на весь экран
function createImgPopup(evt) {
  const eTarget = evt.target;
  imageFromPopup.src = eTarget.src;
  textFromPopup.textContent = eTarget.alt;
  imageFromPopup.alt = eTarget.alt;
};

// Слушатель открытия формы редактирования профиля.
buttonEdit.addEventListener('click', function () {
  nameInput.value = profileName.textContent;
  jobInput.value = profileAbout.textContent;
  openPopup(popupEdit);
});

// Слушатель закрытия попапа редактирования профиля
buttonCloseEdit.addEventListener('click', function() {
  closePopup(popupEdit);
});

// Слушатель открытия попапа добавления карточки
buttonAdd.addEventListener('click', function(){
  placeInput.value = '';
  linkInput.value = '';
  openPopup(popupAdd);
});

// Слушатель закрытия попапа добавления карточки
buttonCloseAdd.addEventListener('click', function() {
  closePopup(popupAdd);
});

// Слушатель закрытия попапа картинки на весь экран
buttonCloseImage.addEventListener('click', function() {
  closePopup(imgPopup);
});

// Слушатель изменения Имени и Профессии.
formElementEdit.addEventListener('submit', handleFormEditSubmit);

// Организатор событий по event
element.addEventListener('click', evt => {
  handleRemoveCard(evt);
  handleCardLike(evt);
});

// Слушатель добавления новой карточки
formElementAdd.addEventListener('submit', handleSubmitAddCard);