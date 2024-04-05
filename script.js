// Obtener referencias a los elementos del DOM
const form = document.getElementById('consulta-form');
const errorMessage = document.getElementById('error-message');
const captchaContainer = document.getElementById('captcha-container');
const captchaQuestion = document.getElementById('captcha-question');
const submitButton = document.getElementById('submit-btn');

// Agregar evento submit al formulario
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto
    
    // Realizar la validación del formulario
    if (formValidate()) {
        // Si el formulario es válido, enviar los datos
        alert('Formulario enviado correctamente');
        // Aquí puedes agregar el código para enviar los datos del formulario al servidor
    }
});

// Agregar evento input a los campos del formulario para habilitar el botón de enviar cuando se resuelva el captcha
form.addEventListener('input', function() {
    if (captchaCalculate()) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
});

// Función para validar el formulario
function formValidate() {
    errorMessage.innerText = ''; // Reiniciar mensaje de error
    
    // Obtener valores de los campos del formulario
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const detalleConsulta = document.getElementById('detalle-consulta').value;
    
    // Validar que los campos no estén vacíos
    if (!nombre || !apellido || !email || !telefono || !detalleConsulta) {
        errorMessage.innerText = 'Todos los campos son obligatorios';
        return false;
    }
    
    // Validar el formato del email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errorMessage.innerText = 'Por favor, introduce un email válido';
        return false;
    }
    
    // Validar el formato del teléfono (solo números)
    const telefonoPattern = /^\d+$/;
    if (!telefonoPattern.test(telefono)) {
        errorMessage.innerText = 'El teléfono solo puede contener números';
        return false;
    }
    
    // Si pasa todas las validaciones, el formulario es válido
    return true;
}

// Función para generar y mostrar el captcha
function captchaCalculate() {
    const num1 = Math.floor(Math.random() * 10); // Operando 1
    const num2 = Math.floor(Math.random() * 10); // Operando 2
    const operator = Math.random() < 0.5 ? '+' : '-'; // Operador (suma o resta)
    const correctAnswer = operator === '+' ? num1 + num2 : num1 - num2; // Calcular la respuesta correcta
    
    // Mostrar la pregunta del captcha
    captchaQuestion.innerText = `¿Cuánto es ${num1} ${operator} ${num2}?`;
    
    // Devolver true si la respuesta es correcta, de lo contrario false
    return captchaVerify(correctAnswer);
}

// Función para verificar la respuesta del captcha
function captchaVerify(correctAnswer) {
    const userAnswer = document.getElementById('captcha').value;
    return parseInt(userAnswer) === correctAnswer;
}

// index.html
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