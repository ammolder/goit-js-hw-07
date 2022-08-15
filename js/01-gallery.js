import { galleryItems } from "./gallery-items.js";
// Change code below this line

// 1. Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
const divEl = document.querySelector(".gallery");

const addMarketing = galleryItems
  .map(
    (galleryItems) =>
      `<a class="gallery__link" href=${galleryItems.original}>
    <img
      class="gallery__image"
      src=${galleryItems.preview}
      data-source=${galleryItems.original}
      alt="${galleryItems.description}"
    />
  </a>`
  )
  .join("");
divEl.insertAdjacentHTML("afterbegin", addMarketing);

// 2. Реалізація делегування на div.gallery і отримання url великого зображення.
divEl.addEventListener("click", onLinkContainerClick);

function onLinkContainerClick(e) {
  e.preventDefault();

  if (e.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`
    <img src=${e.target.dataset.source}>
`);

  instance.show();
}
