import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector(".gallery");

gallery.insertAdjacentHTML(
    "afterbegin",
    galleryItems
        .map(
            (galleryItems) =>
                `<a class="gallery__item" href="${galleryItems.original}">
  <img class="gallery__image" src="${galleryItems.preview}" alt="${galleryItems.description}" />
</a>`
        )
        .join("")
);

let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,

});