import { galleryItems } from './gallery-items.js';
// Change code below this line
const container = document.querySelector('.gallery')

function createMarkup(arr) {
    return arr.map(({ preview, original, description }) => `
    <li data-id ='' class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}"  alt="${description}"/>
    </a>
    </li>`
    ).join('');     

}
createMarkup(galleryItems);
container.insertAdjacentHTML('beforeend', createMarkup(galleryItems));
container.addEventListener('click', onImgClick)
function onImgClick(evt) {
    evt.preventDefault();
    if (evt.target.nodeName !== 'IMG') {
        return;
    }
    console.log(evt.target);
 
    // const ImageSrc = evt.target.dataset.source;
    //     const instance = basicLightbox.create(`
    //     <div class = "modal">
    //     <img src="${ImageSrc}" alt="${ImageSrc.description}"/>
    //     </div>
    // `)
    //     instance.show();
    // };
    const lightbox = new SimpleLightbox('.gallery__item a', {
    captionsData: 'alt',
    captionDelay: 250,
});
    lightbox.showI();
}

// console.log(SimpleLightbox);
console.log(galleryItems);
