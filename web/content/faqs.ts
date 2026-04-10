export type Faq = {
  q: string;
  a: string;
};

export type FaqGroup = {
  category: string;
  items: Faq[];
};

export const faqGroups: FaqGroup[] = [
  {
    category: "Pedidos",
    items: [
      {
        q: "¿Hasta qué hora puedo pedir?",
        a: "Los pedidos cierran a las 11:00 a. m. de lunes a viernes. Después de esa hora ya estamos cocinando, así que no hay vuelta atrás.",
      },
      {
        q: "¿Puedo cambiar mi pedido?",
        a: "Sí, puedes modificarlo hasta las 11:00 a. m. del mismo día. Después ya está en la cocina.",
      },
      {
        q: "¿Hay pedido mínimo?",
        a: "Para empresas trabajamos desde 10 platos por entrega. Si son menos, te ayudamos igual conversando.",
      },
      {
        q: "¿Puedo pedir para todo el mes de una?",
        a: "Claro. Tu equipo puede agendar sus almuerzos semanales o mensuales y olvidarse del tema.",
      },
    ],
  },
  {
    category: "Entrega",
    items: [
      {
        q: "¿A qué hora entregan?",
        a: "Siempre entre 12:30 y 13:00. Si tu equipo tiene otro horario, lo conversamos.",
      },
      {
        q: "¿A qué zonas llegan?",
        a: "Cubrimos San Isidro, Miraflores, Surco, Barranco, San Borja, La Molina y Magdalena. Si estás fuera, escríbenos.",
      },
      {
        q: "¿Qué pasa si no estoy cuando llega el repartidor?",
        a: "Dejamos los platos con el anfitrión/a que nos indiques. Cada pedido va etiquetado con el nombre del colaborador.",
      },
    ],
  },
  {
    category: "Pago",
    items: [
      {
        q: "¿Qué formas de pago aceptan?",
        a: "Sodexo, Pluxee (ex Sodexo), Ticket Restaurante, transferencia, tarjeta, Yape y Plin. Lo que tu equipo use, nosotros lo recibimos.",
      },
      {
        q: "¿Facturan a mi empresa?",
        a: "Sí, emitimos factura electrónica consolidada mensual o por pedido. Tú eliges el formato.",
      },
    ],
  },
  {
    category: "Menús",
    items: [
      {
        q: "¿Cada cuánto cambia el menú?",
        a: "El menú rota cada semana. Siempre hay opción criolla, chifa, saludable y veggie.",
      },
      {
        q: "¿Tienen opciones vegetarianas o sin gluten?",
        a: "Sí, todos los días. Cada plato viene marcado con sus alérgenos y etiqueta dietética.",
      },
      {
        q: "¿Y si alguien del equipo tiene alergia?",
        a: "Nos avisas al registrar la empresa y adaptamos. Nada de recetas clonadas: cocina real, ajustes reales.",
      },
    ],
  },
  {
    category: "Empresas",
    items: [
      {
        q: "¿Cómo contrato para mi empresa?",
        a: "Agenda una demo de 15 minutos en /contacto y te armamos una propuesta en 24 horas.",
      },
      {
        q: "¿Qué modelos manejan?",
        a: "Suscripción mensual, pago por plato o mixto. Lo que mejor funcione para tu política de beneficios.",
      },
      {
        q: "¿Tienen reportes para RRHH?",
        a: "Sí. Cada mes te llega un dashboard con pedidos, consumo, platos más pedidos y feedback del equipo.",
      },
    ],
  },
];

export const faqsEmpresasShort: Faq[] = [
  {
    q: "¿Cuál es el pedido mínimo para empezar?",
    a: "Trabajamos desde 10 platos por entrega. Empresas más chicas también nos escriben y buscamos la fórmula.",
  },
  {
    q: "¿Aceptan Sodexo y otros vales de alimentación?",
    a: "Sí: Sodexo, Pluxee, Ticket Restaurante, transferencia, tarjeta, Yape y Plin.",
  },
  {
    q: "¿Cuánto demoran en implementar?",
    a: "En 48 horas desde la firma ya estamos entregando en tu oficina.",
  },
  {
    q: "¿Pueden adaptarse a alergias del equipo?",
    a: "Sí. Nos avisas y marcamos cada plato. Cocina real, no cortar y pegar.",
  },
  {
    q: "¿Hay contrato de permanencia?",
    a: "No. Si algo no te gusta, te vas. Creemos que el servicio se gana cada semana.",
  },
];
