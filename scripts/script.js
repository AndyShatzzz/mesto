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



// // elementGrid.querySelector('.element__image').src = 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
// // elementGrid.querySelector('.element__text').textContent = 'Архыз';
// // element.append(elementGrid);


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


function createCard (item) {
  let elementGrid = cardTemplate.querySelector('.element__grid').cloneNode(true);
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
  let elementGrid = cardTemplate.querySelector('.element__grid').cloneNode(true);
  elementGrid.querySelector('.element__text').textContent = placeInput.value;
  elementGrid.querySelector('.element__image').src = linkInput.value;
  elementGrid.querySelector('.element__image').alt = placeInput.value;
  return elementGrid;
};

function handleSubmitAddCard (evt) {
  evt.preventDefault();
  const newCardElement = addNewCard();
  addCard(newCardElement);
  closeAddPopup();
};

submitAdd.addEventListener('click', handleSubmitAddCard);

// Функциональность лайка
let elementAbout = document.querySelector('.element__about');
let elementLike = elementAbout.querySelector('.element__like').addEventListener('click', function(evt){
  evt.target.classList.toggle('element__like_active');
});
