const hamburguesa = document.querySelector('.hamburguesa');
const navegacion = document.querySelector('.navegacion');
const enlaces = document.querySelectorAll('.navegacion a');
const fecha = document.querySelector('.fecha');


document.addEventListener('DOMContentLoaded', ()=>{
    mostrarMenu();
    cerrarMenu();
    fechaActual();
});


function mostrarMenu(){
    hamburguesa.addEventListener('click',()=>{
        navegacion.classList.toggle('ocultar');

        /* este codigo hace exactamente lo mismo que lo anterior escrito

        if(navegacion.classList.contains('ocultar')){
            navegacion.classList.remove('ocultar');
        }else{
            navegacion.classList.add('ocultar');
        }

        */
    });
}

function cerrarMenu(){
    enlaces.forEach(enlace => {
        enlace.addEventListener('click', (evento)=>{
            evento.preventDefault();
            const seccion = document.querySelector(evento.target.attributes.href.value);
            cambioSeccion(seccion);
            if(evento.target.tagName === 'A'){
                navegacion.classList.add('ocultar');
            }
        });
    });
}

function cambioSeccion(seccion){
    seccion.scrollIntoView({
        behavior:'smooth'
    });
}

function fechaActual(){
    let fechaHoy = new Date().getFullYear();
    fecha.textContent = fechaHoy;
}