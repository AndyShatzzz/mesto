// Управление отображением информации о пользователе на странице.

export default class UserInfo {
    constructor({ nameSelector, aboutSelector, avatarSelector }) {
        this._name = document.querySelector(nameSelector);
        this._about = document.querySelector(aboutSelector);
        this._avatar = document.querySelector(avatarSelector);

    }

    getUserId() {
        return this._id;
    }

    getUserInfo() {
        const userInfo = {
            name: this._name.textContent,
            about: this._about.textContent,
            avatar: this._avatar.src,
        }
        return userInfo;
    }

    setUserInfo({ name, about, avatar, _id }) {
        this._name.textContent = name;
        this._about.textContent = about;
        this._avatar.src = avatar;
        this._id = _id;
    }
}