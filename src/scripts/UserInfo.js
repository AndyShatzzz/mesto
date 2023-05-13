// Управление отображением информации о пользователе на странице.

export default class UserInfo {
    constructor({ nameSelector, aboutSelector }) {
        this._name = document.querySelector(nameSelector);
        this._about = document.querySelector(aboutSelector);
    }

    getUserInfo() {
        const userInfo = {
            name: this._name.textContent,
            about: this._about.textContent,
        }
        return userInfo;
    }

    setUserInfo({
        inputName: name,
        inputJob: about,
    }) {
        this._name.textContent = name;
        this._about.textContent = about;
    }
}