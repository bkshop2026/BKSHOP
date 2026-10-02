/* ============================================================
   BK SHOP — apartado de equipos (tema oscuro deportivo)

   GALERÍA DE FOTOS POR CAMISOLA:
   Todas las fotos van en UNA sola carpeta: img/ (sin subcarpetas
   por equipo), igual que en tu página anterior.

   - FC Barcelona y Real Madrid: 1 sola camisola "Titular" y 1 sola
     "Visitante" por equipo, con 5 fotos cada una:
       img/<equipo>-titular-frente.jpg / -espalda.jpg / -escudo.jpg / -parche.jpg / -detalle.jpg
       img/<equipo>-visitante-frente.jpg / -espalda.jpg / -escudo.jpg / -parche.jpg / -detalle.jpg

   - Retros, Leo Messi y CR7: siguen siendo una camisola por cada
     nombre, con 4 fotos:
       <nombre-base>-frente.jpg / -atras.jpg / -detalles1.jpg / -detalles2.jpg

   Ejemplos reales de este catálogo:
     Barcelona Titular    -> img/barcelona-titular-frente.jpg, -espalda.jpg, -escudo.jpg, -parche.jpg, -detalle.jpg
     Barcelona Visitante  -> img/barcelona-visitante-frente.jpg, -espalda.jpg, -escudo.jpg, -parche.jpg, -detalle.jpg
     Real Madrid Titular  -> img/real-madrid-titular-frente.jpg, -espalda.jpg, -escudo.jpg, -parche.jpg, -detalle.jpg
     Argentina '86 (Retros) -> img/retro-argentina-86-frente.jpg, -atras.jpg, -detalles1.jpg, -detalles2.jpg
     Messi · Barcelona    -> img/messi-messi-barcelona-frente.jpg, -atras.jpg, -detalles1.jpg, -detalles2.jpg
     Messi · Argentina (la 1ra) -> img/messi-messi-argentina-frente.jpg ...
     Messi · Argentina (la 2da) -> img/messi-messi-argentina-2-frente.jpg ... (se le agrega "-2" para no chocar con la primera)
     CR7 · Portugal (la 1ra)    -> img/cr7-cr7-portugal-frente.jpg ...
     CR7 · Portugal (la 2da)    -> img/cr7-cr7-portugal-2-frente.jpg ...

   Para Barcelona y Real Madrid, los dorsales/nombres disponibles
   ya NO se ponen por jugador: se escriben como texto libre en el
   campo "descripcion" de cada camisola (ver el catálogo abajo).

   No hay que tocar código para las fotos: solo sube cada foto a
   la carpeta img/ con su nombre exacto. La lista completa también
   queda en img/README.md, y se imprime en la consola del
   navegador (F12 → Console).

   Mientras no subas una foto, la tarjeta muestra un recuadro gris
   de "Sube tu foto" en ese espacio — no se ve como un ícono roto.
   ============================================================ */

/* ============================================================
   ⚙️  CONFIGURACIÓN RÁPIDA — EDITA SOLO ESTE BLOQUE
   Aquí cambias tu número de WhatsApp, los precios y las tallas
   de toda la página. No hace falta tocar nada más.
   ============================================================ */

// --- TU NÚMERO DE WHATSAPP ---
// Se escribe con código de país, SIN el signo "+", sin espacios y
// sin guiones. Guatemala es 502.
// Ejemplo: si tu número es 5555-1234, aquí pones "50255551234".
const WHATSAPP = "50233174212";   // <-- CAMBIA ESTE NÚMERO POR EL TUYO

// --- PRECIOS POR SECCIÓN (en quetzales) ---
// Cambia el número y se actualiza en TODAS las camisolas de esa
// sección automáticamente.
const PRECIOS = {
  barcelona:     299,
  "real-madrid": 299,
  retro:         325,
  messi:         325,
  cr7:           325,
};

// Precio más bajo que se anuncia en la banda y en el pie de página.
const PRECIO_DESDE = 299;

// --- TALLAS DISPONIBLES ---
// Estas tallas se muestran en todas las camisolas de todas las
// secciones. Para agregar otra, escríbela entre comillas y separada
// por coma. Ejemplo: ["S", "M", "L", "XL", "XXL"]
const TALLAS = ["M", "L", "XL"];

/* ====== FIN DE LA CONFIGURACIÓN RÁPIDA ====== */

