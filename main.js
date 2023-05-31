(()=>{"use strict";var e=document.querySelector(".profile__edit-button"),t=document.querySelector(".profile__add-button"),r=document.querySelector("#form-edit"),n=r.querySelector("#name-input"),o=r.querySelector("#job-input"),i=(document.querySelector(".profile__name"),document.querySelector(".profile__about"),document.querySelector(".profile__avatar"),document.querySelector(".popup__close_type_edit-profile"),document.querySelector(".popup__close_type_add-card"),document.querySelector(".popup_type_edit-profile"),document.querySelector(".popup_type_add-card"),document.querySelector("#submit__edit")),u=document.querySelector("#submit__add"),a=document.querySelector("#submit__avatar"),c=document.querySelector("#submit__delete-card"),l=document.querySelector("#element__grid").content,s=document.querySelector("#el__card"),f=l.querySelector(".element__grid"),p=(f.querySelector("#element__basket"),f.querySelector(".element__image"),document.querySelector("#form-add")),y=(document.querySelector("#place-input"),document.querySelector("#link-input"),document.querySelector(".popup_type_img-fullscreen"),document.querySelector(".popup__image"),document.querySelector(".popup__text"),document.querySelector(".popup__close_type_img-fullscreen"),document.querySelectorAll(".popup__close"),document.querySelectorAll(".popup__overlay"),document.querySelector(".profile__avatar-edit")),d=document.querySelector("#form-edit-avatar"),h={start:"Сохранить",loading:"Сохранение..."},m={start:"Создать",loading:"Создание..."},v={start:"Да",loading:"Удаление..."},_={formSelector:".popup__form",inputSelector:".popup__input",buttonSelector:".popup__submit",fieldSetSelector:".popup__set",inactiveButtonClass:"popup__submit_type_inactive",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_type_active"};function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function S(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==b(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==b(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===b(o)?o:String(o)),n)}var o}var g=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._settings=t,this._formElement=r,this._inputList=this._getInputList(),this._buttonElement=this._formElement.querySelector(this._settings.buttonSelector)}var t,r;return t=e,(r=[{key:"_getInputList",value:function(){return Array.from(this._formElement.querySelectorAll(this._settings.inputSelector))}},{key:"_showInputError",value:function(e,t){var r=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(this._settings.inputErrorClass),r.textContent=t,r.classList.add(this._settings.errorClass)}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._settings.inputErrorClass),t.classList.remove(this._settings.errorClass),t.textContent=""}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(this._inputList,this._buttonElement),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState(e._inputList,e._buttonElement)}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this.disabledButtonSubmit():(this._buttonElement.classList.remove(this._settings.inactiveButtonClass),this._buttonElement.disabled=!1)}},{key:"removeErrors",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t)}))}},{key:"disabledButtonSubmit",value:function(){this._buttonElement.disabled=!0,this._buttonElement.classList.add(this._settings.inactiveButtonClass)}}])&&S(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function k(e){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(e)}function w(e){return function(e){if(Array.isArray(e))return E(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return E(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?E(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function j(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==k(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==k(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===k(o)?o:String(o)),n)}var o}var O=function(){function e(t,r,n,o,i,u){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t.name,this._link=t.link,this._owner=t.owner,this._id=t._id,this._userId=i,this._like=t.likes,this._likes=w(t.likes).length,this._handleCardLikeState=u,this._templateSelector=r,this._cardElement=this._getTemplate(),this._cardImage=this._cardElement.querySelector(".element__image"),this._cardText=this._cardElement.querySelector(".element__text"),this._cardLike=this._cardElement.querySelector(".element__like"),this._cardLikeCounter=this._cardElement.querySelector(".element__counter"),this._cardBasket=this._cardElement.querySelector(".element__basket"),this._handleCardClick=n,this._handleOpenPopupDelete=o,this._checkLike(this._like)&&this._handleCardLike()}var t,r;return t=e,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".element__grid").cloneNode(!0)}},{key:"handleRemoveCard",value:function(){this._cardElement.remove(),this._cardElement=null}},{key:"_handleCardLikeCounter",value:function(){this._cardLikeCounter.textContent=this._like.length}},{key:"_handleCardLike",value:function(){this._cardLike.classList.toggle("element__like_active")}},{key:"removeCardBasket",value:function(){this._owner._id!==this._userId&&this._cardBasket.remove()}},{key:"getCardId",value:function(){return this._id}},{key:"_checkLike",value:function(e){var t=this;return w(e).some((function(e){return e._id===t._userId}))}},{key:"changeLikeStatus",value:function(e){this._like=e,this._handleCardLikeCounter(),this._handleCardLike()}},{key:"setEventListeners",value:function(){var e=this;this.removeCardBasket(),this._cardBasket.addEventListener("click",(function(){e._handleOpenPopupDelete(e)})),this._cardLike.addEventListener("click",(function(){e._checkLike(e._like)?e._handleCardLikeState(e._id,"DELETE"):e._handleCardLikeState(e._id,"PUT")})),this._cardImage.addEventListener("click",(function(){e._handleCardClick({name:e._name,link:e._link})}))}},{key:"generateCard",value:function(){return this._cardImage.src=this._link,this._cardText.textContent=this._name,this._cardImage.alt=this._name,this._handleCardLikeCounter(),this.setEventListeners(),this._cardElement}}])&&j(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function P(e){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P(e)}function C(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==P(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==P(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===P(o)?o:String(o)),n)}var o}var L=function(){function e(t,r){var n=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=n,this._container=r}var t,r;return t=e,(r=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"renderer",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}}])&&C(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function q(e){return q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q(e)}function I(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==q(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==q(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===q(o)?o:String(o)),n)}var o}var R=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,r;return t=e,(r=[{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){t.target.classList.contains("popup_opened")&&e.close(),t.target.classList.contains("popup__close")&&e.close()}))}},{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}}])&&I(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function T(e){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},T(e)}function U(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==T(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==T(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===T(o)?o:String(o)),n)}var o}function x(){return x="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=B(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},x.apply(this,arguments)}function A(e,t){return A=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},A(e,t)}function B(e){return B=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},B(e)}var D=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&A(e,t)}(u,e);var t,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=B(n);if(o){var r=B(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===T(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._link=document.querySelector(".popup__image"),t._name=document.querySelector(".popup__text"),t}return t=u,(r=[{key:"open",value:function(e){this._link.src=e.link,this._link.alt=e.name,this._name.textContent=e.name,x(B(u.prototype),"open",this).call(this)}}])&&U(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(R);function V(e){return V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},V(e)}function N(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==V(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==V(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===V(o)?o:String(o)),n)}var o}function F(){return F="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=M(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},F.apply(this,arguments)}function J(e,t){return J=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},J(e,t)}function M(e){return M=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},M(e)}var H=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&J(e,t)}(u,e);var t,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=M(n);if(o){var r=M(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===V(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e,t){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,e))._submitForm=t,r._inputList=r._popup.querySelectorAll(".popup__input"),r}return t=u,(r=[{key:"_getInputValues",value:function(){var e={};return this._inputList.forEach((function(t){e[t.name]=t.value})),e}},{key:"setEventListeners",value:function(){var e=this;this._form=this._popup.querySelector(".popup__form"),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._submitForm(e._getInputValues())})),F(M(u.prototype),"setEventListeners",this).call(this)}},{key:"close",value:function(){F(M(u.prototype),"close",this).call(this),this._form.reset()}}])&&N(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(R);function $(e){return $="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},$(e)}function z(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==$(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==$(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===$(o)?o:String(o)),n)}var o}var G=function(){function e(t){var r=t.nameSelector,n=t.aboutSelector,o=t.avatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(r),this._about=document.querySelector(n),this._avatar=document.querySelector(o)}var t,r;return t=e,(r=[{key:"getUserId",value:function(){return this._id}},{key:"getUserInfo",value:function(){return{name:this._name.textContent,about:this._about.textContent,avatar:this._avatar.src}}},{key:"setUserInfo",value:function(e){var t=e.name,r=e.about,n=e.avatar,o=e._id;this._name.textContent=t,this._about.textContent=r,this._avatar.src=n,this._id=o}}])&&z(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function K(e){return K="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},K(e)}function Q(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==K(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==K(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===K(o)?o:String(o)),n)}var o}function W(){return W="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=Y(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},W.apply(this,arguments)}function X(e,t){return X=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},X(e,t)}function Y(e){return Y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},Y(e)}var Z=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&X(e,t)}(u,e);var t,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=Y(n);if(o){var r=Y(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===K(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e,t){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,e))._buttonSubmit=r._popup.querySelector(".popup__submit"),r._popupForm=r._popup.querySelector(".popup__form"),r._handleRemoveCards=t,r._card=null,r}return t=u,(r=[{key:"open",value:function(e){W(Y(u.prototype),"open",this).call(this),this._card=e}},{key:"setEventListeners",value:function(){var e=this;W(Y(u.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(t){t.preventDefault(),e._handleRemoveCards(e._card)}))}}])&&Q(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(R);function ee(e){return ee="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ee(e)}function te(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==ee(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==ee(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===ee(o)?o:String(o)),n)}var o}var re=new(function(){function e(t){var r=t.baseUrl,n=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.baseUrl=r,this.headers=n}var t,r;return t=e,(r=[{key:"_checkResult",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getInitialCards",value:function(){return fetch("".concat(this.baseUrl,"/cards"),{headers:this.headers}).then(this._checkResult)}},{key:"getUserInfoValues",value:function(){return fetch("".concat(this.baseUrl,"/users/me"),{headers:this.headers}).then(this._checkResult)}},{key:"editProfile",value:function(e){var t=e.name,r=e.about;return fetch("".concat(this.baseUrl,"/users/me"),{method:"PATCH",headers:this.headers,body:JSON.stringify({name:t,about:r})}).then(this._checkResult)}},{key:"addNewCard",value:function(e){var t=e.name,r=e.link;return fetch("".concat(this.baseUrl,"/cards"),{method:"POST",headers:this.headers,body:JSON.stringify({name:t,link:r})}).then(this._checkResult)}},{key:"handleDeleteCard",value:function(e){return fetch("".concat(this.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this.headers}).then(this._checkResult)}},{key:"toogleStateLike",value:function(e,t){return fetch("".concat(this.baseUrl,"/cards/").concat(e,"/likes"),{method:t,headers:this.headers}).then(this._checkResult)}},{key:"editAvatar",value:function(e){var t=e.link;return fetch("".concat(this.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this.headers,body:JSON.stringify({avatar:t})}).then(this._checkResult)}}])&&te(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-66",headers:{authorization:"6ce3bb91-dfbd-483e-a160-0bbf58c05194","Content-Type":"application/json"}});function ne(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var oe=new D(".popup_type_img-fullscreen");oe.setEventListeners();var ie=new Z(".popup_type_delete-card",(function(e){var t=this;return ae(c,v,!0),re.handleDeleteCard(e.getCardId()).then(e.handleRemoveCard()).then((function(){return t.close()})).catch((function(e){console.log(e)})).finally((function(){return ae(c,v,!1)}))}));function ue(e){ie.open(e)}function ae(e,t,r){e.textContent=r?t.loading:t.start}function ce(e){oe.open(e)}ie.setEventListeners();var le=new g(_,r);le.enableValidation();var se=new g(_,p);se.enableValidation(),new g(_,d).enableValidation();var fe=new L({renderer:function(e){fe.addItem(pe(e))}},s);function pe(e){return new O(e,"#element__grid",ce,ue,de.getUserId(),he).generateCard()}Promise.all([re.getUserInfoValues(),re.getInitialCards()]).then((function(e){var t,r,n=(r=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,u,a=[],c=!0,l=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(a.push(n.value),a.length!==t);c=!0);}catch(e){l=!0,o=e}finally{try{if(!c&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(t,r)||function(e,t){if(e){if("string"==typeof e)return ne(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?ne(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],i=n[1];de.setUserInfo(o),fe.renderer(i.reverse())})).catch((function(e){console.log(e)}));var ye=new H(".popup_type_add-card",(function(e){var t=this;return ae(u,m,!0),re.addNewCard(e).then((function(e){return fe.addItem(pe(e))})).then((function(){return t.close()})).catch((function(e){console.log(e)})).finally((function(){return ae(u,m,!1)}))}));ye.setEventListeners();var de=new G({nameSelector:".profile__name",aboutSelector:".profile__about",avatarSelector:".profile__avatar"});function he(e,t){var r=this;return re.toogleStateLike(e,t).then((function(e){r.changeLikeStatus(e.likes)})).catch((function(e){console.log(e)}))}var me=new H(".popup_type_edit-avatar",(function(e){var t=this;return ae(a,h,!0),re.editAvatar(e).then((function(e){return de.setUserInfo(e)})).then((function(){return t.close()})).catch((function(e){console.log(e)})).finally((function(){return ae(a,h,!1)}))}));me.setEventListeners();var ve=new H(".popup_type_edit-profile",(function(e){var t=this;return ae(i,h,!0),re.editProfile(e).then((function(e){de.setUserInfo(e)})).then((function(){return t.close()})).catch((function(e){console.log(e)})).finally((function(){return ae(i,h,!1)}))}));ve.setEventListeners(),t.addEventListener("click",(function(){ye.open(),se.removeErrors(),se.disabledButtonSubmit()})),e.addEventListener("click",(function(){var e;ve.open(),e=de.getUserInfo(),n.value=e.name,o.value=e.about,le.removeErrors(),le.disabledButtonSubmit()})),y.addEventListener("click",(function(){me.open(),le.removeErrors(),le.disabledButtonSubmit()}))})();