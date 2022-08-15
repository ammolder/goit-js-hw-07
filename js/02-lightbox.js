import { galleryItems } from "./gallery-items.js";
// Change code below this line

const divEl = document.querySelector(".gallery");

const addMarketing = galleryItems
  .map(
    (galleryItems) =>
      `<a class="gallery__item" href=${galleryItems.original}>
  <img class="gallery__image" src=${galleryItems.preview} alt="${galleryItems.description}" />
</a>`
  )
  .join("");
divEl.insertAdjacentHTML("afterbegin", addMarketing);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
});