// ---------- 1. CATÁLOGO ----------
const productos = {
  barcelona: [
    {
      nombre: "Camisola Titular",
      equipo: "FC Barcelona",
      kit: "titular",
      descripcion: "Dorsales disponibles: Yamal #10, Pedri #8, Raphinha #11, Gordon #24.",
      color: { base: "#A50044", raya: "#004D98" },
    },
    {
      nombre: "Camisola Visitante",
      equipo: "FC Barcelona",
      kit: "visitante",
      descripcion: "Dorsales disponibles: Yamal #10, Raphinha #11, Pedri #8.",
      color: { base: "#70b313", raya: "#A50044" },
    },
  ],
  "real-madrid": [
    {
      nombre: "Camisola Titular",
      equipo: "Real Madrid",
      kit: "titular",
      descripcion: "Dorsales disponibles: Bellingham #5, Vinicius Jr #7, Mbappé #10.",
      color: { base: "#F3F2EE", raya: "#C9A85A" },
    },
    {
      nombre: "Camisola Visitante",
      equipo: "Real Madrid",
      kit: "visitante",
      descripcion: "Dorsales disponibles: Mbappé #10, Vinicius Jr #7.",
      color: { base: "#0A0A0A", raya: "#C9A85A" },
    },
  ],
  retro: [
    { nombre: "Argentina '86", dorsal: 10 },
    { nombre: "Brasil '2002", dorsal: 10 },
    { nombre: "Francia '98", dorsal: 10 },
    { nombre: "Brasil", dorsal: 9 },
  ],
  messi: [
    { nombre: "Messi · Barcelona", dorsal: 10 },
    { nombre: "Messi · Argentina", dorsal: 10 },
    { nombre: "Messi · Argentina", dorsal: 19 },
  ],
  cr7: [
    { nombre: "CR7 · Real Madrid", dorsal: 7 },
    { nombre: "CR7 · Portugal", dorsal: 7 },
    { nombre: "CR7 · Manchester United", dorsal: 7 },
  ],
  // Pieza destacada que se muestra sola, arriba de todo, con trato especial.
  destacado: [
    {
      nombre: "Messi · Retiro con la Selección Argentina Oferta solo en la web",
      dorsal: 10,
      precio: 300,
    },
  ],
};

// Aplica a cada camisola el precio de su sección y las tallas generales.
// Si alguna camisola lleva su propio "precio" o sus propias "tallas"
// escritas a mano, se respetan y no se sobreescriben.
Object.entries(productos).forEach(([seccion, lista]) => {
  lista.forEach(p => {
    if (p.precio === undefined) p.precio = PRECIOS[seccion];
    if (p.tallas === undefined) p.tallas = TALLAS;
  });
});

