/* navegacion */

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const offset = 80; // Ajuste por el header fijo
                const targetPosition = targetSection.offsetTop - offset;
                window.scrollTo({ top: targetPosition, behavior: "smooth" });
            }
        });
    });
}); 

/* servicios */

function showTab(index) {
  document.querySelectorAll('.tab-pane').forEach((pane, i) => {
      pane.classList.toggle('active', i === index);
  });
  document.querySelectorAll('.tab-btn').forEach((btn, i) => {
      btn.classList.toggle('active', i === index);
  });
}


/* cambiar el navegador al desplazarse */
    window.addEventListener("scroll", function() {
        let header = document.querySelector("header");
        if (window.scrollY > 300) { // Cambia el color después de 100px de scroll
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

     // Función para animar la flecha con un movimiento suave de arriba a abajo
  function animarFlecha() {
    const flecha = document.getElementById("flecha");
    let posicion = 0;
    let direccion = 2; // 1 = abajo, -1 = arriba
    const velocidad = 1; // Controla la velocidad del movimiento

    // Animación de la flecha
    setInterval(() => {
      if (posicion >= 15) direccion = -1; // Límite inferior
      if (posicion <= 0) direccion = 1; // Límite superior

      posicion += direccion * velocidad; // Movimiento vertical
      flecha.style.transform = `translateX(-50%) translateY(${posicion}px)`; // Aplicando el movimiento
    }, 20); // Intervalo de actualización de la animación
  }

  // Detectar si el usuario hace scroll y ocultar la flecha
  window.addEventListener("scroll", () => {
    const flecha = document.getElementById("flecha");
    if (window.scrollY > 50) {
      flecha.style.opacity = "0"; // Desaparece después de hacer scroll
    } else {
      flecha.style.opacity = "1"; // Vuelve a aparecer
    }
  });

  // Iniciar la animación
  animarFlecha();

  new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 30,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints:{
        0:{
            slidesPerview:1
        },
        768:{
            slidesPerview:2
        },
        1024:{
            slidesPerview:3
        },
    }
  });
    

//animacion h2

  document.addEventListener("DOMContentLoaded", () => {
    const titles = document.querySelectorAll("h2");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate");
                } else {
                    entry.target.classList.remove("animate"); // Si quieres que la animación se repita
                }
            });
        },
        {
            threshold: 0.3, // Se activará cuando el 30% del elemento sea visible
        }
    );

    titles.forEach((title) => observer.observe(title));
});


