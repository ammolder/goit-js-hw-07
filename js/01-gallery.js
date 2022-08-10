import { galleryItems } from "./gallery-items.js";
// Change code below this line
import * as basicLightbox from "./01-gallery.js";

// const instance = basicLightbox.create(`
//     <img src=${onLinkContainerClick} width="800" height="600">
// `);
// instance.show();

console.log(galleryItems);
// 1. Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
const divEl = document.querySelector(".gallery");
const ulEl = document.createElement("ul");
ulEl.classList.add("gallery__list");
divEl.prepend(ulEl);

console.log(divEl);

const addMarketing = galleryItems
  .map(
    (galleryItems) =>
      `<li class="gallery__item"><img class="gallery__image" src = ${galleryItems.preview} alt='${galleryItems.description}'><a class="gallery__link" src=${galleryItems.original}></a></li>`
  )
  .join("");
ulEl.insertAdjacentHTML("afterbegin", addMarketing);

// 2. Реалізація делегування на div.gallery і отримання url великого зображення.
divEl.addEventListener("click", onLinkContainerClick);

function onLinkContainerClick(e) {
  if (e.target.nodeName !== "IMG") {
    return;
  }

  const linkImage = e.target.nextSibling.attributes[1].value;
  console.log("linkImage :", linkImage);

  return linkImage;
}

// 3. Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані (.min) файли бібліотеки.

//

// instance.show();
// 4. Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
// 5. Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.
