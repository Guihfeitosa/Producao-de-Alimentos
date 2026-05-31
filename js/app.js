/* ============================================================
   FOOD IMPACT — Application Logic (Lamborghini Edition + Deep Science)
   Theme switching, autoplay, multilingual support, and dynamic science data
   ============================================================ */

const THEMES = [
  {
    id: 'pecuaria',
    name: { pt: 'Pecuária Intensiva', en: 'Intensive Livestock' },
    
    // ── Visual ──
    accent: '#FF3333', // Neon Red for Pecuária
    accentDim: 'rgba(255, 51, 51, 0.15)',
    accentGlow: 'rgba(255, 51, 51, 0.35)',

    // ── Hero Text ──
    supertitle: { pt: 'O IMPACTO INVISÍVEL &nbsp;|&nbsp; CARNE', en: 'THE INVISIBLE IMPACT &nbsp;|&nbsp; MEAT' },
    title: { pt: 'PECUÁRIA<br/>INTENSIVA', en: 'INTENSIVE<br/>LIVESTOCK' },

    heroImage: 'img/pecuaria-intensiva.svg',

    // ── Impact overlay data ──
    impactRaw1: 15000,
    impactRaw2: 14.5,
    impactDecimals2: 1,
    impactSuffix1: 'L',
    impactSuffix2: '%',
    impactLabel1: { pt: 'ÁGUA / KG', en: 'WATER / KG' },
    impactLabel2: { pt: 'EMISSÕES GEE', en: 'GHG EMISSIONS' },

    // ── Science Section Data ──
    intro: { 
      pt: 'A pecuária intensiva representa um dos maiores desafios ambientais da atualidade. Em termos de métricas rápidas globais, o setor exige impressionantes 15.000 litros de água para a produção de apenas 1 kg de carne bovina e responde por 14,5% de todas as emissões globais de Gases de Efeito Estufa (GEE).', 
      en: 'Intensive livestock farming represents one of the greatest environmental challenges today. Globally, the sector requires an astounding 15,000 liters of water to produce just 1 kg of beef and accounts for 14.5% of all global Greenhouse Gas (GHG) emissions.' 
    },
    mechanism: [
      { type: {pt: 'Ação Humana', en: 'Human Action'}, desc: {pt: 'Conversão em massa de florestas nativas e biomas ricos — como a Amazônia e o Cerrado — em pastagens expansivas e plantações de soja destinadas à fabricação de ração animal.', en: 'Mass conversion of native forests and rich biomes into expansive pastures and soy plantations destined for animal feed manufacturing.'} },
      { type: {pt: 'Impacto Imediato', en: 'Immediate Impact'}, desc: {pt: 'Perda drástica de biodiversidade, aumento descontrolado de queimadas e liberação na atmosfera de toneladas de Carbono (CO₂) que antes estavam estocadas na vegetação.', en: 'Drastic loss of biodiversity, uncontrolled increase in wildfires, and release into the atmosphere of tons of Carbon (CO₂) previously stored in vegetation.'} },
      { type: {pt: 'Consequência Global', en: 'Global Consequence'}, desc: {pt: 'Aceleração do aquecimento global. Isso ocorre principalmente devido ao Metano (CH₄) liberado pela digestão dos ruminantes, 28 vezes mais poluente que o próprio CO₂.', en: 'Acceleration of global warming. This occurs mainly due to Methane (CH₄) released by ruminant digestion, 28 times more polluting than CO₂ itself.'} }
    ],
    charts: [
      { label: {pt: 'Uso de Terra', en: 'Land Use'}, value: 92 },
      { label: {pt: 'Consumo Hídrico', en: 'Water Consumption'}, value: 85 },
      { label: {pt: 'Emissão de Carbono', en: 'Carbon Emission'}, value: 95 }
    ],
    glossary: [
      { term: {pt: 'Fermentação Entérica', en: 'Enteric Fermentation'}, def: {pt: 'Processo digestivo natural de animais ruminantes (como bois e ovelhas) onde microrganismos quebram a celulose, gerando gás metano expelido pelo animal.', en: 'Natural digestive process of ruminant animals where microorganisms break down cellulose, generating methane gas expelled by the animal.'} },
      { term: {pt: 'Pegada Hídrica', en: 'Water Footprint'}, def: {pt: 'O volume total de água doce utilizado para produzir um bem, desde o cultivo do alimento do animal até o processamento industrial final.', en: 'The total volume of fresh water used to produce a good, from growing the animals food to final industrial processing.'} }
    ],
    sources: {pt: 'Fontes Oficiais: Organização das Nações Unidas para a Alimentação e a Agricultura (FAO) / Painel Intergovernamental sobre Mudanças Climáticas (IPCC)', en: 'Official Sources: Food and Agriculture Organization (FAO) / Intergovernmental Panel on Climate Change (IPCC)'}
  },
  {
    id: 'monocultura',
    name: { pt: 'Monocultura de Grãos', en: 'Mass Monoculture' },

    accent: '#D4AF37', // Gold for Monoculture
    accentDim: 'rgba(212, 175, 55, 0.15)',
    accentGlow: 'rgba(212, 175, 55, 0.35)',

    supertitle: { pt: 'O IMPACTO INVISÍVEL &nbsp;|&nbsp; A EXAUSTÃO DOS ECOSSISTEMAS', en: 'THE INVISIBLE IMPACT &nbsp;|&nbsp; EXHAUSTION OF ECOSYSTEMS' },
    title: { pt: 'MONOCULTURAS<br/>EM MASSA', en: 'MASS<br/>MONOCULTURES' },

    heroImage: 'img/monocultura-massa.svg',

    impactRaw1: 6.5,
    impactRaw2: 210,
    impactDecimals1: 1,
    impactDecimals2: 0,
    impactSuffix1: 'M ton',
    impactSuffix2: 'Bi ton',
    impactLabel1: { pt: 'AGROTÓXICOS POR ANO', en: 'PESTICIDES PER YEAR' },
    impactLabel2: { pt: 'SOLO FÉRTIL PERDIDO', en: 'FERTILE SOIL LOST' },

    // ── Science Section Data ──
    intro: { 
      pt: 'O modelo agrícola baseado em monoculturas em massa tem levado os solos ao limite. Os indicadores apontam a aplicação de cerca de 6,5 milhões de toneladas de agrotóxicos por ano globalmente, resultando na perda assustadora de 210 bilhões de toneladas de solo fértil por erosão.', 
      en: 'The agricultural model based on mass monocultures has pushed soils to their limit. Indicators show the application of about 6.5 million tons of pesticides per year globally, resulting in the terrifying loss of 210 billion tons of fertile soil due to erosion.' 
    },
    mechanism: [
      { type: {pt: 'Ação Humana', en: 'Human Action'}, desc: {pt: 'Cultivar uma única espécie de planta (como soja ou milho) em extensões gigantescas de terra por vários anos consecutivos, sem rotação de culturas.', en: 'Cultivating a single plant species (like soy or corn) across gigantic tracts of land for several consecutive years, without crop rotation.'} },
      { type: {pt: 'Impacto Imediato', en: 'Immediate Impact'}, desc: {pt: 'Rápido empobrecimento nutricional do solo, perda de microbiota natural, dependência de fertilizantes químicos e proliferação em massa de pragas.', en: 'Rapid nutritional depletion of soil, loss of natural microbiota, dependence on chemical fertilizers, and mass proliferation of pests.'} },
      { type: {pt: 'Consequência Global', en: 'Global Consequence'}, desc: {pt: 'Contaminação de lençóis freáticos por pesticidas, morte em massa de polinizadores essenciais (abelhas) e desertificação severa de solos produtivos.', en: 'Contamination of groundwater by pesticides, mass death of essential pollinators (bees), and severe desertification of productive soils.'} }
    ],
    charts: [
      { label: {pt: 'Uso de Terra', en: 'Land Use'}, value: 78 },
      { label: {pt: 'Consumo Hídrico', en: 'Water Consumption'}, value: 60 },
      { label: {pt: 'Emissão de Carbono', en: 'Carbon Emission'}, value: 55 }
    ],
    glossary: [
      { term: {pt: 'Eutrofização', en: 'Eutrophication'}, def: {pt: 'Fenômeno poluidor causado pelo escoamento de fertilizantes agrícolas para rios, gerando proliferação descontrolada de algas que sufocam os peixes.', en: 'Polluting phenomenon caused by agricultural fertilizer runoff into rivers, generating uncontrolled algae proliferation that suffocates fish.'} },
      { term: {pt: 'Commodities', en: 'Commodities'}, def: {pt: 'Produtos básicos de origem agrícola ou mineral padronizados e comercializados globalmente em larga escala (ex: soja, milho).', en: 'Basic agricultural or mineral products standardized and traded globally on a large scale (e.g., soy, corn).'} }
    ],
    sources: {pt: 'Fontes Oficiais: Plataforma Intergovernamental Científico-Política sobre Biodiversidade e Serviços Ecossistêmicos (IPBES) / Embrapa', en: 'Official Sources: Intergovernmental Science-Policy Platform on Biodiversity and Ecosystem Services (IPBES) / Embrapa'}
  },
  {
    id: 'regenerativa',
    name: { pt: 'Agricultura Vertical', en: 'Vertical Farming' },

    accent: '#00E5FF', // Cyan/Green for Vertical
    accentDim: 'rgba(0, 229, 255, 0.15)',
    accentGlow: 'rgba(0, 229, 255, 0.35)',

    supertitle: { pt: 'A REVOLUÇÃO URBANA SUSTENTÁVEL &nbsp;|&nbsp; FUTURO', en: 'THE SUSTAINABLE URBAN REVOLUTION &nbsp;|&nbsp; FUTURE' },
    title: { pt: 'AGRICULTURA<br/>VERTICAL', en: 'VERTICAL<br/>FARMING' },

    heroImage: 'img/agricultura-vertical.svg',

    impactRaw1: -95,
    impactRaw2: 0,
    impactDecimals1: 0,
    impactDecimals2: 0,
    impactSuffix1: '%',
    impactSuffix2: '',
    impactLabel1: { pt: 'USO DE ÁGUA', en: 'WATER USAGE' },
    impactLabel2: { pt: 'PESTICIDAS QUÍMICOS', en: 'CHEMICAL PESTICIDES' },

    // ── Science Section Data ──
    intro: { 
      pt: 'Como contraponto tecnológico e sustentável, a agricultura vertical surge como a vanguarda da produção de alimentos. Suas métricas de eficiência apontam para uma redução de 95% no uso de água quando comparada à agricultura tradicional, além de registrar o uso nulo de agrotóxicos.', 
      en: 'As a technological and sustainable counterpoint, vertical farming emerges as the vanguard of food production. Its efficiency metrics point to a 95% reduction in water use compared to traditional agriculture, while registering zero use of chemical pesticides.' 
    },
    mechanism: [
      { type: {pt: 'Ação Humana', en: 'Human Action'}, desc: {pt: 'Cultivo de alimentos em camadas empilhadas verticalmente, dentro de ambientes urbanos totalmente controlados (prédios adaptados ou galpões).', en: 'Cultivating food in vertically stacked layers, within fully controlled urban environments (adapted buildings or warehouses).'} },
      { type: {pt: 'Impacto Imediato', en: 'Immediate Impact'}, desc: {pt: 'Utilização de iluminação LED de alta eficiência regulada para fotossíntese, associada a sistemas fechados de água reciclada (hidroponia/aeroponia).', en: 'Use of highly efficient LED lighting regulated for photosynthesis, associated with closed systems of recycled water (hydroponics/aeroponics).'} },
      { type: {pt: 'Consequência Global', en: 'Global Consequence'}, desc: {pt: 'Redução drástica da necessidade de transporte logístico, eliminação do risco de pragas e blindagem total contra secas ou geadas.', en: 'Drastic reduction in logistical transport needs, elimination of pest risks, and total shielding against droughts or frosts.'} }
    ],
    charts: [
      { label: {pt: 'Uso de Terra', en: 'Land Use'}, value: 5 },
      { label: {pt: 'Consumo Hídrico', en: 'Water Consumption'}, value: 5 },
      { label: {pt: 'Emissão de Carbono', en: 'Carbon Emission'}, value: 10 }
    ],
    glossary: [
      { term: {pt: 'Hidroponia', en: 'Hydroponics'}, def: {pt: 'Técnica avançada de cultivar plantas sem solo, na qual as raízes ficam imersas em uma solução líquida nutritiva balanceada com minerais essenciais.', en: 'Advanced technique of growing plants without soil, in which roots are immersed in a balanced liquid nutrient solution with essential minerals.'} },
      { term: {pt: 'Cadeia de Km Zero', en: 'Zero Km Chain'}, def: {pt: 'Conceito de economia de proximidade que incentiva o consumo de alimentos produzidos perto do local de consumo, cortando transporte longo.', en: 'Proximity economy concept that encourages the consumption of food produced near the place of consumption, cutting long transport.'} }
    ],
    sources: {pt: 'Fontes Oficiais: Associação Internacional de Agricultura Vertical (AVF) / Massachusetts Institute of Technology (MIT Urban Agriculture Lab)', en: 'Official Sources: Association for Vertical Farming (AVF) / Massachusetts Institute of Technology (MIT Urban Agriculture Lab)'}
  }
];

