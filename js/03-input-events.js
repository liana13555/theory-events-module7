/*
 * Паттерн «Объект ссылок»
 *
 * События
 * - focus и blur
 * - input и change
 * - Чекбоксы и свойство checked
 */

const refs = {  // Паттерн «Объект ссылок»
  input: document.querySelector('.js-input'),
  nameLabel: document.querySelector('.js-button > span'),
  licenseCheckbox: document.querySelector('.js-license'),
  btn: document.querySelector('.js-button'),
};

// refs.input.addEventListener('focus', onInputFocus);
// refs.input.addEventListener('blur', onInputBlur);
// refs.input.addEventListener('change', onInputChange);  // 'change' исп-ся для чекбоксов и радиобаттонов
// refs.input.addEventListener('input', onInputChange); // 'input' когда изменяется значение события input, каждое изменение внутри input

refs.input.addEventListener('input', onInputChange);

function onInputFocus() {
  console.log('Инпут получил фокус - событие focus');
}

function onInputBlur() {
  console.log('Инпут потерял фокус - событие blur');
}

function onInputChange(event) {
  console.log(event.currentTarget.value);
  refs.nameLabel.textContent = event.currentTarget.value;  // изменяем кусочек текста в кнопке при вводе значения в инпут
}

// сделать кнопку активной когда мы чекнем чекбокс

refs.licenseCheckbox.addEventListener('change', onLicenseChange);

function onLicenseChange(event) {
  console.log(event.currentTarget.checked);  // checked - true или false
  console.log(refs.btn.disabled);
  refs.btn.disabled = !event.currentTarget.checked;
}