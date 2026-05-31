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

    heroImage: 'img/pecuaria.png',

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

    heroImage: 'img/monocultura.png',

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

    heroImage: 'img/regenerativa.png',

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

// ─────────────────────────────────────────────────────────────
// 2. STATE & DOM INIT
// ─────────────────────────────────────────────────────────────
let currentIndex = 0;
let isTransitioning = false;
let autoplayTimer = null;
let isAutoplay = true; 
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

  // Science Section DOM
  dom.sciTag = document.getElementById('science-tag');
  dom.sciTitle = document.getElementById('science-title');
  dom.sciIntro = document.getElementById('science-intro');
  dom.mechChain = document.getElementById('mechanism-chain');
  dom.chartsContainer = document.getElementById('charts-container');
  dom.glossaryAccordion = document.getElementById('glossary-accordion');
  dom.sciSources = document.getElementById('science-sources');
  dom.tBlock1 = document.getElementById('title-block-1');
  dom.tBlock2 = document.getElementById('title-block-2');
  dom.tBlock3 = document.getElementById('title-block-3');

  // Setup Transition Classes
  [dom.heroSupertitle, dom.heroTitle, dom.heroStatsBox, dom.sciIntro].forEach(el => {
    if(el) el.classList.add('fade-transition');
  });
  if(dom.heroImage) dom.heroImage.classList.add('fade-transition-image');

  bindEvents();
  applyTheme(0, false);
  startAutoplay();

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
      if (dom.tBlock3) dom.tBlock3.textContent = currentLang === 'pt' ? 'GLOSSÁRIO CIENTÍFICO' : 'SCIENTIFIC GLOSSARY';
      
      const linkMethodology = document.getElementById('link-methodology');
      const linkAbout = document.getElementById('link-about');
      const titleMethodology = document.getElementById('title-methodology');
      const textMethodology = document.getElementById('text-methodology');
      const titleAbout = document.getElementById('title-about');
      const textAbout = document.getElementById('text-about');

      if (linkMethodology) linkMethodology.textContent = currentLang === 'pt' ? 'METODOLOGIA' : 'METHODOLOGY';
      if (linkAbout) linkAbout.textContent = currentLang === 'pt' ? 'SOBRE O PROJETO' : 'ABOUT THE PROJECT';
      if (titleMethodology) titleMethodology.textContent = currentLang === 'pt' ? 'METODOLOGIA' : 'METHODOLOGY';
      if (titleAbout) titleAbout.textContent = currentLang === 'pt' ? 'SOBRE O PROJETO' : 'ABOUT THE PROJECT';
      if (textMethodology) textMethodology.innerHTML = currentLang === 'pt' 
        ? 'Este projeto compila dados científicos brutos de instituições globais (FAO, IPCC, MIT), convertendo-os em métricas comparativas. As porcentagens e escalas de 0 a 100% representam índices relativos de impacto dentro do ecossistema agrícola global, simplificados para fins de estudo.' 
        : 'This project compiles raw scientific data from global institutions (FAO, IPCC, MIT), converting them into comparative metrics. The percentages and 0 to 100% scales represent relative impact indices within the global agricultural ecosystem, simplified for study purposes.';
      if (textAbout) textAbout.innerHTML = currentLang === 'pt' 
        ? '<strong>Produção de Alimentos</strong> é uma iniciativa educacional open-source desenvolvida para unir pesquisa acadêmica rigorosa a uma experiência de interface luxuosa e imersiva. O objetivo é engajar estudantes através do design de alto nível.' 
        : '<strong>Food Production</strong> is an open-source educational initiative developed to unite rigorous academic research with a luxurious and immersive interface experience. The goal is to engage students through high-level design.';

      applyTheme(currentIndex, false); 
    });
  }

  document.addEventListener('keydown', (e) => {
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
  if (dom.sciSources) dom.sciSources.textContent = theme.sources[lang];

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
