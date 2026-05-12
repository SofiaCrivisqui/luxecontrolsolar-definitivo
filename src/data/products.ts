export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  gallery?: string[];
  specs: {
    medidas: string;
    soportes: string[];
    telas: string[];
  };
}


export interface Category {
  id: string;
  title: string;
  description: string;
  products: Product[];
}

export const categories: Category[] = [
  {
    id: "toldos-verticales",
    title: "Toldos Verticales",
    description: "Sistemas diseñados para el cerramiento de galerías y balcones, brindando protección climática y privacidad.",
    products: [
      {
        id: "nimbus",
        name: "Toldo Nimbus",
        description: "Sistema de recogida vertical de alta performance indicado para cubrir grandes superficies vidriadas. Su diseño robusto permite cubrir áreas de hasta 25 m² con una estética impecable.",
        image:  "/assets/nimbus.jpg",
         gallery: [
          "/assets/nimbus-gallery-1.jpg",
          "/assets/nimbus-gallery-2.jpg",
          "/assets/nimbus-gallery-3.jpg",
          "/assets/nimbus-gallery-4.jpg"
          
        ],
        specs: {
          medidas: "Áreas hasta 25 m² | Cajón de 115 mm",
          soportes: ["Black", "White"],
          telas: [
            "Screen Outdoor - Black/Brown", "Screen Outdoor - White", "Screen Outdoor - Grey"
          ]
        }
      },
      {
        id: "solaris",
        name: "Toldo Solaris",
        description: "Sistema de brazo abatible (store) práctico y sencillo. La solución ideal para balcones y barandas que permite un efecto cortina total.",
        image: "/assets/solaris.jpg",
          gallery: [
          "/assets/nimbus-gallery-1.jpg",
          "/assets/nimbus-gallery-2.jpg",
          "/assets/nimbus-gallery-3.jpg",
          "/assets/nimbus-gallery-4.jpg"
          
        ],
        specs: {
          medidas: "Ancho hasta 5.00m | Brazos de 0.50m a 1.20m",
          soportes: ["Black", "White"],
          telas: [
            "Soltis 96 - Black", "Soltis 96 - White", "Soltis 96 - Grey",
            
          ]
        }
      }
    ]
  },
  {
    id: "toldos-proyectantes",
    title: "Toldos Proyectantes",
    description: "Brazos invisibles que permiten disfrutar del exterior sin obstáculos visuales.",
    products: [
      {
        id: "smart",
        name: "Toldo Smart",
        description: "Diseño compacto y versátil. Ideal para balcones y terrazas medianas con una estética minimalista.",
        image: "/assets/smart-principal.jpg",
         gallery: [
          "/assets/smart-gallery-1.jpg",
          "/assets/smart-gallery-2.png",
          "/assets/smart-gallery-3.png",
          "/assets/smart-gallery-4.jpg"
          
        ],
        specs: {
          medidas: "Ancho hasta 5.00m | Salida hasta 2.50m",
          soportes: ["Black", "White"],
          telas: [
           
            "Acrílica Advance - Black", "Acrílica Advance - Beige", "Acrílica Advance - White", "Acrílica Advance - Grey"
          ]
        }
      },
      {
        id: "ares",
        name: "Toldo Ares",
        description: "Sistema de brazos articulados con cofre de protección total. El máximo exponente en durabilidad y diseño.",
        image: "/assets/ares.jpg",
        gallery: [
          "/assets/ares-gallery-1.png",
          "/assets/ares-gallery-2.png",
          "/assets/ares-gallery-3.jpg",
          "/assets/ares-gallery-4.png"
          
        ],
        specs: {
          medidas: "Ancho hasta 6.00m | Salida hasta 3.50m",
          soportes: ["Black", "White"],
          telas: [
           
            "Acrílica Advance - Black", "Acrílica Advance - Beige", "Acrílica Advance - White", "Acrílica Advance - Grey"
          ]
        }
      },
       {
        id: "a1-premium",
        name: "Toldo A1 Premium",
        description: "Sistema avanzado de toldo proyectante con acabados premium y máxima resistencia.",
        image: "https://picsum.photos/seed/a1premium/800/600",
        specs: {
          medidas: "Ancho hasta 6.00m | Salida hasta 3.50m",
          soportes: ["Black", "White"],
          telas: [
            "Soltis 96 - Black", "Soltis 96 - White", "Soltis 96 - Grey",
            "Screen Outdoor - Black/Brown", "Screen Outdoor - White", "Screen Outdoor - Grey",
            "Acrílica Advance - Black", "Acrílica Advance - Beige", "Acrílica Advance - White", "Acrílica Advance - Grey"
          ]
        }
      },
      {
        id: "m1-premium",
        name: "Toldo M1 Premium",
        description: "El máximo confort en sistemas proyectantes motorizados con estética vanguardista.",
        image: "https://picsum.photos/seed/m1premium/800/600",
        specs: {
          medidas: "Ancho hasta 6.00m | Salida hasta 3.50m",
          soportes: ["Black", "White"],
          telas: [
            "Soltis 96 - Black", "Soltis 96 - White", "Soltis 96 - Grey",
            "Screen Outdoor - Black/Brown", "Screen Outdoor - White", "Screen Outdoor - Grey",
            "Acrílica Advance - Black", "Acrílica Advance - Beige", "Acrílica Advance - White", "Acrílica Advance - Grey"
          ]
        }
      }
    ]
  },
  {
    id: "toldos-punto-recto",
    title: "Toldos Punto Recto",
    description: "La solución clásica para ventanas, con brazos pivotantes de alta tensión.",
    products: [
      {
        id: "indico",
        name: "Toldo Indico",
        description: "Sistema clásico con brazos de tensión progresiva. Ideal para ventanas donde se busca control solar y estética tradicional.",
        image: "/assets/indico.png",
         gallery: [
          "/assets/indico-gallery-1.png",
          "/assets/indico-gallery-2.png",
          "/assets/indico-gallery-3.jpg",
          "/assets/indico-gallery-4.jpg"
          
        ],
        specs: {
          medidas: "Ancho hasta 4.00m | Brazos hasta 1.50m",
          soportes: ["Black", "White"],
          telas: [
            
            "Acrílica Advance - Black", "Acrílica Advance - Beige", "Acrílica Advance - White", "Acrílica Advance - Grey"
          ]
        }
      }
    ]
  }
];

