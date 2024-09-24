const slider = document.querySelector('.slider');

function activate(e) {
  const items = document.querySelectorAll('.item');
  
  // Verifica si el botón clickeado es el siguiente
  if (e.target.matches('.next')) {
    // Mueve el primer elemento al final del slider
    slider.append(items[0]);
  }

  // Verifica si el botón clickeado es el anterior
  if (e.target.matches('.prev')) {
    // Mueve el último elemento al principio del slider
    slider.prepend(items[items.length - 1]);
  }
}

// Escucha el evento de clic en el documento
document.addEventListener('click', activate, false);
