const formLink = document.querySelector(".section-map-button");
const formPopup = document.querySelector(".modal-form");
const formClose = document.querySelector(".modal-close");
const formName = document.querySelector(".modal-name");
const formEmail = document.querySelector(".modal-email");
const formText = document.querySelector(".modal-text");
const formMain = document.querySelector(".login-form");

let isStorageSupport = true;
let storage = "";

try {
    storage = localStorage.getItem("login");
} catch (err) {
    isStorageSupport = false;
}

formLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    formPopup.classList.add("modal-show");
    if (formName.value = storage) {
        formEmail.focus();
    } else if (formEmail.value = storage) {
        formText.focus();
    } else {
        formName.focus();
    }
});

formClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    formPopup.classList.remove("modal-show");
    formPopup.classList.remove("modal-error");
});

formMain.addEventListener("submit", function (evt) {
    if (!formName.value || !formEmail.value) {
        evt.preventDefault();
        formPopup.classList.remove("modal-error");
        formPopup.offsetWidth = formPopup.offsetWidth;
        formPopup.classList.add("modal-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("name", formName.value);
            localStorage.setItem("email", formEmail.value);
        }
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (formPopup.classList.contains("modal-show")) {
            evt.preventDefault();
            formPopup.classList.remove("modal-show");
            formPopup.classList.remove("modal-error");
        }
    }
});

// SLIDER 

const slideLinkOne = document.querySelector(".slider-item1");
const slideLinkTwo = document.querySelector(".slider-item2");
const slideLinkThree = document.querySelector(".slider-item3");
const slideButtonOne = document.querySelector(".slide-button1");
const slideButtonTwo = document.querySelector(".slide-button2");
const slideButtonThree = document.querySelector(".slide-button3");


slideButtonOne.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (slideButtonOne != slideButtonOne.classList.contains("current")) {
        slideButtonOne.classList.add("current");
        slideButtonTwo.classList.remove("current");
        slideButtonThree.classList.remove("current");
    }
    if (slideLinkOne != slideLinkOne.classList.contains("slide-current")) {
        slideLinkOne.classList.add("slide-current");
        slideLinkTwo.classList.remove("slide-current");
        slideLinkThree.classList.remove("slide-current");
    }
});

slideButtonTwo.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (slideButtonTwo != slideButtonTwo.classList.contains("current")) {
        slideButtonTwo.classList.add("current");
        slideButtonOne.classList.remove("current");
        slideButtonThree.classList.remove("current");
    } 
    if (slideLinkTwo != slideLinkTwo.classList.contains("slide-current")) {
        slideLinkTwo.classList.add("slide-current");
        slideLinkOne.classList.remove("slide-current");
        slideLinkThree.classList.remove("slide-current");
    } 
});

slideButtonThree.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (slideButtonThree != slideButtonThree.classList.contains("current")) {
        slideButtonThree.classList.add("current");
        slideButtonTwo.classList.remove("current");
        slideButtonOne.classList.remove("current");
    } 
    if (slideLinkThree != slideLinkThree.classList.contains("slide-current")) {
        slideLinkThree.classList.add("slide-current");
        slideLinkTwo.classList.remove("slide-current");
        slideLinkOne.classList.remove("slide-current");
    } 
});