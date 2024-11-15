{
  const colorStops = [
    [0, "rgb(84, 94, 109)"],
    [0.2, "rgb(111, 122, 137)"],
    [0.4, "rgb(153, 156, 168)"],
    [0.6, "rgb(195, 200, 219)"],
    [0.9, "rgb(74, 73, 83)"],
    [1, "rgb(93, 93, 93)"]
  ];

  const buttons = document.querySelectorAll("[data-shiny-button]");
  const createShinyButtons = (...buttons) => {
    const shines = buttons.map(button => {
      
      const loopPartial = () => {
        const c = button.querySelector("canvas");
        const $ = c.getContext("2d");
        const { width, height } = button.getBoundingClientRect();
        let w = (c.width = width);
        let h = (c.height = height);
        
        return (x, y, width, height, i) => {
          const xRatio = width / x || 0;
          const yRatio = height / y || 0;
          const diff = i + 1;
          const gradient = $.createLinearGradient(
            yRatio * (w / 2) / 8 * -diff * 2,
            xRatio * (w / 2) / 8 - diff * 2,
            xRatio * (w / 2),
            yRatio * h / (diff / 2)
          );

          colorStops.forEach(([stop, color]) => {
            gradient.addColorStop(stop, color);
          });

          $.fillStyle = gradient;
          $.fillRect(0, 0, w, h);
        };
      };

      const loop = loopPartial();
      const innerWidth = window.innerWidth;
      const innerHeight = window.innerHeight;
      loop(innerWidth / 2, innerHeight / 2, innerWidth, innerHeight, 0);
      return loop;
    });

    const animate = (clientX, clientY) => {
      shines.forEach((shine, i) => {
        requestAnimationFrame(() =>
          shine(clientX, clientY, window.innerWidth, window.innerHeight, i)
        );
      });
    };

    document.addEventListener("mousemove", ({ clientX, clientY }) => {
      animate(clientX, clientY);
    });

    // Inicia la animación con un movimiento del mouse al cargar la página
    const initialX = window.innerWidth / 2;
    const initialY = window.innerHeight / 2;
    animate(initialX, initialY);
  };
  
  createShinyButtons(...buttons);
}