const THEME_SEARCH_KEYWORDS = {
  pecuaria: 'pecuaria intensiva carne gado boi agua emissao emissoes gee metano carbono desmatamento biodiversidade',
  monocultura: 'monocultura graos soja milho agrotoxicos pesticidas solo fertil erosao fertilizantes commodities',
  regenerativa: 'agricultura vertical hidroponia agua pesticidas futuro urbano led aeroponia transporte energia',
  organica: 'agricultura organica solo vivo compostagem controle biologico biodiversidade sem sinteticos',
  'regenerativa-campo': 'agricultura regenerativa agroecologia cobertura vegetal carbono solo ciclagem nutrientes pastejo',
  irrigada: 'agricultura irrigada irrigacao agua doce aquifero evapotranspiracao salinizacao gotejamento',
  agrofloresta: 'agrofloresta sistemas agroflorestais arvores biodiversidade carbono restauracao erosao',
  aquatica: 'pesca aquicultura peixe camarao moluscos algas sobrepesca captura acidental efluentes'
};

const STATIC_SEARCH_ITEMS = [
  {
    type: 'section',
    target: '#science-section',
    title: { pt: 'Dados cientificos', en: 'Scientific data' },
    desc: { pt: 'Analise, metricas, glossario e fontes.', en: 'Analysis, metrics, glossary, and sources.' },
    keywords: 'dados cientificos analise metricas comparativas graficos glossario fontes impacto'
  },
  {
    type: 'section',
    target: '#analise-completa',
    title: { pt: 'Analise completa', en: 'Full analysis' },
    desc: { pt: 'Impactos, limites, solucoes e exemplos por tema.', en: 'Impacts, limits, solutions, and examples by theme.' },
    keywords: 'analise completa impactos limites solucoes exemplos aprofundamento'
  },
  {
    type: 'section',
    target: '#comparativo',
    title: { pt: 'Comparativo ambiental', en: 'Environmental comparison' },
    desc: { pt: 'Comparacao final entre sistemas produtivos.', en: 'Final comparison between production systems.' },
    keywords: 'comparativo sustentabilidade sistema mais sustentavel clima agua solo biodiversidade energia'
  },
  {
    type: 'section',
    target: '#ods-12',
    title: { pt: 'ODS 12', en: 'SDG 12' },
    desc: { pt: 'Consumo e producao responsaveis na alimentacao.', en: 'Responsible consumption and production in food systems.' },
    keywords: 'ods 12 agenda 2030 consumo producao responsaveis desperdicio residuos compostagem reciclagem rotulagem'
  },
  {
    type: 'section',
    target: '#metodologia',
    title: { pt: 'Metodologia', en: 'Methodology' },
    desc: { pt: 'Como os dados foram reunidos e comparados.', en: 'How the data was gathered and compared.' },
    keywords: 'metodologia metodo dados fao ipcc mit porcentagens estudo'
  },
  {
    type: 'section',
    target: '#sobre',
    title: { pt: 'Sobre o projeto', en: 'About the project' },
    desc: { pt: 'Objetivo educacional e contexto do site.', en: 'Educational goal and project context.' },
    keywords: 'sobre projeto educacional objetivo estudantes interface'
  }
];

const CORRECTED_THEMES = [
  {
    id: 'pecuaria',
    name: { pt: 'Pecuária Intensiva', en: 'Intensive Livestock' },
    accent: '#FF3333',
    accentDim: 'rgba(255, 51, 51, 0.15)',
    accentGlow: 'rgba(255, 51, 51, 0.35)',
    supertitle: { pt: 'O IMPACTO INVISÍVEL &nbsp;|&nbsp; CARNE E LATICÍNIOS', en: 'THE INVISIBLE IMPACT &nbsp;|&nbsp; MEAT AND DAIRY' },
    title: { pt: 'PECUÁRIA<br/>INTENSIVA', en: 'INTENSIVE<br/>LIVESTOCK' },
    heroImage: 'img/pecuaria-intensiva.svg',
    impactRaw1: 14.5,
    impactRaw2: 77,
    impactDecimals1: 1,
    impactDecimals2: 0,
    impactSuffix1: '%',
    impactSuffix2: '%',
    impactLabel1: { pt: 'GEE HUMANOS', en: 'HUMAN GHG' },
    impactLabel2: { pt: 'TERRA AGRÍCOLA', en: 'FARM LAND' },
    intro: {
      pt: 'A pecuária intensiva concentra alguns dos impactos mais altos da alimentação: emissões de metano, demanda por pastagens e lavouras de ração, pressão sobre florestas, uso de água e perda de habitat. O dado de 14,5% vem da FAO para cadeias globais de pecuária; já o uso de terra varia por metodologia, mas estudos reunidos pelo Our World in Data mostram que a pecuária ocupa a maior parte da terra agrícola global enquanto entrega uma fração menor das calorias.',
      en: 'Intensive livestock concentrates some of the highest impacts in food production: methane emissions, pasture and feed-crop demand, forest pressure, water use, and habitat loss. The 14.5% figure comes from FAO for global livestock supply chains; land-use shares vary by method, but data summarized by Our World in Data shows livestock using most agricultural land while delivering a smaller share of calories.'
    },
    insights: [
      { label: { pt: 'Clima', en: 'Climate' }, text: { pt: 'Ruminantes emitem metano na fermentação entérica; esse gás aquece muito no curto prazo.', en: 'Ruminants emit methane through enteric fermentation, a strong short-term warming gas.' } },
      { label: { pt: 'Terra', en: 'Land' }, text: { pt: 'Pastagens e grãos para ração ampliam a pressão sobre florestas, Cerrado e biodiversidade.', en: 'Pasture and feed crops increase pressure on forests, savannas, and biodiversity.' } },
      { label: { pt: 'Soluções', en: 'Solutions' }, text: { pt: 'Melhor manejo, restauração de pastos, redução de desperdício e dietas mais diversas reduzem impacto.', en: 'Better management, pasture restoration, less waste, and more diverse diets reduce impact.' } }
    ],
    mechanism: [
      { type: {pt: 'Produção', en: 'Production'}, desc: {pt: 'Criação concentrada de animais, abertura ou manutenção de pastagens e cultivo de soja, milho e outros grãos para ração.', en: 'Concentrated animal production, pasture expansion or maintenance, and feed crops such as soy and maize.'} },
      { type: {pt: 'Pressão ambiental', en: 'Environmental pressure'}, desc: {pt: 'Emissões de metano, esterco, fertilizantes da ração, desmatamento indireto e alto uso de terra por quilo de proteína.', en: 'Methane, manure, feed fertilizers, indirect deforestation, and high land use per kilogram of protein.'} },
      { type: {pt: 'Risco sistêmico', en: 'Systemic risk'}, desc: {pt: 'Perda de biodiversidade, degradação do solo, contaminação da água e maior vulnerabilidade climática na cadeia alimentar.', en: 'Biodiversity loss, soil degradation, water pollution, and higher climate vulnerability across the food chain.'} }
    ],
    charts: [
      { label: {pt: 'Emissões climáticas', en: 'Climate emissions'}, value: 95 },
      { label: {pt: 'Uso de terra', en: 'Land use'}, value: 92 },
      { label: {pt: 'Pressão hídrica', en: 'Water pressure'}, value: 78 },
      { label: {pt: 'Risco à biodiversidade', en: 'Biodiversity risk'}, value: 88 }
    ],
    glossary: [
      { term: {pt: 'Fermentação entérica', en: 'Enteric fermentation'}, def: {pt: 'Processo digestivo de ruminantes que libera metano, um gás de efeito estufa relevante para o aquecimento no curto prazo.', en: 'Digestive process in ruminants that releases methane, a greenhouse gas relevant to short-term warming.'} },
      { term: {pt: 'Mudança de uso da terra', en: 'Land-use change'}, def: {pt: 'Conversão de vegetação nativa em pasto ou lavoura, com perda de carbono estocado e habitat.', en: 'Conversion of native vegetation into pasture or cropland, reducing stored carbon and habitat.'} },
      { term: {pt: 'Pegada hídrica', en: 'Water footprint'}, def: {pt: 'Volume de água associado à produção, incluindo água de chuva, irrigação e água usada no processamento.', en: 'Water volume linked to production, including rainwater, irrigation, and processing water.'} }
    ],
    sources: {pt: 'Fontes principais', en: 'Main sources'},
    sourceLinks: [
      { label: 'FAO - livestock supply chains and 14.5% GHG estimate', url: 'https://www.fao.org/newsroom/detail/Major-cuts-of-greenhouse-gas-emissions-from-livestock-within-reach/es' },
      { label: 'FAO - livestock and enteric methane', url: 'https://www.fao.org/in-action/enteric-methane/en' },
      { label: 'Our World in Data - environmental impacts of food', url: 'https://ourworldindata.org/environmental-impacts-of-food' },
      { label: 'IPCC AR6 WGIII - food systems mitigation', url: 'https://www.ipcc.ch/report/ar6/wg3/chapter/technical-summary/' }
    ]
  },
  {
    id: 'monocultura',
    name: { pt: 'Monocultura de Grãos', en: 'Mass Monoculture' },
    accent: '#D4AF37',
    accentDim: 'rgba(212, 175, 55, 0.15)',
    accentGlow: 'rgba(212, 175, 55, 0.35)',
    supertitle: { pt: 'EFICIÊNCIA E EXAUSTÃO &nbsp;|&nbsp; GRÃOS EM ESCALA', en: 'EFFICIENCY AND EXHAUSTION &nbsp;|&nbsp; GRAIN AT SCALE' },
    title: { pt: 'MONOCULTURAS<br/>EM MASSA', en: 'MASS<br/>MONOCULTURES' },
    heroImage: 'img/monocultura-massa.svg',
    impactRaw1: 3.7,
    impactRaw2: 33,
    impactDecimals1: 1,
    impactDecimals2: 0,
    impactSuffix1: 'Mt',
    impactSuffix2: '%',
    impactLabel1: { pt: 'PESTICIDAS 2022', en: 'PESTICIDES 2022' },
    impactLabel2: { pt: 'SOLOS DEGRADADOS', en: 'DEGRADED SOILS' },
    intro: {
      pt: 'Monoculturas aumentam produtividade e abastecem cadeias globais, mas quando dependem de pouca diversidade biológica, preparo intenso do solo, fertilizantes e pesticidas, podem acelerar erosão, compactação, contaminação de água e perda de polinizadores. A FAO registrou 3,70 milhões de toneladas de ingredientes ativos de pesticidas usados na agricultura em 2022, e também aponta que cerca de um terço dos solos do mundo já está moderada ou altamente degradado.',
      en: 'Monocultures raise productivity and feed global supply chains, but when they depend on low biological diversity, intensive tillage, fertilizers, and pesticides, they can accelerate erosion, compaction, water contamination, and pollinator loss. FAO reported 3.70 million tonnes of pesticide active ingredients used in agriculture in 2022 and notes that roughly one third of the world’s soils are already moderately to highly degraded.'
    },
    insights: [
      { label: { pt: 'Solo', en: 'Soil' }, text: { pt: 'Solo exposto perde matéria orgânica, infiltra menos água e fica mais vulnerável à erosão.', en: 'Exposed soil loses organic matter, absorbs less water, and becomes more vulnerable to erosion.' } },
      { label: { pt: 'Água', en: 'Water' }, text: { pt: 'Nutrientes e defensivos podem escoar para rios, ampliando eutrofização e toxicidade.', en: 'Nutrients and pesticides can run off into rivers, increasing eutrophication and toxicity.' } },
      { label: { pt: 'Transição', en: 'Transition' }, text: { pt: 'Rotação de culturas, plantio direto, cobertura vegetal e manejo integrado reduzem a pressão.', en: 'Crop rotation, no-till, cover crops, and integrated pest management reduce pressure.' } }
    ],
    mechanism: [
      { type: {pt: 'Produção', en: 'Production'}, desc: {pt: 'Grandes áreas com uma cultura dominante, geralmente soja, milho, trigo ou arroz, buscando padronização e alto rendimento.', en: 'Large areas with one dominant crop, often soy, maize, wheat, or rice, pursuing standardization and high yield.'} },
      { type: {pt: 'Dependência', en: 'Dependency'}, desc: {pt: 'Baixa diversidade aumenta vulnerabilidade a pragas, exigindo mais controle químico e reposição artificial de nutrientes.', en: 'Low diversity increases pest vulnerability, often requiring more chemical control and artificial nutrient replacement.'} },
      { type: {pt: 'Efeito acumulado', en: 'Accumulated effect'}, desc: {pt: 'Perda de solo fértil, poluição difusa, queda de biodiversidade funcional e menor resiliência a seca e calor extremo.', en: 'Loss of fertile soil, diffuse pollution, functional biodiversity decline, and lower resilience to drought and heat.'} }
    ],
    charts: [
      { label: {pt: 'Pressão no solo', en: 'Soil pressure'}, value: 86 },
      { label: {pt: 'Uso de agroquímicos', en: 'Agrochemical use'}, value: 82 },
      { label: {pt: 'Risco hídrico', en: 'Water risk'}, value: 70 },
      { label: {pt: 'Diversidade biológica', en: 'Biological diversity'}, value: 76 }
    ],
    glossary: [
      { term: {pt: 'Eutrofização', en: 'Eutrophication'}, def: {pt: 'Excesso de nutrientes em rios e lagos, frequentemente ligado a fertilizantes, que favorece algas e reduz oxigênio na água.', en: 'Excess nutrients in rivers and lakes, often linked to fertilizers, that favor algal growth and reduce oxygen.'} },
      { term: {pt: 'Manejo integrado de pragas', en: 'Integrated pest management'}, def: {pt: 'Uso combinado de monitoramento, controle biológico, rotação, variedades resistentes e defensivos apenas quando necessários.', en: 'Combined use of monitoring, biological control, rotation, resistant varieties, and pesticides only when needed.'} },
      { term: {pt: 'Plantio direto', en: 'No-till farming'}, def: {pt: 'Sistema que reduz revolvimento do solo e mantém cobertura vegetal para preservar estrutura, água e matéria orgânica.', en: 'System that reduces soil disturbance and keeps cover to protect structure, water, and organic matter.'} }
    ],
    sources: {pt: 'Fontes principais', en: 'Main sources'},
    sourceLinks: [
      { label: 'FAO - pesticides use and trade 1990-2022', url: 'https://www.fao.org/statistics/highlights-archive/highlights-detail/pesticides-use-and-trade-1990-2022/en' },
      { label: 'FAO - soil degradation and endangered soils', url: 'https://www.fao.org/newsroom/detail/Soils-are-endangered-but-the-degradation-can-be-rolled-back/en' },
      { label: 'FAO - conservation agriculture principles', url: 'https://www.fao.org/conservation-agriculture/overview/what-is-conservation-agriculture/en/' },
      { label: 'IPBES - biodiversity global assessment', url: 'https://www.ipbes.net/global-assessment' }
    ]
  },
  {
    id: 'regenerativa',
    name: { pt: 'Agricultura Vertical', en: 'Vertical Farming' },
    accent: '#00E5FF',
    accentDim: 'rgba(0, 229, 255, 0.15)',
    accentGlow: 'rgba(0, 229, 255, 0.35)',
    supertitle: { pt: 'PRODUÇÃO CONTROLADA &nbsp;|&nbsp; CIDADES E TECNOLOGIA', en: 'CONTROLLED PRODUCTION &nbsp;|&nbsp; CITIES AND TECHNOLOGY' },
    title: { pt: 'AGRICULTURA<br/>VERTICAL', en: 'VERTICAL<br/>FARMING' },
    heroImage: 'img/agricultura-vertical.svg',
    impactRaw1: -95,
    impactRaw2: 0,
    impactDecimals1: 0,
    impactDecimals2: 0,
    impactSuffix1: '%',
    impactSuffix2: '',
    impactLabel1: { pt: 'ÁGUA EM ALGUNS SISTEMAS', en: 'WATER IN SOME SYSTEMS' },
    impactLabel2: { pt: 'PESTICIDAS', en: 'PESTICIDES' },
    intro: {
      pt: 'A agricultura vertical e outros sistemas de ambiente controlado podem produzir folhas, ervas e alguns frutos perto do consumo, com uso muito baixo de solo e forte economia de água em sistemas hidropônicos ou aeropônicos. O ponto crítico é energia: iluminação, climatização e equipamentos podem anular benefícios se a eletricidade vier de fontes intensivas em carbono ou se o cultivo tentar substituir alimentos básicos de campo aberto.',
      en: 'Vertical farming and other controlled-environment systems can produce greens, herbs, and some fruits close to consumers, using very little land and saving water in hydroponic or aeroponic systems. The critical point is energy: lighting, climate control, and equipment can offset benefits if electricity is carbon-intensive or if the system tries to replace open-field staple crops.'
    },
    insights: [
      { label: { pt: 'Água', en: 'Water' }, text: { pt: 'Sistemas fechados recirculam nutrientes e podem reduzir perdas por evaporação e escoamento.', en: 'Closed systems recirculate nutrients and can reduce evaporation and runoff losses.' } },
      { label: { pt: 'Limite', en: 'Limit' }, text: { pt: 'O consumo elétrico é o principal gargalo ambiental e econômico.', en: 'Electricity demand is the main environmental and economic bottleneck.' } },
      { label: { pt: 'Melhor uso', en: 'Best use' }, text: { pt: 'Funciona melhor para culturas frescas de alto valor, cadeias curtas e energia limpa.', en: 'Works best for fresh high-value crops, short chains, and clean energy.' } }
    ],
    mechanism: [
      { type: {pt: 'Produção', en: 'Production'}, desc: {pt: 'Cultivo em camadas, ambiente fechado, iluminação LED, sensores, hidroponia ou aeroponia e clima controlado.', en: 'Stacked cultivation, enclosed environment, LED lighting, sensors, hydroponics or aeroponics, and controlled climate.'} },
      { type: {pt: 'Vantagem direta', en: 'Direct advantage'}, desc: {pt: 'Menor uso de terra, água recirculada, baixa pressão de pesticidas e produção próxima a mercados urbanos.', en: 'Lower land use, recirculated water, low pesticide pressure, and production close to urban markets.'} },
      { type: {pt: 'Trade-off', en: 'Trade-off'}, desc: {pt: 'A pegada final depende da matriz elétrica, eficiência dos LEDs, climatização, materiais e tipo de alimento cultivado.', en: 'The final footprint depends on electricity mix, LED efficiency, climate control, materials, and crop type.'} }
    ],
    charts: [
      { label: {pt: 'Uso de terra', en: 'Land use'}, value: 12 },
      { label: {pt: 'Uso de água', en: 'Water use'}, value: 18 },
      { label: {pt: 'Uso de pesticidas', en: 'Pesticide use'}, value: 8 },
      { label: {pt: 'Demanda de energia', en: 'Energy demand'}, value: 74 }
    ],
    glossary: [
      { term: {pt: 'Hidroponia', en: 'Hydroponics'}, def: {pt: 'Cultivo sem solo em solução nutritiva, permitindo recirculação e controle preciso de água e nutrientes.', en: 'Soilless cultivation in nutrient solution, enabling recirculation and precise water and nutrient control.'} },
      { term: {pt: 'CEA', en: 'CEA'}, def: {pt: 'Controlled Environment Agriculture: produção em ambiente controlado por engenharia, sensores e automação.', en: 'Controlled Environment Agriculture: production in an engineered environment with sensors and automation.'} },
      { term: {pt: 'Energia incorporada', en: 'Embodied energy'}, def: {pt: 'Energia associada à fabricação, transporte e manutenção de equipamentos, estruturas e materiais.', en: 'Energy linked to manufacturing, transport, and maintenance of equipment, structures, and materials.'} }
    ],
    sources: {pt: 'Fontes principais', en: 'Main sources'},
    sourceLinks: [
      { label: 'USDA - vertical farming for the future', url: 'https://www.usda.gov/about-usda/news/blog/vertical-farming-future' },
      { label: 'Agronomy - Vertical Farming: The Only Way Is Up?', url: 'https://www.mdpi.com/2073-4395/12/1/2' },
      { label: 'Journal of Cleaner Production - energy trade-offs of vertical farms', url: 'https://www.sciencedirect.com/science/article/pii/S0959652624018079' },
      { label: 'Agronomy for Sustainable Development - vertical farming review', url: 'https://link.springer.com/10.1007/s13593-025-01055-w' }
    ]
  }
];

