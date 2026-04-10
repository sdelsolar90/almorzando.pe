const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

const local = (name: string) => `/menu/${name}`;

export const images = {
  heroHome: u("photo-1504674900247-0877df9cc836"),
  heroEmpresas: u("photo-1556761175-b413da4baf72"),
  heroComoFunciona: u("photo-1577106263724-2c8e03bfe9cf"),
  heroPorQue: u("photo-1488459716781-31db52582fe9"),
  heroNutricion: u("photo-1519708227418-c8fd9a32b7a2"),
  heroMenus: u("photo-1484980972926-edee96e0960d"),
  heroFaqs: u("photo-1497366811353-6870744d04b2"),
  heroContacto: u("photo-1497366216548-37526070297c"),

  lomoSaltado: local("lomo-saltado.jpg"),
  ceviche: local("ceviche.jpg"),
  ajiDeGallina: local("aji-de-gallina.jpg"),
  causaLimena: local("causa-limena.jpg"),
  arrozConPollo: local("arroz-con-pollo.jpg"),
  anticuchos: local("anticuchos.jpg"),
  papaAHuancaina: local("papa-huancaina.jpg"),
  tallarinSaltado: local("tallarin-saltado.jpg"),
  sopaCriolla: local("crema-choclo.jpg"),
  postrePeruano: local("suspiro-limena.jpg"),
  salmonParrilla: local("salmon-parrilla.jpg"),
  bowlVeggie: local("bowl-veggie.jpg"),

  cremaChoclo: local("crema-choclo.jpg"),
  ensaladaQuinoa: local("ensalada-quinoa.jpg"),
  causaAtun: local("causa-limena.jpg"),
  cremaZapallo: local("crema-zapallo.jpg"),
  wantanVeggie: local("wantan-veggie.jpg"),

  mazamorraMorada: local("mazamorra-morada.jpg"),
  arrozConLeche: local("arroz-con-leche.png"),
  ensaladaFrutas: local("ensalada-frutas.jpg"),
  suspiroLimena: local("suspiro-limena.jpg"),
  yogurGranola: local("yogur-granola.jpg"),

  chichaMorada: local("chicha-morada.jpg"),
  limonadaHierbabuena: local("limonada-hierbabuena.jpg"),
  maracuyaFrozen: local("maracuya-frozen.jpg"),
  emoliente: local("emoliente.jpg"),
  teMuna: local("te-muna.jpg"),
  refrescoCarambola: local("refresco-carambola.jpg"),

  freshVegetables: u("photo-1579113800032-c38bd7635818", 1200),
  marketLima: u("photo-1488459716781-31db52582fe9", 1200),
  kitchenTeam: u("photo-1577106263724-2c8e03bfe9cf", 1200),
  chefCooking: u("photo-1577106263724-2c8e03bfe9cf", 1200),
  packaging: u("photo-1542838132-92c53300491e", 1200),
  officeLima: u("photo-1497366216548-37526070297c", 1200),
  officeLunch: u("photo-1556761175-b413da4baf72", 1200),
  officeTeam: u("photo-1542744173-8e7e53415bb0", 1200),
  delivery: u("photo-1497366811353-6870744d04b2", 1200),

  categoryCriollo: local("lomo-saltado.jpg"),
  categoryChifa: local("tallarin-saltado.jpg"),
  categorySaludable: local("bowl-veggie.jpg"),
  categoryVeggie: local("ensalada-quinoa.jpg"),
  categoryComfort: local("aji-de-gallina.jpg"),
  categoryNorte: local("ceviche.jpg"),
};

export type ImageKey = keyof typeof images;
