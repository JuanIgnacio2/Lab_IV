// CONTACT.HTML
document.getElementById('captcha').addEventListener('input', function() {
    var captchaInput = document.getElementById('captcha').value.trim();
    var submitBtn = document.getElementById('submitBtn');
    submitBtn.disabled = (captchaInput === ''); // Deshabilitar el botón si el CAPTCHA está vacío
  });
  
  // Función para ocultar el mensaje de error después de 4 segundos
  function hideErrorMessage() {
    document.getElementById('error-message').style.display = 'none';
  }
  
  // Función para mostrar el mensaje de error
  function showErrorMessage(message) {
    document.getElementById('error-message').innerText = message;
    document.getElementById('error-message').style.display = 'block';
  
    // Ocultar el mensaje después de 4 segundos
    setTimeout(hideErrorMessage, 4000);
  }
  
  // Función para validar el formulario
  function formValidate() {
    var fname = document.getElementById('fname').value.trim();
    var lname = document.getElementById('lname').value.trim();
    var email = document.getElementById('email').value.trim();
    var phone = document.getElementById('phone').value.trim();
    var message = document.getElementById('message').value.trim();
    var company = document.getElementById('company').value.trim();
    var captcha = document.getElementById('captcha').value.trim(); // Obtener el valor del CAPTCHA
    var errorMessage = '';
  
    // Validar la operación CAPTCHA
    if (captcha !== '12') {
      errorMessage += 'Por favor, resuelve correctamente la operación CAPTCHA.\n';
    }
  
    if (fname === '' || lname === '' || email === '' || phone === '' || message === '' || company === '') {
        errorMessage += 'Por favor, complete todos los campos.\n';
    }
  
    if (!/^\d+$/.test(phone)) {
        errorMessage += 'El teléfono solo puede contener números.\n';
    }
  
    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
        errorMessage += 'Por favor, ingrese un email válido.\n';
    }
  
    if (errorMessage !== '') {
        showErrorMessage(errorMessage);
        return false; // Detiene el envío del formulario
    }
  
    // Aquí el formulario es válido
    alert('Mensaje enviado');
    return true; // Permite el envío del formulario
  }
  
  // Event listener para el botón "Limpiar"
  document.querySelector('.btn-warning').addEventListener('click', function() {
    document.getElementById('submitBtn').disabled = true; // Deshabilitar el botón "Enviar"
  });
  
  // Agregar evento input a cada campo de entrada para ocultar el mensaje de error cuando el usuario interactúa con ellos
  var inputs = document.querySelectorAll('input, textarea');
  inputs.forEach(function(input) {
    input.addEventListener('input', function() {
        hideErrorMessage();
    });
  });

  document.getElementById('boton-whatsapp').addEventListener('click', function() {
    enviarMensajeWhatsApp();
  });
  
  // Función para enviar un mensaje a través de WhatsApp
  function enviarMensajeWhatsApp() {
    var mensaje = encodeURIComponent("Hola, me gustaría obtener más información."); // Mensaje predefinido
    var numero = "+54 9 3434643057"; // Reemplazar con número de teléfono, incluyendo el código de país (sin el signo "+" ni guiones).
    var url = "https://web.whatsapp.com/send?phone=" + numero + "&text=" + mensaje;
    window.open(url, '_blank');
  }

// INDEX.HTML
function toggleDetails(detailsId){
    const details = document.getElementById(detailsId);
    const allDetails = document.querySelectorAll('.details');
    const footer = document.getElementById('footer');

    //Ocultar todos los detalles, excepto el seleccionado
    allDetails.forEach(function(item){
        if(item.id !== detailsId){
            item.style.display = 'none';
        }
    });

    // Alternar la visibilidad del div de detalles seleccionado
    if (details.style.display === 'block') {
        details.style.display = 'none';
        footer.style.marginTop = '0';
    } else {
        details.style.display = 'block';
        footer.style.marginTop = details.offsetHeight + 'px'; // Ajustar el margen superior del footer según la altura de los detalles
    }
}