THEMES.splice(0, THEMES.length, ...CORRECTED_THEMES);

const ADDITIONAL_THEMES = [
  {
    id: 'organica',
    name: { pt: 'Agricultura Orgânica', en: 'Organic Agriculture' },
    accent: '#7ED957',
    accentDim: 'rgba(126, 217, 87, 0.15)',
    accentGlow: 'rgba(126, 217, 87, 0.35)',
    supertitle: { pt: 'SOLO VIVO &nbsp;|&nbsp; MENOS INSUMOS SINTÉTICOS', en: 'LIVING SOIL &nbsp;|&nbsp; FEWER SYNTHETIC INPUTS' },
    title: { pt: 'AGRICULTURA<br/>ORGÂNICA', en: 'ORGANIC<br/>AGRICULTURE' },
    heroImage: 'img/organica.svg',
    impactRaw1: 0,
    impactRaw2: 65,
    impactDecimals1: 0,
    impactDecimals2: 0,
    impactSuffix1: '',
    impactSuffix2: '%',
    impactLabel1: { pt: 'FERTILIZANTE SINTÉTICO', en: 'SYNTHETIC FERTILIZER' },
    impactLabel2: { pt: 'FOCO EM SOLO', en: 'SOIL FOCUS' },
    intro: {
      pt: 'A produção orgânica evita fertilizantes e pesticidas sintéticos, prioriza ciclos biológicos, matéria orgânica e saúde do agroecossistema. Seus ganhos ambientais aparecem em biodiversidade, qualidade do solo e menor exposição química; seus limites aparecem quando a produtividade por área cai e exige mais terra para a mesma produção.',
      en: 'Organic production avoids synthetic fertilizers and pesticides, prioritizing biological cycles, organic matter, and agroecosystem health. Its environmental gains appear in biodiversity, soil quality, and lower chemical exposure; its limits appear when yield per area falls and requires more land for the same output.'
    },
    insights: [
      { label: { pt: 'Benefício', en: 'Benefit' }, text: { pt: 'Reduz dependência de insumos sintéticos e fortalece atividade biológica do solo.', en: 'Reduces reliance on synthetic inputs and strengthens soil biological activity.' } },
      { label: { pt: 'Limite', en: 'Limit' }, text: { pt: 'Pode demandar mais área quando a produtividade é menor que sistemas convencionais.', en: 'May require more land when yields are lower than conventional systems.' } },
      { label: { pt: 'Condição', en: 'Condition' }, text: { pt: 'Funciona melhor com rotação, compostagem, diversidade e controle biológico bem planejados.', en: 'Works best with rotation, composting, diversity, and planned biological control.' } }
    ],
    mechanism: [
      { type: {pt: 'Produção', en: 'Production'}, desc: {pt: 'Cultivo sem insumos sintéticos de alta solubilidade, com adubação orgânica, rotação e manejo preventivo de pragas.', en: 'Cultivation without highly soluble synthetic inputs, using organic fertilization, rotation, and preventive pest management.'} },
      { type: {pt: 'Impacto positivo', en: 'Positive impact'}, desc: {pt: 'Mais matéria orgânica, maior vida no solo e menor risco de resíduos químicos persistentes.', en: 'More organic matter, richer soil life, and lower risk of persistent chemical residues.'} },
      { type: {pt: 'Trade-off', en: 'Trade-off'}, desc: {pt: 'Se a produtividade cair muito, a pressão por expansão de área pode compensar parte dos ganhos.', en: 'If yields fall too much, land expansion pressure can offset part of the gains.'} }
    ],
    charts: [
      { label: {pt: 'Saúde do solo', en: 'Soil health'}, value: 82 },
      { label: {pt: 'Uso químico sintético', en: 'Synthetic chemical use'}, value: 18 },
      { label: {pt: 'Pressão por área', en: 'Land pressure'}, value: 55 },
      { label: {pt: 'Biodiversidade na área', en: 'On-farm biodiversity'}, value: 78 }
    ],
    glossary: [
      { term: {pt: 'Agroecossistema', en: 'Agroecosystem'}, def: {pt: 'Sistema formado por cultivo, solo, água, organismos, clima e manejo humano.', en: 'System formed by crops, soil, water, organisms, climate, and human management.'} },
      { term: {pt: 'Adubação orgânica', en: 'Organic fertilization'}, def: {pt: 'Uso de composto, esterco tratado, resíduos vegetais e bioinsumos para nutrir solo e plantas.', en: 'Use of compost, treated manure, plant residues, and bioinputs to nourish soil and plants.'} },
      { term: {pt: 'Controle biológico', en: 'Biological control'}, def: {pt: 'Manejo de pragas por inimigos naturais, microrganismos ou equilíbrio ecológico.', en: 'Pest management through natural enemies, microorganisms, or ecological balance.'} }
    ],
    sources: {pt: 'Fontes principais', en: 'Main sources'},
    sourceLinks: [
      { label: 'FAO - organic agriculture and agro-ecosystem health', url: 'https://www.fao.org/platforms/green-agriculture/areas-of-work/natural-resources-biodiversity-green-production/organic-agriculture/en' },
      { label: 'FAO - organic agriculture benefits for climate and biodiversity', url: 'https://www.fao.org/family-farming/detail/es/c/1607504/' },
      { label: 'Our World in Data - food impacts and land trade-offs', url: 'https://ourworldindata.org/environmental-impacts-of-food' }
    ]
  },
  {
    id: 'regenerativa-campo',
    name: { pt: 'Regenerativa e Agroecologia', en: 'Regenerative and Agroecology' },
    accent: '#2DD4BF',
    accentDim: 'rgba(45, 212, 191, 0.15)',
    accentGlow: 'rgba(45, 212, 191, 0.35)',
    supertitle: { pt: 'RESTAURAR PRODUZINDO &nbsp;|&nbsp; SOLO, ÁGUA E BIODIVERSIDADE', en: 'RESTORE WHILE PRODUCING &nbsp;|&nbsp; SOIL, WATER AND BIODIVERSITY' },
    title: { pt: 'AGRICULTURA<br/>REGENERATIVA', en: 'REGENERATIVE<br/>FARMING' },
    heroImage: 'img/regenerativa-campo.svg',
    impactRaw1: 33,
    impactRaw2: 90,
    impactDecimals1: 0,
    impactDecimals2: 0,
    impactSuffix1: '%',
    impactSuffix2: '%',
    impactLabel1: { pt: 'SOLOS DEGRADADOS', en: 'DEGRADED SOILS' },
    impactLabel2: { pt: 'POTENCIAL DE RESTAURAÇÃO', en: 'RESTORATION FOCUS' },
    intro: {
      pt: 'Sistemas regenerativos e agroecológicos buscam produzir enquanto recuperam funções ecológicas: cobertura permanente do solo, diversidade de culturas, integração animal-vegetal, menor revolvimento e ciclagem de nutrientes. O impacto depende da qualidade do manejo, mas a direção é reduzir erosão, aumentar infiltração de água, reter carbono no solo e fortalecer biodiversidade funcional.',
      en: 'Regenerative and agroecological systems aim to produce while restoring ecological functions: permanent soil cover, crop diversity, crop-livestock integration, lower disturbance, and nutrient cycling. Impact depends on management quality, but the direction is to reduce erosion, increase water infiltration, retain soil carbon, and strengthen functional biodiversity.'
    },
    insights: [
      { label: { pt: 'Solo', en: 'Soil' }, text: { pt: 'Cobertura e raízes vivas protegem contra erosão e alimentam microrganismos.', en: 'Cover and living roots protect against erosion and feed microorganisms.' } },
      { label: { pt: 'Clima', en: 'Climate' }, text: { pt: 'Pode reduzir emissões e aumentar carbono no solo, mas resultados variam por clima e manejo.', en: 'Can reduce emissions and increase soil carbon, but results vary by climate and management.' } },
      { label: { pt: 'Sistema', en: 'System' }, text: { pt: 'Não é uma técnica isolada; depende de desenho produtivo e monitoramento contínuo.', en: 'It is not a single technique; it depends on productive design and continuous monitoring.' } }
    ],
    mechanism: [
      { type: {pt: 'Produção', en: 'Production'}, desc: {pt: 'Rotação, consórcios, cobertura vegetal, compostagem, pastejo planejado e menor dependência de insumos externos.', en: 'Rotation, intercropping, cover crops, composting, planned grazing, and lower reliance on external inputs.'} },
      { type: {pt: 'Regeneração', en: 'Regeneration'}, desc: {pt: 'Mais raízes, carbono e organismos no solo aumentam infiltração, fertilidade e resistência a extremos climáticos.', en: 'More roots, carbon, and organisms in the soil increase infiltration, fertility, and resistance to climate extremes.'} },
      { type: {pt: 'Cuidado', en: 'Caution'}, desc: {pt: 'Sem métricas e manejo adequado, o termo pode virar promessa genérica sem ganho ambiental comprovado.', en: 'Without metrics and proper management, the term can become a generic promise without proven environmental gain.'} }
    ],
    charts: [
      { label: {pt: 'Restauração do solo', en: 'Soil restoration'}, value: 90 },
      { label: {pt: 'Retenção de água', en: 'Water retention'}, value: 82 },
      { label: {pt: 'Dependência de insumos', en: 'Input dependency'}, value: 36 },
      { label: {pt: 'Complexidade de manejo', en: 'Management complexity'}, value: 78 }
    ],
    glossary: [
      { term: {pt: 'Plantas de cobertura', en: 'Cover crops'}, def: {pt: 'Cultivos usados para proteger e alimentar o solo entre safras comerciais.', en: 'Crops used to protect and feed the soil between commercial harvests.'} },
      { term: {pt: 'Ciclagem de nutrientes', en: 'Nutrient cycling'}, def: {pt: 'Retorno de nutrientes ao sistema por resíduos vegetais, esterco, compostagem e atividade biológica.', en: 'Return of nutrients to the system through residues, manure, composting, and biological activity.'} },
      { term: {pt: 'Carbono no solo', en: 'Soil carbon'}, def: {pt: 'Carbono armazenado na matéria orgânica, importante para fertilidade, estrutura e clima.', en: 'Carbon stored in organic matter, important for fertility, structure, and climate.'} }
    ],
    sources: {pt: 'Fontes principais', en: 'Main sources'},
    sourceLinks: [
      { label: 'FAO - conservation agriculture', url: 'https://www.fao.org/conservation-agriculture/overview/what-is-conservation-agriculture/en/' },
      { label: 'FAO - soils are endangered', url: 'https://www.fao.org/newsroom/detail/Soils-are-endangered-but-the-degradation-can-be-rolled-back/en' },
      { label: 'IPCC AR6 WGIII - AFOLU mitigation', url: 'https://www.ipcc.ch/report/ar6/wg3/chapter/chapter-7/' }
    ]
  },
  {
    id: 'irrigada',
    name: { pt: 'Agricultura Irrigada', en: 'Irrigated Agriculture' },
    accent: '#38BDF8',
    accentDim: 'rgba(56, 189, 248, 0.15)',
    accentGlow: 'rgba(56, 189, 248, 0.35)',
    supertitle: { pt: 'ÁGUA COMO INSUMO &nbsp;|&nbsp; PRODUTIVIDADE E ESCASSEZ', en: 'WATER AS INPUT &nbsp;|&nbsp; PRODUCTIVITY AND SCARCITY' },
    title: { pt: 'AGRICULTURA<br/>IRRIGADA', en: 'IRRIGATED<br/>AGRICULTURE' },
    heroImage: 'img/irrigada.svg',
    impactRaw1: 70,
    impactRaw2: 30,
    impactDecimals1: 0,
    impactDecimals2: 0,
    impactSuffix1: '%',
    impactSuffix2: '%',
    impactLabel1: { pt: 'RETIRADAS DE ÁGUA', en: 'WATER WITHDRAWALS' },
    impactLabel2: { pt: 'ÁGUA IRRIGADA SUBTERRÂNEA', en: 'GROUNDWATER IRRIGATION' },
    intro: {
      pt: 'A irrigação sustenta alta produtividade e estabiliza safras, mas concentra uma das maiores pressões ambientais da alimentação: retirada de água superficial e subterrânea. A FAO aponta que a agricultura responde por cerca de 70% das retiradas globais de água doce; quando mal manejada, a irrigação pode causar salinização, esgotamento de aquíferos e conflito pelo uso da água.',
      en: 'Irrigation supports high productivity and stabilizes harvests, but concentrates one of food production’s largest environmental pressures: surface and groundwater withdrawal. FAO notes that agriculture accounts for about 70% of global freshwater withdrawals; when poorly managed, irrigation can cause salinization, aquifer depletion, and conflict over water use.'
    },
    insights: [
      { label: { pt: 'Produtividade', en: 'Productivity' }, text: { pt: 'Permite produzir em períodos secos e reduzir risco de quebra de safra.', en: 'Enables production in dry periods and reduces crop failure risk.' } },
      { label: { pt: 'Risco', en: 'Risk' }, text: { pt: 'Retiradas acima da recarga reduzem rios, aquíferos e serviços ecossistêmicos.', en: 'Withdrawals above recharge reduce rivers, aquifers, and ecosystem services.' } },
      { label: { pt: 'Solução', en: 'Solution' }, text: { pt: 'Gotejamento, sensores, reuso, manejo por evapotranspiração e culturas adequadas ajudam.', en: 'Drip irrigation, sensors, reuse, evapotranspiration-based management, and suitable crops help.' } }
    ],
    mechanism: [
      { type: {pt: 'Produção', en: 'Production'}, desc: {pt: 'Aplicação artificial de água por pivôs, canais, aspersão, inundação ou gotejamento.', en: 'Artificial water application through pivots, canals, sprinklers, flood irrigation, or drip systems.'} },
      { type: {pt: 'Pressão', en: 'Pressure'}, desc: {pt: 'Captação excessiva reduz vazões, seca aquíferos, concentra sais e pode degradar solos.', en: 'Excessive abstraction reduces flows, dries aquifers, concentrates salts, and can degrade soils.'} },
      { type: {pt: 'Eficiência', en: 'Efficiency'}, desc: {pt: 'A eficiência real depende de clima, solo, cultura, tecnologia, governança e preço da água.', en: 'Real efficiency depends on climate, soil, crop, technology, governance, and water price.'} }
    ],
    charts: [
      { label: {pt: 'Pressão hídrica', en: 'Water pressure'}, value: 92 },
      { label: {pt: 'Produtividade', en: 'Productivity'}, value: 84 },
      { label: {pt: 'Risco de salinização', en: 'Salinization risk'}, value: 64 },
      { label: {pt: 'Potencial de eficiência', en: 'Efficiency potential'}, value: 74 }
    ],
    glossary: [
      { term: {pt: 'Evapotranspiração', en: 'Evapotranspiration'}, def: {pt: 'Soma da água evaporada do solo e transpirada pelas plantas.', en: 'Sum of water evaporated from soil and transpired by plants.'} },
      { term: {pt: 'Salinização', en: 'Salinization'}, def: {pt: 'Acúmulo de sais no solo, comum quando irrigação e drenagem são mal manejadas.', en: 'Salt accumulation in soil, common when irrigation and drainage are poorly managed.'} },
      { term: {pt: 'Aquífero', en: 'Aquifer'}, def: {pt: 'Reserva subterrânea de água que pode ser recarregada lentamente.', en: 'Underground water reserve that may recharge slowly.'} }
    ],
    sources: {pt: 'Fontes principais', en: 'Main sources'},
    sourceLinks: [
      { label: 'FAO - water for sustainable food production', url: 'https://www.fao.org/4/y4525e/y4525e05.htm' },
      { label: 'FAO - groundwater and agriculture', url: 'https://www.fao.org/newsroom/story/Groundwater-Making-the-invisible-visible/en' },
      { label: 'FAO SOLAW - land and water resources', url: 'https://openknowledge.fao.org/3/cb9910en/cb9910en.pdf' }
    ]
  },
  {
    id: 'agrofloresta',
    name: { pt: 'Agroflorestas', en: 'Agroforestry' },
    accent: '#22C55E',
    accentDim: 'rgba(34, 197, 94, 0.15)',
    accentGlow: 'rgba(34, 197, 94, 0.35)',
    supertitle: { pt: 'ÁRVORES E ALIMENTO &nbsp;|&nbsp; PRODUÇÃO EM MOSAICO', en: 'TREES AND FOOD &nbsp;|&nbsp; MOSAIC PRODUCTION' },
    title: { pt: 'SISTEMAS<br/>AGROFLORESTAIS', en: 'AGROFORESTRY<br/>SYSTEMS' },
    heroImage: 'img/agrofloresta.svg',
    impactRaw1: 80,
    impactRaw2: 80,
    impactDecimals1: 0,
    impactDecimals2: 0,
    impactSuffix1: '%',
    impactSuffix2: '%',
    impactLabel1: { pt: 'BIODIVERSIDADE POTENCIAL', en: 'POTENTIAL BIODIVERSITY' },
    impactLabel2: { pt: 'COBERTURA E RESILIÊNCIA', en: 'COVER AND RESILIENCE' },
    intro: {
      pt: 'Agroflorestas integram árvores, cultivos e às vezes animais no mesmo território. A FAO destaca benefícios como saúde do solo, manejo da água, conservação de recursos, biodiversidade e restauração de terras degradadas. Elas não substituem todos os cultivos em larga escala, mas são uma das formas mais fortes de conciliar produção, habitat e adaptação climática.',
      en: 'Agroforestry integrates trees, crops, and sometimes animals in the same landscape. FAO highlights benefits such as soil health, water management, resource conservation, biodiversity, and degraded land restoration. It does not replace every large-scale crop, but is one of the strongest ways to combine production, habitat, and climate adaptation.'
    },
    insights: [
      { label: { pt: 'Biodiversidade', en: 'Biodiversity' }, text: { pt: 'Estrutura com árvores cria sombra, abrigo, alimento e corredores ecológicos.', en: 'Tree structure creates shade, shelter, food, and ecological corridors.' } },
      { label: { pt: 'Água', en: 'Water' }, text: { pt: 'Raízes e serrapilheira aumentam infiltração e reduzem escoamento e erosão.', en: 'Roots and leaf litter increase infiltration and reduce runoff and erosion.' } },
      { label: { pt: 'Limite', en: 'Limit' }, text: { pt: 'Exige conhecimento local, tempo de implantação e mercados para produtos diversos.', en: 'Requires local knowledge, establishment time, and markets for diverse products.' } }
    ],
    mechanism: [
      { type: {pt: 'Produção', en: 'Production'}, desc: {pt: 'Combinação planejada de árvores, frutíferas, culturas anuais, perenes e, em alguns casos, animais.', en: 'Planned combination of trees, fruit species, annual crops, perennials, and sometimes animals.'} },
      { type: {pt: 'Serviço ambiental', en: 'Environmental service'}, desc: {pt: 'Sombra, raízes profundas e matéria orgânica ajudam a regular microclima, água e nutrientes.', en: 'Shade, deep roots, and organic matter help regulate microclimate, water, and nutrients.'} },
      { type: {pt: 'Resultado', en: 'Outcome'}, desc: {pt: 'Maior resiliência e diversidade de renda, com menor erosão e melhor habitat em áreas produtivas.', en: 'Greater resilience and income diversity, with less erosion and better habitat in productive areas.'} }
    ],
    charts: [
      { label: {pt: 'Biodiversidade', en: 'Biodiversity'}, value: 92 },
      { label: {pt: 'Carbono e sombra', en: 'Carbon and shade'}, value: 86 },
      { label: {pt: 'Erosão do solo', en: 'Soil erosion'}, value: 22 },
      { label: {pt: 'Complexidade técnica', en: 'Technical complexity'}, value: 80 }
    ],
    glossary: [
      { term: {pt: 'Serrapilheira', en: 'Leaf litter'}, def: {pt: 'Camada de folhas, galhos e resíduos orgânicos que protege e alimenta o solo.', en: 'Layer of leaves, branches, and organic residues that protects and feeds the soil.'} },
      { term: {pt: 'Estratificação', en: 'Stratification'}, def: {pt: 'Organização de espécies em diferentes alturas, como em uma floresta.', en: 'Organization of species at different heights, as in a forest.'} },
      { term: {pt: 'Corredor ecológico', en: 'Ecological corridor'}, def: {pt: 'Área que conecta habitats e facilita movimento de fauna e fluxo genético.', en: 'Area that connects habitats and enables wildlife movement and genetic flow.'} }
    ],
    sources: {pt: 'Fontes principais', en: 'Main sources'},
    sourceLinks: [
      { label: 'FAO - agroforestry FAQs', url: 'https://www.fao.org/agroforestry/about-agroforestry/faqs/en' },
      { label: 'FAO - agroforestry systems and biodiversity', url: 'https://www.fao.org/agroforestry/en/' },
      { label: 'FAO - crops and trees for One Health', url: 'https://www.fao.org/one-health/highlights/crops-and-trees' }
    ]
  },
  {
    id: 'aquatica',
    name: { pt: 'Pesca e Aquicultura', en: 'Fisheries and Aquaculture' },
    accent: '#60A5FA',
    accentDim: 'rgba(96, 165, 250, 0.15)',
    accentGlow: 'rgba(96, 165, 250, 0.35)',
    supertitle: { pt: 'ALIMENTO AQUÁTICO &nbsp;|&nbsp; OCEANOS, RIOS E TANQUES', en: 'AQUATIC FOOD &nbsp;|&nbsp; OCEANS, RIVERS AND FARMS' },
    title: { pt: 'PESCA E<br/>AQUICULTURA', en: 'FISHERIES AND<br/>AQUACULTURE' },
    heroImage: 'img/aquatica.svg',
    impactRaw1: 15,
    impactRaw2: 4,
    impactDecimals1: 0,
    impactDecimals2: 0,
    impactSuffix1: '%',
    impactSuffix2: 'bi+',
    impactLabel1: { pt: 'PROTEÍNA ANIMAL GLOBAL', en: 'GLOBAL ANIMAL PROTEIN' },
    impactLabel2: { pt: 'PESSOAS BENEFICIADAS', en: 'PEOPLE BENEFITED' },
    intro: {
      pt: 'Pesca e aquicultura fornecem proteína essencial para bilhões de pessoas, mas têm impactos próprios: sobrepesca, captura acidental, alteração de habitats, nutrientes e resíduos em tanques ou gaiolas, uso de ração e risco de escapes. Quando bem manejada, a aquicultura pode aliviar pressão sobre estoques selvagens e produzir com boa eficiência alimentar.',
      en: 'Fisheries and aquaculture provide essential protein for billions of people, but have their own impacts: overfishing, bycatch, habitat disturbance, nutrients and waste from ponds or cages, feed use, and escape risks. When well managed, aquaculture can relieve pressure on wild stocks and produce with good feed efficiency.'
    },
    insights: [
      { label: { pt: 'Pesca', en: 'Fisheries' }, text: { pt: 'O risco central é capturar acima da reposição natural e afetar espécies não alvo.', en: 'The central risk is harvesting beyond natural replenishment and affecting non-target species.' } },
      { label: { pt: 'Aquicultura', en: 'Aquaculture' }, text: { pt: 'Impactos dependem de espécie, ração, densidade, localização e tratamento de efluentes.', en: 'Impacts depend on species, feed, density, location, and effluent treatment.' } },
      { label: { pt: 'Boa prática', en: 'Good practice' }, text: { pt: 'Zoneamento, limites de biomassa, monitoramento e sistemas multitróficos reduzem pressão.', en: 'Zoning, biomass limits, monitoring, and integrated multitrophic systems reduce pressure.' } }
    ],
    mechanism: [
      { type: {pt: 'Produção', en: 'Production'}, desc: {pt: 'Captura de estoques naturais ou criação de peixes, moluscos, crustáceos e algas em ambientes controlados.', en: 'Harvesting wild stocks or farming fish, mollusks, crustaceans, and seaweeds in managed environments.'} },
      { type: {pt: 'Impacto', en: 'Impact'}, desc: {pt: 'Pode haver pressão sobre estoques, fundo marinho, qualidade da água e espécies nativas.', en: 'Can pressure stocks, seafloor habitats, water quality, and native species.'} },
      { type: {pt: 'Mitigação', en: 'Mitigation'}, desc: {pt: 'Manejo científico de estoques, rastreabilidade e aquicultura bem localizada reduzem riscos.', en: 'Science-based stock management, traceability, and well-sited aquaculture reduce risks.'} }
    ],
    charts: [
      { label: {pt: 'Risco de sobrepesca', en: 'Overfishing risk'}, value: 76 },
      { label: {pt: 'Eficiência alimentar', en: 'Feed efficiency'}, value: 72 },
      { label: {pt: 'Risco de efluentes', en: 'Effluent risk'}, value: 58 },
      { label: {pt: 'Potencial de manejo', en: 'Management potential'}, value: 80 }
    ],
    glossary: [
      { term: {pt: 'Sobrepesca', en: 'Overfishing'}, def: {pt: 'Captura acima da capacidade de reposição natural de uma população.', en: 'Harvest above a population’s natural replenishment capacity.'} },
      { term: {pt: 'Captura acidental', en: 'Bycatch'}, def: {pt: 'Espécies capturadas sem serem o alvo principal da pescaria.', en: 'Species caught without being the target of the fishery.'} },
      { term: {pt: 'Aquicultura multitrófica', en: 'Multitrophic aquaculture'}, def: {pt: 'Sistema que combina espécies, como peixes, algas e moluscos, para reciclar nutrientes.', en: 'System combining species such as fish, seaweeds, and mollusks to recycle nutrients.'} }
    ],
    sources: {pt: 'Fontes principais', en: 'Main sources'},
    sourceLinks: [
      { label: 'FAO - fisheries and aquaculture, climate and protein', url: 'https://openknowledge.fao.org/3/a-i3569e.pdf' },
      { label: 'FAO - aquaculture environment and sustainability', url: 'https://www.fao.org/4/w7499e/w7499e14.htm' },
      { label: 'NOAA - nutrient impacts of finfish aquaculture', url: 'https://www.fisheries.noaa.gov/index.php/aquaculture/nutrient-impacts-finfish-aquaculture' }
    ]
  }
];

