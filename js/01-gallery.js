import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

const marcup = createGallerySampleItem(galleryItems);
galleryEl.innerHTML = marcup;
function createGallerySampleItem(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
        <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>
      `;
    })
    .join(" ");
}

galleryEl.addEventListener("click", (event) => {
  event.preventDefault();
  const linkToBigImage = event.target.parentElement.href;
  basicLightbox.create(`<img src="${linkToBigImage}">`).show();
});
