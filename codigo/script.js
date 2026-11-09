
/* =========================================
   GRACIA SUBLIME - JAVASCRIPT
========================================= */


/* =========================================
   MENU PARA CELULARES
========================================= */

const botonMenu = document.getElementById("menu-movil");
const navegacion = document.getElementById("navegacion");

if (botonMenu && navegacion) {

    botonMenu.addEventListener("click", () => {

        navegacion.classList.toggle("activo");

        const menuAbierto = navegacion.classList.contains("activo");

        botonMenu.textContent = menuAbierto ? "✕" : "☰";

    });

    document.querySelectorAll(".navegacion a").forEach(enlace => {

        enlace.addEventListener("click", () => {

            navegacion.classList.remove("activo");
            botonMenu.textContent = "☰";

        });

    });

}


/* =========================================
   GALERIA DE FOTOGRAFIAS
========================================= */

const contenedorGaleria = document.getElementById("contenedor-galeria");

const fotografias = [
    "gs1.jpeg",
    "gs2.jpeg",
    "gs3.jpeg",
    "gs4.jpeg",
    "gs5.jpeg",
    "gs6.jpeg",
    "gs7.jpeg",
    "gs8.jpeg",
    "gs9.jpeg",
    "gs10.jpeg",
    "festejo dia madres.jpeg",

    "WhatsApp Image 2026-11-09 at 3.09.01 PM (1).jpeg",
    "WhatsApp Image 2026-11-09 at 3.09.01 PM.jpeg",
    "WhatsApp Image 2026-11-09 at 3.09.02 PM (1).jpeg",
    "WhatsApp Image 2026-11-09 at 3.09.02 PM.jpeg",
    "WhatsApp Image 2026-11-09 at 3.09.03 PM (1).jpeg",
    "WhatsApp Image 2026-11-09 at 3.09.03 PM (2).jpeg",
    "WhatsApp Image 2026-11-09 at 3.09.03 PM (3).jpeg",
    "WhatsApp Image 2026-11-09 at 3.09.03 PM.jpeg",
    "WhatsApp Image 2026-11-09 at 3.09.04 PM (1).jpeg",
    "WhatsApp Image 2026-11-09 at 3.09.04 PM (2).jpeg",
    "WhatsApp Image 2026-11-09 at 3.09.04 PM.jpeg",
    "WhatsApp Image 2026-11-09 at 3.09.05 PM (1).jpeg",
    "WhatsApp Image 2026-11-09 at 3.09.05 PM (2).jpeg",
    "WhatsApp Image 2026-11-09 at 3.09.05 PM.jpeg",
    "WhatsApp Image 2026-11-09 at 3.22.04 PM.jpeg",
    "WhatsApp Image 2026-11-09 at 3.22.05 PM (1).jpeg",
    "WhatsApp Image 2026-11-09 at 3.22.05 PM (2).jpeg",
    "WhatsApp Image 2026-11-09 at 3.22.05 PM (3).jpeg",
    "WhatsApp Image 2026-11-09 at 3.22.05 PM (4).jpeg",
    "WhatsApp Image 2026-11-09 at 3.22.05 PM.jpeg"
];

if (contenedorGaleria) {

    fotografias.forEach((fotografia, indice) => {

        const imagen = document.createElement("img");

        imagen.src = `../imagenes/${fotografia}`;
        imagen.alt = `Fotografía de Gracia Sublime ${indice + 1}`;
        imagen.classList.add("foto-galeria");
        imagen.loading = "lazy";

        imagen.addEventListener("error", () => {
            imagen.remove();
        });

        contenedorGaleria.appendChild(imagen);

    });

}


/* =========================================
   APARICION DE LAS SECCIONES
========================================= */

const elementos = document.querySelectorAll(".seccion");

