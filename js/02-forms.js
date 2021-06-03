/*
 * - Событие submit
 * - Действия браузера по умолчанию
 * - Свойство elements
 * - Класс FormData - https://developer.mozilla.org/en-US/docs/Web/API/FormData
 */

// У формы самое полезное событие это submit

// const form = document.querySelector('.js-register-form');

// form.addEventListener('submit', onFormSubmit);

// function onFormSubmit(event) {
//   event.preventDefault();

//   console.log(event.currentTarget.elements.subscription.value);  
//   console.log('Это submit формы');
// }
// Когда у нас отправляется форма, вкладка перезагружается - поведение по умолчанию. 
// Чтобы это предотвратить есть метод 'preventDefault()'

// currentTarget - ссылается на тот элемент который прослушивает это событие, на form в нашем случае
// Если внутри обработчика нужно получить доступ к каким то элементам currentTarget.elements
// 'Elements' есть только у формы. 'currentTarget' - везде

//---------------------------------------------------

// const form = document.querySelector('.js-register-form');

// form.addEventListener('submit', onFormSubmit);

// function onFormSubmit(event) {
//   event.preventDefault();

//   const formElements = event.currentTarget.elements;

//   console.log(formElements);

//   const mail = formElements.email.value;
//   const password = formElements.password.value;
//   const subscription = formElements.subscription.value;

//   const formData = {
//     mail,
//     password,
//     subscription,
//   }

//   console.log(formData);
// }
//-----------------------------------------------------------------------------------------

// !!!!!!!  Если нам надо собрать данные всей формы используем 'FormData' =====>>>>>>>>>


const form = document.querySelector('.js-register-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  // formData - собирает все значения всех полей которые в ней есть

  formData.forEach((value, name) => {
    console.log('onFormSubmit -> name', name);
    console.log('onFormSubmit -> value', value);
  });
}
// У 'FormData' есть forEach - с его помощью можно перебрать и посмотреть что находится внутри формы
//Это не тот forEach который есть у массива.