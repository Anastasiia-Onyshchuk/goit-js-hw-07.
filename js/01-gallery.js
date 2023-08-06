import { galleryItems } from './gallery-items.js';
// Change code below this line
const container = document.querySelector('.gallery')

function createMarkup(arr) {
    return arr.map(({ preview, original, description }) => `
    <li data-id ='' class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" width = 300, height = auto/>
    </a>
    </li>`).join('');     

}
createMarkup(galleryItems);
container.insertAdjacentHTML('beforeend', createMarkup(galleryItems));
container.addEventListener('click', onImgClick)

function onImgClick(evt) {
    evt.preventDefault();
    if (evt.target.nodeName !== 'IMG') {
        return;
    }
    // if (evt.target === evt.currentTarget) {
    //     return
    // }
    // if (!evt.target.classList.contains('.gallery__image')) {
    //     return;
    // }
    console.log(evt.target);
 
    const ImageSrc = evt.target.dataset.source;
    const instance = basicLightbox.create(`
    <div class = "modal">
    <img src="${ImageSrc}" alt="${ImageSrc.description}"/>
    </div>
`, {
        onShow: (instance) => {
            window.addEventListener('keydown', (e) => {
                if (e.code === 'Escape') {
                    instance.close();
                }
            });
        },
        onClose: (instance) => {
            window.removeEventListener('keydown', (e) => {
                if (e.code === 'Escape') {
                    instance.close();
                }
            });
        },
    });
    instance.show();
windown.addEventListener('keydown', (e) => {
    if (e.code === 'Escape') {
        instance.close();
    }
});
    //  instance.close();
};
// function showImg(e){
//   e.preventDefault()
//     e.ImageSrc.element().querySelector('img').src = e.target.dataset.source
//   imgShow.show()

// }

// function closeImg(e){}

console.log(galleryItems);
// console.log(basicLightbox);