if ("IntersectionObserver" in window) {

    const observador = new IntersectionObserver((entradas) => {

        entradas.forEach(entrada => {

            if (entrada.isIntersecting) {

                entrada.target.classList.add("visible");

                observador.unobserve(entrada.target);

            }

        });

    }, {
        threshold: 0.15
    });

    elementos.forEach(elemento => {

        elemento.classList.add("aparecer");
        observador.observe(elemento);

    });

} else {

    elementos.forEach(elemento => {
        elemento.classList.add("visible");
    });

}


/* =========================================
   EFECTO DE LUZ EN LAS TARJETAS
========================================= */

const tarjetas = document.querySelectorAll(".tarjeta-reunion");

tarjetas.forEach(tarjeta => {

    tarjeta.addEventListener("mousemove", (evento) => {

        const rectangulo = tarjeta.getBoundingClientRect();

        const x = evento.clientX - rectangulo.left;
        const y = evento.clientY - rectangulo.top;

        tarjeta.style.background = `
            radial-gradient(
                circle at ${x}px ${y}px,
                rgba(212, 166, 60, 0.18),
                #101010 75%
            )
        `;

    });

    tarjeta.addEventListener("mouseleave", () => {

        tarjeta.style.background = "";

    });

});


/* =========================================
   ANIMACION DEL LOGO
========================================= */

const logo = document.querySelector(".logo-principal");

if (logo) {

    logo.addEventListener("mouseenter", () => {

        logo.style.transform = "scale(1.04)";

    });

    logo.addEventListener("mouseleave", () => {

        logo.style.transform = "scale(1)";

    });

}


/* =========================================
   BIBLIOTECA DE PREDICACIONES Y ENSENANZAS
========================================= */

// Materiales de ejemplo.
// Más adelante incorporaremos los documentos reales
// de las carpetas de Gracia Sublime.

const materialesBiblioteca = {
    "predicaciones-generales": [],
    "predicaciones-juveniles": [],
    "versiculos-explicados": [],
    "talleres-y-planes-de-lectura": []
};


// Mostrar u ocultar los materiales de cada categoría.

document.querySelectorAll("[data-categoria]").forEach(boton => {

    boton.addEventListener("click", () => {

        const categoria = boton.dataset.categoria;
        const lista = document.getElementById(categoria);

        if (!lista) return;

        const estaAbierta = lista.classList.contains("activo");

        // Cerrar las demás categorías.

        document.querySelectorAll(".lista-materiales").forEach(otraLista => {
            otraLista.classList.remove("activo");
        });

        if (!estaAbierta) {

            lista.classList.add("activo");

            mostrarMateriales(categoria, lista);

        }

    });

});


// Mostrar los documentos disponibles.

function mostrarMateriales(categoria, contenedor) {

    const materiales = materialesBiblioteca[categoria];

    contenedor.innerHTML = "";

    if (!materiales || materiales.length === 0) {

        const mensaje = document.createElement("p");

        mensaje.textContent = "Todavía no hay materiales publicados en esta categoría.";

        contenedor.appendChild(mensaje);

        return;

    }

    materiales.forEach(material => {

        const enlace = document.createElement("a");

        enlace.href = material.archivo;
        enlace.textContent = material.nombre;
        enlace.download = material.nombre;
        enlace.classList.add("enlace-material");

        contenedor.appendChild(enlace);

    });

}


/* =========================================
   BOTON SUBIR TU PORCION
========================================= */

const botonSubirMaterial = document.getElementById("boton-subir-material");

if (botonSubirMaterial) {

    botonSubirMaterial.addEventListener("click", () => {

        alert(
            "¡Gracias por querer compartir tu porción!\n\n" +
            "El formulario de envío estará disponible cuando " +
            "conectemos el sistema de almacenamiento y revisión de materiales."
        );

    });

}


/* =========================================
   AÑO AUTOMATICO DEL PIE DE PAGINA
========================================= */

const piePagina = document.querySelector(".pie-pagina span");

if (piePagina) {

    piePagina.textContent =
        `© ${new Date().getFullYear()} Gracia Sublime. Todos los derechos reservados.`;

}


/* =========================================
   MENSAJE DE INICIO
========================================= */

console.log("Gracia Sublime - Página web cargada correctamente.");
