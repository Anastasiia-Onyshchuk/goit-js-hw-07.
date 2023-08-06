import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);
const container = document.querySelector('.gallery')

function createMarkup(arr) {
    return arr.map(({ preview, original, description }) => `
    <li data-id ='' class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}"  alt="${description}"/>
    </a>
    </li>`
    ).join('');   
    console.log(arr);
}
createMarkup(galleryItems);
container.insertAdjacentHTML('beforeend', createMarkup(galleryItems));
console.log(SimpleLightbox);
// container.addEventListener('click', onImgClick)
function onClick(evt) {
    evt.preventDefault();
    if (evt.target.nodeName !== 'IMG') {
        return;
    }
}
    const lightbox = new SimpleLightbox('.gallery__item a', {
    captionsData: 'alt',
    captionDelay: 250,
});
    lightbox.show();



