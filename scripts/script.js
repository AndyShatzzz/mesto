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
let popupAdd = document.querySelector('.popup_type_add-card')

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
    closePopup();
}

formElement.addEventListener('submit', handleFormSubmit);

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
let element = document.querySelector('.element');
let elementGrid = document.querySelector('.element__grid').cloneNode(true);
elementGrid.querySelector('.element__image').src = 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
elementGrid.querySelector('.element__text').textContent = 'Архыз';
element.append(elementGrid);

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

  console.log(initialCards);

  const cardsAdd = initialCards.forEach(function (item, url) {
    url.
});
    console.log(cardsAdd);