// SECCION2
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
document.addEventListener('DOMContentLoaded', () => {
  const defaultBackground = 'url("https://example.com/default-background.jpg")';
  const hexData = [
    {
      buttons: [
        { image: 'https://raw.githubusercontent.com/Fran15711/prueba1/main/pngegg.png', link: 'https://fran15711.github.io/radio/' },
        { image: 'https://raw.githubusercontent.com/Fran15711/prueba1/main/pngegg.png', link: 'https://www.instagram.com' },
        { image: 'https://raw.githubusercontent.com/Fran15711/prueba1/main/pngegg.png', link: 'https://www.twitter.com' },
        { image: 'https://raw.githubusercontent.com/Fran15711/prueba1/main/pngegg.png', link: 'https://www.linkedin.com' }
      ],
      background: 'url("https://example.com/background-hex1.jpg")'
    },
    {
      buttons: [
        { image: 'https://raw.githubusercontent.com/Fran15711/prueba1/main/pngegg.png', link: 'https://www.youtube.com' },
        { image: 'https://raw.githubusercontent.com/Fran15711/prueba1/main/pngegg.png', link: 'https://www.pinterest.com' },
        { image: 'https://raw.githubusercontent.com/Fran15711/prueba1/main/pngegg.png', link: 'https://www.snapchat.com' },
        { image: 'https://raw.githubusercontent.com/Fran15711/prueba1/main/pngegg.png', link: 'https://www.tiktok.com' }
      ],
      background: 'url("https://example.com/background-hex2.jpg")'
    },
        {
      buttons: [
        { image: 'https://raw.githubusercontent.com/Fran15711/prueba1/main/pngegg.png', link: 'https://www.youtube.com' },
        { image: 'https://raw.githubusercontent.com/Fran15711/prueba1/main/pngegg.png', link: 'https://www.pinterest.com' },
        { image: 'https://raw.githubusercontent.com/Fran15711/prueba1/main/pngegg.png', link: 'https://www.snapchat.com' },
        { image: 'https://raw.githubusercontent.com/Fran15711/prueba1/main/pngegg.png', link: 'https://www.tiktok.com' }
      ],
      background: 'url("https://example.com/background-hex2.jpg")'
    },
        {
      buttons: [
        { image: 'https://raw.githubusercontent.com/Fran15711/prueba1/main/pngegg.png', link: 'https://www.youtube.com' },
        { image: 'https://raw.githubusercontent.com/Fran15711/prueba1/main/pngegg.png', link: 'https://www.pinterest.com' },
        { image: 'https://raw.githubusercontent.com/Fran15711/prueba1/main/pngegg.png', link: 'https://www.snapchat.com' },
        { image: 'https://raw.githubusercontent.com/Fran15711/prueba1/main/pngegg.png', link: 'https://www.tiktok.com' }
      ],
      background: 'url("https://example.com/background-hex2.jpg")'
    },
        {
      buttons: [
        { image: 'https://raw.githubusercontent.com/Fran15711/prueba1/main/pngegg.png', link: 'https://www.youtube.com' },
        { image: 'https://raw.githubusercontent.com/Fran15711/prueba1/main/pngegg.png', link: 'https://www.pinterest.com' },
        { image: 'https://raw.githubusercontent.com/Fran15711/prueba1/main/pngegg.png', link: 'https://www.snapchat.com' },
        { image: 'https://raw.githubusercontent.com/Fran15711/prueba1/main/pngegg.png', link: 'https://www.tiktok.com' }
      ],
      background: 'url("https://example.com/background-hex2.jpg")'
    },
        {
      buttons: [
        { image: 'https://raw.githubusercontent.com/Fran15711/prueba1/main/pngegg.png', link: 'https://www.youtube.com' },
        { image: 'https://raw.githubusercontent.com/Fran15711/prueba1/main/pngegg.png', link: 'https://www.pinterest.com' },
        { image: 'https://raw.githubusercontent.com/Fran15711/prueba1/main/pngegg.png', link: 'https://www.snapchat.com' },
        { image: 'https://raw.githubusercontent.com/Fran15711/prueba1/main/pngegg.png', link: 'https://www.tiktok.com' }
      ],
      background: 'url("https://example.com/background-hex2.jpg")'
    },
        {
      buttons: [
        { image: 'https://raw.githubusercontent.com/Fran15711/prueba1/main/pngegg.png', link: 'https://www.youtube.com' },
        { image: 'https://raw.githubusercontent.com/Fran15711/prueba1/main/pngegg.png', link: 'https://www.pinterest.com' },
        { image: 'https://raw.githubusercontent.com/Fran15711/prueba1/main/pngegg.png', link: 'https://www.snapchat.com' },
        { image: 'https://raw.githubusercontent.com/Fran15711/prueba1/main/pngegg.png', link: 'https://www.tiktok.com' }
      ],
      background: 'url("https://example.com/background-hex2.jpg")'
    },
        {
      buttons: [
        { image: 'https://raw.githubusercontent.com/Fran15711/prueba1/main/pngegg.png', link: 'https://www.youtube.com' },
        { image: 'https://raw.githubusercontent.com/Fran15711/prueba1/main/pngegg.png', link: 'https://www.pinterest.com' },
        { image: 'https://raw.githubusercontent.com/Fran15711/prueba1/main/pngegg.png', link: 'https://www.snapchat.com' },
        { image: 'https://raw.githubusercontent.com/Fran15711/prueba1/main/pngegg.png', link: 'https://www.tiktok.com' }
      ],
      background: 'url("https://example.com/background-hex2.jpg")'
    },
        {
      buttons: [
        { image: 'https://raw.githubusercontent.com/Fran15711/prueba1/main/pngegg.png', link: 'https://www.youtube.com' },
        { image: 'https://raw.githubusercontent.com/Fran15711/prueba1/main/pngegg.png', link: 'https://www.pinterest.com' },
        { image: 'https://raw.githubusercontent.com/Fran15711/prueba1/main/pngegg.png', link: 'https://www.snapchat.com' },
        { image: 'https://raw.githubusercontent.com/Fran15711/prueba1/main/pngegg.png', link: 'https://www.tiktok.com' }
      ],
      background: 'url("https://example.com/background-hex2.jpg")'
    },
        {
      buttons: [
        { image: 'https://raw.githubusercontent.com/Fran15711/prueba1/main/pngegg.png', link: 'https://www.youtube.com' },
        { image: 'https://raw.githubusercontent.com/Fran15711/prueba1/main/pngegg.png', link: 'https://www.pinterest.com' },
        { image: 'https://raw.githubusercontent.com/Fran15711/prueba1/main/pngegg.png', link: 'https://www.snapchat.com' },
        { image: 'https://raw.githubusercontent.com/Fran15711/prueba1/main/pngegg.png', link: 'https://www.tiktok.com' }
      ],
      background: 'url("https://example.com/background-hex2.jpg")'
    },
        {
      buttons: [
        { image: 'https://raw.githubusercontent.com/Fran15711/prueba1/main/pngegg.png', link: 'https://www.youtube.com' },
        { image: 'https://raw.githubusercontent.com/Fran15711/prueba1/main/pngegg.png', link: 'https://www.pinterest.com' },
        { image: 'https://raw.githubusercontent.com/Fran15711/prueba1/main/pngegg.png', link: 'https://www.snapchat.com' },
        { image: 'https://raw.githubusercontent.com/Fran15711/prueba1/main/pngegg.png', link: 'https://www.tiktok.com' }
      ],
      background: 'url("https://example.com/background-hex2.jpg")'
    },
        {
      buttons: [
        { image: 'https://raw.githubusercontent.com/Fran15711/prueba1/main/pngegg.png', link: 'https://www.youtube.com' },
        { image: 'https://raw.githubusercontent.com/Fran15711/prueba1/main/pngegg.png', link: 'https://www.pinterest.com' },
        { image: 'https://raw.githubusercontent.com/Fran15711/prueba1/main/pngegg.png', link: 'https://www.snapchat.com' },
        { image: 'https://raw.githubusercontent.com/Fran15711/prueba1/main/pngegg.png', link: 'https://www.tiktok.com' }
      ],
      background: 'url("https://example.com/background-hex2.jpg")'
    },
        {
      buttons: [
        { image: 'https://raw.githubusercontent.com/Fran15711/prueba1/main/pngegg.png', link: 'https://www.youtube.com' },
        { image: 'https://raw.githubusercontent.com/Fran15711/prueba1/main/pngegg.png', link: 'https://www.pinterest.com' },
        { image: 'https://raw.githubusercontent.com/Fran15711/prueba1/main/pngegg.png', link: 'https://www.snapchat.com' },
        { image: 'https://raw.githubusercontent.com/Fran15711/prueba1/main/pngegg.png', link: 'https://www.tiktok.com' }
      ],
      background: 'url("https://example.com/background-hex2.jpg")'
    },
        {
      buttons: [
        { image: 'https://raw.githubusercontent.com/Fran15711/prueba1/main/pngegg.png', link: 'https://www.youtube.com' },
        { image: 'https://raw.githubusercontent.com/Fran15711/prueba1/main/pngegg.png', link: 'https://www.pinterest.com' },
        { image: 'https://raw.githubusercontent.com/Fran15711/prueba1/main/pngegg.png', link: 'https://www.snapchat.com' },
        { image: 'https://raw.githubusercontent.com/Fran15711/prueba1/main/pngegg.png', link: 'https://www.tiktok.com' }
      ],
      background: 'url("https://example.com/background-hex2.jpg")'
    },
        {
      buttons: [
        { image: 'https://raw.githubusercontent.com/Fran15711/prueba1/main/pngegg.png', link: 'https://www.youtube.com' },
        { image: 'https://raw.githubusercontent.com/Fran15711/prueba1/main/pngegg.png', link: 'https://www.pinterest.com' },
        { image: 'https://raw.githubusercontent.com/Fran15711/prueba1/main/pngegg.png', link: 'https://www.snapchat.com' },
        { image: 'https://raw.githubusercontent.com/Fran15711/prueba1/main/pngegg.png', link: 'https://www.tiktok.com' }
      ],
      background: 'url("https://example.com/background-hex2.jpg")'
    },
        {
      buttons: [
        { image: 'https://raw.githubusercontent.com/Fran15711/prueba1/main/pngegg.png', link: 'https://www.youtube.com' },
        { image: 'https://raw.githubusercontent.com/Fran15711/prueba1/main/pngegg.png', link: 'https://www.pinterest.com' },
        { image: 'https://raw.githubusercontent.com/Fran15711/prueba1/main/pngegg.png', link: 'https://www.snapchat.com' },
        { image: 'https://raw.githubusercontent.com/Fran15711/prueba1/main/pngegg.png', link: 'https://www.tiktok.com' }
      ],
      background: 'url("https://example.com/background-hex2.jpg")'
    },
        {
      buttons: [
        { image: 'https://raw.githubusercontent.com/Fran15711/prueba1/main/pngegg.png', link: 'https://www.youtube.com' },
        { image: 'https://raw.githubusercontent.com/Fran15711/prueba1/main/pngegg.png', link: 'https://www.pinterest.com' },
        { image: 'https://raw.githubusercontent.com/Fran15711/prueba1/main/pngegg.png', link: 'https://www.snapchat.com' },
        { image: 'https://raw.githubusercontent.com/Fran15711/prueba1/main/pngegg.png', link: 'https://www.tiktok.com' }
      ],
      background: 'url("https://example.com/background-hex2.jpg")'
    },
        {
      buttons: [
        { image: 'https://raw.githubusercontent.com/Fran15711/prueba1/main/pngegg.png', link: 'https://www.youtube.com' },
        { image: 'https://raw.githubusercontent.com/Fran15711/prueba1/main/pngegg.png', link: 'https://www.pinterest.com' },
        { image: 'https://raw.githubusercontent.com/Fran15711/prueba1/main/pngegg.png', link: 'https://www.snapchat.com' },
        { image: 'https://raw.githubusercontent.com/Fran15711/prueba1/main/pngegg.png', link: 'https://www.tiktok.com' }
      ],
      background: 'url("https://example.com/background-hex2.jpg")'
    },
        {
      buttons: [
        { image: 'https://raw.githubusercontent.com/Fran15711/prueba1/main/pngegg.png', link: 'https://www.youtube.com' },
        { image: 'https://raw.githubusercontent.com/Fran15711/prueba1/main/pngegg.png', link: 'https://www.pinterest.com' },
        { image: 'https://raw.githubusercontent.com/Fran15711/prueba1/main/pngegg.png', link: 'https://www.snapchat.com' },
        { image: 'https://raw.githubusercontent.com/Fran15711/prueba1/main/pngegg.png', link: 'https://www.tiktok.com' }
      ],
      background: 'url("https://example.com/background-hex2.jpg")'
    },
        {
      buttons: [
        { image: 'https://raw.githubusercontent.com/Fran15711/prueba1/main/pngegg.png', link: 'https://www.youtube.com' },
        { image: 'https://raw.githubusercontent.com/Fran15711/prueba1/main/pngegg.png', link: 'https://www.pinterest.com' },
        { image: 'https://raw.githubusercontent.com/Fran15711/prueba1/main/pngegg.png', link: 'https://www.snapchat.com' },
        { image: 'https://raw.githubusercontent.com/Fran15711/prueba1/main/pngegg.png', link: 'https://www.tiktok.com' }
      ],
      background: 'url("https://example.com/background-hex2.jpg")'
    },
        {
      buttons: [
        { image: 'https://raw.githubusercontent.com/Fran15711/prueba1/main/pngegg.png', link: 'https://www.youtube.com' },
        { image: 'https://raw.githubusercontent.com/Fran15711/prueba1/main/pngegg.png', link: 'https://www.pinterest.com' },
        { image: 'https://raw.githubusercontent.com/Fran15711/prueba1/main/pngegg.png', link: 'https://www.snapchat.com' },
        { image: 'https://raw.githubusercontent.com/Fran15711/prueba1/main/pngegg.png', link: 'https://www.tiktok.com' }
      ],
      background: 'url("https://example.com/background-hex2.jpg")'
    },
        {
      buttons: [
        { image: 'https://raw.githubusercontent.com/Fran15711/prueba1/main/pngegg.png', link: 'https://www.youtube.com' },
        { image: 'https://raw.githubusercontent.com/Fran15711/prueba1/main/pngegg.png', link: 'https://www.pinterest.com' },
        { image: 'https://raw.githubusercontent.com/Fran15711/prueba1/main/pngegg.png', link: 'https://www.snapchat.com' },
        { image: 'https://raw.githubusercontent.com/Fran15711/prueba1/main/pngegg.png', link: 'https://www.tiktok.com' }
      ],
      background: 'url("https://example.com/background-hex2.jpg")'
    },
        {
      buttons: [
        { image: 'https://raw.githubusercontent.com/Fran15711/prueba1/main/pngegg.png', link: 'https://www.youtube.com' },
        { image: 'https://raw.githubusercontent.com/Fran15711/prueba1/main/pngegg.png', link: 'https://www.pinterest.com' },
        { image: 'https://raw.githubusercontent.com/Fran15711/prueba1/main/pngegg.png', link: 'https://www.snapchat.com' },
        { image: 'https://raw.githubusercontent.com/Fran15711/prueba1/main/pngegg.png', link: 'https://www.tiktok.com' }
      ],
      background: 'url("https://example.com/background-hex2.jpg")'
    },
  ];

  const hexagons = document.querySelectorAll('.hex');
  const seccion3 = document.querySelector('.seccion3');
  
  // Crear y establecer la capa de fondo
  const backgroundLayer = document.createElement('div');
  backgroundLayer.classList.add('background-layer');
  seccion3.appendChild(backgroundLayer);
  backgroundLayer.style.backgroundImage = defaultBackground;

  hexagons.forEach((hex, index) => {
    hex.addEventListener('click', () => {
      removeButtons();
      changeBackground(hexData[index].background);
      createHexButtons(hexData[index].buttons);
    });
  });

  function changeBackground(newBackground) {
    const newLayer = document.createElement('div');
    newLayer.classList.add('background-layer', 'hidden');
    newLayer.style.backgroundImage = newBackground;
    seccion3.appendChild(newLayer);

    setTimeout(() => {
      backgroundLayer.classList.add('hidden');
      newLayer.classList.remove('hidden');

      setTimeout(() => {
        backgroundLayer.remove();
        backgroundLayer = newLayer;
      }, 1000);
    }, 50);
  }

  function createHexButtons(buttons) {
    buttons.forEach((buttonData, i) => {
      const button = createButton(buttonData.image, buttonData.link);
      seccion3.appendChild(button);
      positionButtons(button, (i % 2 === 0 ? -35 : 30), (i < 2 ? -25 : 25));

      setTimeout(() => {
        button.classList.add('show');
      }, i * 50);
    });
  }

  function removeButtons() {
    document.querySelectorAll('.dynamic-button').forEach(button => button.remove());
  }

  function createButton(image, link) {
    const button = document.createElement('button');
    button.classList.add('dynamic-button');
    const img = document.createElement('img');
    img.src = image;
    img.alt = '';
    img.style.width = '4vw';
    img.style.height = 'auto';
    button.appendChild(img);

    button.addEventListener('click', () => {
      openPopup(link);
    });

    return button;
  }

  function positionButtons(button, leftVW, topVH) {
    button.style.position = 'absolute';
    button.style.left = `calc(50vw + ${leftVW}vw)`;
    button.style.top = `calc(50vh + ${topVH}vh)`;
  }

  // Función para abrir la ventana emergente dentro de la página
  function openPopup(url) {
    const popup = document.createElement('div');
    popup.classList.add('popup');
    popup.style.position = 'fixed';
    popup.style.top = '50%';
    popup.style.left = '50%';
    popup.style.transform = 'translate(-50%, -50%)';
    popup.style.width = '50%';
    popup.style.height = '50%';
    popup.style.backgroundColor = 'white';
    popup.style.borderRadius = '8px';
    popup.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    popup.style.zIndex = '1000';
    popup.style.display = 'flex';
    popup.style.flexDirection = 'column';
    popup.style.alignItems = 'center';
    popup.style.justifyContent = 'center';

    const iframe = document.createElement('iframe');
    iframe.src = url;
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none';
    popup.appendChild(iframe);

    const closeButton = document.createElement('button');
    closeButton.textContent = 'Close';
    closeButton.style.marginTop = '10px';
    closeButton.style.padding = '5px 10px';
    closeButton.style.backgroundColor = '#333';
    closeButton.style.color = '#fff';
    closeButton.style.border = 'none';
    closeButton.style.borderRadius = '5px';
    closeButton.style.cursor = 'pointer';
    closeButton.addEventListener('click', () => {
      popup.remove();
    });

    popup.appendChild(closeButton);
    document.body.appendChild(popup);
  }
});