THEMES.push(...ADDITIONAL_THEMES);

const DEEP_DIVE_DATA = {
  pecuaria: {
    intro: {
      pt: 'A pecuária não é ambientalmente igual em todos os lugares: sistemas extensivos degradados, confinamentos, integração lavoura-pecuária e pastagens bem manejadas têm resultados muito diferentes. Ainda assim, carne bovina e laticínios concentram pressões altas por metano, terra, ração e mudança de uso da terra.',
      en: 'Livestock is not environmentally identical everywhere: degraded extensive systems, feedlots, crop-livestock integration, and well-managed pastures perform very differently. Still, beef and dairy concentrate high pressure through methane, land, feed, and land-use change.'
    },
    cards: [
      { label: { pt: 'Impactos críticos', en: 'Critical impacts' }, items: { pt: ['Metano da digestão de ruminantes e manejo de dejetos.', 'Pressão por pastagens e lavouras de ração, especialmente soja e milho.', 'Risco de desmatamento, perda de habitat e compactação de solos.', 'Uso de água e contaminação por nutrientes quando dejetos são mal manejados.'], en: ['Methane from ruminant digestion and manure management.', 'Pressure for pasture and feed crops such as soy and maize.', 'Deforestation risk, habitat loss, and soil compaction.', 'Water use and nutrient pollution when waste is poorly managed.'] } },
      { label: { pt: 'Caminhos de solução', en: 'Solution paths' }, items: { pt: ['Recuperação de pastagens degradadas e lotação ajustada à capacidade do solo.', 'Integração lavoura-pecuária-floresta e arborização de pastos.', 'Melhor dieta animal, genética, sanidade e manejo de esterco.', 'Redução de desperdício e consumo mais equilibrado de proteínas.'], en: ['Recovery of degraded pastures and stocking rates matched to soil capacity.', 'Crop-livestock-forestry integration and tree cover in pastures.', 'Better feed, genetics, animal health, and manure management.', 'Reduced waste and more balanced protein consumption.'] } },
      { label: { pt: 'Limites e controvérsias', en: 'Limits and debates' }, items: { pt: ['Pastos podem armazenar carbono, mas esse ganho não compensa automaticamente o metano.', 'A produtividade por hectare pode reduzir pressão por área, mas também intensificar dependência de ração.', 'O impacto real depende de origem da ração, desmatamento, manejo e tempo de análise climática.'], en: ['Pastures can store carbon, but this does not automatically offset methane.', 'Productivity per hectare can reduce land pressure, but may increase feed dependence.', 'Real impact depends on feed origin, deforestation, management, and climate time horizon.'] } },
      { label: { pt: 'Exemplo aplicado', en: 'Applied example' }, items: { pt: ['No Brasil, recuperar pastagens degradadas é uma das medidas mais importantes porque aumenta produção sem abrir novas áreas.', 'Sistemas integrados com árvores podem reduzir calor animal, melhorar solo e diversificar renda.', 'Rastreabilidade ajuda a separar produção regular de cadeias ligadas a desmatamento.'], en: ['In Brazil, restoring degraded pastures is one of the most important measures because it increases output without opening new land.', 'Integrated systems with trees can reduce heat stress, improve soil, and diversify income.', 'Traceability helps separate regular production from deforestation-linked chains.'] } }
    ]
  },
  monocultura: {
    intro: {
      pt: 'Monoculturas são eficientes para produzir grandes volumes, mas a simplificação ecológica cobra preço ambiental. O problema não é apenas cultivar uma espécie: é repetir o sistema com solo exposto, pouca rotação, baixa diversidade, fertilização excessiva e controle químico como resposta principal.',
      en: 'Monocultures efficiently produce large volumes, but ecological simplification has environmental costs. The issue is not only growing one species: it is repeating the system with exposed soil, little rotation, low diversity, excessive fertilization, and chemical control as the main response.'
    },
    cards: [
      { label: { pt: 'Impactos críticos', en: 'Critical impacts' }, items: { pt: ['Erosão e perda de matéria orgânica quando o solo fica descoberto.', 'Maior vulnerabilidade a pragas, doenças e eventos climáticos extremos.', 'Contaminação de água por fertilizantes, sedimentos e pesticidas.', 'Redução de polinizadores e biodiversidade funcional.'], en: ['Erosion and organic matter loss when soil stays bare.', 'Greater vulnerability to pests, diseases, and climate extremes.', 'Water contamination by fertilizers, sediments, and pesticides.', 'Reduction of pollinators and functional biodiversity.'] } },
      { label: { pt: 'Caminhos de solução', en: 'Solution paths' }, items: { pt: ['Rotação de culturas, consórcios e plantas de cobertura.', 'Plantio direto bem manejado e terraços em áreas suscetíveis à erosão.', 'Manejo integrado de pragas em vez de uso preventivo indiscriminado.', 'Aplicação precisa de fertilizantes com base em análise de solo.'], en: ['Crop rotation, intercropping, and cover crops.', 'Well-managed no-till and terraces in erosion-prone areas.', 'Integrated pest management rather than indiscriminate preventive use.', 'Precise fertilization based on soil testing.'] } },
      { label: { pt: 'Limites e controvérsias', en: 'Limits and debates' }, items: { pt: ['Alta produtividade pode poupar área, mas não garante baixo impacto local.', 'Plantio direto sem rotação real pode manter dependência química alta.', 'Biotecnologia pode reduzir algumas perdas, mas não substitui diversidade e manejo.'], en: ['High yield can spare land, but does not guarantee low local impact.', 'No-till without real rotation can maintain high chemical dependence.', 'Biotechnology can reduce some losses, but does not replace diversity and management.'] } },
      { label: { pt: 'Exemplo aplicado', en: 'Applied example' }, items: { pt: ['Soja e milho em larga escala podem reduzir impacto com rotação, cobertura e proteção de APPs.', 'Corredores ecológicos e áreas de vegetação nativa mantêm serviços de polinização e controle biológico.', 'Monitoramento de nutrientes evita excesso de nitrogênio e fósforo em bacias hidrográficas.'], en: ['Large-scale soy and maize can reduce impact with rotation, cover, and protected riparian areas.', 'Ecological corridors and native vegetation maintain pollination and biological control services.', 'Nutrient monitoring avoids excess nitrogen and phosphorus in watersheds.'] } }
    ]
  },
  regenerativa: {
    intro: {
      pt: 'A agricultura vertical resolve alguns gargalos de campo aberto, especialmente terra, água e pesticidas em culturas frescas. Mas ela troca parte desses impactos por energia, materiais, tecnologia e custo. É poderosa para folhas e ervas, não para substituir toda a produção alimentar.',
      en: 'Vertical farming solves some open-field bottlenecks, especially land, water, and pesticides for fresh crops. But it trades part of those impacts for energy, materials, technology, and cost. It is powerful for greens and herbs, not for replacing all food production.'
    },
    cards: [
      { label: { pt: 'Impactos críticos', en: 'Critical impacts' }, items: { pt: ['Demanda elétrica de LEDs, climatização, bombas e automação.', 'Uso de materiais, estruturas, sensores e equipamentos com energia incorporada.', 'Alto custo pode limitar acesso e escala social.', 'Pouca adequação para cereais, raízes e alimentos básicos de baixo valor por quilo.'], en: ['Electricity demand from LEDs, climate control, pumps, and automation.', 'Use of materials, structures, sensors, and equipment with embodied energy.', 'High cost can limit access and social scale.', 'Low suitability for grains, roots, and low-value staple foods.'] } },
      { label: { pt: 'Caminhos de solução', en: 'Solution paths' }, items: { pt: ['Energia renovável, recuperação de calor e LEDs mais eficientes.', 'Localização próxima ao consumo para reduzir perdas e transporte refrigerado.', 'Cultivo de espécies adequadas: folhas, ervas, mudas e produtos frescos de alto valor.', 'Reuso de água e nutrientes com monitoramento rigoroso.'], en: ['Renewable energy, heat recovery, and more efficient LEDs.', 'Location near consumers to reduce losses and refrigerated transport.', 'Suitable crops: greens, herbs, seedlings, and high-value fresh products.', 'Water and nutrient reuse with strict monitoring.'] } },
      { label: { pt: 'Limites e controvérsias', en: 'Limits and debates' }, items: { pt: ['Pode parecer sustentável visualmente, mas ser intensiva em carbono se a matriz elétrica for suja.', 'Não resolve sozinha segurança alimentar, pois foca culturas específicas.', 'A tecnologia reduz pragas, mas exige manutenção, capital e conhecimento técnico.'], en: ['It can look sustainable while being carbon-intensive if electricity is dirty.', 'It does not solve food security alone because it focuses on specific crops.', 'Technology reduces pests, but requires maintenance, capital, and technical knowledge.'] } },
      { label: { pt: 'Exemplo aplicado', en: 'Applied example' }, items: { pt: ['Funciona bem em centros urbanos para hortaliças sensíveis e produção próxima a restaurantes e mercados.', 'Pode complementar escolas, hospitais e redes locais quando energia e custo são bem planejados.', 'Também é útil para mudas de qualidade em cadeias agrícolas maiores.'], en: ['Works well in urban centers for delicate vegetables close to restaurants and markets.', 'Can complement schools, hospitals, and local networks when energy and cost are well planned.', 'It is also useful for high-quality seedlings in larger agricultural chains.'] } }
    ]
  },
  organica: {
    intro: {
      pt: 'A agricultura orgânica é importante porque muda a lógica do manejo: menos dependência de insumos sintéticos e mais foco em solo vivo, diversidade e ciclos naturais. Sua sustentabilidade aumenta quando produtividade, logística e acesso são planejados junto com os benefícios ecológicos.',
      en: 'Organic agriculture is important because it changes management logic: less dependence on synthetic inputs and more focus on living soil, diversity, and natural cycles. Its sustainability increases when yield, logistics, and access are planned together with ecological benefits.'
    },
    cards: [
      { label: { pt: 'Impactos críticos', en: 'Critical impacts' }, items: { pt: ['Se a produtividade cair muito, pode demandar mais área.', 'Insumos orgânicos mal manejados também podem emitir gases e contaminar água.', 'Controle de pragas pode ser difícil em regiões de alta pressão fitossanitária.'], en: ['If yields fall too much, it may require more land.', 'Poorly managed organic inputs can also emit gases and pollute water.', 'Pest control can be difficult in regions with high phytosanitary pressure.'] } },
      { label: { pt: 'Caminhos de solução', en: 'Solution paths' }, items: { pt: ['Rotação, policultivos, compostagem segura e adubação verde.', 'Controle biológico, barreiras vegetais e monitoramento preventivo.', 'Cadeias curtas que reduzem perdas e valorizam diversidade de alimentos.'], en: ['Rotation, polycultures, safe composting, and green manure.', 'Biological control, vegetative barriers, and preventive monitoring.', 'Short supply chains that reduce losses and value food diversity.'] } },
      { label: { pt: 'Limites e controvérsias', en: 'Limits and debates' }, items: { pt: ['Orgânico não significa automaticamente baixa pegada de carbono.', 'Certificação pode ser cara para pequenos produtores.', 'Alguns sistemas orgânicos precisam combinar tradição com ciência agronômica moderna.'], en: ['Organic does not automatically mean low carbon footprint.', 'Certification can be expensive for small farmers.', 'Some organic systems need to combine tradition with modern agronomic science.'] } },
      { label: { pt: 'Exemplo aplicado', en: 'Applied example' }, items: { pt: ['Hortas periurbanas e circuitos locais podem reduzir transporte e aproximar consumidor do produtor.', 'Compostagem de resíduos alimentares fecha ciclos e reduz descarte.', 'Compras públicas podem fortalecer produção diversificada e saudável.'], en: ['Peri-urban gardens and local circuits can reduce transport and bring consumers closer to producers.', 'Food-waste composting closes cycles and reduces disposal.', 'Public procurement can strengthen diverse and healthy production.'] } }
    ]
  },
  'regenerativa-campo': {
    intro: {
      pt: 'Regenerativa e agroecologia são mais fortes quando deixam de ser rótulo e viram medição: cobertura do solo, matéria orgânica, infiltração, biodiversidade, emissão por produto e renda do produtor. O foco é produzir restaurando funções ecológicas.',
      en: 'Regenerative and agroecology are strongest when they stop being labels and become measurement: soil cover, organic matter, infiltration, biodiversity, emissions per product, and farmer income. The focus is to produce while restoring ecological functions.'
    },
    cards: [
      { label: { pt: 'Impactos críticos', en: 'Critical impacts' }, items: { pt: ['Transição pode reduzir produtividade temporariamente se for mal planejada.', 'Exige conhecimento local e acompanhamento técnico.', 'Resultados de carbono no solo variam com clima, solo e histórico da área.'], en: ['Transition can temporarily reduce yields if poorly planned.', 'Requires local knowledge and technical follow-up.', 'Soil carbon results vary with climate, soil, and land history.'] } },
      { label: { pt: 'Caminhos de solução', en: 'Solution paths' }, items: { pt: ['Cobertura permanente, rotação, consórcios e raízes vivas por mais tempo.', 'Integração animal-vegetal com pastejo controlado.', 'Monitoramento de indicadores de solo e água, não apenas aparência verde.'], en: ['Permanent cover, rotation, intercropping, and living roots for longer.', 'Crop-livestock integration with controlled grazing.', 'Monitoring soil and water indicators, not just green appearance.'] } },
      { label: { pt: 'Limites e controvérsias', en: 'Limits and debates' }, items: { pt: ['O termo pode virar marketing se não houver métrica e transparência.', 'Sequestro de carbono tem limites e pode ser reversível.', 'Nem toda técnica serve para todo bioma ou tipo de produtor.'], en: ['The term can become marketing without metrics and transparency.', 'Carbon sequestration has limits and can be reversible.', 'Not every technique fits every biome or farmer type.'] } },
      { label: { pt: 'Exemplo aplicado', en: 'Applied example' }, items: { pt: ['Plantio direto com rotação real e cobertura pode reduzir erosão e melhorar infiltração.', 'Sistemas integrados aumentam resiliência contra seca e calor.', 'Bioinsumos e compostagem podem reduzir dependência externa quando bem controlados.'], en: ['No-till with real rotation and cover can reduce erosion and improve infiltration.', 'Integrated systems increase resilience to drought and heat.', 'Bioinputs and composting can reduce external dependence when well controlled.'] } }
    ]
  },
  irrigada: {
    intro: {
      pt: 'A irrigação é uma ferramenta de segurança alimentar, mas precisa ser governada como recurso coletivo. Quando a retirada supera a recarga, rios, aquíferos e ecossistemas pagam a conta. A sustentabilidade depende tanto de tecnologia quanto de regras de uso.',
      en: 'Irrigation is a food security tool, but must be governed as a collective resource. When withdrawals exceed recharge, rivers, aquifers, and ecosystems pay the price. Sustainability depends on both technology and use rules.'
    },
    cards: [
      { label: { pt: 'Impactos críticos', en: 'Critical impacts' }, items: { pt: ['Esgotamento de aquíferos e redução de vazão em rios.', 'Salinização do solo em regiões secas com drenagem ruim.', 'Conflitos entre agricultura, cidades, indústria e ecossistemas.', 'Energia usada em bombeamento, especialmente em águas profundas.'], en: ['Aquifer depletion and lower river flows.', 'Soil salinization in dry regions with poor drainage.', 'Conflicts among agriculture, cities, industry, and ecosystems.', 'Energy used for pumping, especially from deep groundwater.'] } },
      { label: { pt: 'Caminhos de solução', en: 'Solution paths' }, items: { pt: ['Gotejamento, sensores de umidade e manejo por evapotranspiração.', 'Proteção de nascentes, recarga de aquíferos e reuso seguro.', 'Culturas compatíveis com disponibilidade hídrica regional.', 'Cobrança, outorga e fiscalização para evitar sobreuso.'], en: ['Drip irrigation, moisture sensors, and evapotranspiration-based management.', 'Spring protection, aquifer recharge, and safe reuse.', 'Crops compatible with regional water availability.', 'Permits, pricing, and enforcement to avoid overuse.'] } },
      { label: { pt: 'Limites e controvérsias', en: 'Limits and debates' }, items: { pt: ['Eficiência no campo pode aumentar área irrigada se não houver limite de captação.', 'Nem toda economia de água retorna ao rio; parte vira maior consumo pela planta.', 'Grandes obras hídricas podem deslocar impactos para outros territórios.'], en: ['Field efficiency can increase irrigated area if abstraction is not capped.', 'Not all water savings return to rivers; some becomes higher crop consumption.', 'Large water infrastructure can shift impacts to other territories.'] } },
      { label: { pt: 'Exemplo aplicado', en: 'Applied example' }, items: { pt: ['Pivôs centrais exigem planejamento por bacia hidrográfica.', 'Hortaliças irrigadas podem ter alta eficiência com gotejamento e cobertura do solo.', 'Arroz inundado pode reduzir emissões com manejo intermitente da lâmina d’água.'], en: ['Center pivots require watershed-level planning.', 'Irrigated vegetables can be highly efficient with drip irrigation and soil cover.', 'Flooded rice can reduce emissions with intermittent water management.'] } }
    ]
  },
  agrofloresta: {
    intro: {
      pt: 'Agroflorestas são uma das abordagens mais completas porque combinam produção, árvores, solo, água e biodiversidade. Elas funcionam melhor quando desenhadas como sistema econômico real, com espécies adequadas, manejo de luz e mercado para produtos diversos.',
      en: 'Agroforestry is one of the most complete approaches because it combines production, trees, soil, water, and biodiversity. It works best when designed as a real economic system, with suitable species, light management, and markets for diverse products.'
    },
    cards: [
      { label: { pt: 'Impactos críticos', en: 'Critical impacts' }, items: { pt: ['Implantação lenta e necessidade de manejo especializado.', 'Competição por luz, água e nutrientes se o desenho for inadequado.', 'Dificuldade de mecanização em alguns arranjos.', 'Mercados podem não absorver a diversidade produzida.'], en: ['Slow establishment and need for specialized management.', 'Competition for light, water, and nutrients if design is inadequate.', 'Mechanization difficulty in some arrangements.', 'Markets may not absorb the diversity produced.'] } },
      { label: { pt: 'Caminhos de solução', en: 'Solution paths' }, items: { pt: ['Planejamento por estratos, sucessão ecológica e calendário de colheita.', 'Espécies nativas e produtivas combinadas com culturas comerciais.', 'Assistência técnica e beneficiamento local para agregar valor.', 'Pagamento por serviços ambientais quando houver conservação comprovada.'], en: ['Planning by strata, ecological succession, and harvest calendar.', 'Native and productive species combined with commercial crops.', 'Technical assistance and local processing to add value.', 'Payment for ecosystem services when conservation is proven.'] } },
      { label: { pt: 'Limites e controvérsias', en: 'Limits and debates' }, items: { pt: ['Não substitui facilmente commodities de altíssimo volume.', 'Pode ser vendida como solução simples, mas exige anos de manejo.', 'Resultados dependem muito da escolha de espécies e do contexto social.'], en: ['Does not easily replace very high-volume commodities.', 'Can be sold as a simple solution, but requires years of management.', 'Results depend heavily on species choice and social context.'] } },
      { label: { pt: 'Exemplo aplicado', en: 'Applied example' }, items: { pt: ['Cacau em sistemas cabruca e café sombreado podem conservar habitat e gerar renda.', 'Quintais produtivos fortalecem segurança alimentar local.', 'Recuperação de áreas degradadas pode combinar madeira, frutas, adubação verde e proteção de água.'], en: ['Cocoa in shade systems and shaded coffee can conserve habitat and generate income.', 'Productive home gardens strengthen local food security.', 'Degraded land restoration can combine timber, fruits, green manure, and water protection.'] } }
    ]
  },
  aquatica: {
    intro: {
      pt: 'Alimentos aquáticos são essenciais para nutrição global, mas o impacto muda muito entre pesca extrativa, piscicultura, carcinicultura, moluscos e algas. O manejo precisa olhar para estoque, habitat, ração, efluentes, escape de espécies e direitos de comunidades costeiras.',
      en: 'Aquatic foods are essential for global nutrition, but impacts vary widely among capture fisheries, fish farming, shrimp farming, shellfish, and seaweeds. Management must consider stocks, habitat, feed, effluents, species escape, and coastal community rights.'
    },
    cards: [
      { label: { pt: 'Impactos críticos', en: 'Critical impacts' }, items: { pt: ['Sobrepesca e captura acidental de espécies não alvo.', 'Danos a habitats por algumas artes de pesca e expansão costeira.', 'Efluentes, antibióticos e excesso de nutrientes em cultivos intensivos.', 'Uso de farinha e óleo de peixe em rações, dependendo da espécie criada.'], en: ['Overfishing and bycatch of non-target species.', 'Habitat damage from some fishing gear and coastal expansion.', 'Effluents, antibiotics, and nutrient overload in intensive farms.', 'Use of fishmeal and fish oil in feeds, depending on farmed species.'] } },
      { label: { pt: 'Caminhos de solução', en: 'Solution paths' }, items: { pt: ['Cotas científicas, áreas protegidas e fiscalização contra pesca ilegal.', 'Rações alternativas e espécies de baixo nível trófico.', 'Aquicultura multitrófica com algas e moluscos reciclando nutrientes.', 'Rastreabilidade e certificações robustas.'], en: ['Science-based quotas, protected areas, and enforcement against illegal fishing.', 'Alternative feeds and low-trophic species.', 'Multitrophic aquaculture with seaweeds and shellfish recycling nutrients.', 'Traceability and robust certifications.'] } },
      { label: { pt: 'Limites e controvérsias', en: 'Limits and debates' }, items: { pt: ['Certificações variam em rigor e fiscalização.', 'Aquicultura pode aliviar estoques selvagens ou criar novos impactos locais.', 'Comunidades tradicionais precisam participar das decisões de manejo.'], en: ['Certifications vary in rigor and enforcement.', 'Aquaculture can relieve wild stocks or create new local impacts.', 'Traditional communities must participate in management decisions.'] } },
      { label: { pt: 'Exemplo aplicado', en: 'Applied example' }, items: { pt: ['Cultivo de moluscos pode filtrar água e exigir pouca ração externa.', 'Algas têm potencial para alimento, biomateriais e captura de nutrientes.', 'Pesca manejada por comunidade pode proteger estoque e renda local.'], en: ['Shellfish farming can filter water and require little external feed.', 'Seaweeds have potential for food, biomaterials, and nutrient capture.', 'Community-managed fisheries can protect stocks and local income.'] } }
    ]
  }
};

