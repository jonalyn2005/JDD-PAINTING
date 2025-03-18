document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".gallery img");
    let index = 0;

    function changeImage() {
        let currentImage = images[index];

        // Añadir clase de salida a la imagen actual
        currentImage.classList.add("outgoing");

        index = (index + 1) % images.length;
        let nextImage = images[index];

        // Eliminar clases y mostrar la nueva imagen
        nextImage.classList.remove("outgoing");
        nextImage.classList.add("active");

        // Limpiar la imagen anterior después de la animación
        setTimeout(() => {
            currentImage.classList.remove("active", "outgoing");
        }, 1000);
    }

    // Cambia de imagen cada 4 segundos
    setInterval(changeImage, 4000);

    // Muestra la primera imagen al cargar
    images[index].classList.add("active");
});
    window.addEventListener("scroll", function() {
        let header = document.querySelector("header");
        if (window.scrollY > 300) { // Cambia el color después de 100px de scroll
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });




