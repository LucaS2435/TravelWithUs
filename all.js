(function(){
  const sliders = [...document.querySelectorAll('.slider__body')];
  const arrowNext = document.querySelector('#next');
  const arrowBefore = document.querySelector('#before');
  let value;

  arrowNext.addEventListener('click', ()=> changePosition(1));

  arrowBefore.addEventListener('click', ()=>changePosition(-1));

  function changePosition(change){
     const currentElement = parseInt(document.querySelector('.slider__body--show').dataset.id);
     
     value = currentElement;
     value += change;
      if(value === 0 || value == sliders.length+1){
       value = value === 0 ? sliders.length : 1;
      }
    
    sliders[currentElement-1].classList.toggle('slider__body--show');
    sliders[value-1].classList.toggle('slider__body--show');

  }
})();




/* MENU HAMBURGUESA */
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () =>{
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () =>{
    nav.classList.remove("visible");
})




/*FORMULARIO */

const apiUrl = 'https://ejemplo.com/api';

function enviarDatos() {
  const nombre = $('#nombreyapellido').val().trim();
  const email = $('#email').val().trim();
  const telefono = $('#telefono').val().trim();
  const mensaje = $('#mensaje').val().trim();
  
  const data = {
    nombre,
    email,
    telefono,
    mensaje
  };
  
  $.ajax({
    url: apiUrl,
    method: 'POST',
    data: data,
    success: function(response) {
      alert('Formulario enviado con éxito!');
      $('#form')[0].reset();
    },
    error: function(jqXHR, textStatus, errorThrown) {
      alert('Hubo un error al enviar el formulario. Por favor, intenta nuevamente.');
    }
  });
}

function validarFormulario(event) {
  event.preventDefault(); // detiene el envío del formulario para validar primero
  const nombreInput = document.getElementById('nombreyapellido');
  const emailInput = document.getElementById('email');
  const telefonoInput = document.getElementById('telefono');
  const mensajeInput = document.getElementById('mensaje');

  const nombre = nombreInput ? nombreInput.value.trim() : null;
  const email = emailInput ? emailInput.value.trim() : null;
  const telefono = telefonoInput ? telefonoInput.value.trim() : null;
  const mensaje = mensajeInput ? mensajeInput.value.trim() : null;

  // Verifica que los campos no estén vacíos
  if (!nombre || !email || !telefono || !mensaje) {
    alert('Por favor complete todos los campos');
    return;
  }

  // Verifica que el email sea válido
  const emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(email)) {
    alert('Por favor ingrese un email válido');
    return;
  }

  // Verifica que el número de teléfono sea válido
  const telefonoRegex = /^[0-9]+$/;
  if (!telefonoRegex.test(telefono)) {
    alert('Por favor ingrese un número de teléfono válido');
    return;
  }
}
  
 


