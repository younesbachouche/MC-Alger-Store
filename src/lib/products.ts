
export interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  category: string;
  description?: string;
  availableSizes: {
    size: string;
    available: boolean;
  }[];
  isNew?: boolean;
  isFeatured?: boolean;
  discount?: number;
}

export const products: Product[] = [
  {
    id: "home-tshirt",
    name: "Maillot Domicile MC Alger",
    price: 8000,
    imageUrl: "https://puma.dz/images/products/mca/780819_01.jpg",
    category: "maillots",
    description: "Maillot officiel MC Alger domicile pour la saison actuelle.",
    availableSizes: [
      { size: "XS", available: true },
      { size: "S", available: true },
      { size: "M", available: true },
      { size: "L", available: true },
      { size: "XL", available: true },
      { size: "XXL", available: false },
    ],
    isFeatured: true
  },
  {
    id: "away-tshirt",
    name: "Maillot Extérieur MC Alger",
    price: 8000,
    imageUrl: "https://filebrowser-production-5917.up.railway.app/api/public/dl/wrwgPXDZ?inline=true",
    category: "maillots",
    description: "Maillot officiel MC Alger extérieur pour la saison actuelle.",
    availableSizes: [
      { size: "XS", available: false },
      { size: "S", available: true },
      { size: "M", available: true },
      { size: "L", available: true },
      { size: "XL", available: true },
      { size: "XXL", available: true },
    ],
    isNew: true
  },
  {
    id: "third-tshirt",
    name: "Troisième Maillot MC Alger",
    price: 8000,
    imageUrl: "https://puma.dz/images/products/mca/781194_04.jpg",
    category: "maillots",
    description: "Troisième maillot officiel MC Alger pour la saison actuelle.",
    availableSizes: [
      { size: "XS", available: true },
      { size: "S", available: true },
      { size: "M", available: false },
      { size: "L", available: false },
      { size: "XL", available: true },
      { size: "XXL", available: true },
    ]
  },
 {
    id: "four-tshirt",
    name: "Maillot d'Entraînement MC Alger",
    price: 8000,
    imageUrl: "https://puma.dz/images/products/mca/781194_04.jpg",
    category: "maillots",
    description: "maillot d'entrainement officiel MC Alger pour la saison actuelle.",
    availableSizes: [
      { size: "XS", available: true },
      { size: "S", available: true },
      { size: "M", available: false },
      { size: "L", available: false },
      { size: "XL", available: true },
      { size: "XXL", available: true },
    ]
  },
  {
    id: "white-tracksuit",
    name: "Survêtement Blanc MC Alger",
    price: 12000,
    imageUrl: "https://filebrowser-production-5917.up.railway.app/api/public/dl/hfxq6Ape?inline=true",
    category: "survêtements",
    description: "Survêtement blanc officiel MC Alger, parfait pour l'entraînement ou les tenues décontractées.",
    availableSizes: [
      { size: "XS", available: true },
      { size: "S", available: true },
      { size: "M", available: true },
      { size: "L", available: true },
      { size: "XL", available: true },
      { size: "XXL", available: false },
    ],
    discount: 10
  },
{
    id: "black-tracksuit",
    name: "Survêtement Noir MC Alger",
    price: 12000,
    imageUrl: "https://filebrowser-production-5917.up.railway.app/api/public/dl/iRqZfIFx?inline=true",
    category: "survêtements",
    description: "Survêtement noir officiel MC Alger, parfait pour l'entraînement ou les tenues décontractées.",
    availableSizes: [
      { size: "XS", available: true },
      { size: "S", available: true },
      { size: "M", available: false },
      { size: "L", available: false },
      { size: "XL", available: true },
      { size: "XXL", available: false },
    ]
  },
{
    id: "red-tracksuit",
    name: "Survêtement Grenat MC Alger",
    price: 12000,
    imageUrl: "https://filebrowser-production-5917.up.railway.app/api/public/dl/MAqZk7JJ?inline=true",
    category: "survêtements",
    description: "Survêtement noir officiel MC Alger, parfait pour l'entraînement ou les tenues décontractées.",
    availableSizes: [
      { size: "XS", available: true },
      { size: "S", available: false },
      { size: "M", available: true },
      { size: "L", available: true },
      { size: "XL", available: true },
      { size: "XXL", available: false },
    ]
  },

];

export const sponsors = [
  {
    name: "Sonatrach",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Sonatrach.svg"
  },
  {
    name: "Puma",
    imageUrl: "https://logo-marque.com/wp-content/uploads/2020/04/Puma-Logo.png"
  },
  {
    name: "Hisense",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Hisense.svg/2560px-Hisense.svg.png"
  },
  {
    name: "Ooredoo",
    imageUrl: "https://www.telecomreviewafrica.com/images/stories/2017/07/news-06-07-03.jpg"
  },
  {
    name: "Messad Water",
    imageUrl: "https://messadwater.dz/wp-content/uploads/2024/03/nLogo.png"
  }
];
