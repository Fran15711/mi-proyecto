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

document.addEventListener("DOMContentLoaded", () => {
    // Crear modal dinámicamente
    const modal = document.createElement("div");
    modal.id = "popup-modal";
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-button">&times;</span>
            <iframe id="modal-iframe" frameborder="0"></iframe>
        </div>
    `;
    document.body.appendChild(modal);

    // Estilo dinámico para el modal
    const style = document.createElement("style");
    style.textContent = `
        #popup-modal {
            display: none;
            position: fixed;
            z-index: 1000;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            overflow: auto;
            background-color: rgba(0, 0, 0, 0.5);
        }
        .modal-content {
            background-color: #fefefe;
            margin: 10% auto;
            padding: 20px;
            border: 1px solid #888;
            width: 80%;
            max-height: 80%;
            overflow: auto;
            border-radius: 10px;
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
        }
        .modal-content iframe {
            width: 100%;
            height: 60vh;
        }
        .close-button {
            color: #aaa;
            float: right;
            font-size: 28px;
            font-weight: bold;
            cursor: pointer;
        }
        .close-button:hover,
        .close-button:focus {
            color: black;
            text-decoration: none;
            cursor: pointer;
        }
    `;
    document.head.appendChild(style);

    // Detectar los enlaces existentes en el contenedor
    const links = document.querySelectorAll(".seccion2-3 a");

    links.forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault(); // Evitar el comportamiento predeterminado
            const url = link.href; // Obtener la URL del enlace
            const iframe = document.getElementById("modal-iframe");
            iframe.src = url; // Establecer la URL en el iframe
            modal.style.display = "block"; // Mostrar el modal
        });
    });

    // Cerrar el modal al hacer clic en la "X"
    const closeButton = modal.querySelector(".close-button");
    closeButton.addEventListener("click", () => {
        modal.style.display = "none";
        const iframe = document.getElementById("modal-iframe");
        iframe.src = ""; // Limpiar el iframe
    });

    // Cerrar el modal al hacer clic fuera de él
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
            const iframe = document.getElementById("modal-iframe");
            iframe.src = ""; // Limpiar el iframe
        }
    });
});

//SECCION3
document.addEventListener('DOMContentLoaded', () => {
  const defaultImage = '#';
  const hexData = [
    {
      buttons: [
        { image: 'https://raw.githubusercontent.com/Fran15711/prueba1/refs/heads/main/radio.png', link: 'https://fran15711.github.io/radio/', text: 'Comercial de Radio', id2: 'comercial de radio' },
        { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/posts6.png', link: 'https://fran15711.github.io/postscentinela1/', text: 'Diseño y copy de posts', id2: 'Posts' },
        { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/campan%CC%83acomunicacion.png', link: 'https://fran15711.github.io/estrategia-de-comunicacion-centinela/', text: 'Campaña de comunicación', id2: 'Estrategia de Comunicación' },
        { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/investigaciondemk.png', link: 'https://fran15711.github.io/investigacioncentinela/', text: 'Investigación de mercado y segmentación', id2: 'Investigación de mercado' }
      ],
      image: 'https://raw.githubusercontent.com/Fran15711/backgroundsseccion3/refs/heads/main/centi.jpg',
      textColor: '#FFF',
      datatext: 'CENTINELA: Empresa de alarmas, monitoreo y GPS para casas, negocios y automóviles'
    },
        {
      buttons: [
        { image: 'https://raw.githubusercontent.com/Fran15711/botones/main/influencers.png', link: 'https://fran15711.github.io/influencersdenver/', text:'Campañas con Influencers', id2: 'Campañas con Influencers' },
        { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/foto.png', link: 'https://fran15711.github.io/shootingproductosdenver/', text:'Shootings de producto y modelos', id2: 'Fotografía' },
        { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/paginaweb.png', link: 'https://fran15711.github.io/ecommercedenver/', text:'Ecommerce Shopify, Mercado Libre y Amazon', id2: 'Página web - E-commerce' },
        { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/posts6.png', link: 'https://fran15711.github.io/botavaqueradenver/', text: 'Campaña Bota Vaquera', id2: 'Posts' }
      ],
      image: 'https://raw.githubusercontent.com/Fran15711/backgroundsseccion3/refs/heads/main/dvr1.jpg',
      textColor: '#fff',
      datatext: 'DENVER ICY: Empresa de ropa y calzado vaquero'    
    },
     {
      buttons: [
        { image: 'https://raw.githubusercontent.com/Fran15711/botones/main/expo.png', link: 'https://fran15711.github.io/standevacolors/', text:'Stand Expo Empaque Norte', id2: 'Expo' },
        { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/video.png', link: 'https://www.youtube.com/@evacolors', text:'Videos recursos para labor de ventas', id2: 'Video' },
        { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/presentacion.png', link: 'https://fran15711.github.io/presentacoinevacolors/', text:'Presentación de ventas', id2: 'Presentación de Ventas' },
        { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/blog.png', link: 'https://blog.evacolors.com/', text: 'Blogs SEO', id2: 'Blog' }
      ],
      image: 'https://raw.githubusercontent.com/Fran15711/backgroundsseccion3/refs/heads/main/eva.jpg',
      textColor: '#000',
      datatext: 'EVACOLORS: Empresa fabricante de crosslink foam-foamy'
    },
    {
      buttons: [
        { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/posts6.png', link: 'https://fran15711.github.io/postsitaliancoffee/', text:'Campañas de Marketing', id2: 'Posts' },
        { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/endomarketing.png', link: 'https://fran15711.github.io/endomarketing/', text:'Endomarketing', id2: 'Endomarketing' },
        { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/campan%CC%83acomunicacion.png', link: 'https://fran15711.github.io/italianestrategiadecomunicacion/', text:'Estrategia de Comunicación', id2: 'Estrategia de Comunicación' },
        { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/mistery.png', link: 'https://fran15711.github.io/misteryshopper/', text: 'Mistery Shopper', id2: 'Mistery Shopper' }
      ],
      image: 'https://raw.githubusercontent.com/Fran15711/backgroundsseccion3/refs/heads/main/ita.jpg',
      textColor: '#fff',
      datatext: 'ITALIAN COFFEE LEÓN: Marca de sucursales cafeterías'
    },
        {
      buttons: [
        { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/investigaciondemk.png', link: 'https://fran15711.github.io/investigaciondemercadochimirica/', text:'Investigación de mercado', id2: 'Investigación de Mercado' },
        { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/posts6.png', link: 'https://fran15711.github.io/postschimirica/', text:'Posts Redes Sociales', id2: 'Posts' },
        { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/campan%CC%83acomunicacion.png', link: 'https://fran15711.github.io/estrategiadecomunicacionchimirica/', text:'Estrategia de Comunicación', id2: 'Estrategia de Comunicación' },
        { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/investigaciondemk.png', link: 'https://fran15711.github.io/morfologiadeempaques/', text: 'Análisis de Empaques', id2: 'Investigaciòn de Mercado'}
      ],
      image: 'https://raw.githubusercontent.com/Fran15711/backgroundsseccion3/refs/heads/main/chi.jpg',
      textColor: '#fff',
      datatext: 'CHIMIRICA: Marca de chimichurri; aderezo para todas las comidas'
    },
    {
      buttons: [
        { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/posts6.png', link: 'https://fran15711.github.io/postsmex7boots/', text:'Posts Redes Sociales', id2: 'Posts' },
        { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/investigaciondemk.png', link: 'https://fran15711.github.io/postsmex7boots/', text:'Prospección de clientes', id2: 'Investigaciòn de Mercado' },
        { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/presentacion.png', link: 'https://fran15711.github.io/catalogomex7boots/', id2: 'Presentación de Ventas', text:'Catálogo' },
        { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/posts6.png', link: 'https://www.instagram.com/p/CYWrMtgrqSt/?img_index=1', text: 'Giveaway', id2: 'Posts' }
      ],
      image: 'https://raw.githubusercontent.com/Fran15711/backgroundsseccion3/refs/heads/main/mex7.jpg',
      textColor: '#000',
      datatext: 'MEX7 BOOTS: Empresa fabricante de botas vaqueras'
    },
     {
      buttons: [
        { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/investigaciondemk.png', link: 'https://fran15711.github.io/memoriasdelandrade/', text:'Memorias de la Andrade (Abre otra ventana)', id2: 'Investigación de Mercado' },
        { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/presentacion.png', link: 'https://fran15711.github.io/cuadripticobka/', text:'Cuadríptico', id2: 'Presentación de Ventas' },
        { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/posts6.png', link: 'https://fran15711.github.io/postsbikia/', text:'Posts redes sociales' , id2: 'Posts'},
        { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/paginaweb.png', link: 'https://bikia.mx/', text: 'Página web', id2: 'Página web - E-commerce' }
      ],
      image: 'https://raw.githubusercontent.com/Fran15711/backgroundsseccion3/refs/heads/main/bikia.jpg',
      textColor: '#000',
      datatext: 'BIKIA: Desarrollo vertical construído en la colonia Andrade' 
    },
                   {
      buttons: [
        { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/mailing.png', link: 'https://fran15711.github.io/mdrmailing/', text:'Mailing', id2: 'Mailing' },
        { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/video.png', link: 'https://www.youtube.com/watch?v=2Hd1Rdo8umw', text:'Videos', id2: 'Video' },
        { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/campan%CC%83acomunicacion.png', link: 'https://fran15711.github.io/estrategiamdr/', text:'Estrategia de Comunicación', id2: 'Estrategia de Comunicación' },
        { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/blog.png', link: 'https://mercadr.com/blog/', text: 'Blog SEO', id2: 'Blog' }
      ],
      image: 'https://raw.githubusercontent.com/Fran15711/backgroundsseccion3/refs/heads/main/mdr.jpg',
      textColor: '#fff',
      datatext: 'MERCADOCTOR: Agencia de Innovación y Marketing'               
    },
                        {
      buttons: [
        { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/campan%CC%83acomunicacion.png', link: 'https://fran15711.github.io/estrategiadecomunicacionprveco/', text:'Estrategia de Comunicación' , id2: 'Estrategia de Comunicación'},
        { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/posts6.png', link: 'https://fran15711.github.io/postsprveco/', text:'Posts Providencia' , id2: 'Posts'},
        { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/paginaweb.png', link: 'https://ecoparqueprovidencia.com/', text:'Sitio Web Ecoparque Providencia', id2: 'Página web - E-commerce' },
        { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/video.png', link: 'https://fran15711.github.io/videoprv/', text: 'Video Ecoparque', id2: 'Video' }
      ],
      image: 'https://raw.githubusercontent.com/Fran15711/backgroundsseccion3/refs/heads/main/prveco.jpg',
      textColor: '#fff',
      datatext: 'ECOPARQUE PROVIDENCIA: Ecoparque en la Sierra de Durango'
    },
                            {
      buttons: [
        { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/video.png', link: 'https://fran15711.github.io/activacionesplazanorte/', text:'Videos de Activaciones', id2: 'Video' },
        { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/video.png', link: 'https://fran15711.github.io/videocamila/', text:'Videos Camila', id2: 'Video' },
        { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/presentacion.png', link: 'https://fran15711.github.io/presentacionplazanorte/', text:'Presentación de Ventas', id2: 'Presentación de Ventas' },
      ],
      image: 'https://raw.githubusercontent.com/Fran15711/backgroundsseccion3/refs/heads/main/plazanorte.jpg',
      textColor: '#000',
      datatext: 'PLAZA NORTE: Plaza Comercial en Zona Norte, León, Gto.'
    },
                            {
      buttons: [
        { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/posts6.png', link: 'https://fran15711.github.io/postsWNB/', text:'Posts Facebook/Instagram', id2: 'Posts'},
        { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/blog.png', link: 'https://wellnessnobrand.com/blog-2/', text:'Blog', id2: 'Blog' },
        { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/video.png', link: 'https://www.youtube.com/watch?v=lNGgUKzngfs&t=6s', text:'Video', id2: 'Video' },
        { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/paginaweb.png', link: 'https://wellnessnobrand.com/', text: 'Sitio web', id2: 'Página web - E-commerce' }
      ],
      image: 'https://raw.githubusercontent.com/Fran15711/backgroundsseccion3/refs/heads/main/wnb.jpg',
      textColor: '#fff',
      datatext: 'WELLNESS NOBRAND: Marca vendedora de aceites esenciales para mujeres'
    },
                                {
      buttons: [
        { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/investigaciondemk.png', link: 'https://fran15711.github.io/analyticsrocarent/', text:'Investigación de mercado', id2: 'Investigación de Mercado' },
        { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/paginaweb.png', link: 'https://fran15711.github.io/UXrocarent/', text:'Recorrido UX', id2: 'Página web - E-commerce' },
      ],
      image: 'https://raw.githubusercontent.com/Fran15711/backgroundsseccion3/refs/heads/main/roc.jpg',
      textColor: '#000',
      datatext: 'ROCARENT: Marca de arrendamiento puro'                            
    },
                                {
      buttons: [
        { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/posts6.png', link: 'https://fran15711.github.io/postspaseomorelos/', text:'Posts Facebook/Instagram', id2: 'Posts' },
      ],
      image:'https://raw.githubusercontent.com/Fran15711/backgroundsseccion3/refs/heads/main/paseomorelos.jpg',
      textColor: '#000',
      datatext: 'PASEO MORELOS: Plaza Comercial en la zona noreste de León, Gto.'                            
    },
                                {
      buttons: [
        { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/mailing.png', link: 'https://fran15711.github.io/mailingaco/', text:'Mailing', id2: 'Mailing' },
        { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/posts6.png', link: 'https://fran15711.github.io/postsaco/', text:'Posts Facebook/Instagram', id2: 'Posts'},
        { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/paginaweb.png', link: 'https://acabadosdelpacifico.com/', text:'Sitio Web', id2: 'Página Web - E-commerce' },
        { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/presentacion.png', link: 'https://fran15711.github.io/presentacionaco/', text:'Presentación de ventas', id2: 'Presentación de Ventas' },
      ],
      image: 'https://raw.githubusercontent.com/Fran15711/backgroundsseccion3/refs/heads/main/aco.jpg',
      textColor: '#fff',
      datatext: 'ACABADOS DEL PACÍFICO: Empresa vendedora de materiales de barro para construcción en Sinaloa'                            
    },
                                {
      buttons: [
        { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/posts6.png', link: 'https://fran15711.github.io/postprocamp/', text:'Posts Facebook', id2: 'Posts'},
        { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/paginaweb.png', link: 'https://campestreprovidencia.com/', text:'Página web', id2: 'Página Web - E-commerce' },

      ],
      image: 'https://raw.githubusercontent.com/Fran15711/backgroundsseccion3/refs/heads/main/prvcam.jpg',
      textColor: '#fff',
      datatext: 'CAMPESTRE PROVIDENCIA: Empresa de venta y renta de cabañas en la sierra de Durango'                            
    },
                                    {
      buttons: [
        { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/paginaweb.png', link: 'https://11inks.com/', text:'Página web' , id2: 'Página Web - E-commerce'},


      ],
      image: 'https://raw.githubusercontent.com/Fran15711/backgroundsseccion3/refs/heads/main/11INKS.jpg',
      textColor: '#000',
      datatext: '11INKS: Empresa fabricante y vendedora de arte decorativo'                                
    },
                                {
      buttons: [
        { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/posts6.png', link: 'https://fran15711.github.io/sumposts/', text:'Posts Facebook', id2: 'Posts' },

      ],
      image: 'https://raw.githubusercontent.com/Fran15711/backgroundsseccion3/refs/heads/main/sum.jpg',
      textColor: '#000',
      datatext: 'SUMA LIFT: Empresa de renta y venta de montacargas'
    },
                                    {
      buttons: [
        { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/paginaweb.png', link: 'https://agrogto.com/', text:'Página web', id2: 'Página Web - E-commerce' },

      ],
      image: 'https://raw.githubusercontent.com/Fran15711/backgroundsseccion3/refs/heads/main/agro.jpg',
      textColor: '#000',
      datatext: 'AGRO GUANAJUATO: Empresa de venta y distribución de plántula'                                
    },
                                    {
      buttons: [
        { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/paginaweb.png', link: 'https://tortigama.com/', text:'Página web', id2: 'Página Web - E-commerce' },

      ],
      image: 'https://raw.githubusercontent.com/Fran15711/backgroundsseccion3/refs/heads/main/tortiga.jpg',
      textColor: '#000',
      datatext: 'TORTIGAMA: Empresa de venta de maquinaria e insumos para hacer tortillas'                                
    },
                                        {
      buttons: [
        { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/naming.png', link: 'https://vallua.mx/somos-vallua/', text:'Naming de la marca',id2: 'Naming' },
                { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/paginaweb.png', link: 'https://vallua.mx/', text:'Página web',id2: 'Página Web - E-commerce' },

      ],
      image: 'https://raw.githubusercontent.com/Fran15711/backgroundsseccion3/refs/heads/main/val.jpg',
      textColor: '#fff',
      datatext: 'VALLUA: Empresa de avalúos'
    }, 
                                            {
      buttons: [
        { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/naming.png', link: 'https://torreneen.com/', text:'Naming de la marca',id2: 'Naming' },
        { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/paginaweb.png', link: 'https://torreneen.com/', text:'Página web',id2: 'Página Web - E-commerce' },
      ],
      image: 'https://raw.githubusercontent.com/Fran15711/backgroundsseccion3/refs/heads/main/neen.jpg',
      textColor: '#fff',
      datatext: 'TORRE NEEN: Desarrollo vertical en zona norte de León, Gto.'                                        
    }, 
                                                {
      buttons: [
        { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/naming.png', link: 'https://sliderdesarrollos.com/acerca-de-nosotros/', text:'Naming de la marca',id2: 'Naming' },
        { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/paginaweb.png', link: 'https://sliderdesarrollos.com/', text:'Página web',id2: 'Página Web - E-commerce' },
      ],
      image: 'https://raw.githubusercontent.com/Fran15711/backgroundsseccion3/refs/heads/main/slider.jpg',
      textColor: '#fff',
      datatext: 'SLIDER DESARROLLOS: Desarrolladora de proyectos arquitectónicos en Durango'
    },
                                                    {
      buttons: [
        { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/posts6.png', link: 'https://fran15711.github.io/kkposts/', text:'Posts Facebook/Instagram',id2: 'Posts' },
        { image: 'https://raw.githubusercontent.com/Fran15711/botones/refs/heads/main/video.png', link: 'https://fran15711.github.io/videokk/', text:'Videos',id2: 'Video' },

      ],
      image: 'https://raw.githubusercontent.com/Fran15711/backgroundsseccion3/refs/heads/main/kk.jpg',
      textColor: '#fff',
      datatext: 'DRA. KAREN KELLY ODONTOPEDIATRA: Odontopediatra en Mazatlán'                                                 
    },    
  ];

  const hexagons = document.querySelectorAll('.hex');
  const seccion3 = document.querySelector('.seccion3');
  const h2Element = document.querySelector('.seccion3 h2');
  const pElement = document.querySelector('.seccion3 p');
  const filtroId2 = document.getElementById('filtro2'); // Filtro para ID2

  let currentImage = document.createElement('img');
  currentImage.src = defaultImage;
  currentImage.style.position = 'absolute';
  currentImage.style.top = '0';
  currentImage.style.left = '0';
  currentImage.style.width = '100%';
  currentImage.style.height = '100%';
  currentImage.style.objectFit = 'cover';
  currentImage.style.zIndex = '-1';
  seccion3.appendChild(currentImage);

  let currentButtons = [];  // Guardar los botones creados
  let currentDatatextElement = null; // Variable para almacenar el elemento de datatext actual

  // Inicializar los hexágonos para que se iluminen correctamente
  hexagons.forEach((hex, index) => {
    hex.addEventListener('click', () => {
      removeButtons(); // Eliminar botones anteriores
      changeImageWithSlider(hexData[index].image); // Animación de deslizamiento
      changeTextColor(hexData[index].textColor);
      changeDatatext(hexData[index].datatext, hexData[index].textColor); // Cambiar el texto con transición
      createHexButtons(hexData[index].buttons, hexData[index].textColor); // Crear botones del hexágono seleccionado
    });
  });

  // Filtro de botones por ID2
  filtroId2.addEventListener('change', () => {
    const selectedId2 = filtroId2.value.toLowerCase(); // Valor seleccionado en el filtro

    // Limpiar todos los estilos anteriores antes de aplicar el nuevo filtro
    resetHexagonStyles();

    // Crear botones con el filtro aplicado
    currentButtons.forEach(button => {
      const isMatching = button.dataset.id2.toLowerCase() === selectedId2 || selectedId2 === ''; // Compara si el botón corresponde al filtro

      if (selectedId2 === '' || isMatching) {
        // Iluminar el botón
        button.style.opacity = '1';
        button.style.filter = 'none';
      } else {
        // Atenuar el botón
        button.style.opacity = '0.3';
        button.style.filter = 'grayscale(100%)';
      }
    });

    // Iluminar hexágonos de acuerdo al filtro
    hexagons.forEach((hex, index) => {
      const relatedButtons = hexData[index]?.buttons || [];
      const img = hex.querySelector('img');

      // Verificar si algún botón coincide con el filtro
      const hasMatchingButton = relatedButtons.some(btn => btn.id2.toLowerCase() === selectedId2);

      if (selectedId2 === '' || hasMatchingButton) {
        // Iluminar hexágono
        img.style.filter = 'none';
        img.style.opacity = '1';
      } else {
        // Atenuar hexágono
        img.style.filter = 'grayscale(100%)';
        img.style.opacity = '0.1';
      }
    });
  });

  // Restablecer todos los hexágonos al estado inicial
  function resetHexagonStyles() {
    hexagons.forEach((hex) => {
      const img = hex.querySelector('img');
      img.style.filter = 'none'; // Restaurar el estilo
      img.style.opacity = '1'; // Restaurar la opacidad
    });
  }

  // Cambiar la imagen con el slider
  function changeImageWithSlider(newImageSrc) {
    const newImage = document.createElement('img');
    newImage.src = newImageSrc;
    newImage.style.position = 'absolute';
    newImage.style.top = '0';
    newImage.style.left = '-100%';
    newImage.style.width = '100%';
    newImage.style.height = '100%';
    newImage.style.objectFit = 'cover';
    newImage.style.zIndex = '-1';
    newImage.style.transition = 'left 1s ease-in-out';
    seccion3.appendChild(newImage);

    requestAnimationFrame(() => {
      newImage.style.left = '0';
    });

    newImage.addEventListener('transitionend', () => {
      if (currentImage) {
        currentImage.remove();
      }
      currentImage = newImage;
    });
  }

  // Cambiar el color del texto
  function changeTextColor(color) {
    h2Element.style.color = color;
    pElement.style.color = color;
  }

  // Crear botones dinámicos dentro de los hexágonos
  function createHexButtons(buttons, textColor) {
    currentButtons = [];  // Reiniciar el array de botones actuales

    buttons.forEach((buttonData, i) => {
      const button = createButton(
        buttonData.image,
        buttonData.link,
        buttonData.text,
        textColor,
        buttonData.id2
      );

      positionButtons(button, (i % 2 === 0 ? -35 : 30), (i < 2 ? -20 : 10));
      currentButtons.push(button);  // Guardar los botones creados

      setTimeout(() => {
        button.style.opacity = '1';
        button.style.transform = 'scale(1)';
      }, i * 50);
    });

    // Después de crear los botones, aplicar el filtro inmediatamente
    const selectedId2 = filtroId2.value.toLowerCase();
    currentButtons.forEach(button => {
      const isMatching = button.dataset.id2.toLowerCase() === selectedId2 || selectedId2 === '';
      if (selectedId2 === '' || isMatching) {
        button.style.opacity = '1';
        button.style.filter = 'none';
      } else {
        button.style.opacity = '0.3';
        button.style.filter = 'grayscale(100%)';
      }
    });
  }

  // Eliminar los botones anteriores
  function removeButtons() {
    currentButtons.forEach(button => button.remove());
    currentButtons = []; // Limpiar la lista de botones
  }

  // Mostrar el texto del datatext con transición
 function changeDatatext(newText, textColor) {
  if (currentDatatextElement) {
    // Eliminar el texto actual con una animación
    currentDatatextElement.style.opacity = '0';
    setTimeout(() => {
      currentDatatextElement.remove(); // Eliminar el antiguo datatext
      createNewDatatext(newText, textColor); // Crear el nuevo
    }, 500); // Eliminar después de 0.5s (el tiempo de transición de desvanecimiento)
  } else {
    createNewDatatext(newText, textColor); // Crear el nuevo datatext si no existe
  }
}


function createNewDatatext(newText, textColor) {
  // Crear el contenedor del texto
  const container = document.createElement('div');
  container.style.position = 'absolute';  
  container.style.transition = 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out';
  container.style.opacity = '0';  // Empezar con opacidad 0
  container.style.maxWidth = '31vmin';
  container.style.margin = '0 auto';
  container.style.textAlign = 'center';  
  container.style.zIndex = '100';  
  
  container.style.borderRadius = '10px';  
  container.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  container.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
  seccion3.appendChild(container);

  // Crear el texto
  const datatextElement = document.createElement('p');
  datatextElement.textContent = newText;
  datatextElement.style.color = textColor;
  datatextElement.style.fontSize = '0.8rem';
  datatextElement.style.fontFamily = "'Poppins', sans-serif";
  datatextElement.style.margin = '0';
  datatextElement.style.lineHeight = '1.5';
  datatextElement.style.wordWrap = 'break-word';

  container.appendChild(datatextElement);

  // Posicionar el contenedor
  const leftPosition = '50%';
  const topPosition = '91%';
  container.style.left = leftPosition;
  container.style.top = topPosition;
  container.style.transform = 'translateX(-50%)';

  // Activar la animación de transición para mostrar el texto
  setTimeout(() => {
    container.style.opacity = '1';
  }, 50);

  // Guardar el contenedor como el elemento actual de datatext
  currentDatatextElement = container;
  return container;
}




  // Crear un botón dinámico
  function createButton(image, link, text, textColor, id2) {
    const button = document.createElement('button');
    button.classList.add('dynamic-button');
    button.style.position = 'absolute';
    button.style.width = '8vw';
    button.style.height = '10vw';
    button.style.opacity = '0';
    button.style.transform = 'scale(0.8)';
    button.style.transition = 'opacity 0.5s ease, transform 0.3s ease';
    button.style.zIndex = '10';
    button.style.background = 'none';
    button.style.border = 'none';
    button.style.cursor = 'pointer';
    button.style.display = 'flex';
    button.style.flexDirection = 'column';
    button.style.alignItems = 'center';
    button.style.justifyContent = 'center';


    const img = document.createElement('img');
    img.src = image;
    img.alt = '';
    img.style.width = '4vw';
    img.style.height = 'auto';

    const span = document.createElement('span');
    span.textContent = text;
    span.style.color = textColor;
    span.style.fontSize = '0.8rem';
    span.style.fontFamily = "'Poppins', sans-serif";
    span.style.textAlign = 'center';
    span.style.wordWrap = 'break-word';
    span.style.lineHeight = '1.5';

    span.style.display = 'inline-block';
    span.style.marginTop = '10px';

    button.appendChild(img);
    button.appendChild(span);
    button.dataset.id2 = id2;  // Guardar el id2 para comparar con el filtro

    button.addEventListener('click', () => {
      openPopup(link);
    });

    return button;
  }

  // Posicionar los botones en la pantalla
  function positionButtons(button, leftVW, topVH) {
    button.style.left = `calc(50vw + ${leftVW}vw)`;
    button.style.top = `calc(50vh + ${topVH}vh)`;
    seccion3.appendChild(button);
  }

  // Abrir un popup al hacer clic en un enlace
  function openPopup(url) {
    const popup = document.createElement('div');
    popup.style.position = 'fixed';
    popup.style.top = '50%';
    popup.style.left = '50%';
    popup.style.transform = 'translate(-50%, -50%)';
    popup.style.width = '80%';
    popup.style.height = '40%';
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
    closeButton.textContent = 'Cerrar';
    closeButton.style.marginTop = '16px';
    closeButton.style.padding = '8px 16px';
    closeButton.style.border = 'none';
    closeButton.style.backgroundColor = '#333';
    closeButton.style.color = 'white';
    closeButton.style.borderRadius = '4px';
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

// Función para enviar el formulario
document.querySelector('.seccion7 #ajax-contact').addEventListener('submit', function (e) {
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

// Observer de intersección para sección 7
document.addEventListener('DOMContentLoaded', () => {
  const section = document.querySelector('.seccion7');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      // Verifica si la sección está interseccionando con el viewport
      if (entry.isIntersecting) {
        section.classList.add('active'); // Agrega la clase 'active' a toda la sección
        observer.unobserve(entry.target); // Deja de observar una vez que la clase se activa
      }
    });
  }, {
    threshold: 0.9  // Cambiado a 0.9 para requerir que el 90% de la sección esté visible
  });

  observer.observe(section);
});