// ─────────────────────────────────────────────────────────────
// 2. STATE & DOM INIT
// ─────────────────────────────────────────────────────────────
let currentIndex = 0;
let isTransitioning = false;
let autoplayTimer = null;
let isAutoplay = false; 
let currentLang = 'pt'; 
const AUTOPLAY_INTERVAL = 7000; 

const dom = {};

document.addEventListener('DOMContentLoaded', () => {
  dom.preloader = document.getElementById('preloader');
  
  // Hero
  dom.heroImage = document.getElementById('hero-image');
  dom.heroSupertitle = document.getElementById('hero-supertitle');
  dom.heroTitle = document.getElementById('hero-title');
  dom.impactVal1 = document.getElementById('impact-val-1');
  dom.impactVal2 = document.getElementById('impact-val-2');
  dom.impactLabel1 = document.getElementById('impact-label-1');
  dom.impactLabel2 = document.getElementById('impact-label-2');
  dom.heroStatsBox = document.getElementById('hero-stats-box');
  dom.ctaText = document.getElementById('cta-text');
  
  // Controls
  dom.slideCounter = document.getElementById('slide-counter');
  dom.slideBarsContainer = document.getElementById('slide-bars-container');
  renderSlideControls();
  dom.slideBars = document.querySelectorAll('.slide-controls__bar');
  dom.prevBtn = document.getElementById('prev-btn');
  dom.nextBtn = document.getElementById('next-btn');
  dom.playBtn = document.getElementById('play-btn');

  // Menu & Lang
  dom.menuBtn = document.getElementById('menu-btn');
  dom.menuCloseBtn = document.getElementById('menu-close-btn');
  dom.fullscreenMenu = document.getElementById('fullscreen-menu');
  dom.langBtn = document.getElementById('lang-btn');
  dom.langText = document.getElementById('lang-text');
  dom.menuJumpLinks = document.querySelectorAll('.menu-link-jump');
  dom.searchBtn = document.getElementById('search-btn');
  dom.searchOverlay = document.getElementById('search-overlay');
  dom.searchCloseBtn = document.getElementById('search-close-btn');
  dom.searchInput = document.getElementById('site-search');
  dom.searchResults = document.getElementById('search-results');

  // Science Section DOM
  dom.sciTag = document.getElementById('science-tag');
  dom.sciTitle = document.getElementById('science-title');
  dom.sciIntro = document.getElementById('science-intro');
  dom.insightsGrid = document.getElementById('insights-grid');
  dom.mechChain = document.getElementById('mechanism-chain');
  dom.chartsContainer = document.getElementById('charts-container');
  dom.glossaryAccordion = document.getElementById('glossary-accordion');
  dom.sciSources = document.getElementById('science-sources');
  dom.deepTag = document.getElementById('deep-tag');
  dom.deepTitle = document.getElementById('deep-title');
  dom.deepIntro = document.getElementById('deep-intro');
  dom.deepGrid = document.getElementById('deep-grid');
  dom.tBlock1 = document.getElementById('title-block-1');
  dom.tBlock2 = document.getElementById('title-block-2');
  dom.tBlock3 = document.getElementById('title-block-3');
  dom.ods12Tag = document.getElementById('ods12-tag');
  dom.ods12Title = document.getElementById('ods12-title');
  dom.ods12Intro = document.getElementById('ods12-intro');

  // Setup Transition Classes
  [dom.heroSupertitle, dom.heroTitle, dom.heroStatsBox, dom.sciIntro].forEach(el => {
    if(el) el.classList.add('fade-transition');
  });
  if(dom.heroImage) dom.heroImage.classList.add('fade-transition-image');

  bindEvents();
  applyTheme(0, false);

  setTimeout(() => {
    if(dom.preloader) dom.preloader.classList.add('preloader--hidden');
    animateHeroStats(); 
  }, 800);
});

