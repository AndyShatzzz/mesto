let editButton = document.querySelector('.profile__edit-button');
function openPopup() {
    let popup = document.querySelector('.popup');
    popup.classList.remove('popup__closed');
}

editButton.addEventListener('click', openPopup);

let closeButton = document.querySelector('.popup__close');
function closePopup() {
    let popup = document.querySelector('.popup');
    popup.classList.add('popup__closed');
}

closeButton.addEventListener('click', closePopup);