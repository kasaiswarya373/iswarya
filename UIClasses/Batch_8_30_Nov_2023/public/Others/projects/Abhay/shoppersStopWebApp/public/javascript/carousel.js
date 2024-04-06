const images = [
    "images/Slider/one.jpg",
    "images/Slider/three.jpg",
    "images/Slider/two.jpg"
];
const carouselInner = document.querySelector('.carousel-inner');

images.forEach((imageUrl, index) => {
    const carouselItem = document.createElement('div');
    carouselItem.classList.add('carousel-item');
    if (index === 0) {
        carouselItem.classList.add('active');
    }
    const img = document.createElement('img');
    img.src = imageUrl;
    img.classList.add('d-block', 'w-100');
    img.alt = 'Slide ' + (index + 1);
    carouselItem.appendChild(img);
    carouselInner.appendChild(carouselItem);
});
