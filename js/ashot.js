/*
Создать маркированный список.
Создать кнопки 'добавить' и 'удалить', которые будут менять состав списка. 
Бонус: четные - красным, нечетные - синим.
*/

// const container = document.getElementById("container");

// // Создать ul

// const ulList = document.createElement("ul");

// // Создать input и кнопки

// const formContainer = document.createElement("div");

// const inputItem = document.createElement("input");
// inputItem.style.display = "block";
// inputItem.style.marginBottom = "10px";

// const addBtn = document.createElement("button");
// addBtn.textContent = "Добавить";
// addBtn.style.marginRight = "5px";

// const removeBtn = document.createElement("button");
// removeBtn.textContent = "Удалить";

// formContainer.append(inputItem, addBtn, removeBtn);

// container.append(ulList, formContainer);

// addBtn.addEventListener("click", e => {
//   if (inputItem.value.trim()) {
//     const liItem = document.createElement("li");
//     liItem.textContent = inputItem.value;
//     ulList.appendChild(liItem);
//     const liCount = ulList.children.length;
//     liItem.classList.add(liCount % 2 === 0 ? "even" : "odd");
//     inputItem.value = "";
//   }
// });

// removeBtn.addEventListener("click", e => {
//   if (ulList.hasChildNodes()) {
//     ulList.removeChild(ulList.lastElementChild);
//   }
// });

/*
2. В форме авторизации пользователь должен ввести 
логин и пароль для входа в систему.
  - кнопка 'Войти' становится активной только в том 
    случае когда заполнены оба поля и пользователь отметил 
    чекбокс
  - поле логин должно содержать значение минимум 4 символа
  - поле пароль от 8-30 символов
  - если условия не соответствуют требованиям то 
    при потере фокуса поле ввода показывает ошибку
  - после нажатия кнопки Войти надо вывести сообщение 
    об успешной авторизацие
*/

// const loginInput = document.getElementById("login");
// const passwordInput = document.getElementById("password");
// const loginInfo = document.getElementById("loginInfo");
// const passwordInfo = document.getElementById("passwordInfo");
// const checkBox = document.getElementById("checkBox");
// const submitBtn = document.getElementById("submitButton");
// const msgBox = document.getElementById("msgBox");

// loginInput.addEventListener("focus", e => {
//   loginInfo.style.display = "block";
// });

// loginInput.addEventListener("blur", e => {
//   console.log(e.currentTarget.value);
//   const val = e.currentTarget.value;
//   if (val.length < 4) {
//     e.currentTarget.classList.add("error");
//   } else {
//     if (e.currentTarget.classList.contains("error")) {
//       e.currentTarget.classList.remove("error");
//     }
//   }

//   loginInfo.style.display = "none";
// });

// passwordInput.addEventListener("focus", e => {
//   passwordInfo.style.display = "block";
// });

// passwordInput.addEventListener("blur", e => {
//   const val = e.currentTarget.value;

//   if (val.length > 8 && val.length < 30) {
//     if (e.currentTarget.classList.contains("error")) {
//       e.currentTarget.classList.remove("error");
//     }
//   } else {
//     e.currentTarget.classList.add("error");
//   }
//   passwordInfo.style.display = "none";
// });

// submitBtn.addEventListener("click", e => {
//   e.preventDefault();
//   if (
//     !loginInput.classList.contains("error") &&
//     !passwordInput.classList.contains("error") &&
//     checkBox.checked
//   ) {
//     msgBox.innerHTML = "Вы успешно авторизованы!";
//     loginInput.value = "";
//     passwordInput.value = "";
//     checkBox.checked = false;
//   }
// });

/* 
3. Создать небольшую игру :)
  - Изначально на экране пользователя будет отображаться какая 
    нибудь форма (круг, квадрат, прямоугольник)
  - при нажатии на нее в рандомном порядке форма должна 
  менятся на другую
  - форма каждый раз должна появляться в разных местах 
  на странице
  - цвет формы в рандомном порядке меняется, 
    используя цвета из заранее заготовленного массива
  
*/

// const forms = [
//   "width: 100px; height: 100px; border-width: 1px; border-color: #000000",
//   "width: 100px; height: 100px; border-radius: 50%; border-width: 1px; border-color: #000000",
//   "width: 150px; height: 100px; border-width: 1px; border-color: #000000"
// ];

// const colors = ["red", "blue", "green"];

// const randomizer = max => {
//   return Math.floor(Math.random() * max);
// };

// const container = document.getElementById("container");
// const form = document.createElement("div");

// container.append(form);

// form.addEventListener("click", () => {
//   generateForm();
// });

// const generateForm = () => {
//   form.style.cssText = forms[randomizer(forms.length)];
//   form.style.backgroundColor = colors[randomizer(colors.length)];
//   form.style.position = "absolute";
//   form.style.top = `${randomizer(100)}%`;
//   form.style.left = `${randomizer(100)}%`;
// };

// document.addEventListener("DOMContentLoaded", () => {
//   generateForm();
// });