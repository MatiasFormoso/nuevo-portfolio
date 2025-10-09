// src/lib/config.ts
export const CONFIG = {
  site: {
    name: "Matías Formoso",
    lang: "es",
    url: "http://localhost:3000",
    description:
      "Arquitectura, datos e integraciones — Python + SQL + web. Software con principios de ingeniería.",
  },
  brand: {
    logoText: "Matías Formoso",
  },
  contact: {
    // Mensaje genérico URL-encoded:
    // "Hola Matías, vi tu portfolio y me gustaría consultarte por un proyecto. ¿Tenés disponibilidad?"
    whatsapp:
      "https://wa.me/5493541235829?text=Hola%20Mat%C3%ADas,%20vi%20tu%20portfolio%20y%20me%20gustar%C3%ADa%20consultarte%20por%20un%20proyecto.%20%C2%BFTen%C3%A9s%20disponibilidad%3F",
    email: "formosomatiasagustin@gmail.com",

    // LinkedIn con https y path codificado para evitar 404
    linkedin:
      "https://www.linkedin.com/in/mat%C3%ADas-agust%C3%ADn-formoso-361987290",

    github: "https://github.com/MatiasFormoso",
  },
  nav: [
    { href: "#services", label: "Servicios" },
    { href: "#projects", label: "Proyectos" },
    { href: "#about", label: "Sobre mí" },
    { href: "#contact", label: "Contacto" },
  ],
} as const;
