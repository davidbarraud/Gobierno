// Script para el Integrador de JS

//definims una constante con el valos por default del tícket.

const costoTicket = 200;


// definimos el valor del porcentaje de descuento según el tipo de tícket: Estudiante 80%, Trainee 50% y Junior 15%

var descuentoEstudiante = 80;
var descuentoTrainee    = 50;
var descuentoJunior     = 15;


// Asignamos a las variables los elementos correspondientes al código HTML.

let nombre     = document.getElementById("nombre");
let apellido   = document.getElementById("apellido");
let correo     = document.getElementById("correo");
let cantidad   = document.getElementById("cantidad");
let categoria  = document.getElementById("categoria");
var totalPagar = document.getElementById("totalPagar");

// Función para quitar los mensajes de errar y limpiar los elementos
function quitarError() {

let controles = document.querySelectorAll(".form-control, .form-select");
    for(let  i = 0; i < controles.length; i++){
        controles[i].classList.remove('is-invalid');
        //console.log(controles[i].id);
    }
}

// Funcion para calcular el total a pagar

function total_a_pagar(){

    // Ejecutamos la función quitarError para limpiar los elementos en el HTML
    quitarError();

    //validamos lo elementos del formulario
    if(nombre.value===""){
        alert("El campo nombre no debe estar vacío");
        nombre.classList.add('is-invalid');
        nombre.focus();
        return;
    }
    if(apellido.value===""){
        alert("El campo Apellido no debe estar vacío");
        apellido.classList.add('is-invalid');
        apellido.focus();
        return;
    }

    if(correo.value===""){
        alert("El campo Correo no debe estar vacío");
        correo.classList.add('is-invalid');
        correo.focus();
        return;
    }

    const validarCorreo = correo => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);
    }

    if(!validarCorreo(correo.value)){
        alert("Debes ingresar un correo válido");
        correo.classList.add('is-invalid');
        correo.focus();
        return;
    }


    if((cantidad.value == 0) || (isNaN(cantidad.value))){
        alert("El campo Cantidad no debe estar vacío ni debe ser 0");
        cantidad.classList.add('is-invalid');
        cantidad.focus();
        return;
    }


    if(categoria.value===""){
        alert("Debe elegir una categoría");
        categoria.classList.add('is-invalid');
        categoria.focus();
        return;
    }

    // Multiplicamos la cantidad de tícket por el valor oficial sin descuentos

    let valorTotalTicket = cantidad.value * costoTicket;
    let seleccion = categoria.value;
  
//Calculamos y asignamos al elemento totalaPagar el valor del costo del tícket
    switch (seleccion) {
        case "2":
            valorTotalTicket = valorTotalTicket -((valorTotalTicket * descuentoEstudiante)/100);
            totalPagar.innerHTML = valorTotalTicket;
        break;
        case "3":
            valorTotalTicket = valorTotalTicket -((valorTotalTicket * descuentoTrainee)/100);
            totalPagar.innerHTML = valorTotalTicket;
        break;
        case "4":
            valorTotalTicket = valorTotalTicket -((valorTotalTicket * descuentoJunior)/100);
            totalPagar.innerHTML = valorTotalTicket;
        break;
        default:
            totalPagar.innerHTML = valorTotalTicket;
        break;
    }
    

    
}

btnResumen.addEventListener('click', total_a_pagar);

function resetear_total_pagar(){
quitarError();
totalPagar.innerHTML = "";
}

btnBorrar.addEventListener('click', resetear_total_pagar);