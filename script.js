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
<!-- Script para tercera seccion -->
document.addEventListener('DOMContentLoaded', () => {
    const interBubble = document.querySelector('.interactive');
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    const move = () => {
        curX += (tgX - curX) / 20;
        curY += (tgY - curY) / 20;
        interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
        requestAnimationFrame(move);
    };

    window.addEventListener('mousemove', (event) => {
        tgX = event.clientX;
        tgY = event.clientY;
    });

    move();
});
