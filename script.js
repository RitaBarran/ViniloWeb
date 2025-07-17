

window.addEventListener('DOMContentLoaded', () => {
    const vinilo = document.querySelector('.vinilo');
  
    // Primero hace que el vinilo "salga"
    vinilo.classList.add('abrir');
  
    // Luego de 6 segundos, hace que regrese
    setTimeout(() => {
      vinilo.classList.remove('abrir');
      void vinilo.offsetWidth; // Forzar reflow
      vinilo.classList.add('cerrar');
    }, 8000);
  });
  