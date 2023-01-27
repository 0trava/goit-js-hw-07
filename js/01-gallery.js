import { galleryItems } from './gallery-items.js';
// Change code below this line

// Виконуй це завдання у файлах 01-gallery.html і 01-gallery.js. Розбий його на декілька підзавдань:

// 1. Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
// 2. Реалізація делегування на div.gallery і отримання url великого зображення.
// 3. Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані (.min) файли бібліотеки.
// 4. Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
// 5. Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.



// Створення бібіліотеки зображень і виведення на сайт
const galleryLibraryEL = document.querySelector('.gallery');

const imagesListTemplate = ({preview, original, description}) => {
    return `  <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"/>
            </a>`;
  };

const addImg = galleryItems.map(imagesListTemplate).join('');
galleryLibraryEL.insertAdjacentHTML("afterbegin", addImg);


// Додаємо дію при кліку

galleryLibraryEL.addEventListener('click', oneGalleryImgClick );

// --------------------------------------------------------------------------------
function oneGalleryImgClick (evt){
    const imageSelected = evt.target.getAttribute("data-source");
  

    // Відміна поведінки за замовчуванням (відміна завантаження файлу)
    evt.preventDefault();

    // Перевірка що клік на зображенні
    if (!imageSelected){return;}

    // --------------------------------------------------------------------------------
      //Підключенння basicLightbox (модальне вікно)
    const openModulWindow = basicLightbox.create(
        `<img src="${imageSelected}" width="800" height="600">`,
      {
        // показати
        onShow: () => {document.addEventListener("keydown", closeModal);},
        // закрити
        onClose: () => {document.removeEventListener("keydown", closeModal);},
      }
      );

     // Запуск модального вікна
     openModulWindow.show();

  // перевірка натиску клавіші Escape
  function closeModal(evt) {
    if (evt.key === "Escape") {
        openModulWindow.close();
    }
  }
};








