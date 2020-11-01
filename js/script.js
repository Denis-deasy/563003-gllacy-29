const formLink = document.querySelector(".section-map-button");
const formPopup = document.querySelector(".modal-form");
const formClose = document.querySelector(".modal-close");
const formName = document.querySelector(".modal-name");
const formEmail = document.querySelector(".modal-email");
const formText = document.querySelector(".modal-text");
const formMaim = document.querySelector(".login-modal");

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
    formClose.classList.remove("modal-show");
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