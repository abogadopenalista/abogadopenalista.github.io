document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("welcomeModal");
    const closeBtn = document.getElementById("closeModalBtn");

    if (!modal) return; // Control de seguridad por si no existe el elemento en la página

    // Verificar si el usuario ya vio el popup en esta sesión
    if (!sessionStorage.getItem("popupShown")) {
        modal.classList.add("show");
    }

    // Función para cerrar el modal
    function closeModal() {
        modal.classList.remove("show");
        // Forzar ocultamiento inmediato por si el CSS tiene conflictos de visibilidad
        modal.style.display = "none"; 
        sessionStorage.setItem("popupShown", "true");
    }

    // Evento en el botón de cerrar
    if (closeBtn) {
        closeBtn.addEventListener("click", closeModal);
    }

    // Cerrar si hace clic en el fondo oscuro fuera del contenido
    modal.addEventListener("click", function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
});