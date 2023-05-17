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



const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav');
const closeBtn = document.getElementById('close-btn');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show-menu');
});

closeBtn.addEventListener('click', () => {
  navMenu.classList.remove('show-menu');
});

/*------------ SHOW MENU-------------*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId),
        closeBtn = nav.querySelector(".close__btn"); // nuevo código
    /*valida se se existe as variaveis*/
    if (toggle && nav) {
        /*aquí añado la clase show-menu en el div con la clase nav__menu*/
        toggle.addEventListener('click', () => {
            /*añadir la clase show-menu en el div que tiene el id nav-menu*/
            nav.classList.toggle('show-menu');
            closeBtn.classList.toggle("show-close-btn"); // nuevo código
        })
        closeBtn.addEventListener('click', () => {
            nav.classList.remove('show-menu');
        })
    }
}
showMenu('nav-toggle', 'nav')

/*------------ REMOVER MENU MOBILE -------------*/
const navLink = document.querySelectorAll('.nav__link')
function linkAction() {
    const navMenu = document.getElementById('nav')
    /*Al hacer clic en un enlace o en el botón de cierre se eliminará la clase show-menu*/
    navMenu.classList.remove('show-menu')
}

const closeBtn2 = document.querySelector('.close__btn');
if (closeBtn2) {
    closeBtn2.addEventListener('click', () => {
        nav.classList.remove('show-menu');
    });
}

const hideMenu = (closeBtnId, navId) => {
    const closeBtn = document.getElementById(closeBtnId),
        nav = document.getElementById(navId);
    if (closeBtn && nav) {
        closeBtn.addEventListener('click', () => {
            nav.remove();
        });
    }
};
hideMenu('close-btn', 'nav');



navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== DEJA EL ENLACE PULSADO CON LA CLASE ACTIVE-LINK ====================*/
const linkColor = document.querySelectorAll('.nav__link')

function colorLink() {
    if (linkColor) {
        linkColor.forEach(L => L.classList.remove('active-link'))
        this.classList.add('active-link')
    }
}

linkColor.forEach(L => L.addEventListener('click', colorLink))
/*==================== CAMBIAR EL COLOR DE LA CABECERA ====================*/
function scrollHeader() {
    const scrollHeader = document.getElementById('header')
    if (this.scrollY >= 100) scrollHeader.classList.add('scroll-header'); else scrollHeader.classList.remove('scroll-header')

}
window.addEventListener('scroll', scrollHeader)