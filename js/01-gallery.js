import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
// додавання всіх зображень із gallery-items.js до елемента з класом .gallery у HTML
gallery.insertAdjacentHTML(
    "afterbegin",
    galleryItems
        .map(
            (galleryItem) =>
                `<div class="gallery__item">
  <a class="gallery__link" href="${galleryItem.original}">
    <img
      class="gallery__image"
      src="${galleryItem.preview}"
      data-source="${galleryItem.original}"
      alt="${galleryItem.description}"
    />
  </a>
</div>`
        )
        .join("")
);
gallery.addEventListener("click", selectedImage);

function selectedImage(e) {
    e.preventDefault();
    if (e.target.nodeName !== "IMG") {
        return;
    }
    const imgLink = e.target.dataset.source;
    const instance = basicLightbox.create(`<img src="${imgLink}">`);
    instance.show();
// закрити модально за допомогою ESC
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") instance.close();
    });
}
