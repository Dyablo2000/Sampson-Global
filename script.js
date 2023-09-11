document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll('.image');
    let activeImage = null;

    images.forEach((image) => {
        image.addEventListener('click', () => {
            if (activeImage !== null && activeImage !== image) {
                activeImage.classList.remove('active');
            }
            image.classList.toggle('active');
            activeImage = image;
        });
    });

    // Adăugați un eveniment pentru a închide imaginea atunci când faceți clic în altă parte a paginii
    document.addEventListener('click', (event) => {
        if (!event.target.closest('.image') && activeImage !== null) {
            activeImage.classList.remove('active');
            activeImage = null;
        }
    });
});