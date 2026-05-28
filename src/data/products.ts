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
        description: "Sistema vertical de alta performance indicado para cubrir grandes superficies vidriadas. ",
        image:  "/assets/nimbus.jpg",
        features: [
          "Screen exterior para grandes dimensiones.",
          "Sistema de guiado por cable de 4 mm de acero inoxidable.",
          "Control solar preciso y estético.",
          "Diseño clásico con tecnología moderna."
        ],
         gallery: [
          "/assets/nimbus-gallery-1.jpg",
          "/assets/nimbus-gallery-2.jpg",
          "/assets/nimbus-gallery-3.jpg",
          "/assets/nimbus-gallery-4.jpg"
          
        ],
        
        specs: {
          medidas: "Ancho min 1.00m | Ancho max 6.00m |Alto min 1.00m | Alto max 5.00m |",
          soportes: ["Black", "White"],
          telas: [
            "Screen Outdoor - Black/Brown", "Screen Outdoor - White", "Screen Outdoor - Grey"
          ]
        }
      },
      {
        id: "solaris",
        name: "Toldo Solaris",
        description: "Sistema vertical con brazo abatible  y sencillo de usar. Es la solución perfecta para la instalación en cualquier tipo de balcón o baranda.",
        image: "/assets/solaris.jpg",
         features: [
          "Distintas posibilidades de ángulo brazo.",
          "Cuidada estética en todos sus componentes.",
          "Facilidad de instalación."
        ],
        gallery: [
          "/assets/solaris-gallery-1.png",
          "/assets/solaris-gallery-2.png",
          "/assets/solaris-gallery-3.jpg",
          "/assets/solaris-gallery-4.jpg"
        ],
        specs: {
          medidas: "Ancho min 1.00m | Ancho max 6.00m | Alto min 1.00m | Alto max 5.00m |",
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
        description: "Diseño sobrio y contemporáneo, ideal para balcones y espacios de dimensiones reducidas. Su estética liviana y funcional se adapta a fachadas modernas, aportando protección solar y confort sin perder elegancia.",
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
          medidas: "Ancho min 1.76m | Ancho max 4.50m |Brazos 1.50m y 2.00m",
          soportes: ["Black", "White"],
          telas: [
           
            "Acrílica Advance - Black", "Acrílica Advance - Beige", "Acrílica Advance - White", "Acrílica Advance - Grey"
          ]
        }
      },
      {
        id: "ares",
        name: "Toldo Ares",
        description: "Modelo premium con sistema encofrado que oculta completamente la lona y los brazos al cerrarse. Su diseño minimalista y sofisticado se integra perfectamente a arquitecturas modernas, priorizando la estética sin resignar protección y durabilidad.",
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
          "/assets/ares-gallery-4.jpg"
          
        ],
        specs: {
          medidas: "Ancho min 1.76m | Ancho max 6.00m |Brazos 1.50m,2.00m, 2.50m y 3.00m",
          soportes: ["Black", "White"],
          telas: [
           
            "Acrílica Advance - Black", "Acrílica Advance - Beige", "Acrílica Advance - White", "Acrílica Advance - Grey"
          ]
        }
      },
       {
        id: "a1-premium",
        name: "Toldo A1 Premium",
        description:"Modelo de líneas simples y refinadas, pensado para integrarse a distintos estilos arquitectónicos. Su estructura resistente lo convierte en una excelente opción para cubrir superficies de mayores dimensiones con una estética limpia y equilibrada.",
        image: "/assets/a1-premium.jpg",
        features: [
          "Brazo articulado Premium de gran resistencia con sistema de tensión interna.",
          "Inclinación ajustable.",
          "Cuidada estética en todos sus componentes.",
          "Facilidad de instalación."
        ],
         gallery: [
          "/assets/a1-premium-gallery-1.jpeg",
          "/assets/a1-premium-gallery-2.jpg"
          
          
        ],
        
        specs: {
          medidas: "Ancho min 1.76m | Ancho max 6.00m |Brazos 1.50m,2.00m, 2.50m y 3.00m |",
          soportes: ["Black", "White"],
          telas: [
            
            "Acrílica Advance - Black", "Acrílica Advance - Beige", "Acrílica Advance - White", "Acrílica Advance - Grey"
          ]
        }
      },
      {
        id: "m1-premium",
        name: "Toldo M1 Premium",
        description: " Modelo de líneas simples y refinadas, pensado para integrarse a distintos estilos arquitectónicos. Su estructura resistente lo convierte en una excelente opción para cubrir superficies de mayores dimensiones con una estética limpia y equilibrada.",
        image: "/assets/m1-premium.jpg",
        features: [
          "Brazo articulado Premium de gran resistencia con sistema de tensión interna.",
          "Sustentación multibrazos (de más de dos brazos).",
          "Inclinación ajustable.",
          "Cuidada estética en todos sus componentes."
          
        ],
         gallery: [
          "/assets/m1-premium-gallery-1.jpg",
          "/assets/m1-premium-gallery-2.jpg",
          "/assets/m1-premium-gallery-3.jpeg",
          "/assets/m1-premium-gallery-4.jpeg"
          
        ],
        specs: {
          medidas: "Ancho min 1.76m | Ancho max 6.50m |Brazos 1.50m,2.00m, 2.50m y 3.00m |",
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
          "/assets/indico-gallery-1.jpg",
          "/assets/indico-gallery-2.png",
          "/assets/indico-gallery-3.jpg",
          "/assets/indico-gallery-4.jpg"
          
        ],
        specs: {
          medidas: "Ancho min 1.00m | Ancho max 6.00m |Brazos 1.00m y  1.20m|",
          soportes: ["Black", "White"],
          telas: [
            
            "Acrílica Advance - Black", "Acrílica Advance - Beige", "Acrílica Advance - White", "Acrílica Advance - Grey"
          ]
        }
      }
    ]
  }
];

