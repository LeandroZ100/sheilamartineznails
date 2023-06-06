const ham = document.querySelector('.ham');
const menuContainer = document.querySelector('.menu-container');
const enlaces = document.querySelectorAll('.nav__link');

const barras = document.querySelectorAll('.ham span');

enlaces.forEach(enlace => {
  enlace.addEventListener('click', () => {
    menuContainer.classList.remove('menu-activo');
    enlaces.classList.remove('activado');
    barras.forEach(child => {child.classList.remove('animado')});
    ham.classList.remove('girar');
  });
});

ham.addEventListener('click', () => {
  menuContainer.classList.toggle('menu-activo');
    enlaces.classList.toggle('activado');
    barras.forEach(child => {child.classList.toggle('animado')});
    ham.classList.toggle('girar');
});

document.addEventListener('click', (event) => {
  const target = event.target;
  if (!menuContainer.contains(target) && !ham.contains(target)) {
    menuContainer.classList.remove('menu-activo');
    enlaces.classList.remove('activado');
    barras.forEach(child => {child.classList.remove('animado')});
    ham.classList.remove('girar');
  }
});

// Obtener el contenedor "about__description"
const descriptionContainer = document.querySelector('.about__description');

// Definir el texto corto
const shortText = 'Bienvenidos a mi página web. Mi nombre es Sheila y me dedico al mundo de la manicura desde hace más de 7 años.Si buscas una experiencia única y profesional, no dudes en contactarme. Estaré encantada de ayudarte a lucir unas uñas perfectas y saludables. ¡Gracias por visitar mi página!';

// Verificar si la resolución es menor al media query
if (window.innerWidth <= 425) {
  // Eliminar los elementos "p" adicionales
  while (descriptionContainer.children.length > 1) {
    descriptionContainer.removeChild(descriptionContainer.lastChild);
  }

  // Actualizar el contenido del primer elemento "p" con el texto corto
  const paragraph = descriptionContainer.querySelector('p');
  paragraph.textContent = shortText;
}

//Codigo que redirecciona a url en servicios

function redirectToArticle(url) {
  window.location.href = url;
}




/*==================== DEIXA O LINK CLICADO COM A CLASS ACTIVE-LINK ====================*/
const linkColor = document.querySelectorAll('.nav__link')

function colorLink(){
  if(linkColor){
      linkColor.forEach(L => L.classList.remove('active-link'))
      this.classList.add('active-link')
  }
}

linkColor.forEach(L=> L.addEventListener('click', colorLink))
/*==================== MUDAR A COR DO HEADER ====================*/
function scrollHeader(){
  const scrollHeader = document.getElementById('header')
  if(this.scrollY >= 100) scrollHeader.classList.add('scroll-header'); else scrollHeader.classList.remove('scroll-header')

}
window.addEventListener('scroll', scrollHeader)


// Obtenemos las imágenes y el botón
const gallery = document.querySelector('.gallery__list__img');
const images = gallery.querySelectorAll('.gallery__img');
const verMasBtn = document.getElementById('ver-mas-btn');
const verMenosBtn = document.getElementById('ver-menos-btn');

// Establecemos la cantidad de imágenes a mostrar inicialmente
const cantidadInicial = 8;

// Ocultamos todas las imágenes inicialmente
for (let i = cantidadInicial; i < images.length; i++) {
  images[i].classList.add('hide');
}

// Mostramos las imágenes iniciales
for (let i = 0; i < cantidadInicial; i++) {
  images[i].classList.add('show');
}

// Función para mostrar las imágenes ocultas
function mostrarImagenesRestantes() {
  for (let i = cantidadInicial; i < images.length; i++) {
    images[i].classList.remove('hide');
    images[i].classList.add('show');
  }

  verMasBtn.style.display = 'none'; // Oculta el botón "Ver más"
  verMenosBtn.style.display = 'block'; // Muestra el botón "Ver menos"

  // Desplazamiento suave hacia las imágenes ocultas
  images[cantidadInicial].scrollIntoView({ behavior: 'smooth' });
}

// Función para ocultar las imágenes adicionales y mostrar solo las iniciales
function ocultarImagenesRestantes() {
  for (let i = cantidadInicial; i < images.length; i++) {
    images[i].classList.remove('show');
    images[i].classList.add('hide');
  }

  verMasBtn.style.display = 'block'; // Muestra el botón "Ver más"
  verMenosBtn.style.display = 'none'; // Oculta el botón "Ver menos"

  // Desplazamiento suave hacia la parte superior de las imágenes
  gallery.scrollIntoView({ behavior: 'smooth' });
}


// Asignar el evento click al botón "Ver menos"
verMenosBtn.addEventListener('click', ocultarImagenesRestantes);

// Asignamos el evento click al botón "Ver más"
verMasBtn.addEventListener('click', mostrarImagenesRestantes);




window.addEventListener('DOMContentLoaded', () => {
  const testimonialsContainer = document.querySelector('.testimonials-container');
  const btnContainer = document.querySelector('#container_btn');
  
  // Función para comprobar el ancho de la ventana y mostrar u ocultar los elementos correspondientes
  const handleResize = () => {
    if (window.innerWidth < 500) {
      testimonialsContainer.style.display = 'none'; // Oculta el contenedor de tarjetas
      btnContainer.style.display = 'flex'; // Muestra el contenedor de botones
    } else {
      testimonialsContainer.style.display = 'grid'; // Muestra el contenedor de tarjetas
      btnContainer.style.display = 'none'; // Oculta el contenedor de botones
    }
  };
  
  // Evento de cambio de tamaño de ventana
  window.addEventListener('resize', handleResize);
  
  // Llamada inicial para comprobar el tamaño de la ventana al cargar la página
  handleResize();
});

document.getElementById("downloadBtn").addEventListener("click", function(event) {
  event.preventDefault(); // Evita el comportamiento predeterminado del enlace
  
  var downloadLink = this;
  var pdfUrl = downloadLink.getAttribute("href");
  
  setTimeout(function() {
    var a = document.createElement("a");
    a.href = pdfUrl;
    a.download = "Cv-resumido.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }, 1500); // 1.5 segundos = 1500 milisegundos
});