// ─────────────────────────────────────────────────────────────
// 3. EVENTS BINDING
// ─────────────────────────────────────────────────────────────
function bindEvents() {
  if (dom.nextBtn) dom.nextBtn.addEventListener('click', () => handleManualNavigation(1));
  if (dom.prevBtn) dom.prevBtn.addEventListener('click', () => handleManualNavigation(-1));

  if (dom.slideBars) {
    dom.slideBars.forEach((bar, i) => {
      bar.addEventListener('click', () => {
        if (i !== currentIndex) {
          currentIndex = i;
          applyTheme(currentIndex, true);
          stopAutoplay(); 
        }
      });
    });
  }

  if (dom.playBtn) dom.playBtn.addEventListener('click', toggleAutoplay);

  if (dom.menuBtn) dom.menuBtn.addEventListener('click', () => dom.fullscreenMenu.classList.add('is-open'));
  if (dom.menuCloseBtn) dom.menuCloseBtn.addEventListener('click', () => dom.fullscreenMenu.classList.remove('is-open'));
  dom.menuJumpLinks.forEach(link => {
    link.addEventListener('click', () => dom.fullscreenMenu.classList.remove('is-open'));
  });

  if (dom.searchBtn) dom.searchBtn.addEventListener('click', openSearch);
  if (dom.searchCloseBtn) dom.searchCloseBtn.addEventListener('click', closeSearch);
  if (dom.searchOverlay) {
    dom.searchOverlay.addEventListener('click', (e) => {
      if (e.target === dom.searchOverlay) closeSearch();
    });
  }
  if (dom.searchInput) {
    dom.searchInput.addEventListener('input', () => renderSearchResults(dom.searchInput.value));
    dom.searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const firstResult = dom.searchResults ? dom.searchResults.querySelector('.search-result:not(.search-result--empty)') : null;
        if (firstResult) firstResult.click();
      }
    });
  }

  if (dom.langBtn) {
    dom.langBtn.addEventListener('click', () => {
      currentLang = currentLang === 'pt' ? 'en' : 'pt';
      dom.langText.textContent = currentLang.toUpperCase();
      
      // Update static texts
      if (dom.ctaText) dom.ctaText.textContent = currentLang === 'pt' ? 'EXPLORAR DADOS' : 'EXPLORE DATA';
      if (dom.sciTag) dom.sciTag.textContent = currentLang === 'pt' ? 'ANÁLISE APROFUNDADA' : 'DEEP ANALYSIS';
      if (dom.sciTitle) dom.sciTitle.textContent = currentLang === 'pt' ? 'O MECANISMO E IMPACTO' : 'MECHANISM AND IMPACT';
      if (dom.tBlock1) dom.tBlock1.textContent = currentLang === 'pt' ? 'O MECANISMO' : 'THE MECHANISM';
      if (dom.tBlock2) dom.tBlock2.textContent = currentLang === 'pt' ? 'MÉTRICAS COMPARATIVAS (0 a 100%)' : 'COMPARATIVE METRICS (0 to 100%)';
      if (dom.tBlock3) dom.tBlock3.textContent = currentLang === 'pt' ? 'GLOSSÁRIO E FONTES' : 'GLOSSARY AND SOURCES';
      if (dom.deepTag) dom.deepTag.textContent = currentLang === 'pt' ? 'ANÁLISE COMPLETA' : 'FULL ANALYSIS';
      if (dom.deepTitle) dom.deepTitle.textContent = currentLang === 'pt' ? 'IMPACTOS, LIMITES E SOLUÇÕES' : 'IMPACTS, LIMITS AND SOLUTIONS';
      
      const linkMethodology = document.getElementById('link-methodology');
      const linkAbout = document.getElementById('link-about');
      const linkOds12 = document.getElementById('link-ods12');
      const titleMethodology = document.getElementById('title-methodology');
      const textMethodology = document.getElementById('text-methodology');
      const titleAbout = document.getElementById('title-about');
      const textAbout = document.getElementById('text-about');

      if (linkOds12) linkOds12.textContent = currentLang === 'pt' ? 'ODS 12' : 'SDG 12';
      if (linkMethodology) linkMethodology.textContent = currentLang === 'pt' ? 'METODOLOGIA' : 'METHODOLOGY';
      if (linkAbout) linkAbout.textContent = currentLang === 'pt' ? 'SOBRE O PROJETO' : 'ABOUT THE PROJECT';
      if (dom.ods12Tag) dom.ods12Tag.textContent = currentLang === 'pt' ? 'AGENDA 2030' : '2030 AGENDA';
      if (dom.ods12Title) dom.ods12Title.textContent = currentLang === 'pt' ? 'ODS 12: CONSUMO E PRODUÇÃO RESPONSÁVEIS' : 'SDG 12: RESPONSIBLE CONSUMPTION AND PRODUCTION';
      if (dom.ods12Intro) dom.ods12Intro.textContent = currentLang === 'pt'
        ? 'A ODS 12 propõe produzir e consumir com menos desperdício, menos poluição e melhor uso dos recursos naturais. Na alimentação, isso aparece em escolhas como reduzir perdas na cadeia produtiva, planejar compras, valorizar produtores responsáveis, melhorar embalagens, reaproveitar resíduos orgânicos e pressionar por sistemas com menor impacto ambiental.'
        : 'SDG 12 proposes producing and consuming with less waste, less pollution, and better use of natural resources. In food systems, this means reducing losses across supply chains, planning purchases, valuing responsible producers, improving packaging, reusing organic waste, and pushing for lower-impact systems.';
      if (titleMethodology) titleMethodology.textContent = currentLang === 'pt' ? 'METODOLOGIA' : 'METHODOLOGY';
      if (titleAbout) titleAbout.textContent = currentLang === 'pt' ? 'SOBRE O PROJETO' : 'ABOUT THE PROJECT';
      if (textMethodology) textMethodology.innerHTML = currentLang === 'pt' 
        ? 'Os números foram selecionados em fontes públicas e científicas, priorizando FAO, IPCC, IPBES, Our World in Data e revisões acadêmicas. As escalas de 0 a 100% são índices comparativos para leitura visual: não substituem inventários locais, mas ajudam a comparar pressão ambiental entre sistemas.' 
        : 'The numbers were selected from public and scientific sources, prioritizing FAO, IPCC, IPBES, Our World in Data, and academic reviews. The 0 to 100% scales are visual comparison indices: they do not replace local inventories, but help compare environmental pressure across systems.';
      if (textAbout) textAbout.innerHTML = currentLang === 'pt' 
        ? '<strong>Produção de Alimentos</strong> apresenta os impactos de diferentes modelos produtivos com linguagem visual imersiva. A proposta é mostrar que sustentabilidade depende de emissões, água, solo, biodiversidade, energia, transporte, desperdício e escolhas de consumo.' 
        : '<strong>Food Production</strong> presents the impacts of different production models through an immersive visual language. The goal is to show that sustainability depends on emissions, water, soil, biodiversity, energy, transport, waste, and consumption choices.';

      applyTheme(currentIndex, false); 
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && dom.searchOverlay && dom.searchOverlay.classList.contains('is-open')) {
      closeSearch();
      return;
    }
    if (dom.searchOverlay && dom.searchOverlay.classList.contains('is-open')) return;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') handleManualNavigation(1);
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') handleManualNavigation(-1);
    if (e.key === ' ') { e.preventDefault(); toggleAutoplay(); }
  });

  const heroCtaBtn = document.getElementById('hero-cta');
  if (heroCtaBtn) {
    heroCtaBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const scienceSection = document.getElementById('science-section');
      if (scienceSection) scienceSection.scrollIntoView({ behavior: 'smooth' });
    });
  }
}

