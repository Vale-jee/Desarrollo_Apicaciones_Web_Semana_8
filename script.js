function mostrarPromocion() {
    // Buscamos el cuadro de texto por su ID "mensajePromocion"
    const cajaMensaje = document.getElementById('mensajePromocion');
    
    // Toggle: Si está oculto lo muestra, si está visible lo oculta
    if (cajaMensaje) {
        cajaMensaje.classList.toggle('d-none');
    }
}

/* 2. Tu lógica original de validación del formulario (se mantiene igual) */
document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formularioContacto');

    formulario.addEventListener('submit', function(event) {
        // Evitar que la página se recargue
        event.preventDefault();
        
        let formularioValido = true;

        // Validar el campo Nombre
        const nombre = document.getElementById('nombre');
        if (nombre.value.trim() === "") {
            nombre.classList.add('is-invalid');
            formularioValido = false;
        } else {
            nombre.classList.remove('is-invalid');
            nombre.classList.add('is-valid');
        }

        // Validar el Correo Electrónico
        const correo = document.getElementById('correo');
        const filtroEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!filtroEmail.test(correo.value.trim())) {
            correo.classList.add('is-invalid');
            formularioValido = false;
        } else {
            correo.classList.remove('is-invalid');
            correo.classList.add('is-valid');
        }

        // Validar el Mensaje
        const mensaje = document.getElementById('mensaje');
        if (mensaje.value.trim().length < 5) {
            mensaje.classList.add('is-invalid');
            formularioValido = false;
        } else {
            mensaje.classList.remove('is-invalid');
            mensaje.classList.add('is-valid');
        }

        // Si todo es correcto
        if (formularioValido) {
            alert("¡Gracias por tu mensaje, " + nombre.value + "! Nos contactaremos contigo pronto.");
            formulario.reset();
            // Quitar los estilos de validación verde
            nombre.classList.remove('is-valid');
            correo.classList.remove('is-valid');
            mensaje.classList.remove('is-valid');
            formulario.classList.remove('was-validated');
        } else {
            // Mostrar errores de Bootstrap
            formulario.classList.add('was-validated');
        }
    });
});