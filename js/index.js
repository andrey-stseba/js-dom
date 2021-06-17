"use strict";
// 1) По нажатию на кнопку изменить текст самой кнопки (см. innerText).

function changeTextBtn() {
  document.getElementById("myBtn").innerText = "OOPS)))";
}

// 2) Отобразить картинку. Сделать так, что бы при появлении страницы отображалсь одна картинка, а при наведении мышью на неё отображалась другая.
const images = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLReCVgVo3w2RwoPLLsb_0TdGte8BjrtEsLA&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdKgMnG1nae3XRpO_ZreMqipuWvNjqvuWEQA&usqp=CAU",
];

const imageElement = document.querySelector("img");
imageElement.src = images[0];
imageElement.width = 200;
imageElement.height = 300;
imageElement.style.margin = "20px";

imageElement.addEventListener("mouseover", function () {
  imageElement.src = images[1];
});
imageElement.addEventListener("mouseout", function () {
  imageElement.src = images[0];
});

// 3) Сгенерировать заданную структуру:
// <h1>Header1</h1>
// <article>
// <h2>Header2</h2>
// <div><img src="" alt=""></div>
// <p>It is paragraph</p>
// </article>
// (привязать <div id="root"></div>)

const header1Element = document.createElement("h1");
header1Element.textContent = "Header1";
document.body.append(header1Element);

const articleElement = document.createElement("article");

const header2Element = document.createElement("h2");
header2Element.textContent = "Header2";
articleElement.append(header2Element);

const divElement = document.createElement("div");
divElement.innerHTML = '<img src="" alt="">';
articleElement.append(divElement);

const pElement = document.createElement("p");
pElement.textContent = "It is paragraph";
articleElement.append(pElement);

document.body.append(articleElement);