function renderSlideControls() {
  if (!dom.slideBarsContainer) return;
  dom.slideBarsContainer.innerHTML = THEMES.map((theme, index) => `
    <button class="slide-controls__bar${index === 0 ? ' slide-controls__bar--active' : ''}" data-index="${index}" aria-label="${theme.name[currentLang]}">
      <span class="slide-controls__bar-fill"></span>
    </button>
  `).join('');
}

function normalizeText(value) {
  return String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

function getSearchItems() {
  const themeItems = THEMES.map((theme, index) => ({
    type: 'theme',
    index,
    title: theme.name[currentLang],
    desc: theme.intro[currentLang],
    keywords: `${theme.id} ${theme.name.pt} ${theme.name.en} ${THEME_SEARCH_KEYWORDS[theme.id] || ''}`
  }));

  const staticItems = STATIC_SEARCH_ITEMS.map(item => ({
    ...item,
    title: item.title[currentLang],
    desc: item.desc[currentLang]
  }));

  return [...themeItems, ...staticItems];
}

function openSearch() {
  if (!dom.searchOverlay) return;
  dom.searchOverlay.classList.add('is-open');
  dom.searchOverlay.setAttribute('aria-hidden', 'false');
  document.body.classList.add('search-open');
  renderSearchResults(dom.searchInput ? dom.searchInput.value : '');
  const shouldAutofocus = window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (shouldAutofocus) {
    setTimeout(() => {
      if (!dom.searchOverlay.classList.contains('is-open') || !dom.searchInput) return;
      dom.searchInput.focus();
      dom.searchInput.select();
    }, 50);
  }
}

function closeSearch() {
  if (!dom.searchOverlay) return;
  dom.searchOverlay.classList.remove('is-open');
  dom.searchOverlay.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('search-open');
  if (dom.searchInput) dom.searchInput.blur();
}

function renderSearchResults(query = '') {
  if (!dom.searchResults) return;
  const normalizedQuery = normalizeText(query.trim());
  const items = getSearchItems();
  const results = normalizedQuery
    ? items.filter(item => normalizeText(`${item.title} ${item.desc} ${item.keywords}`).includes(normalizedQuery))
    : items;

  dom.searchResults.innerHTML = '';

  if (!results.length) {
    const empty = document.createElement('button');
    empty.type = 'button';
    empty.className = 'search-result search-result--empty';
    empty.disabled = true;
    empty.innerHTML = `
      <span class="search-result__title">${currentLang === 'pt' ? 'Nenhum resultado' : 'No results'}</span>
      <span class="search-result__desc">${currentLang === 'pt' ? 'Tente buscar por agua, solo, pecuaria ou metodologia.' : 'Try water, soil, livestock, or methodology.'}</span>
    `;
    dom.searchResults.appendChild(empty);
    return;
  }

  results.forEach(item => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'search-result';
    button.innerHTML = `
      <span class="search-result__title">${item.title}</span>
      <span class="search-result__desc">${item.desc}</span>
    `;
    button.addEventListener('click', () => navigateSearchResult(item));
    dom.searchResults.appendChild(button);
  });
}

