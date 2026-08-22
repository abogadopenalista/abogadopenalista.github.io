document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       1. MENÚ MÓVIL DESPLEGABLE
       ========================================================================== */
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Cambiar ícono entre barras y X
            const icon = mobileMenuBtn.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-xmark');
            }
        });

        // Cerrar menú al hacer clic en un enlace
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                if (icon) {
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-xmark');
                }
            });
        });
    }

    /* ==========================================================================
       2. VALIDACIÓN DEL FORMULARIO DE CONTACTO (QA)
       ========================================================================== */
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Limpiar errores previos
            clearErrors();

            const fullName = document.getElementById('fullName').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            let isValid = true;

            // Validar Nombre
            if (fullName === '') {
                showError('fullName', 'El nombre completo es obligatorio.');
                isValid = false;
            } else if (fullName.length < 3) {
                showError('fullName', 'El nombre debe tener al menos 3 caracteres.');
                isValid = false;
            }

            // Validar Email
            if (email === '') {
                showError('email', 'El correo electrónico es obligatorio.');
                isValid = false;
            } else if (!validateEmail(email)) {
                showError('email', 'Ingrese un correo electrónico válido.');
                isValid = false;
            }

            // Validar Mensaje
            if (message === '') {
                showError('message', 'Por favor, ingrese los detalles de su caso.');
                isValid = false;
            } else if (message.length < 10) {
                showError('message', 'El mensaje debe ser más descriptivo (mínimo 10 caracteres).');
                isValid = false;
            }

            // Si pasa la validación
            if (isValid) {
                const statusDiv = document.getElementById('form-status');
                statusDiv.style.display = 'block';
                statusDiv.style.backgroundColor = '#d4edda';
                statusDiv.style.color = '#155724';
                statusDiv.textContent = '¡Gracias! Su mensaje ha sido enviado con éxito. Nos pondremos en contacto a la brevedad.';
                
                contactForm.reset();

                // Ocultar mensaje tras 5 segundos
                setTimeout(() => {
                    statusDiv.style.display = 'none';
                }, 5000);
            }
        });
    }

    // Función auxiliar para validar email por RegExp
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Funciones de utilidad para errores
    function showError(fieldId, message) {
        const errorElement = document.getElementById(`error-${fieldId}`);
        if (errorElement) {
            errorElement.textContent = message;
        }
    }

    function clearErrors() {
        document.querySelectorAll('.error-msg').forEach(el => el.textContent = '');
        const statusDiv = document.getElementById('form-status');
        if (statusDiv) statusDiv.style.display = 'none';
    }
});