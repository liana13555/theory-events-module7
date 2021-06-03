/*
 * Типы событий: keypress, keydown, keyup
 * - Ограничения keypress
 * - Свойства KeyboardEvent.key и KeyboardEvent.code
 */

const refs = {
  output: document.querySelector('.js-output'),
  clearBtn: document.querySelector('.js-clear'),
};

// window.addEventListener('keydown', onKeypress);  // 'keydown' реагирует на любое нажатие клавиатуры
window.addEventListener('keypress', onKeypress);  // 'keypress' реагирует на клавиши которые генерируют какое то событие

// У объекта events есть 2 важных свойства 'code' и 'key'. 
//'code' - это физическая клавиша(T) а 'key' это буква на каком языке ее набираем(е)

refs.clearBtn.addEventListener('click', onClearOutput);

function onKeypress(event) {
  // console.log(event);
  // console.log('event.key: ', event.key);
  // console.log('event.code: ', event.code);

  refs.output.textContent += event.key;
}

function onClearOutput() {
  refs.output.textContent = '';
}