function navigateSearchResult(item) {
  closeSearch();

  if (item.type === 'theme') {
    currentIndex = item.index;
    applyTheme(currentIndex, true);
    stopAutoplay();
    const hero = document.getElementById('hero');
    if (hero) hero.scrollIntoView({ behavior: 'smooth' });
    return;
  }

  const target = document.querySelector(item.target);
  if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function handleManualNavigation(direction) {
  if (isTransitioning) return;
  currentIndex = (currentIndex + direction + THEMES.length) % THEMES.length;
  applyTheme(currentIndex, true);
  stopAutoplay(); 
}

// ─────────────────────────────────────────────────────────────
// 4. THEME APPLICATION & TRANSITIONS
// ─────────────────────────────────────────────────────────────
function applyTheme(index, animate = true) {
  if (isTransitioning && animate) return;
  const theme = THEMES[index];
  const root = document.documentElement;

  root.style.setProperty('--accent', theme.accent);
  root.style.setProperty('--accent-dim', theme.accentDim);
  root.style.setProperty('--accent-glow', theme.accentGlow);

  if (dom.slideCounter) dom.slideCounter.textContent = `0${index + 1} / 0${THEMES.length}`;
  if (dom.slideBars) {
    dom.slideBars.forEach((bar, i) => {
      bar.classList.remove('slide-controls__bar--active', 'slide-controls__bar--animating');
      if (i === index) {
        bar.classList.add('slide-controls__bar--active');
        if (isAutoplay) bar.classList.add('slide-controls__bar--animating');
      }
    });
  }

  if (!animate) {
    updateDOMContent(theme);
    return;
  }

  isTransitioning = true;
  
  // Fade out hero elements
  const fadeElements = [dom.heroSupertitle, dom.heroTitle, dom.heroStatsBox, dom.heroImage];
  fadeElements.forEach(el => { if (el) el.classList.add('hidden'); });

  // Fade out science section dynamically
  if(dom.sciIntro) dom.sciIntro.classList.add('hidden');
  const sciBlocks = document.querySelectorAll('.science-block');
  sciBlocks.forEach(b => b.style.opacity = '0');

  setTimeout(() => {
    updateDOMContent(theme);
    requestAnimationFrame(() => {
      fadeElements.forEach(el => { if (el) el.classList.remove('hidden'); });
      if(dom.sciIntro) dom.sciIntro.classList.remove('hidden');
      sciBlocks.forEach(b => b.style.opacity = '1');
      isTransitioning = false;
      animateHeroStats();
    });
  }, 600); 
}

function updateDOMContent(theme) {
  const lang = currentLang;

  // Hero
  if (dom.heroSupertitle) dom.heroSupertitle.innerHTML = theme.supertitle[lang];
  if (dom.heroTitle) dom.heroTitle.innerHTML = theme.title[lang];
  if (dom.heroImage) dom.heroImage.src = theme.heroImage;

  if (dom.impactVal1) {
    dom.impactVal1.dataset.target = theme.impactRaw1;
    dom.impactVal1.dataset.decimals = theme.impactDecimals1 || 0;
    dom.impactVal1.dataset.suffix = theme.impactSuffix1;
    dom.impactVal1.textContent = theme.impactRaw1 + theme.impactSuffix1;
  }
  if (dom.impactVal2) {
    dom.impactVal2.dataset.target = theme.impactRaw2;
    dom.impactVal2.dataset.decimals = theme.impactDecimals2 || 0;
    dom.impactVal2.dataset.suffix = theme.impactSuffix2;
    dom.impactVal2.textContent = theme.impactRaw2 + theme.impactSuffix2;
  }
  if (dom.impactLabel1) dom.impactLabel1.textContent = theme.impactLabel1[lang];
  if (dom.impactLabel2) dom.impactLabel2.textContent = theme.impactLabel2[lang];

  // Science Section
  if (dom.sciIntro) dom.sciIntro.textContent = theme.intro[lang];

  if (dom.insightsGrid && theme.insights) {
    dom.insightsGrid.innerHTML = theme.insights.map(insight => `
      <article class="insight-card">
        <span class="insight-card__label">${insight.label[lang]}</span>
        <span class="insight-card__text">${insight.text[lang]}</span>
      </article>
    `).join('');
  }
  
  // Mechanism
  if (dom.mechChain) {
    dom.mechChain.innerHTML = theme.mechanism.map(item => `
      <div class="mech-item">
        <div class="mech-item__type">${item.type[lang]}</div>
        <div class="mech-item__desc">${item.desc[lang]}</div>
      </div>
    `).join('');
  }

  // Charts
  if (dom.chartsContainer) {
    dom.chartsContainer.innerHTML = theme.charts.map(chart => `
      <div class="sci-chart">
        <div class="sci-chart__header">
          <span class="sci-chart__label">${chart.label[lang]}</span>
          <span class="sci-chart__val">${chart.value}%</span>
        </div>
        <div class="sci-chart__track">
          <div class="sci-chart__fill" data-width="${chart.value}"></div>
        </div>
      </div>
    `).join('');
  }

  // Glossary
  if (dom.glossaryAccordion) {
    dom.glossaryAccordion.innerHTML = theme.glossary.map((g, i) => `
      <div class="glossary-item">
        <div class="glossary-item__header" onclick="toggleAccordion(this)">
          ${g.term[lang]}
          <span class="glossary-item__icon">+</span>
        </div>
        <div class="glossary-item__content">
          <p class="glossary-item__text">${g.def[lang]}</p>
        </div>
      </div>
    `).join('');
  }

  // Sources
  if (dom.sciSources) {
    const links = (theme.sourceLinks || []).map(source => `
      <a class="science-source-link" href="${source.url}" target="_blank" rel="noopener noreferrer">${source.label}</a>
    `).join('');

    dom.sciSources.innerHTML = `
      <span class="science-sources__title">${theme.sources[lang]}</span>
      <div class="science-sources__links">${links}</div>
    `;
  }

  const deepData = DEEP_DIVE_DATA[theme.id];
  if (deepData) {
    if (dom.deepIntro) dom.deepIntro.textContent = deepData.intro[lang];
    if (dom.deepGrid) {
      dom.deepGrid.innerHTML = deepData.cards.map(card => `
        <article class="deep-card">
          <span class="deep-card__label">${card.label[lang]}</span>
          <ul class="deep-card__list">
            ${card.items[lang].map(item => `<li>${item}</li>`).join('')}
          </ul>
        </article>
      `).join('');
    }
  }

  observeReveals();
  setTimeout(() => {
    animateBars();
  }, 100);
}

// Accordion Logic
window.toggleAccordion = function(header) {
  const item = header.parentElement;
  const content = item.querySelector('.glossary-item__content');
  const isOpen = item.classList.contains('is-open');

  // Close all other
  document.querySelectorAll('.glossary-item').forEach(other => {
    other.classList.remove('is-open');
    other.querySelector('.glossary-item__content').style.maxHeight = null;
  });

  if (!isOpen) {
    item.classList.add('is-open');
    content.style.maxHeight = content.scrollHeight + "px";
  }
};

// ─────────────────────────────────────────────────────────────
// 5. ANIMATIONS
// ─────────────────────────────────────────────────────────────
function animateHeroStats() {
  [dom.impactVal1, dom.impactVal2].forEach(el => {
    if (!el) return;
    const target = parseFloat(el.dataset.target);
    const decimals = parseInt(el.dataset.decimals || 0, 10);
    const suffix = el.dataset.suffix || '';
    const duration = 1200; 
    const start = performance.now();

    function step(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4); 
      let current = target * eased;
      
      if(target < 0) current = target * eased; 

      const formatted = Math.abs(current).toLocaleString(currentLang === 'pt' ? 'pt-BR' : 'en-US', {
        minimumFractionDigits: decimals, maximumFractionDigits: decimals,
      });

      el.textContent = (current < 0 ? '−' : '') + formatted + suffix;
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  });
}

function animateBars() {
  document.querySelectorAll('.sci-chart__fill').forEach((fill, i) => {
    setTimeout(() => { fill.style.width = fill.dataset.width + '%'; }, i * 150);
  });
}

let observer;
function observeReveals() {
  if (observer) observer.disconnect();
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal--visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

function startAutoplay() {
  isAutoplay = true;
  if (dom.playBtn) dom.playBtn.classList.add('is-playing');
  if (dom.slideBars) {
    dom.slideBars.forEach((bar, i) => {
      bar.classList.remove('slide-controls__bar--animating');
      if (i === currentIndex) {
        void bar.offsetWidth; 
        bar.classList.add('slide-controls__bar--animating');
      }
    });
  }
  clearInterval(autoplayTimer);
  autoplayTimer = setInterval(() => {
    currentIndex = (currentIndex + 1) % THEMES.length;
    applyTheme(currentIndex, true);
    if (dom.slideBars) {
      dom.slideBars.forEach((bar, i) => {
        bar.classList.remove('slide-controls__bar--animating');
        if (i === currentIndex) {
          void bar.offsetWidth; 
          bar.classList.add('slide-controls__bar--animating');
        }
      });
    }
  }, AUTOPLAY_INTERVAL);
}

function stopAutoplay() {
  isAutoplay = false;
  if (dom.playBtn) dom.playBtn.classList.remove('is-playing');
  clearInterval(autoplayTimer);
  autoplayTimer = null;
  if (dom.slideBars) {
    dom.slideBars.forEach(bar => bar.classList.remove('slide-controls__bar--animating'));
  }
}

function toggleAutoplay() {
  if (isAutoplay) stopAutoplay();
  else startAutoplay();
}
