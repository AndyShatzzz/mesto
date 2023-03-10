let buttonEdit = document.querySelector('.profile__edit-button');
let formElement = document.querySelector('.popup__form'); 
let nameInput = formElement.querySelector('.popup__name');
let jobInput = formElement.querySelector('.popup__job');
let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');
let saveButton = formElement.querySelector('.popup__submit');

function openPopup() {
    let popup = document.querySelector('.popup');
    popup.classList.remove('popup_closed');
    nameInput.value = profileName.textContent;
    jobInput.value = profileAbout.textContent;
}

buttonEdit.addEventListener('click', openPopup);

let buttonClose = document.querySelector('.popup__close');
function closePopup() {
    let popup = document.querySelector('.popup');
    popup.classList.add('popup_closed');
}

buttonClose.addEventListener('click', closePopup);

function handleFormSubmit (evt) {
    evt.preventDefault(); 
    profileName.textContent = nameInput.value;
    profileAbout.textContent = jobInput.value;
    closePopup();
}

formElement.addEventListener('submit', handleFormSubmit);