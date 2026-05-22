export type Lang = 'es' | 'en'

export interface ContentShape {
  nav: {
    links: { label: string; href: string }[]
    cta: string
  }
  hero: {
    badge: string
    headline: string
    subhead: string
    cta1: string
    cta2: string
    stats: { value: string; label: string }[]
    mockup: {
      voltage: string
      temp: string
      oil: string
      status: string
      statusLabel: string
      battery: string
      batteryLabel: string
      signal: string
      signalLabel: string
    }
  }
  logos: {
    title: string
  }
  testimonials: {
    quote: string
    name: string
    title: string
  }[]
  solutions: {
    title: string
    subtitle: string
    cards: { title: string; desc: string; icon: string }[]
  }
  technology: {
    title: string
    subtitle: string
    body: string
    archTitle: string
    nodes: string[]
    photoCaption: string
  }
  pricing: {
    title: string
    subtitle: string
    toggle: { monthly: string; annual: string }
    plans: {
      name: string
      price: { monthly: string; annual: string }
      desc: string
      features: string[]
      cta: string
      highlight: boolean
    }[]
  }
  blog: {
    title: string
    subtitle: string
    posts: { tag: string; title: string; excerpt: string; date: string }[]
  }
  about: {
    title: string
    subtitle: string
    body: string
    badge: string
    photoCaption: string
    stats: { value: string; label: string }[]
  }
  contact: {
    title: string
    subtitle: string
    fields: {
      name: string
      company: string
      email: string
      phone: string
      plan: string
      planOptions: string[]
      message: string
    }
    submit: string
    successTitle: string
    successBody: string
    info: { title: string; address: string; email: string; phone: string }
  }
  footer: {
    tagline: string
    columns: { title: string; links: { label: string; href: string }[] }[]
    copyright: string
  }
  chatbot: {
    title: string
    placeholder: string
    send: string
    greeting: string
  }
}