// ---------- 2. GENERADOR AUTOMÁTICO DE FOTOS ----------
// Convierte "Ronaldinho '06" -> "ronaldinho-06", "Mbappé" -> "mbappe", etc.
function slugify(texto) {
  return texto
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // quita acentos
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// Esquemas de nombres de foto:
// - 5 fotos (FC Barcelona y Real Madrid, Titular/Visitante): frente, espalda, escudo, parche, detalle
// - 4 fotos (Retros, Leo Messi y CR7): frente, atrás, detalles 1 y 2
const PARTES_FOTO_5 = ["frente", "espalda", "escudo", "parche", "detalle"];
const PARTES_FOTO_4 = ["frente", "atras", "detalles1", "detalles2"];

// Le agrega los campos "fotos" y "partes" a cada producto de una lista.
// Si el producto tiene "kit" (titular/visitante), el nombre de archivo usa
// el kit; si no, usa el nombre de la camisola (ej. "Argentina '86").
// Si dos camisolas del mismo apartado tienen el mismo nombre (ej. dos
// "Messi · Argentina"), a la segunda se le agrega "-2", "-3", etc. al
// nombre de archivo para que no se sobreescriban entre sí.
function asignarFotos(lista, carpeta, partes = PARTES_FOTO_5) {
  const usados = {};
  lista.forEach(p => {
    let base = p.kit ? `${carpeta}-${p.kit}` : `${carpeta}-${slugify(p.nombre)}`;
    usados[base] = (usados[base] || 0) + 1;
    if (usados[base] > 1) base = `${base}-${usados[base]}`;
    p.fotos = partes.map(parte => `img/${base}-${parte}.jpg`);
    p.partes = partes;
  });
}

asignarFotos(productos.barcelona, "barcelona");
asignarFotos(productos["real-madrid"], "real-madrid");
asignarFotos(productos.retro, "retro", PARTES_FOTO_4);
asignarFotos(productos.messi, "messi", PARTES_FOTO_4);
asignarFotos(productos.cr7, "cr7", PARTES_FOTO_4);
asignarFotos(productos.destacado, "destacado", PARTES_FOTO_4);

// Imprime en consola la lista exacta de archivos que espera cada camisola,
// para que sea fácil saber cómo nombrar cada foto antes de subirla.
console.log("=== BK SHOP: nombres de archivo de fotos esperados por camisola (todos en la carpeta img/) ===");
Object.entries(productos).forEach(([seccion, valor]) => {
  const listas = Array.isArray(valor) ? { "": valor } : valor;
  Object.entries(listas).forEach(([kit, lista]) => {
    lista.forEach(p => {
      console.log(`${seccion}${kit ? " / " + kit : ""} — ${p.nombre}:`, p.fotos.join(", "));
    });
  });
});

// Colores reales por equipo para el dibujo de placeholder (retro, messi, cr7).
// Barcelona y Real Madrid ya llevan su color directo en cada producto (ver arriba).
const colores = {
  retro: { base: "#8B6A45", raya: "#C9A66B" },
  messi: { base: "#75AADB", raya: "#F3F2EE" },
  cr7: { base: "#7A1F1F", raya: "#C9A227" },
  destacado: { base: "#75AADB", raya: "#F3F2EE" },
};

// ---------- 2b. DIBUJO DE CAMISOLA (placeholder SVG) ----------
function camisolaSVG(base, raya, dorsal) {
  return `
  <svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">
    <path d="M60 10 L20 45 L38 78 L58 65 L58 225 L142 225 L142 65 L162 78 L180 45 L140 10
             C140 24 122 34 100 34 C78 34 60 24 60 10 Z" fill="${base}"/>
    <path d="M92 10 L108 10 L108 30 L92 30 Z" fill="${raya}"/>
    <rect x="58" y="65" width="18" height="160" fill="${raya}" opacity="0.9"/>
    <rect x="124" y="65" width="18" height="160" fill="${raya}" opacity="0.9"/>
    <text x="100" y="150" font-family="Bebas Neue, sans-serif" font-size="50"
          fill="rgba(255,255,255,0.9)" text-anchor="middle">${dorsal}</text>
  </svg>`;
}

// Recuadro gris "Sube tu foto" que se muestra mientras no exista el archivo real.
const FOTO_PLACEHOLDER = ("data:image/svg+xml;utf8," + encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 240'>
     <rect width='200' height='240' fill='#15151a'/>
     <rect x='6' y='6' width='188' height='228' fill='none' stroke='#3a3a42' stroke-width='2' stroke-dasharray='6 6'/>
     <text x='100' y='118' font-family='Arial, sans-serif' font-size='34' fill='#54545e' text-anchor='middle'>+</text>
     <text x='100' y='150' font-family='Arial, sans-serif' font-size='12' fill='#6b6b76' text-anchor='middle'>Sube tu foto</text>
   </svg>`
)).replace(/'/g, "%27"); // las comillas simples se codifican para no romper el onerror="..."

// ---------- 3. RENDER DE TARJETAS ----------
function renderGrid(containerId, lista, base, raya) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = lista.map((p, i) => {
    const tieneFotos = Array.isArray(p.fotos) && p.fotos.length > 0;
    const artId = `${containerId}-art-${i}`;
    const colorBase = p.color ? p.color.base : base;
    const colorRaya = p.color ? p.color.raya : raya;

    const arte = tieneFotos
      ? `<div class="card__art card__art--gallery" id="${artId}" data-fotos='${JSON.stringify(p.fotos)}' data-partes='${JSON.stringify(p.partes)}' data-index="0">
           <img src="${p.fotos[0]}" alt="${p.nombre}" loading="lazy" decoding="async" onerror="this.onerror=null;this.src='${FOTO_PLACEHOLDER}'">
         </div>
         <div class="card__thumbs" style="grid-template-columns: repeat(${p.fotos.length}, 1fr);">
           ${p.fotos.map((foto, idx) => `
             <button type="button" class="card__thumb ${idx === 0 ? "is-active" : ""}" data-art="${artId}" data-index="${idx}" title="${p.partes[idx]}">
               <img src="${foto}" alt="${p.nombre} — ${p.partes[idx]}" loading="lazy" decoding="async" onerror="this.onerror=null;this.src='${FOTO_PLACEHOLDER}'">
             </button>
           `).join("")}
         </div>`
      // IMG_PLACEHOLDER: reemplaza este SVG por <img src="img/tu-foto.jpg" alt="${p.nombre}">
      // o revisa el campo "fotos"/"partes" (ver el generador automático más arriba) para la galería.
      : `<div class="card__art">${camisolaSVG(colorBase, colorRaya, p.dorsal)}</div>`;

    // Camisolas nuevas (Barcelona/Real Madrid) usan "descripcion" en texto libre
    // para los dorsales disponibles; retro/messi/cr7 muestran el dorsal.
    const infoExtra = p.descripcion
      ? `<p class="card__desc">${p.descripcion}</p>`
      : `<p class="card__meta">Dorsal #${p.dorsal}</p>`;

    // Tallas disponibles (se muestran en TODAS las secciones).
    const tallas = Array.isArray(p.tallas) ? p.tallas : [];
    const bloqueTallas = tallas.length
      ? `<div class="card__sizes">
           <span class="card__sizes-label">Tallas</span>
           ${tallas.map(t => `<span class="card__size">${t}</span>`).join("")}
         </div>`
      : "";

    const listaTallas = tallas.join(", ");
    const mensajeWhatsapp = p.descripcion
      ? `Hola! Me interesa la ${p.nombre}${p.equipo ? " de " + p.equipo : ""} (Q${p.precio}). Tallas: ${listaTallas}. ¿Qué dorsales tienen disponibles?`
      : `Hola! Me interesa la camisola ${p.nombre} (Q${p.precio}). Tallas disponibles: ${listaTallas}.`;

    return `
    <article class="card">
      ${arte}
      <p class="card__name">${p.nombre}</p>
      ${infoExtra}
      ${bloqueTallas}
      <div class="card__row">
        <span class="card__price">Q${p.precio}</span>
        <a class="card__buy" target="_blank" rel="noopener"
           href="https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensajeWhatsapp)}">
          Pedir
        </a>
      </div>
    </article>
  `;
  }).join("");
  observeCards(el);
  wireGallery(el);
}

