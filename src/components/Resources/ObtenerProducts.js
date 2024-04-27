
const products = [
  {
    id: 1,
    name: "Aguila De Cementerio",
    description: "Dibujo inspirado en el estilo de tatuaje neotradicional",
    category: "Neotradicional",
    price: 12000,
    image: "/img/diseño-tatuajes-1.jpeg",
    stock: 1,
  },
  {
    id: 2,
    name: "Serpiente Maldita",
    description: "Dibujo inspirado en el estilo de tatuaje neotradicional",
    category: "Neotradicional",
    price: 10000,
    image: "/img/diseño-tatuajes-2.jpeg",
    stock: 1,
  },
  {
    id: 3,
    name: "Locura Sobre ruedas",
    description: "Dibujo inspirado en el estilo de tatuaje new school",
    category: "new school",
    price: 10000,
    image: "/img/diseño-tatuajes-3.jpeg",
    stock: 1,
  },
  {
    id: 4,
    name: "Flashes",
    description: "Ideas para tatuajes pequeños diseñados para espacios reducidos",
    category: "new school",
    price: 10000,
    image: "/img/diseño-tatuajes-4.jpeg",
    stock: 1,
  },
  {
    id: 5,
    name: "Perverted Feelings",
    description: "Dibujo inspirado en el estilo de tatuaje new school",
    category: "new school",
    price: 10000,
    image: "/img/diseño-tatuajes-5.jpeg",
    stock: 1,
  },
  {
    id: 6,
    name: "Ultimate Romantic",
    description: "Dibujo inspirado en el estilo de tatuaje new school",
    category: "new school",
    price: 10000,
    image: "/img/diseño-tatuajes-6.jpeg",
    stock: 1,
  },
];

const ObtenerProducts = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(products);
  }, 3000);
});
export default ObtenerProducts