const content: Record<Lang, ContentShape> = {
  es: {
    nav: {
      links: [
        { label: 'Soluciones', href: '#soluciones' },
        { label: 'Tecnología', href: '#tecnologia' },
        { label: 'Precios', href: '#precios' },
        { label: 'Blog', href: '#blog' },
        { label: 'Nosotros', href: '#nosotros' },
        { label: 'Contacto', href: '#contacto' },
      ],
      cta: 'Solicitar Demo',
    },
    hero: {
      badge: 'Monitoreo Industrial con IA',
      headline: 'Convierte tu maquinaria industrial en activos inteligentes',
      subhead: 'Monitoreo en tiempo real, diagnósticos predictivos con IA y despacho remoto para generadores industriales. Sin interrupciones. Sin sorpresas.',
      cta1: 'Solicitar Demo',
      cta2: 'Ver Tecnología',
      stats: [
        { value: '99.7%', label: 'Uptime Garantizado' },
        { value: '3 sem', label: 'Alerta Predictiva Promedio' },
        { value: 'ES/EN', label: 'Plataforma Bilingüe' },
        { value: 'GPS', label: 'Tracking en Tiempo Real' },
      ],
      mockup: {
        voltage: '220 V',
        temp: '78 °C',
        oil: '87%',
        status: 'OPERATIVO',
        statusLabel: 'Estado',
        battery: '94%',
        batteryLabel: 'Batería',
        signal: '4G',
        signalLabel: 'Señal',
      },
    },
    logos: {
      title: 'Compatibles con los principales fabricantes industriales',
    },
    testimonials: [
      {
        quote: 'Monitt.io nos ahorró más de $40.000 USD en una sola temporada. El sistema detectó un fallo inminente en el turbocargador tres semanas antes de que fallara.',
        name: 'Carlos Venegas',
        title: 'Gerente de Operaciones, MineraCorp Chile',
      },
      {
        quote: 'La implementación fue increíblemente rápida. En menos de dos días teníamos telemetría completa de todos nuestros generadores Caterpillar.',
        name: 'Ana Ruiz',
        title: 'Directora de Infraestructura, DataCenter Andes',
      },
      {
        quote: 'El despacho remoto nos permite operar generadores a 400 km de distancia como si los tuviéramos al lado. Un cambio de juego total.',
        name: 'Miguel Herrera',
        title: 'CTO, EnerSol Industrial',
      },
    ],
    solutions: {
      title: 'Soluciones Inteligentes',
      subtitle: 'Todo lo que necesitas para gestionar tu flota de maquinaria industrial desde cualquier lugar del mundo.',
      cards: [
        {
          title: 'Diagnóstico IA Predictivo',
          desc: 'Modelos LSTM e Isolation Forest analizan vibración, temperatura y voltaje para predecir fallos con semanas de anticipación.',
          icon: 'Brain',
        },
        {
          title: 'Arranque y Prueba Remota',
          desc: 'Enciende, apaga y ejecuta pruebas de carga completas en tus generadores desde cualquier dispositivo, en cualquier momento.',
          icon: 'Zap',
        },
        {
          title: 'Despacho con Un Toque',
          desc: 'Envía técnicos con el contexto completo del diagnóstico. Reduce el tiempo de resolución hasta un 65%.',
          icon: 'Truck',
        },
        {
          title: 'GPS en Tiempo Real',
          desc: 'Rastrea ubicación, historial de movimiento y geocercas de toda tu flota. Alertas inmediatas ante movimientos no autorizados.',
          icon: 'MapPin',
        },
      ],
    },
    technology: {
      title: 'Tecnología de Vanguardia',
      subtitle: 'Arquitectura IoT industrial diseñada para entornos exigentes',
      body: 'El dispositivo TRB256 se conecta directamente al bus de datos del generador capturando más de 40 parámetros en tiempo real. Los datos viajan cifrados por 4G/LTE a nuestra infraestructura cloud donde los modelos de IA procesan cada lectura.',
      archTitle: 'Arquitectura del Sistema',
      nodes: ['IoT Gateway TRB256', 'MQTT Broker Seguro', 'Cloud AI (LSTM + Isolation Forest)', 'App Móvil / API de Despacho'],
      photoCaption: 'Dispositivo TRB256 — Gateway IoT Industrial de alta resiliencia',
    },
    pricing: {
      title: 'Planes y Precios',
      subtitle: 'Transparencia total. Sin costos ocultos. Escala según tu flota.',
      toggle: { monthly: 'Mensual', annual: 'Anual (−20%)' },
      plans: [
        {
          name: 'Residencial',
          price: { monthly: '$49', annual: '$39' },
          desc: 'Ideal para generadores domésticos y pequeños negocios.',
          features: [
            'Hasta 2 dispositivos',
            'Monitoreo en tiempo real',
            'Alertas por email y SMS',
            'App móvil iOS/Android',
            'Soporte 5×8',
          ],
          cta: 'Comenzar',
          highlight: false,
        },
        {
          name: 'Empresarial',
          price: { monthly: '$199', annual: '$159' },
          desc: 'Para flotas medianas que requieren monitoreo avanzado.',
          features: [
            'Hasta 20 dispositivos',
            'Diagnóstico IA predictivo',
            'Arranque y prueba remota',
            'Despacho con un toque',
            'GPS en tiempo real',
            'Dashboard personalizado',
            'Soporte 24×7',
          ],
          cta: 'Solicitar Demo',
          highlight: true,
        },
        {
          name: 'Industrial',
          price: { monthly: 'Cotizar', annual: 'Cotizar' },
          desc: 'Soluciones a medida para flotas industriales de gran escala.',
          features: [
            'Dispositivos ilimitados',
            'Integración ERP/SCADA',
            'IA personalizada',
            'SLA 99.9% garantizado',
            'Onboarding dedicado',
            'Gerente de cuenta exclusivo',
          ],
          cta: 'Contactar Ventas',
          highlight: false,
        },
      ],
    },
    blog: {
      title: 'Blog & Recursos',
      subtitle: 'Conocimiento práctico sobre mantenimiento predictivo e IoT industrial.',
      posts: [
        {
          tag: 'IA Predictiva',
          title: 'Cómo los modelos LSTM predicen fallos en generadores industriales',
          excerpt: 'Exploramos cómo las redes neuronales de memoria a largo plazo analizan series de tiempo de temperatura y vibración para detectar anomalías semanas antes de que ocurran.',
          date: '12 May 2026',
        },
        {
          tag: 'Caso de Uso',
          title: 'ElectroPower evita pérdida de $80K con diagnóstico temprano de Monitt',
          excerpt: 'Un generador Caterpillar C18 operando en la mina San Lorenzo mostró patrones anómalos en el sistema de refrigeración. Así fue cómo lo detectamos.',
          date: '28 Abr 2026',
        },
        {
          tag: 'Tecnología',
          title: 'TRB256: El cerebro IoT detrás de Monitt.io',
          excerpt: 'Conoce las especificaciones técnicas del gateway Teltonika TRB256 y por qué es la elección ideal para entornos industriales extremos.',
          date: '10 Abr 2026',
        },
      ],
    },
    about: {
      title: 'Nacimos en el Terreno',
      subtitle: 'Construido por ingenieros que conocen la industria desde adentro',
      body: 'Monitt.io nació de la frustración de ver generadores críticos fallar sin previo aviso. Nuestro equipo de ingenieros con experiencia en minería, data centers y energía diseñó una solución que realmente funciona en condiciones extremas. Cada línea de código está respaldada por experiencia real en terreno.',
      badge: '🇨🇱 Desarrollado en Chile',
      photoCaption: 'Instalación real en terreno — TRB256 · Santiago, Chile',
      stats: [
        { value: '+150', label: 'Dispositivos Activos' },
        { value: '+$2M', label: 'Ahorros Generados' },
        { value: '4', label: 'Países' },
        { value: '2022', label: 'Fundada' },
      ],
    },
    contact: {
      title: 'Hablemos',
      subtitle: 'Cuéntanos sobre tu flota y te preparamos una demo personalizada.',
      fields: {
        name: 'Nombre completo',
        company: 'Empresa',
        email: 'Correo electrónico',
        phone: 'Teléfono',
        plan: 'Plan de interés',
        planOptions: ['Residencial', 'Empresarial', 'Industrial', 'No lo sé aún'],
        message: 'Cuéntanos sobre tu operación',
      },
      submit: 'Enviar Mensaje',
      successTitle: '¡Mensaje enviado!',
      successBody: 'Nos pondremos en contacto contigo en menos de 24 horas.',
      info: {
        title: 'Información de Contacto',
        address: 'Santiago, Chile',
        email: 'contacto@monitt.io',
        phone: '+56 9 1234 5678',
      },
    },
    footer: {
      tagline: 'Convierte tu maquinaria industrial en activos inteligentes.',
      columns: [
        {
          title: 'Producto',
          links: [
            { label: 'Soluciones', href: '#soluciones' },
            { label: 'Tecnología', href: '#tecnologia' },
            { label: 'Precios', href: '#precios' },
            { label: 'Changelog', href: '#' },
          ],
        },
        {
          title: 'Empresa',
          links: [
            { label: 'Nosotros', href: '#nosotros' },
            { label: 'Blog', href: '#blog' },
            { label: 'Carreras', href: '#' },
            { label: 'Prensa', href: '#' },
          ],
        },
        {
          title: 'Soporte',
          links: [
            { label: 'Documentación', href: '#' },
            { label: 'API Reference', href: '#' },
            { label: 'Status', href: '#' },
            { label: 'Contacto', href: '#contacto' },
          ],
        },
        {
          title: 'Legal',
          links: [
            { label: 'Privacidad', href: '#' },
            { label: 'Términos', href: '#' },
            { label: 'Cookies', href: '#' },
            { label: 'GDPR', href: '#' },
          ],
        },
      ],
      copyright: '© 2026 Monitt.io. Todos los derechos reservados.',
    },
    chatbot: {
      title: 'Asistente Monitt.io',
      placeholder: '¿En qué puedo ayudarte?',
      send: 'Enviar',
      greeting: '¡Hola! Soy el asistente de Monitt.io. Puedo ayudarte con información sobre planes, características o agendar una demo. ¿En qué puedo ayudarte?',
    },
  },

  en: {
    nav: {
      links: [
        { label: 'Solutions', href: '#soluciones' },
        { label: 'Technology', href: '#tecnologia' },
        { label: 'Pricing', href: '#precios' },
        { label: 'Blog', href: '#blog' },
        { label: 'About', href: '#nosotros' },
        { label: 'Contact', href: '#contacto' },
      ],
      cta: 'Request Demo',
    },
    hero: {
      badge: 'Industrial Monitoring with AI',
      headline: 'Turn your industrial machinery into intelligent assets',
      subhead: 'Real-time monitoring, AI predictive diagnostics, and remote dispatch for industrial generators. No downtime. No surprises.',
      cta1: 'Request Demo',
      cta2: 'See Technology',
      stats: [
        { value: '99.7%', label: 'Guaranteed Uptime' },
        { value: '3 wks', label: 'Avg Predictive Warning' },
        { value: 'ES/EN', label: 'Bilingual Platform' },
        { value: 'GPS', label: 'Real-Time Tracking' },
      ],
      mockup: {
        voltage: '220 V',
        temp: '78 °C',
        oil: '87%',
        status: 'RUNNING',
        statusLabel: 'Status',
        battery: '94%',
        batteryLabel: 'Battery',
        signal: '4G',
        signalLabel: 'Signal',
      },
    },
    logos: {
      title: 'Compatible with leading industrial manufacturers',
    },
    testimonials: [
      {
        quote: 'Monitt.io saved us over $40,000 USD in a single season. The system detected an imminent turbocharger failure three weeks before it happened.',
        name: 'Carlos Venegas',
        title: 'Operations Manager, MineraCorp Chile',
      },
      {
        quote: 'Implementation was incredibly fast. In less than two days we had full telemetry from all our Caterpillar generators.',
        name: 'Ana Ruiz',
        title: 'Infrastructure Director, DataCenter Andes',
      },
      {
        quote: 'Remote dispatch lets us operate generators 400 km away as if they were right next to us. A total game changer.',
        name: 'Miguel Herrera',
        title: 'CTO, EnerSol Industrial',
      },
    ],
    solutions: {
      title: 'Intelligent Solutions',
      subtitle: 'Everything you need to manage your industrial machinery fleet from anywhere in the world.',
      cards: [
        {
          title: 'Predictive AI Diagnostics',
          desc: 'LSTM and Isolation Forest models analyze vibration, temperature, and voltage to predict failures weeks in advance.',
          icon: 'Brain',
        },
        {
          title: 'Remote Start & Test',
          desc: 'Start, stop, and run full load tests on your generators from any device, at any time.',
          icon: 'Zap',
        },
        {
          title: 'One-Touch Dispatch',
          desc: 'Send technicians with full diagnostic context. Reduce resolution time by up to 65%.',
          icon: 'Truck',
        },
        {
          title: 'Real-Time GPS',
          desc: 'Track location, movement history, and geofences for your entire fleet. Instant alerts for unauthorized movements.',
          icon: 'MapPin',
        },
      ],
    },
    technology: {
      title: 'Cutting-Edge Technology',
      subtitle: 'Industrial IoT architecture designed for demanding environments',
      body: 'The TRB256 device connects directly to the generator\'s data bus, capturing over 40 parameters in real time. Data travels encrypted via 4G/LTE to our cloud infrastructure where AI models process every reading.',
      archTitle: 'System Architecture',
      nodes: ['TRB256 IoT Gateway', 'Secure MQTT Broker', 'Cloud AI (LSTM + Isolation Forest)', 'Mobile App / Dispatch API'],
      photoCaption: 'TRB256 Device — High-resilience Industrial IoT Gateway',
    },
    pricing: {
      title: 'Plans & Pricing',
      subtitle: 'Full transparency. No hidden fees. Scale with your fleet.',
      toggle: { monthly: 'Monthly', annual: 'Annual (−20%)' },
      plans: [
        {
          name: 'Residential',
          price: { monthly: '$49', annual: '$39' },
          desc: 'Ideal for home generators and small businesses.',
          features: [
            'Up to 2 devices',
            'Real-time monitoring',
            'Email & SMS alerts',
            'iOS/Android app',
            '5×8 support',
          ],
          cta: 'Get Started',
          highlight: false,
        },
        {
          name: 'Business',
          price: { monthly: '$199', annual: '$159' },
          desc: 'For mid-sized fleets requiring advanced monitoring.',
          features: [
            'Up to 20 devices',
            'AI predictive diagnostics',
            'Remote start & test',
            'One-touch dispatch',
            'Real-time GPS',
            'Custom dashboard',
            '24×7 support',
          ],
          cta: 'Request Demo',
          highlight: true,
        },
        {
          name: 'Industrial',
          price: { monthly: 'Custom', annual: 'Custom' },
          desc: 'Tailored solutions for large-scale industrial fleets.',
          features: [
            'Unlimited devices',
            'ERP/SCADA integration',
            'Custom AI models',
            '99.9% SLA guaranteed',
            'Dedicated onboarding',
            'Exclusive account manager',
          ],
          cta: 'Contact Sales',
          highlight: false,
        },
      ],
    },
    blog: {
      title: 'Blog & Resources',
      subtitle: 'Practical knowledge on predictive maintenance and industrial IoT.',
      posts: [
        {
          tag: 'Predictive AI',
          title: 'How LSTM models predict failures in industrial generators',
          excerpt: 'We explore how long short-term memory neural networks analyze temperature and vibration time series to detect anomalies weeks before they occur.',
          date: 'May 12, 2026',
        },
        {
          tag: 'Case Study',
          title: 'ElectroPower avoids $80K loss with early Monitt diagnosis',
          excerpt: 'A Caterpillar C18 generator operating at San Lorenzo mine showed anomalous patterns in the cooling system. Here\'s how we detected it.',
          date: 'Apr 28, 2026',
        },
        {
          tag: 'Technology',
          title: 'TRB256: The IoT brain behind Monitt.io',
          excerpt: 'Learn the technical specs of the Teltonika TRB256 gateway and why it\'s the ideal choice for extreme industrial environments.',
          date: 'Apr 10, 2026',
        },
      ],
    },
    about: {
      title: 'Born in the Field',
      subtitle: 'Built by engineers who know the industry from the inside',
      body: 'Monitt.io was born from the frustration of watching critical generators fail without warning. Our engineering team with experience in mining, data centers, and energy designed a solution that truly works under extreme conditions. Every line of code is backed by real field experience.',
      badge: '🇨🇱 Developed in Chile',
      photoCaption: 'Real field installation — TRB256 · Santiago, Chile',
      stats: [
        { value: '+150', label: 'Active Devices' },
        { value: '+$2M', label: 'Savings Generated' },
        { value: '4', label: 'Countries' },
        { value: '2022', label: 'Founded' },
      ],
    },
    contact: {
      title: "Let's Talk",
      subtitle: 'Tell us about your fleet and we\'ll set up a personalized demo.',
      fields: {
        name: 'Full name',
        company: 'Company',
        email: 'Email address',
        phone: 'Phone number',
        plan: 'Plan of interest',
        planOptions: ['Residential', 'Business', 'Industrial', 'Not sure yet'],
        message: 'Tell us about your operation',
      },
      submit: 'Send Message',
      successTitle: 'Message sent!',
      successBody: "We'll get back to you within 24 hours.",
      info: {
        title: 'Contact Information',
        address: 'Santiago, Chile',
        email: 'contact@monitt.io',
        phone: '+56 9 1234 5678',
      },
    },
    footer: {
      tagline: 'Turn your industrial machinery into intelligent assets.',
      columns: [
        {
          title: 'Product',
          links: [
            { label: 'Solutions', href: '#soluciones' },
            { label: 'Technology', href: '#tecnologia' },
            { label: 'Pricing', href: '#precios' },
            { label: 'Changelog', href: '#' },
          ],
        },
        {
          title: 'Company',
          links: [
            { label: 'About', href: '#nosotros' },
            { label: 'Blog', href: '#blog' },
            { label: 'Careers', href: '#' },
            { label: 'Press', href: '#' },
          ],
        },
        {
          title: 'Support',
          links: [
            { label: 'Documentation', href: '#' },
            { label: 'API Reference', href: '#' },
            { label: 'Status', href: '#' },
            { label: 'Contact', href: '#contacto' },
          ],
        },
        {
          title: 'Legal',
          links: [
            { label: 'Privacy', href: '#' },
            { label: 'Terms', href: '#' },
            { label: 'Cookies', href: '#' },
            { label: 'GDPR', href: '#' },
          ],
        },
      ],
      copyright: '© 2026 Monitt.io. All rights reserved.',
    },
    chatbot: {
      title: 'Monitt.io Assistant',
      placeholder: 'How can I help you?',
      send: 'Send',
      greeting: 'Hello! I\'m the Monitt.io assistant. I can help you with information about plans, features, or scheduling a demo. How can I help you?',
    },
  },
}

export default content