renderGrid("grid-barcelona", productos.barcelona);
renderGrid("grid-real-madrid", productos["real-madrid"]);
renderGrid("grid-retro", productos.retro, colores.retro.base, colores.retro.raya);
renderGrid("grid-messi", productos.messi, colores.messi.base, colores.messi.raya);
renderGrid("grid-cr7", productos.cr7, colores.cr7.base, colores.cr7.raya);

// ---------- 3b. RENDER DE LA PIEZA DESTACADA (arriba de todo) ----------
// Usa su propio bloque, más grande y con trato especial, en vez de una
// tarjeta normal de la grilla.
function renderFeatured(containerId, producto, base, raya) {
  const el = document.getElementById(containerId);
  if (!el || !producto) return;
  const p = producto;
  const artId = `${containerId}-art`;

  const arte = `<div class="card__art card__art--gallery" id="${artId}" data-fotos='${JSON.stringify(p.fotos)}' data-partes='${JSON.stringify(p.partes)}' data-index="0">
       <img src="${p.fotos[0]}" alt="${p.nombre}" loading="lazy" decoding="async" onerror="this.onerror=null;this.src='${FOTO_PLACEHOLDER}'">
     </div>
     <div class="card__thumbs" style="grid-template-columns: repeat(${p.fotos.length}, 1fr);">
       ${p.fotos.map((foto, idx) => `
         <button type="button" class="card__thumb ${idx === 0 ? "is-active" : ""}" data-art="${artId}" data-index="${idx}" title="${p.partes[idx]}">
           <img src="${foto}" alt="${p.nombre} — ${p.partes[idx]}" loading="lazy" decoding="async" onerror="this.onerror=null;this.src='${FOTO_PLACEHOLDER}'">
         </button>
       `).join("")}
     </div>`;

  const tallas = Array.isArray(p.tallas) ? p.tallas : [];
  const listaTallas = tallas.join(", ");
  const mensajeWhatsapp = `Hola! Me interesa la camisola de colección: ${p.nombre} (Q${p.precio}). Tallas disponibles: ${listaTallas}.`;

  el.innerHTML = `
    <div class="featured__art">${arte}</div>
    <div class="featured__info">
      <p class="featured__eyebrow">Edición limitada · Selección Argentina</p>
      <h2 class="featured__name">${p.nombre}</h2>
      <p class="featured__meta">Dorsal #${p.dorsal} · Partido de despedida</p>
      <div class="card__sizes">
        <span class="card__sizes-label">Tallas</span>
        ${tallas.map(t => `<span class="card__size">${t}</span>`).join("")}
      </div>
      <div class="featured__row">
        <span class="featured__price">Q${p.precio}</span>
        <a class="featured__buy" target="_blank" rel="noopener"
           href="https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensajeWhatsapp)}">
          Pedir esta pieza
        </a>
      </div>
    </div>
  `;
  wireGallery(el);
}

