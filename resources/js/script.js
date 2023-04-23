const form = document.querySelector('.form');
const nameInput = document.querySelector('.form__name-input');
const emailInput = document.querySelector('.form__email-input');
const messageInput = document.querySelector('.form__message-input');
const formSubmit = document.querySelector('.form__submit');
let nameClickable = false;
let emailClickable = false;
let messageClickable = false;

function onSubmit(e) {
  e.preventDefault();
}

function checkSubmitClickability() {
  if (nameClickable && emailClickable && messageClickable) {
    formSubmit.classList.remove('inactive');
  } else {
    formSubmit.classList.add('inactive');
  }
}

function onInput(e) {
  if (e.target === nameInput) {
    onNameInput(e);
  } else if (e.target === emailInput) {
    onEmailInput(e);
  } else if (e.target === messageInput) {
    onMessageInput(e);
  }
  checkSubmitClickability();
}

function onNameInput(e) {
  if (e.target.value.length === 0) {
    nameInput.style.borderBottom = '1px solid var(--clr-text-semilight)';
    nameClickable = false;
  } else if (!validateName(e.target.value) || e.target.value.length <= 1) {
    nameInput.style.borderBottom = '1px solid var(--clr-warning)';
    nameClickable = false;
  } else {
    nameInput.style.borderBottom = '1px solid var(--clr-primary)';
    nameClickable = true;
  }
}

function validateName(name) {
  const res = /^[a-zA-Z]+$/;
  return res.test(String(name).toLowerCase());
}

function onEmailInput(e) {
  if (validateEmail(e.target.value)) {
    emailInput.style.borderBottom = '1px solid var(--clr-primary)';
    emailClickable = true;
  } else if (!validateEmail(e.target.value) && e.target.value.length >= 1) {
    emailInput.style.borderBottom = '1px solid var(--clr-warning)';
    emailClickable = false;
  } else {
    emailInput.style.borderBottom = '1px solid var(--clr-text-semilight)';
    emailClickable = false;
  }
}

function validateEmail(email) {
  const res = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return res.test(String(email).toLowerCase());
}

function onMessageInput(e) {
  if (e.target.value.length === 0) {
    messageInput.style.borderBottom = '1px solid var(--clr-text-semilight)';
    messageClickable = false;
  } else if (e.target.value.length < 10) {
    messageInput.style.borderBottom = '1px solid var(--clr-warning)';
    messageClickable = false;
  } else {
    messageInput.style.borderBottom = '1px solid var(--clr-primary)';
    messageClickable = true;
  }
}

form.addEventListener('submit', onSubmit);
nameInput.addEventListener('input', onInput);
emailInput.addEventListener('input', onInput);
messageInput.addEventListener('input', onInput);