// Variables de sección 5
let player;
const card = document.querySelector('.seccion5 .card');
const play = document.querySelector('.seccion5 .card-play');
const video = document.querySelector('.seccion5 .card-video');

// Efecto de brillo
card.onmousemove = function (e) {
  const x = e.pageX - card.offsetLeft;
  const y = e.pageY - card.offsetTop;
  card.style.setProperty('--x', `${x}px`);
  card.style.setProperty('--y', `${y}px`);
};

// API de YouTube
function onYouTubePlayerAPIReady() {
  player = new YT.Player('video', {
    events: {
      'onReady': onPlayerReady
    }
  });
}

// Player listo
function onPlayerReady(event) {
  play.addEventListener('click', () => {
    card.classList.add('video-is-open');
    setTimeout(() => {
      video.style.display = 'block';
      player.playVideo();
    }, 500);
  });
}

// Inyectar el script de la API de YouTube
const tag = document.createElement('script');
tag.src = "//www.youtube.com/player_api";
document.body.appendChild(tag);

// Sección 6
$(document).ready(() => {
  $('.count-number').each(function () {
    const $this = $(this);
    const countTo = $this.attr('data-to');
    const speed = parseInt($this.attr('data-speed'), 10);
    let counted = false;

    const countUp = () => {
      if (!counted) {
        counted = true;
        $({ countNum: $this.text() }).animate({
          countNum: countTo
        }, {
          duration: speed,
          easing: 'linear',
          step() {
            $this.text(Math.floor(this.countNum).toLocaleString());
          },
          complete() {
            $this.text(this.countNum.toLocaleString());
          }
        });
      }
    };

    const isInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    $(window).on('scroll', () => {
      if (isInViewport($this[0])) countUp();
    });

    if (isInViewport($this[0])) countUp();
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const section = document.querySelector('.seccion7');
  // Aseguramos que los elementos sean visibles desde el principio
  if (section) {
    section.classList.add('active');

    // Función para enviar el formulario
    const form = document.querySelector('.seccion7 #ajax-contact');
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();

        const formData = new FormData(this);

        fetch('https://formsubmit.co/francisconoriegaret15@gmail.com', {
          method: 'POST',
          body: formData
        })
          .then(response => {
            if (response.ok) {
              alert('Message sent successfully!');
              this.reset();
            } else {
              alert('Error sending message.');
            }
          })
          .catch(() => {
            alert('Error sending message.');
          });
      });
    }
  }
});