renderFeatured("featured-content", productos.destacado[0], colores.destacado.base, colores.destacado.raya);

// ---------- 4. TICKER ----------
const tickerData = ["FC Barcelona", "Real Madrid", "Retros", "Leo Messi", "CR7", "Envíos a todo Guatemala", `Precios desde Q${PRECIO_DESDE}`, `Tallas ${TALLAS.join(" · ")}`];
const tickerTrack = document.getElementById("tickerTrack");
if (tickerTrack) {
  const items = [...tickerData, ...tickerData].map(t =>
    `<span class="ticker__item"><span class="ticker__dot"></span>${t}</span>`
  ).join("");
  tickerTrack.innerHTML = items;
}

// ---------- 4b. ENLACES DE WHATSAPP Y TEXTOS DE PRECIO ----------
// Toma el número de la constante WHATSAPP (arriba) y lo pone en todos
// los botones del encabezado y del pie de página. Así solo se edita
// el número en un lugar.
document.querySelectorAll("[data-wa]").forEach(a => {
  const texto = a.dataset.waText || "Hola BK Shop, quiero ver el catálogo";
  a.href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(texto)}`;
});

// Actualiza la línea de precio del pie de página.
document.querySelectorAll("[data-precio-desde]").forEach(el => {
  el.textContent = `Precios desde Q${PRECIO_DESDE} por camisola · Tallas ${TALLAS.join(", ")} · Pedidos por WhatsApp`;
});

// ---------- 5. SCROLLSPY DEL NAV ----------
const navLinks = document.querySelectorAll(".nav__links a");
const underline = document.getElementById("navUnderline");
const sections = [...navLinks].map(a => document.getElementById(a.dataset.target)).filter(Boolean);

function moveUnderline(link) {
  if (!link) { underline.style.opacity = "0"; return; }
  underline.style.opacity = "1";
  underline.style.left = link.offsetLeft + "px";
  underline.style.width = link.offsetWidth + "px";
}

const spyObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(a => a.classList.remove("is-active"));
      const active = document.querySelector(`.nav__links a[data-target="${entry.target.id}"]`);
      if (active) { active.classList.add("is-active"); moveUnderline(active); }
    }
  });
}, { rootMargin: "-45% 0px -45% 0px" });

sections.forEach(s => spyObserver.observe(s));

// ---------- 6. CAMBIO DE TEMA DE COLOR SEGÚN LA SECCIÓN ----------
// Al entrar a cada sección, <body data-theme="..."> cambia y toda la
// página (acentos, botones, subrayados) se tiñe con el color del equipo.
const themeSections = document.querySelectorAll("[data-theme-trigger]");
const themeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.body.dataset.theme = entry.target.dataset.themeTrigger;
    }
  });
}, { rootMargin: "-40% 0px -40% 0px" });

themeSections.forEach(s => themeObserver.observe(s));

// Al volver al tope (hero / ticker) regresa al tema neutro.
const topReset = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) document.body.dataset.theme = "default";
  });
}, { threshold: 0.6 });
const heroEl = document.getElementById("top");
if (heroEl) topReset.observe(heroEl);

// ---------- 7. BARRA DE PROGRESO DE SCROLL ----------
const progressBar = document.getElementById("progress");
function updateProgress() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  if (progressBar) progressBar.style.width = pct + "%";
}

// ---------- 8. PARALLAX DEL LOGO DE FONDO Y LOS NÚMEROS DE SECCIÓN ----------
const heroBg = document.querySelector(".hero__bg");
const sectionNumbers = document.querySelectorAll(".team-section__number");

function updateParallax() {
  const scrollY = window.scrollY;
  if (heroBg) {
    heroBg.style.transform = `translateY(calc(-50% + ${scrollY * 0.15}px))`;
  }
  sectionNumbers.forEach(num => {
    const rect = num.parentElement.getBoundingClientRect();
    const offset = rect.top * -0.08;
    num.style.transform = `translateY(${offset}px)`;
  });
}

let ticking = false;
window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      updateProgress();
      updateParallax();
      ticking = false;
    });
    ticking = true;
  }
}, { passive: true });

updateProgress();
updateParallax();

// ---------- 9. REVEAL DE TARJETAS AL ENTRAR EN VISTA ----------
function observeCards(container) {
  const cards = container.querySelectorAll(".card:not(.is-visible)");
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add("is-visible"), i * 60);
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  cards.forEach(c => io.observe(c));
}

// ---------- 10. GALERÍA: miniaturas + lightbox ----------
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxThumbs = document.getElementById("lightboxThumbs");
const lightboxClose = document.getElementById("lightboxClose");
const lightboxPrev = document.getElementById("lightboxPrev");
const lightboxNext = document.getElementById("lightboxNext");

let currentFotos = [];
let currentPartes = [];
let currentIndex = 0;

function setMainThumb(art, fotos, index) {
  const img = art.querySelector("img");
  img.style.opacity = "0";
  setTimeout(() => {
    img.onerror = function () { this.onerror = null; this.src = FOTO_PLACEHOLDER; };
    img.src = fotos[index];
    img.style.opacity = "1";
  }, 120);
  art.dataset.index = index;
  const wrapper = art.parentElement;
  wrapper.querySelectorAll(".card__thumb").forEach(t => t.classList.remove("is-active"));
  const activeThumb = wrapper.querySelector(`.card__thumb[data-index="${index}"]`);
  if (activeThumb) activeThumb.classList.add("is-active");
}

function openLightbox(fotos, partes, index) {
  currentFotos = fotos;
  currentPartes = partes;
  currentIndex = index;
  renderLightbox();
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
}

function renderLightbox() {
  // Reinicia la animación de zoom cada vez que se cambia de foto.
  lightboxImg.style.animation = "none";
  lightboxImg.offsetHeight; // fuerza reflow para poder reiniciar la animación
  lightboxImg.style.animation = "";
  lightboxImg.onerror = function () { this.onerror = null; this.src = FOTO_PLACEHOLDER; };
  lightboxImg.src = currentFotos[currentIndex];
  lightboxThumbs.innerHTML = currentFotos.map((foto, idx) => `
    <button type="button" data-index="${idx}" class="${idx === currentIndex ? "is-active" : ""}" title="${currentPartes[idx] || "Foto " + (idx + 1)}">
      <img src="${foto}" alt="${currentPartes[idx] || "Foto " + (idx + 1)}" loading="lazy" decoding="async" onerror="this.onerror=null;this.src='${FOTO_PLACEHOLDER}'">
    </button>
  `).join("");
  lightboxThumbs.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
      currentIndex = Number(btn.dataset.index);
      renderLightbox();
    });
  });
}

function closeLightbox() {
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
}

function wireGallery(container) {
  // Clic en la foto principal abre el lightbox
  container.querySelectorAll(".card__art--gallery").forEach(art => {
    art.addEventListener("click", () => {
      const fotos = JSON.parse(art.dataset.fotos);
      const partes = JSON.parse(art.dataset.partes);
      openLightbox(fotos, partes, Number(art.dataset.index));
    });
  });
  // Clic en una miniatura cambia la foto principal de esa tarjeta
  container.querySelectorAll(".card__thumb").forEach(thumb => {
    thumb.addEventListener("click", () => {
      const art = document.getElementById(thumb.dataset.art);
      const fotos = JSON.parse(art.dataset.fotos);
      setMainThumb(art, fotos, Number(thumb.dataset.index));
    });
  });
}

if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
if (lightbox) {
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });
}
if (lightboxPrev) lightboxPrev.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + currentFotos.length) % currentFotos.length;
  renderLightbox();
});
if (lightboxNext) lightboxNext.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % currentFotos.length;
  renderLightbox();
});
document.addEventListener("keydown", (e) => {
  if (!lightbox.classList.contains("is-open")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft") lightboxPrev.click();
  if (e.key === "ArrowRight") lightboxNext.click();
});
