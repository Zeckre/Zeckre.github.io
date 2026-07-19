// ============================================
// RESEÑAS - Agrega aquí las reseñas de tus clientes
// rating: 1 a 5
// ============================================
const resenas = [
  {
    nombre: "Carlos Méndez",
    empresa: "Digital Commerce MX",
    rating: 5,
    mensaje:
      "Excelente trabajo, superaron nuestras expectativas. La tienda online quedó profesional y las ventas aumentaron desde el primer mes.",
  },
  {
    nombre: "Laura Rodríguez",
    empresa: "FitZone Store",
    rating: 5,
    mensaje:
      "Muy profesionales, entregaron el proyecto a tiempo y con una calidad increíble. Totalmente recomendados.",
  },
  {
    nombre: "Andrés Castillo",
    empresa: "TechParts Store",
    rating: 4,
    mensaje:
      "Buen servicio y atención personalizada. El sitio quedó rápido y optimizado para móviles.",
  },
  {
    nombre: "Duván Rico",
    empresa: "Micro&Nano",
    rating: 5,
    mensaje:
      "Excelente experiencia, el equipo entendió perfectamente nuestras necesidades y nos ayudó a crecer en línea.",
  },
  {
    nombre: "Mauricio Villamizar",
    empresa: "Mauro y Asociados",
    rating: 5,
    mensaje:
      "Increible trabajo, la pagina de la firma quedó muy profesional y funcional. Muy recomendados.",
  },
  {
    nombre: "Carlos Ochoa",
    empresa: "Tienda miltarea",
    rating: 4,
    mensaje:
      "Muy contento con el resultado, la tienda quedó muy bien diseñada y fácil de usar. Solo un pequeño detalle con la integración de pagos, pero lo solucionaron rápido.",
  },
];

// Renderizar carrusel
const wrapper = document.getElementById("reviews-swiper-wrapper");
wrapper.innerHTML = resenas
  .map((r) => {
    const stars = "⭐".repeat(r.rating);
    const empresaHtml = r.empresa
      ? `<span class="text-on-surface-variant text-sm">${r.empresa}</span>`
      : "";
    return `
    <div class="swiper-slide">
      <div class="review-card p-8 rounded-xl bg-surface-container-high border border-outline-variant/20 hover:border-primary/50 transition-colors duration-300 flex flex-col gap-4">
        <div class="flex flex-col">
          <p class="font-bold text-on-surface">${r.nombre}</p>
          ${empresaHtml}
        </div>
        <div class="text-sm">${stars}</div>
        <p class="text-on-surface-variant text-sm leading-relaxed line-clamp-4">${r.mensaje}</p>
      </div>
    </div>`;
  })
  .join("");

const reviewsSwiper = new Swiper(".reviewsSwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  autoplay: { delay: 4000, disableOnInteraction: false },
  pagination: { el: ".reviews-pagination", clickable: true },
  navigation: {
    nextEl: ".reviews-nav-next",
    prevEl: ".reviews-nav-prev",
  },
  breakpoints: {
    640: { slidesPerView: 2, spaceBetween: 20 },
    1024: { slidesPerView: 3, spaceBetween: 20 },
  },
});

// Pausar autoplay al pasar el ratón sobre una reseña
document.querySelectorAll(".review-card").forEach((card) => {
  card.addEventListener("mouseenter", () => reviewsSwiper.autoplay.stop());
  card.addEventListener("mouseleave", () => reviewsSwiper.autoplay.start());
});
