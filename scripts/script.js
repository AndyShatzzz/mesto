let buttonEdit = document.querySelector('.profile__edit-button');
let buttonAdd = document.querySelector('.profile__add-button');
let formElement = document.querySelector('.popup__form');
let nameInput = formElement.querySelector('#input-name');
let jobInput = formElement.querySelector('#input-job');
let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');
let buttonCloseEdit = document.querySelector('.popup__close_type_edit-profile');
let buttonCloseAdd = document.querySelector('.popup__close_type_add-card');
let popupEdit = document.querySelector('.popup_type_edit-profile');
let popupAdd = document.querySelector('.popup_type_add-card');
let submitEdit = document.querySelector('#submit__edit');
let submitAdd = document.querySelector('#submit__add');

// Открытие формы редактирования профиля.
function openEditPopup() {
    popupEdit.classList.add('popup_opened');
    nameInput.value = profileName.textContent;
    jobInput.value = profileAbout.textContent;
}

buttonEdit.addEventListener('click', openEditPopup);


function closeEditPopup() {
    popupEdit.classList.remove('popup_opened');
}

buttonCloseEdit.addEventListener('click', closeEditPopup);

// Функция изменения Имени и Профессии.
function handleFormSubmit (evt) {
    evt.preventDefault(); 
    profileName.textContent = nameInput.value;
    profileAbout.textContent = jobInput.value;
    closeEditPopup();
};

submitEdit.addEventListener('click', handleFormSubmit);

// Открытие формы добавления карточек.
function openAddPopup() {
    popupAdd.classList.add('popup_opened');
};

buttonAdd.addEventListener('click', openAddPopup);

function closeAddPopup() {
    popupAdd.classList.remove('popup_opened');
};

buttonCloseAdd.addEventListener('click', closeAddPopup);

// Добавление карточек массива по умолчанию.
let cardTemplate = document.querySelector('#element__grid').content;
let element = document.querySelector('#el__card');


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

// Функция для лайков
function handleCardLike(evt) {
  if (evt.target.classList.contains('element__like')) {
    evt.target.classList.toggle('element__like_active');
  };
};

// Функция для удаления по клику на корзинку
const elementGrid = cardTemplate.querySelector('.element__grid');
const buttonBasket = elementGrid.querySelector('#element__basket');

function handleRemoveCard(evt) {
  if (evt.target.classList.contains('element__basket')) {
    const cardTarget = evt.target.closest('.element__grid');
  cardTarget.remove();
  };
};

element.addEventListener('click', evt => {
  handleRemoveCard(evt);
  handleCardLike(evt);
});

function createCard (item) {
  const elementGrid = cardTemplate.querySelector('.element__grid').cloneNode(true);
  elementGrid.querySelector('.element__image').src = item.link;
  elementGrid.querySelector('.element__text').textContent = item.name;
  elementGrid.querySelector('.element__image').alt = item.name;
  return elementGrid;
};

function addCard(item) {
  element.append(item);
};

function renderCards () {
  initialCards.forEach(item => {
    const cardElement = createCard(item);
    addCard(cardElement);
  });
};

renderCards();

// Функция по добавлению новых карточек по ссылкам
let placeInput = document.querySelector('#input-place');
let linkInput = document.querySelector('#input-link');

function addNewCard () { 
  const elementGrid = cardTemplate.querySelector('.element__grid').cloneNode(true);
  elementGrid.querySelector('.element__text').textContent = placeInput.value;
  elementGrid.querySelector('.element__image').src = linkInput.value;
  elementGrid.querySelector('.element__image').alt = placeInput.value;
  return elementGrid;
};

function handleSubmitAddCard (evt) {
  evt.preventDefault();
  const newCardElement = addNewCard();
  element.prepend(newCardElement);
  closeAddPopup();
};

submitAdd.addEventListener('click', handleSubmitAddCard);

// Функция открытия картинки на весь экран
const image = elementGrid.querySelector('.element__image');
image.addEventListener(click, function() {
  image.classList.toggle('element__image_type_opened');
});