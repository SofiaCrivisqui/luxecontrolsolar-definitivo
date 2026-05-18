export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  gallery?: string[];
  features?: string[];
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
        description: "Sistema de recogida vertical de alta performance indicado para cubrir grandes superficies vidriadas. ",
        image:  "/assets/nimbus.jpg",
        features: [
          "Screen exterior para grandes dimensiones.",
          "Sistema de guiado por cable de 4 mm o varilla de 10 mm de acero inoxidable.",
          "Control solar preciso y estético.",
          "Diseño clásico con tecnología moderna."
        ],
         gallery: [
          "/assets/nimbus-gallery-1.jpg",
          "/assets/nimbus-gallery-2.jpg",
          "/assets/nimbus-gallery-3.jpg",
          "/assets/nimbus-gallery-4.png"
          
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
        description: "Sistema de brazo abatible o store práctico y sencillo de usar. Es la solución perfecta para la instalación en cualquier tipo de balcón o baranda. Ofrece la posibilidad de conseguir un efecto cortina si se fija en posición vertical.",
        image: "/assets/solaris.jpg",
         features: [
          "Distintas posibilidades de ángulo brazo.",
          "Cuidada estética en todos sus componentes.",
          "Facilidad de instalación."
        ],
        gallery: [
          "/assets/solaris-gallery-1.png",
          "/assets/solaris-gallery-2.png",
          "/assets/solaris-gallery-3.png",
          "/assets/solaris-gallery-4.jpg"
        ],
        specs: {
          medidas: "Ancho hasta 5.00m | Brazos de 0.50m a 1.20m",
          soportes: ["Black", "White"],
          telas: [
            "Soltis 96 - Black", "Soltis 96 - White", "Soltis 96 - Grey"
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
        description: "De diseño sobrio y contemporáneo, es un sistema concebido para instalarse en balcones o fachadas.",
        image: "/assets/smart-principal.jpg",
        features: [
          "Brazo articulado Smart de gran resistencia con sistema de tensión interna.",
          "Inclinación ajustable.",
          "Cuidada estética en todos sus componentes.",
          "Facilidad de instalación."
        ],
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
        description: "Diseñado con líneas aerodinámicas, permite adaptarse a cualquier tipo de arquitectura exterior.",
        image: "/assets/ares.jpg",
        features: [
          "Brazo articulado Premium de gran resistencia con sistema de tensión interna.",
          "Protección del mecanismo y la lona cuando el toldo está recogido.",
          "Ocultación de los elementos mecánicos de fijación.",
          "Facilidad de instalación."
        ],
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
        description: "Sistema caracterizado por su sencillez y resistencia, que se integra en los ambientes más particulares.",
        image: "/assets/a1-premium.jpg",
        features: [
          "Brazo articulado Premium de gran resistencia con sistema de tensión interna.",
          "Inclinación ajustable.",
          "Cuidada estética en todos sus componentes.",
          "Facilidad de instalación."
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
        id: "m1-premium",
        name: "Toldo M1 Premium",
        description: "El máximo confort en sistemas proyectantes motorizados con estética vanguardista.",
        image: "/assets/m1-premium.jpg",
        features: [
          "Brazo articulado Premium de gran resistencia con sistema de tensión interna.",
          "Sustentación multibrazos (de más de dos brazos).",
          "Inclinación ajustable.",
          "Cuidada estética en todos sus componentes."
        ],
        specs: {
          medidas: "Ancho hasta 6.00m | Salida hasta 3.50m",
          soportes: ["Black", "White"],
          telas: [
            
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
        description: "Sistema de punto recto adecuado para edificaciones con ventanas sin balcón.",
        image: "/assets/indico.png",
        features: [
          "Transmisión interna de tensión.",
          "Cuidada estética en todos sus componentes.",
          "Inclinación ajustable.",
          "Facilidad de instalación."
        ],
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

