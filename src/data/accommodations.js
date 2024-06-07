const accommodations = [
  {
    "id": 1,
    "hotelName": "Eco Beach Resort",
    "location": "Piracaia, Brasil",
    "originalPrice": 700,
    "discount": 0.15, // 15% de desconto
    "summaryItems": [
      {
        "description": "Taxa de conservação",
        "amount": 30
      },
      {
        "description": "Taxa de serviço",
        "amount": 50
      }
    ],
    "extraPersonFee": 100,
    "image": "https://via.placeholder.com/200",
    "description": "O Eco Beach Resort oferece uma experiência sustentável de luxo, com práticas ecológicas integradas em todas as áreas. Desfrute de acomodações confortáveis e modernas enquanto se conecta com a natureza.",
    "rating": 4.5,
    "numberOfRatings": 200,
    "highlights": [
      {
        "icon": "FaLeaf",
        "text": "Energia solar"
      },
      {
        "icon": "FaRecycle",
        "text": "Reciclagem de resíduos"
      },
      {
        "icon": "FaSolarPanel",
        "text": "Painéis solares"
      },
      {
        "icon": "FaWater",
        "text": "Conservação de água"
      }
    ],
    "testimonials": [
      {
        "name": "João Silva",
        "comment": "Adorei a estadia! A preocupação com a sustentabilidade é evidente em cada detalhe.",
        "date": "12/01/2024"
      },
      {
        "name": "Maria Oliveira",
        "comment": "Uma experiência incrível! Aulas sobre conservação dos oceanos foram um diferencial.",
        "date": "20/02/2024"
      }
    ],
    "conservationProjects": [
      {
        "title": "Projeto Limpeza das Praias",
        "description": "Participamos ativamente na limpeza das praias locais, removendo lixo e promovendo a conscientização ambiental."
      },
      {
        "title": "Preservação da Vida Marinha",
        "description": "Apoiamos projetos que visam a preservação da vida marinha, incluindo iniciativas de proteção de corais e tartarugas marinhas."
      }
    ]
  },
  {
    "id": 2,
    "hotelName": "Green Coast Hotel",
    "location": "Bom Jesus dos Perdões, Brasil",
    "originalPrice": 600,
    "discount": 0.10, // 10% de desconto
    "summaryItems": [
        {
            "description": "Taxa de conservação",
            "amount": 20
        },
        {
            "description": "Taxa de serviço",
            "amount": 40
        },
        {
            "description": "Taxa de turismo",
            "amount": 30
        }
    ],
    "extraPersonFee": 80,
    "image": "https://via.placeholder.com/200",
    "description": "O Green Coast Hotel combina conforto e sustentabilidade, oferecendo aos hóspedes uma estadia relaxante em meio à natureza com práticas ecológicas avançadas.",
    "rating": 4.8,
    "numberOfRatings": 150,
    "highlights": [
      {
        "icon": "FaLeaf",
        "text": "Energia solar"
      },
      {
        "icon": "FaRecycle",
        "text": "Reciclagem de resíduos"
      },
      {
        "icon": "FaSolarPanel",
        "text": "Painéis solares"
      },
      {
        "icon": "FaWater",
        "text": "Conservação de água"
      }
    ],
    "testimonials": [
      {
        "name": "Carlos Souza",
        "comment": "Lugar maravilhoso! A sustentabilidade é levada a sério.",
        "date": "15/07/2024"
      },
      {
        "name": "Ana Paula",
        "comment": "Amei a experiência! As aulas sobre conservação foram incríveis.",
        "date": "18/07/2024"
      }
    ],
    "conservationProjects": [
      {
        "title": "Projeto de Reciclagem",
        "description": "Iniciativas de reciclagem para reduzir o impacto ambiental."
      },
      {
        "title": "Proteção de Tartarugas",
        "description": "Projetos para proteger as tartarugas marinhas locais."
      }
    ]
  },
  {
    "id": 3,
    "hotelName": "Sustainable Shores Resort",
    "location": "Juquitiba, Brasil",
    "originalPrice": 500,
    "discount": 0.20, // 20% de desconto
    "summaryItems": [
        {
            "description": "Taxa de conservação",
            "amount": 25
        },
        {
            "description": "Taxa de serviço",
            "amount": 45
        },
        {
            "description": "Taxa  de turismo",
            "amount": 35
        }
    ],
    "extraPersonFee": 90,
    "image": "https://via.placeholder.com/200",
    "description": "O Sustainable Shores Resort é o destino perfeito para os amantes da natureza, oferecendo práticas ecológicas em um ambiente luxuoso e acolhedor.",
    "rating": 4.2,
    "numberOfRatings": 180,
    "highlights": [
      {
        "icon": "FaLeaf",
        "text": "Energia solar"
      },
      {
        "icon": "FaRecycle",
        "text": "Reciclagem de resíduos"
      },
      {
        "icon": "FaSolarPanel",
        "text": "Painéis solares"
      },
      {
        "icon": "FaWater",
        "text": "Conservação de água"
      }
    ],
    "testimonials": [
      {
        "name": "Pedro Lima",
        "comment": "Ótima estadia! A sustentabilidade é um diferencial.",
        "date": "20/06/2024"
      },
      {
        "name": "Fernanda Costa",
        "comment": "Experiência única! Aulas sobre conservação foram ótimas.",
        "date": "21/06/2024"
      }
    ],
    "conservationProjects": [
      {
        "title": "Projeto de Energia Solar",
        "description": "Uso de painéis solares para reduzir o consumo de energia."
      },
      {
        "title": "Conservação de Água",
        "description": "Iniciativas para conservar água e reduzir o desperdício."
      }
    ]
  },
  {
    "id": 4,
    "hotelName": "Eco Haven Retreat",
    "location": "Paiol do Meio, Brasil",
    "originalPrice": 400,
    "discount": 0.25, // 25% de desconto
    "summaryItems": [
        {
            "description": "Taxa de conservação",
            "amount": 15
        },
        {
            "description": "Taxa de serviço",
            "amount": 35
        },
        {
            "description": "Taxa de turismo",
            "amount": 25
        }
    ],
    "extraPersonFee": 70,
    "image": "https://via.placeholder.com/200",
    "description": "O Eco Haven Retreat oferece um refúgio tranquilo em meio à natureza, com foco em práticas sustentáveis e conforto excepcional para seus hóspedes.",
    "rating": 4.6,
    "numberOfRatings": 190,
    "highlights": [
      {
        "icon": "FaLeaf",
        "text": "Energia solar"
      },
      {
        "icon": "FaRecycle",
        "text": "Reciclagem de resíduos"
      },
      {
        "icon": "FaSolarPanel",
        "text": "Painéis solares"
      },
      {
        "icon": "FaWater",
        "text": "Conservação de água"
      }
    ],
    "testimonials": [
      {
        "name": "Lucas Martins",
        "comment": "Lugar incrível! A sustentabilidade é evidente.",
        "date": "25/06/2024"
      },
      {
        "name": "Juliana Santos",
        "comment": "Aulas sobre conservação foram um diferencial.",
        "date": "26/06/2024"
      }
    ],
    "conservationProjects": [
      {
        "title": "Projeto de Reciclagem",
        "description": "Iniciativas de reciclagem para reduzir o impacto ambiental."
      },
      {
        "title": "Proteção de Tartarugas",
        "description": "Projetos para proteger as tartarugas marinhas locais."
      }
    ]
  },
  {
    "id": 5,
    "hotelName": "Blue Lagoon Eco Lodge",
    "location": "Jarinu, Brasil",
    "originalPrice": 300,
    "discount": 0.30, // 30% de desconto
    "summaryItems": [
        {
            "description": "Taxa de conservação",
            "amount": 10
        },
        {
            "description": "Taxa de serviço",
            "amount": 30
        },
        {
            "description": "Taxa de turismo",
            "amount": 20
        }
    ],
    "extraPersonFee": 60,
    "image": "https://via.placeholder.com/200",
    "description": "O Blue Lagoon Eco Lodge é um paraíso sustentável, oferecendo acomodações confortáveis e práticas ecológicas que promovem a conservação ambiental.",
    "rating": 4.1,
    "numberOfRatings": 160,
    "highlights": [
      {
        "icon": "FaLeaf",
        "text": "Energia solar"
      },
      {
        "icon": "FaRecycle",
        "text": "Reciclagem de resíduos"
      },
      {
        "icon": "FaSolarPanel",
        "text": "Painéis solares"
      },
      {
        "icon": "FaWater",
        "text": "Conservação de água"
      }
    ],
    "testimonials": [
      {
        "name": "Marcos Silva",
        "comment": "Ótima estadia! A sustentabilidade é um diferencial.",
        "date": "12/06/2024"
      },
      {
        "name": "Carla Souza",
        "comment": "Experiência única! Aulas sobre conservação foram ótimas.",
        "date": "14/06/2024"
      }
    ],
    "conservationProjects": [
      {
        "title": "Projeto de Energia Solar",
        "description": "Uso de painéis solares para reduzir o consumo de energia."
      },
      {
        "title": "Conservação de Água",
        "description": "Iniciativas para conservar água e reduzir o desperdício."
      }
    ]
  }
]

export default accommodations;
