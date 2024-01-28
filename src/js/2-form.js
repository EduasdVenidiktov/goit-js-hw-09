'use strict';
const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', onFormInput);
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(ev) {
  ev.preventDefault();

  const name = form.elements.email.value;
  const message = form.elements.message.value;
  const data = {
    name,
    message,
  };
  console.log(data);
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
}

function onFormInput() {
  const name = form.elements.email.value;
  const message = form.elements.message.value;
  const data = {
    name,
    message,
  };

  saveToLs(STORAGE_KEY, data);
  console.log(data);
}

function saveToLs(key, value) {
  const zip = JSON.stringify(value);

  localStorage.setItem(key, zip);
}

function loadFromLs(key) {
  const zip = localStorage.getItem(key);
  const parse = JSON.parse(zip);

  try {
    return JSON.parse(zip);
  } catch {
    return zip;
  }
}

function init() {
  const data = loadFromLs(STORAGE_KEY) || {};
  form.elements.email.value = data.name || '';
  form.elements.message.value = data.message || '';
  console.log(data);
}
init();
