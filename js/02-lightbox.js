import { galleryItems } from './gallery-items.js';
// Change code below this line

// Виконуй це завдання у файлах 02-lightbox.html і 02-lightbox.js. Розбий його на декілька підзавдань:

// 1. Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї. Використовуй готовий код з першого завдання.
// 2. Підключення скрипту і стилів бібліотеки, використовуючи CDN сервіс cdnjs. Необхідно додати посилання на два файли: 
//    simple-lightbox.min.js і simple-lightbox.min.css.
// 3. Ініціалізація бібліотеки після створення і додання елементів галереї у div.gallery. Для цього ознайомся з документацією SimpleLightbox - 
//    насамперед секції «Usage» і «Markup».
// 4. Подивися в документації секцію «Options» і додай відображення підписів до зображень з атрибута alt. Нехай підпис буде знизу 
//    і з'являється через 250 мілісекунд після відкриття зображення.

console.log(galleryItems);

// Створення бібіліотеки зображень і виведення на сайт
const galleryLibraryEL = document.querySelector('.gallery');

const imagesListTemplate = ({preview, original, description}) => {
    return `
    <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>`;
  };

const addImg = galleryItems.map(imagesListTemplate).join('');
galleryLibraryEL.insertAdjacentHTML("afterbegin", addImg);