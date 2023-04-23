const form = document.querySelector('.form');
const formInputItems = document.querySelectorAll('.form__input');
const formSubmit = document.querySelector('.form__submit');
const nameInput = document.querySelector('.form__name-input');
const emailInput = document.querySelector('.form__email-input');
const messageInput = document.querySelector('.form__message-input');

function onSubmit(e) {
  e.preventDefault();
  resetValidation();

  const nameInputValue = nameInput.value;
  const emailInputValue = emailInput.value;
  const messageInputValue = messageInput.value;

  if (!validateName(nameInputValue)) {
    addWarning(nameInput);
  } else {
    addGreenLine(nameInput);
  }

  if (!validateEmail(emailInputValue)) {
    addWarning(emailInput);
  } else {
    addGreenLine(emailInput);
  }

  if (!validateMessage(messageInputValue)) {
    addWarning(messageInput);
  } else {
    addGreenLine(messageInput);
  }
}

function resetValidation() {
  formInputItems.forEach((element) => {
    if (element.firstElementChild.nextElementSibling) {
      element.firstElementChild.nextElementSibling.remove();
    }
    if (element.nextElementSibling.classList.contains('form__warning-text')) {
      element.nextElementSibling.remove();
    }
  });
}

function validateName(name) {
  const res = /^[a-zA-Z]+$/;
  return res.test(String(name).toLowerCase());
}

function validateEmail(email) {
  const res = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return res.test(String(email).toLowerCase());
}

function validateMessage(message) {
  if (message.length < 10) {
    return false;
  } else {
    return true;
  }
}

function addWarning(element) {
  const icon = createIcon();
  element.insertAdjacentElement('afterend', icon);

  const warningText = createWarningText();
  element.parentElement.insertAdjacentElement('afterend', warningText);

  element.parentElement.style.borderBottom = '1px solid var(--clr-warning)';
  element.parentElement.style.marginBottom = '0.25rem';
}

function addGreenLine(element) {
  element.parentElement.style.borderBottom = '1px solid var(--clr-primary)';
}

function createIcon() {
  const icon = document.createElement('i');
  icon.classList = 'fa-regular fa-circle-xmark';
  return icon;
}

function createWarningText() {
  const warningText = document.createElement('p');
  warningText.classList = 'form__warning-text';
  warningText.innerText = 'Sorry, invalid format';
  return warningText;
}

form.addEventListener('submit', onSubmit);
