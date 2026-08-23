document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const modal = document.getElementById('custom-modal');
    const closeBtn = document.getElementById('modal-close-btn');
  
    form.addEventListener('submit', async function(e) {
      e.preventDefault();
  
      const data = new FormData(form);
      
      try {
        const response = await fetch(form.action, {
          method: form.method,
          body: data,
          headers: {
            'Accept': 'application/json'
          }
        });
  
        if (response.ok) {
          form.reset();
          modal.style.display = 'flex';
        } else {
          alert('Ocurrió un error al enviar el mensaje. Por favor intente nuevamente.');
        }
      } catch (error) {
        alert('Error de conexión. Verifique su red e intente de nuevo.');
      }
    });
  
    closeBtn.addEventListener('click', function() {
      modal.style.display = 'none';
    });
  });