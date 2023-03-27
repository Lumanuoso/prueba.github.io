let miImage = document.querySelector('img');
miImage.onclick = function () {
let miSrc = miImage.getAttribute('src');
if (miSrc === 'images/industria.jpg') {
miImage.setAttribute('src','images/indust.jpg');
} else {
miImage.setAttribute('src', 'images/industrial.jpg');
}
}

let miBoton = document.querySelector('button');
let miTitulo = document.querySelector( 'h1');

function estableceNombreUsuario() {
    let miNombre = prompt('Por favor, ingresa tu nombre.');
    localStorage.setItem('nombre', miNombre);
    miTitulo.textContent = 'Bienvenido a  ' + minombre +'   LMOP Services ';
    }
    if (!localStorage.getItem('nombre')) {
        estableceNombreUsuario();
        }
        else {
        let nombreAlmacenado = localStorage.getItem('nombre');
        miTitulo.textContent = 'Bienvenido  '+ nombreAlmacenado  +  '    LMOP Services' ;      }

        miBoton.onclick = function() {
            estableceNombreUsuario();
            }

            function estableceNombreUsuario() {
                let miNombre = prompt('Introduzca su nombre.');
                if(!miNombre) {
                estableceNombreUsuario();
                } else {
                localStorage.setItem('nombre', miNombre);
                miTitulo.innerHTML = 'Bienvenido ' + miNombre  + '  a  LMOP Services';
}
}