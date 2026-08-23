document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("welcomeModal");
    const closeBtn = document.getElementById("closeModalBtn");

    // Verificar si el usuario ya vio el popup en esta sesión
    if (!sessionStorage.getItem("popupShown")) {
        // Mostrar el modal al cargar la página
        modal.classList.add("show");
    }

    // Función para cerrar el modal
    function closeModal() {
        modal.classList.remove("show");
        // Guardar en sessionStorage para que no vuelva a salir en esta pestaña/sesión
        sessionStorage.setItem("popupShown", "true");
    }

    // Evento en el botón de cerrar
    closeBtn.addEventListener("click", closeModal);

    // Cerrar también si el usuario hace clic fuera del contenido central
    modal.addEventListener("click", function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
});