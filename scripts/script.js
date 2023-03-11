let buttonEdit = document.querySelector('.profile__edit-button');
let formElement = document.querySelector('.popup__form');
let nameInput = formElement.querySelector('#input-name');
let jobInput = formElement.querySelector('#input-job');
let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');
let saveButton = formElement.querySelector('.popup__submit');
let buttonClose = document.querySelector('.popup__close');
let popup = document.querySelector('.popup');

function openPopup() {
    popup.classList.add('popup_opened');
    nameInput.value = profileName.textContent;
    jobInput.value = profileAbout.textContent;
}

buttonEdit.addEventListener('click', openPopup);


function closePopup() {
    popup.classList.remove('popup_opened');
}

buttonClose.addEventListener('click', closePopup);

function handleFormSubmit (evt) {
    evt.preventDefault(); 
    profileName.textContent = nameInput.value;
    profileAbout.textContent = jobInput.value;
    closePopup();
}

formElement.addEventListener('submit', handleFormSubmit);