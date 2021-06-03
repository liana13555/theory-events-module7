/*
 * События.
 * - Создание и удаление слушателей
 * - Именование колбеков для слушателей
 *    - handle*: handleSubjectEvent
 *    - *Handler: subjectEventHandler
 *    - on*: onSubjectEvent
 * - Ссылочная идентичность колбеков
 * - Объект события
 */

const targetBtn = document.querySelector('.js-target-btn');
const addListenerBtn = document.querySelector('.js-add-listener');
const removeListenerBtn = document.querySelector('.js-remove-listener');

// targetBtn.addEventListener('click', () => {
//    console.log('Клик');
// });

//---------------- Именование колбеков для слушателей

// handle*: handleSubjectEvent
// targetBtn.addEventListener('click', handleTargetBtnClick);

// function handleTargetBtnClick() {
//    console.log('Клик');
// }
// *Handler: subjectEventHandler
// targetBtn.addEventListener('click', TargetBtnClickHandler);

// function TargetBtnClickHandler() {
//    console.log('Клик');
// }
//on*: onSubjectEvent
// targetBtn.addEventListener('click', onTargetBtnClick);

// function onTargetBtnClick() {
//    console.log('Клик');
// }

//----------------------------

// addListenerBtn.addEventListener('click', () => {
 
//   console.log('Вешаю слушателя события на целевую кнопку');

//   targetBtn.addEventListener('click', () => {
//       console.log('Клик по целевой кнопке');    
//   });
// });

// removeListenerBtn.addEventListener('click', () => {
//   console.log('Снимаю слушателя события с целевой кнопки');
//     targetBtn.removeEventListener('click', () => {   
//       console.log('Клик по целевой кнопке');       
//   });   // !!!!!!!!! Здесь работать не будет, тк переданные функции занимают разные места в памяти
// });     // Поэтому handlery выносятся во внешние функции -- Ссылочная идентичность колбеков ==>>

//------------- Ссылочная идентичность колбеков -----------

addListenerBtn.addEventListener('click', event => {
  console.log(event);  // MouseEvent 
  console.log('Вешаю слушателя события на целевую кнопку');

  targetBtn.addEventListener('click', onTargetBtnClick);
});

removeListenerBtn.addEventListener('click', event => {
  console.log(event);
  console.log('Снимаю слушателя события с целевой кнопки');

  targetBtn.removeEventListener('click', onTargetBtnClick);
});

function onTargetBtnClick(event) {
  console.log(event);
  console.log('Клик по целевой кнопке');
}
