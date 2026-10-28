export const portfolioData = {
  pt: {
    hero: {
      name: "Pedro Modesto",
      role: "Engenheiro de Computação / Full Stack & RPA Developer",
      location: "Sorocaba-SP, Brasil",
      greeting: "Olá, eu sou",
      cta: "Ver Projetos",
      ctaSecondary: "Contato",
    },
    nav: {
      about: "Sobre",
      experience: "Experiência",
      projects: "Projetos",
      skills: "Skills",
      learning: "Aprendizado",
      languages: "Idiomas",
      contact: "Contato",
    },
    about: {
      title: "Sobre mim",
      description:
        "Engenheiro de Computação em formação com sólida experiência prática em Automação de Processos (RPA), Engenharia de Dados e Operações de E-commerce. Foco no desenvolvimento de soluções Full Stack (Python) para integração de APIs de grandes marketplaces (Mercado Livre, Amazon) e otimização de fluxo de caixa. Experiente na criação de ecossistemas automatizados utilizando Cloud Computing (GCP/Cloudflare) e metodologias ágeis.",
      highlights: [
        "Automação de Processos (RPA)",
        "Engenharia de Dados",
        "Full Stack Python",
        "Cloud Computing",
      ],
    },
    experience: {
      title: "Experiência",
      items: [
        {
          company: "IDS - Instituto de Diagnóstico",
          role: "Estagiário & Líder de Projetos",
          period: "08/2026 - Atual",
          description:
            "Liderança de Projetos: Atuo como líder no desenvolvimento e implementação do novo Site Intranet da empresa, gerindo o ciclo de vida do projeto desde o planejamento até a execução.\n\nComunicação Corporativa e Transformação Digital: Criação de um ambiente digital centralizado para otimizar a comunicação interna, centralizar fluxos de informação e facilitar o acesso a recursos institucionais.\n\nDesenvolvimento Acadêmico e Prático: Cumprimento da carga horária de estágio obrigatório, aplicando na prática conceitos acadêmicos de tecnologia e gestão no dia a dia corporativo.",
          techs: [
            "Liderança de Projetos",
            "Intranet",
            "Transformação Digital",
            "Gestão de Projetos",
            "Comunicação Corporativa",
          ],
        },
        {
          company: "E-commerce CoutinhoShop",
          role: "Automações e Engenharia de Dados",
          period: "11/2025 - 04/2026",
          description:
            "Responsável pela estruturação do departamento de Automações e Engenharia de Dados. Desenvolvimento de aplicações em Python para orquestração de pedidos e priorização de tarefas via Trello. Criação de sistema de visualização de promoções (Mercado Livre) e ferramenta de upload simultâneo de imagens (Cloudflare R2) para múltiplas lojas. Implementação de dashboards baseados em PostgreSQL e GCP.",
          techs: ["Python", "PostgreSQL", "GCP", "Cloudflare R2", "Trello API"],
        },
        {
          company: "WI Engenharia",
          role: "Soluções Industriais",
          period: "03/2023 - 07/2025",
          description:
            "Planejamento e execução de inspeções técnicas. Desenvolvimento de soluções industriais personalizadas para otimização de serviços de campo.",
          techs: ["Automação Industrial", "Inspeções Técnicas", "Otimização"],
        },
      ],
    },
    projects: {
      title: "Projetos de Destaque",
      subtitle:
        "Clique em qualquer projeto para explorar a arquitetura, funcionalidades e resultados em detalhes.",
      filterAll: "Todos",
      viewDetails: "Ver detalhes",
      modalLabels: {
        overview: "Visão Geral & Contexto",
        features: "Principais Funcionalidades",
        architecture: "Arquitetura & Destaques Técnicos",
        impact: "Impacto & Resultados",
        techStack: "Stack Tecnológica",
        previous: "Anterior",
        next: "Próximo",
        close: "Fechar",
      },
      items: [
        {
          id: "solyd3d-erp",
          title: "Solyd3D — SaaS ERP & Gestão de Produção 3D",
          category: "SaaS & ERP",
          status: "Em Produção",
          highlight: "ERP + MES completo para manufatura aditiva FDM",
          description:
            "Sistema ERP e MES para gestão de impressão 3D FDM com cotação instantânea, Kanban visual com drag-and-drop, controle de filamento em gramas, remessas em consignação e netting financeiro entre sócios.",
          longDescription:
            "Desenvolvido para resolver a complexidade operacional de bureaus de impressão 3D FDM. O Solyd3D unifica desde a precificação milimétrica de peças (considerando tempo de máquina, depreciação, energia, taxa de falha e consumo exato de filamento em gramas) até o chão de fábrica (MES) e o acerto financeiro societário.",
          features: [
            "Motor de cotação instantânea com cálculo de custo energético, depreciação de impressora, mão de obra e margem dinâmica",
            "Quadro Kanban visual com drag-and-drop para gestão de fila de impressão e status de produção em tempo real",
            "Controle de estoque de bobinas de filamento com baixa automática em gramas a cada peça produzida",
            "Módulo de remessas em consignação para controle de peças enviadas a lojas parceiras e acertos periódicos",
            "Sistema de Netting Financeiro automatizado para compensação de despesas, aportes e divisão de lucros entre sócios",
            "Dashboards analíticos de faturamento, rentabilidade por material e taxa de ocupação das impressoras",
          ],
          architecture:
            "Arquitetura Full Stack monolítica moderna com Next.js 16 (App Router) e React 19, utilizando Server Actions e API Routes protegidas com NextAuth.js. Persistência relacional no PostgreSQL modelada via Prisma ORM com transações atômicas para movimentação de estoque e razão financeiro.",
          impact:
            "Eliminou planilhas manuais de orçamento, reduziu perdas de material por falta de rastreamento de sobras de rolo e trouxe transparência contábil em tempo real entre os sócios.",
          techs: [
            "Next.js 16",
            "React 19",
            "PostgreSQL",
            "Prisma ORM",
            "NextAuth.js",
            "Recharts",
            "Tailwind CSS",
          ],
        },
        {
          id: "solyd3d-store",
          title: "Solyd3D Loja — E-commerce & Storefront",
          category: "E-commerce",
          status: "Em Produção",
          highlight: "Catálogo sincronizado em tempo real com estoque de filamentos",
          description:
            "Storefront de e-commerce integrado ao ERP Solyd3D, oferecendo catálogo de peças com seletor dinâmico de cores alimentado pelo estoque ativo de filamentos e checkout via WhatsApp.",
          longDescription:
            "Vitrine digital construída sob medida para comercialização de produtos impressos em 3D sob demanda e pronta-entrega. Conectada diretamente ao banco de dados do ERP Solyd3D, garante que o cliente escolha apenas cores e materiais que realmente possuem estoque disponível na fábrica.",
          features: [
            "Seletor dinâmico de cores e materiais (PLA, PETG, ABS, Silk) sincronizado em tempo real com o estoque de bobinas do ERP",
            "Catálogo responsivo com filtros por categoria, busca rápida e galeria de fotos por variação",
            "Carrinho de compras persistente com resumo detalhado de variações de cor escolhidas por item",
            "Checkout direto via WhatsApp com geração automática de mensagem estruturada e pré-registro do pedido",
            "Otimização de SEO e carregamento ultrarrápido com Server Components e cache inteligente",
          ],
          architecture:
            "Aplicação Next.js compartilhando a camada de dados PostgreSQL/Prisma com o ERP Solyd3D, permitindo leitura direta de disponibilidade de insumos sem necessidade de sincronização manual de catálogo.",
          impact:
            "Zerou vendas de cores indisponíveis em estoque e agilizou o fechamento de pedidos personalizados via WhatsApp com especificações técnicas já validadas.",
          techs: ["Next.js", "React", "Prisma ORM", "PostgreSQL", "Tailwind CSS"],
        },
        {
          id: "nullport",
          title: "NullPort — Chat Efêmero em Tempo Real",
          category: "Full Stack & Cloud",
          status: "Concluído",
          highlight: "Comunicação efêmera Zero-Login com bypass de firewall via SSE",
          description:
            "Chat seguro e efêmero com acesso Zero-Login. Utiliza Server-Sent Events (SSE) para bypass de firewalls corporativos, compressão de imagens client-side e armazenamento híbrido no Supabase e Cloudflare R2.",
          longDescription:
            "Plataforma de comunicação instantânea focada em privacidade, efemeridade e resiliência de rede. Projetada para funcionar em ambientes de rede restritos onde conexões WebSocket tradicionais costumam ser bloqueadas por proxies ou firewalls corporativos.",
          features: [
            "Acesso Zero-Login: criação e ingresso imediato em salas efêmeras protegidas por código/hash sem cadastro",
            "Transmissão em tempo real via Server-Sent Events (SSE) sobre HTTP/HTTPS padrão para máxima compatibilidade de rede",
            "Compressão e redimensionamento de imagens no client-side antes do envio para reduzir latência e consumo de banda",
            "Expiração automática (TTL) e autodestruição de mensagens e mídias após o encerramento da sessão",
            "Armazenamento híbrido combinando metadados em tempo real no Supabase e objetos de mídia no Cloudflare R2",
          ],
          architecture:
            "Backend assíncrono em Python 3.12 com FastAPI gerenciando streams SSE de baixa latência, integrado ao frontend em React 19. Armazenamento de objetos distribuído via Cloudflare R2 (S3-compatible) com políticas de ciclo de vida para expurgo automático.",
          impact:
            "Permite troca ágil e segura de textos, trechos de código e capturas de tela entre dispositivos sem deixar rastros permanentes ou exigir autenticação pessoal.",
          techs: [
            "Python 3.12",
            "FastAPI",
            "React 19",
            "SSE",
            "Supabase",
            "Cloudflare R2",
          ],
        },
        {
          id: "cvauto",
          title: "CVauto v7.0 — RPA & Governança de Dados",
          category: "RPA & Automação",
          status: "Em Produção (v7.0)",
          highlight: "Robô Manifest V3 com memória anti-queda e auditoria em PDF",
          description:
            "Robô de automação (Manifest V3) para cancelamentos em lote no ClickVita. Possui entrada tabulada TSV (Excel), lógica Intelligent Skip, sincronização com servidor (Server-Sync), memória híbrida anti-queda e emissão de relatórios de auditoria em PDF.",
          longDescription:
            "Ferramenta corporativa de Automação Robótica de Processos (RPA) construída como extensão Chrome (Manifest V3) para automatizar operações repetitivas e críticas de cancelamento em lote no sistema ClickVita, garantindo rastreabilidade e governança de ponta a ponta.",
          features: [
            "Importação direta de lotes via dados tabulados TSV (copiar e colar direto do Excel/Planilhas)",
            "Lógica Intelligent Skip que detecta registros já processados, inconsistentes ou bloqueados sem interromper a fila",
            "Memória híbrida anti-queda: persistência contínua do estado da fila para retomada exata em caso de refresh ou queda de sessão",
            "Mecanismo Server-Sync que aguarda a confirmação real do backend antes de avançar para o próximo item",
            "Geração automática de Relatório de Auditoria em PDF ao final do lote com timestamps, status por item e métricas de execução",
          ],
          architecture:
            "Extensão Chrome baseada em Manifest V3 utilizando Content Scripts resilientes, observadores de mutação do DOM (MutationObserver), máquina de estados persistida em LocalStorage/Chrome Storage e motor de geração de PDF no client-side.",
          impact:
            "Transformou horas de trabalho manual sujeito a erro humano em lotes automatizados auditáveis, com 100% de rastreabilidade para compliance operacional.",
          techs: [
            "JavaScript",
            "Chrome Extension (Manifest V3)",
            "RPA",
            "DOM Manipulation",
            "PDF Generation",
            "LocalStorage",
          ],
        },
        {
          id: "huggyhelper",
          title: "HuggyHelper v9.0 — Copiloto de Atendimento & Compliance",
          category: "RPA & Automação",
          status: "Em Produção (v9.0)",
          highlight: "Copiloto em Shadow DOM com Ghost Mode e conformidade LGPD",
          description:
            "Extensão assistida para a plataforma Huggy.app. Utiliza Injeção por Shadow DOM para isolamento visual, atalhos de texto dinâmicos, notas vinculadas ao Chat ID, Ghost Mode ergonômico e Garbage Collector para conformidade com a LGPD.",
          longDescription:
            "Copiloto de produtividade para equipes de atendimento que utilizam a plataforma Huggy.app. A extensão injeta uma camada de ferramentas diretamente na interface do agente sem conflitar com o CSS ou scripts da aplicação original.",
          features: [
            "Injeção encapsulada via Shadow DOM garantindo isolamento total de estilos e zero conflito com atualizações da Huggy",
            "Sistema de blocos de notas contextuais vinculados automaticamente ao Chat ID de cada atendimento ativo",
            "Atalhos de texto dinâmicos e variáveis rápidas para padronização e agilidade nas respostas",
            "Ghost Mode ergonômico: interface translúcida e retrátil que não obstrui a leitura do histórico de mensagens",
            "Garbage Collector automatizado para expurgo periódico de dados locais antigos, garantindo conformidade com a LGPD",
          ],
          architecture:
            "Arquitetura modular em JavaScript (Manifest V3) com encapsulamento Web Components / Shadow DOM, gerenciamento assíncrono via Chrome Storage API e rotina de limpeza (TTL) executada em background.",
          impact:
            "Reduziu significativamente o Tempo Médio de Atendimento (TMA), organizou o contexto de chamados complexos e assegurou privacidade de dados no navegador dos operadores.",
          techs: [
            "JavaScript",
            "Shadow DOM",
            "Chrome Extension (Manifest V3)",
            "Chrome Storage API",
            "LGPD Compliance",
            "UX/UI",
          ],
        },
        {
          id: "sgi-sku",
          title: "SGI-SKU & Upload Multi-Loja",
          category: "E-commerce",
          status: "Em Produção",
          highlight: "Gestão centralizada de SKUs e upload simultâneo em Cloud",
          description:
            "Sistema de gerenciamento de imagens e SKUs integrado com a AWS e Cloudflare R2 para operações de e-commerce em larga escala.",
          longDescription:
            "Solução desenvolvida para centralizar o catálogo visual e cadastral de múltiplos canais de venda de e-commerce. Resolve o gargalo de hospedagem, padronização e distribuição de milhares de fotos de produtos vinculadas aos seus respectivos SKUs.",
          features: [
            "Upload simultâneo e em lote de imagens de produtos para armazenamento em nuvem (AWS S3 / Cloudflare R2)",
            "Associação estruturada de galerias de fotos por SKU pai e variações no PostgreSQL",
            "Geração instantânea de URLs públicas otimizadas prontas para planilhas de carga e integração via API com marketplaces",
            "Validação automática de formato, resolução e nomenclatura de arquivos antes da publicação",
          ],
          architecture:
            "Aplicação em Python integrada a buckets S3/R2 via boto3 e banco de dados PostgreSQL para indexação de catálogo, servindo como fonte única da verdade (Single Source of Truth) para imagens de produtos.",
          impact:
            "Acelerou drasticamente o cadastro de novos anúncios em múltiplas lojas e eliminou links quebrados de imagens nos marketplaces.",
          techs: ["Python", "AWS S3", "Cloudflare R2", "Amazon API", "PostgreSQL"],
        },
        {
          id: "order-assistant",
          title: "Auxiliar de Pedidos & Precificação",
          category: "E-commerce",
          status: "Em Produção",
          highlight: "Orquestração de pedidos e análise de promoções no Mercado Livre",
          description:
            "Automação de orquestração de pedidos e sistema de precificação dinâmica para e-commerce com múltiplas integrações.",
          longDescription:
            "Ecossistema de automação em Python criado para conectar a operação de vendas em marketplaces (como Mercado Livre) ao fluxo logístico da equipe e à análise financeira de campanhas promocionais.",
          features: [
            "Integração com a API do Mercado Livre para captura de pedidos, status de envio e campanhas de descontos ativas",
            "Orquestração automática de tarefas e cards operacionais via Trello API com priorização por SLA de envio",
            "Painel de visualização de promoções e simulador de margem líquida descontando taxas variáveis de marketplace e frete",
            "Consolidação de dados operacionais em banco PostgreSQL na nuvem (GCP) para relatórios gerenciais",
          ],
          architecture:
            "Pipelines e serviços em Python consumindo APIs REST (Mercado Livre e Trello), persistindo dados analíticos em PostgreSQL hospedado no Google Cloud Platform (GCP).",
          impact:
            "Evitou atrasos de expedição (protegendo a reputação das contas) e impediu vendas com margem negativa em campanhas promocionais de marketplace.",
          techs: [
            "Python",
            "Mercado Livre API",
            "Trello API",
            "RPA",
            "PostgreSQL",
            "GCP",
          ],
        },
        {
          id: "smart-greenhouse",
          title: "Horta Inteligente e Renovável",
          category: "IoT & Hardware",
          status: "Projeto Acadêmico",
          highlight: "Irrigação autônoma com telemetria de sensores e C++",
          description:
            "Sistema automatizado para cultivo de plantas utilizando Arduino, sensores de umidade e solenoides para irrigação inteligente.",
          longDescription:
            "Projeto de Engenharia de Computação voltado à sustentabilidade e automação residencial/agrícola. O sistema monitora continuamente as condições do solo e do ambiente para acionar a irrigação apenas quando estritamente necessário.",
          features: [
            "Leitura contínua de umidade do solo e variáveis ambientais através de rede de sensores conectados ao microcontrolador",
            "Acionamento automatizado de válvulas solenoides e bombas d'água com controle de histerese para evitar ciclos curtos",
            "Lógica embarcada em C++ otimizada para baixo consumo energético e operação autônoma contínua",
            "Foco em uso racional de recursos hídricos e sustentabilidade",
          ],
          architecture:
            "Hardware baseado em plataforma Arduino programado em C/C++, integrando sensores analógicos/digitais, módulos relé de potência e atuadores hidráulicos (válvulas solenoides).",
          impact:
            "Demonstrou na prática a integração entre hardware e software embarcado para automação sustentável e economia de água.",
          techs: ["Arduino", "C++", "IoT", "Sensores", "Eletrônica"],
        },
        {
          id: "university-carpool",
          title: "Site de Caronas Universitário",
          category: "Full Stack & Cloud",
          status: "Projeto Acadêmico",
          highlight: "Matching de rotas e horários para comunidade acadêmica",
          description:
            "Plataforma web para facilitar o compartilhamento de caronas entre estudantes universitários com sistema de matching.",
          longDescription:
            "Plataforma web colaborativa idealizada para conectar estudantes universitários que realizam trajetos similares diariamente, reduzindo custos de transporte, emissão de poluentes e problemas de estacionamento no campus.",
          features: [
            "Cadastro de rotas, horários de aula e vagas disponíveis por motoristas e passageiros da comunidade acadêmica",
            "Sistema de busca e matching inteligente por compatibilidade de horários, bairros de origem e destino",
            "Gestão de perfis verificados de estudantes e histórico de viagens compartilhadas",
            "Interface responsiva em Single Page Application (SPA) consumindo API RESTful estruturada",
          ],
          architecture:
            "Frontend construído em Angular comunicando-se via API REST desenvolvida em Python, com banco de dados relacional PostgreSQL para modelagem de usuários, rotas e reservas.",
          impact:
            "Proporcionou uma solução segura e dedicada à mobilidade urbana estudantil, aplicando conceitos sólidos de engenharia de software Full Stack.",
          techs: ["Python", "Angular", "PostgreSQL", "REST API", "TypeScript"],
        },
      ],
    },
    skills: {
      title: "Skills & Tecnologias",
      categories: [
        {
          name: "Linguagens",
          items: [
            { name: "Python", icon: "python", color: "#3776AB" },
            { name: "JavaScript", icon: "javascript", color: "#F7DF1E" },
            { name: "Java", icon: "openjdk", color: "#ED8B00" },
            { name: "C++", icon: "cplusplus", color: "#00599C" },
            { name: "SQL", icon: "postgresql", color: "#4169E1" },
          ],
        },
        {
          name: "Cloud & Infra",
          items: [
            { name: "GCP", icon: "googlecloud", color: "#4285F4" },
            { name: "Cloudflare", icon: "cloudflare", color: "#F38020" },
            { name: "Docker", icon: "docker", color: "#2496ED" },
            { name: "PostgreSQL", icon: "postgresql", color: "#4169E1" },
          ],
        },
        {
          name: "Frameworks & Tools",
          items: [
            { name: "React", icon: "react", color: "#61DAFB" },
            { name: "Angular", icon: "angular", color: "#DD0031" },
            { name: "Git", icon: "git", color: "#F05032" },
            { name: "Trello", icon: "trello", color: "#0052CC" },
          ],
        },
        {
          name: "Especialidades",
          items: [
            { name: "Mercado Livre", icon: "mercadolibre", color: "#FFE600" },
            { name: "Amazon", icon: "amazon", color: "#FF9900" },
            { name: "Arduino", icon: "arduino", color: "#00979D" },
            { name: "UiPath", icon: "uipath", color: "#FA4616" },
          ],
        },
      ],
    },
    learning: {
      title: "Aprendizado",
      educationLabel: "Formação Acadêmica",
      certificatesLabel: "Certificações",
      profilesLabel: "Perfis de Aprendizado",
      education: [
        {
          degree: "Bacharelado em Engenharia da Computação",
          institution: "Centro Universitário Facens",
          period: "2022 — Dez 2026",
          status: "Cursando",
        },
      ],
      certificates: [
        {
          title: "Soluções de IA no GitHub",
          issuer: "Fundação Bradesco (Microsoft)",
          year: "2026",
          credential:
            "https://lms.ev.org.br/mpls/Web/Lms/Student/PrintCertificateContent.aspx?uid=7689660&p=eiStijbB2F6xHW6GD4mnWeKQZ7XGYOEE",
        },
        {
          title: "Inteligência Artificial para ONGs",
          issuer: "Fundação Bradesco (Microsoft)",
          year: "2026",
          credential:
            "https://lms.ev.org.br/mpls/Web/Lms/Student/PrintCertificateContent.aspx?uid=7689660&p=eiStijbB2F6mr4L6LaGY%252fUD%252fg3id5HPt",
        },
        {
          title: "IA na Prática: Como Dados bem Estruturados fazem a Diferença",
          issuer: "Fundação Bradesco (Microsoft)",
          year: "2026",
          credential:
            "https://lms.ev.org.br/mpls/Web/Lms/Student/PrintCertificateContent.aspx?uid=7689660&p=eiStijbB2F6Cq8WwQA%252bTgLzVoZUjwz56",
        },
        {
          title: "Ética na Era da IA",
          issuer: "Fundação Bradesco (Microsoft)",
          year: "2026",
          credential:
            "https://lms.ev.org.br/mpls/Web/Lms/Student/PrintCertificateContent.aspx?uid=7689660&p=eiStijbB2F6Cq8WwQA%252bTgFo319goAEQX",
        },
        {
          title: "Comunicação e Mobilização com IA",
          issuer: "Fundação Bradesco (Microsoft)",
          year: "2026",
          credential:
            "https://lms.ev.org.br/mpls/Web/Lms/Student/PrintCertificateContent.aspx?uid=7689660&p=eiStijbB2F6Cq8WwQA%252bTgHyCKUSZ2yCd",
        },
      ],
      profiles: [
        { name: "GitHub", url: "https://github.com/Popriss" },
        {
          name: "LinkedIn Learning",
          url: "https://www.linkedin.com/in/pedro-modesto-0a3451250",
        },
      ],
    },
    languages: {
      title: "Idiomas",
      levels: {
        grammar: "Gramática",
        reading: "Leitura",
        listening: "Compreensão",
        speaking: "Conversação",
      },
      items: [
        {
          language: "Português",
          flag: "🇧🇷",
          native: true,
          nativeLabel: "Nativo",
          skills: null,
        },
        {
          language: "Inglês",
          flag: "🇺🇸",
          native: false,
          nativeLabel: null,
          skills: {
            grammar: 70,
            reading: 85,
            listening: 80,
            speaking: 60,
          },
        },
      ],
    },
    contact: {
      title: "Vamos conversar?",
      description:
        "Estou sempre aberto a novas oportunidades e projetos interessantes. Entre em contato!",
      email: "pedromodesto1712@gmail.com",
      phone: "+55 15 99685-8060",
      emailLabel: "Email",
      linkedinLabel: "LinkedIn",
      whatsappLabel: "WhatsApp",
    },
    footer: {
      rights: "Todos os direitos reservados.",
      madeWith: "Feito com",
    },
  },
  en: {
    hero: {
      name: "Pedro Modesto",
      role: "Computer Engineer / Full Stack & RPA Developer",
      location: "Sorocaba-SP, Brazil",
      greeting: "Hello, I'm",
      cta: "View Projects",
      ctaSecondary: "Contact",
    },
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      learning: "Learning",
      languages: "Languages",
      contact: "Contact",
    },
    about: {
      title: "About me",
      description:
        "Computer Engineering student with solid hands-on experience in Process Automation (RPA), Data Engineering, and E-commerce Operations. Focused on developing Full Stack solutions (Python) for API integration with major marketplaces (Mercado Livre, Amazon) and cash flow optimization. Experienced in building automated ecosystems using Cloud Computing (GCP/Cloudflare) and agile methodologies.",
      highlights: [
        "Process Automation (RPA)",
        "Data Engineering",
        "Full Stack Python",
        "Cloud Computing",
      ],
    },
    experience: {
      title: "Experience",
      items: [
        {
          company: "IDS - Instituto de Diagnóstico",
          role: "Intern & Project Leader",
          period: "08/2026 - Present",
          description:
            "Project Leadership: Leading the development and implementation of the company's new Intranet website, managing the project lifecycle from planning to execution.\n\nCorporate Communication & Digital Transformation: Creation of a centralized digital environment to optimize internal communication, streamline information flows, and facilitate access to institutional resources.\n\nAcademic & Practical Development: Fulfilling mandatory internship hours, applying academic technology and management concepts to corporate day-to-day operations.",
          techs: [
            "Project Leadership",
            "Intranet",
            "Digital Transformation",
            "Project Management",
            "Corporate Communication",
          ],
        },
        {
          company: "E-commerce CoutinhoShop",
          role: "Automation & Data Engineering",
          period: "11/2025 - 04/2026",
          description:
            "Responsible for structuring the Automation and Data Engineering department. Development of Python applications for order orchestration and task prioritization via Trello. Creation of promotion visualization system (Mercado Livre) and simultaneous image upload tool (Cloudflare R2) for multiple stores. Implementation of dashboards based on PostgreSQL and GCP.",
          techs: ["Python", "PostgreSQL", "GCP", "Cloudflare R2", "Trello API"],
        },
        {
          company: "WI Engenharia",
          role: "Industrial Solutions",
          period: "03/2023 - 07/2025",
          description:
            "Planning and execution of technical inspections. Development of customized industrial solutions for field service optimization.",
          techs: ["Industrial Automation", "Technical Inspections", "Optimization"],
        },
      ],
    },
    projects: {
      title: "Featured Projects",
      subtitle:
        "Click on any project to explore its architecture, key features, and technical details.",
      filterAll: "All",
      viewDetails: "View details",
      modalLabels: {
        overview: "Overview & Context",
        features: "Key Features",
        architecture: "Architecture & Technical Highlights",
        impact: "Impact & Results",
        techStack: "Tech Stack",
        previous: "Previous",
        next: "Next",
        close: "Close",
      },
      items: [
        {
          id: "solyd3d-erp",
          title: "Solyd3D — SaaS ERP & 3D Production Management",
          category: "SaaS & ERP",
          status: "In Production",
          highlight: "End-to-end ERP + MES for FDM additive manufacturing",
          description:
            "ERP and MES system for FDM 3D printing management featuring instant quoting, visual drag-and-drop Kanban, filament tracking in grams, consignment shipments, and financial netting between partners.",
          longDescription:
            "Built to solve the operational complexity of FDM 3D printing bureaus. Solyd3D unifies everything from precision part pricing (accounting for machine hours, depreciation, power consumption, failure rate, and exact filament usage in grams) to shop-floor execution (MES) and partner financial settlement.",
          features: [
            "Instant quoting engine calculating energy cost, printer depreciation, labor, and dynamic profit margins",
            "Visual drag-and-drop Kanban board for print queue management and real-time production status",
            "Filament spool inventory control with automatic gram-level deduction for every manufactured part",
            "Consignment shipment module to track parts sent to partner stores and manage periodic settlements",
            "Automated Financial Netting system for offsetting expenses, capital contributions, and profit sharing among partners",
            "Analytical dashboards for revenue, material profitability, and printer utilization rates",
          ],
          architecture:
            "Modern Full Stack architecture built with Next.js 16 (App Router) and React 19, leveraging Server Actions and protected API Routes with NextAuth.js. Relational persistence in PostgreSQL modeled via Prisma ORM with atomic transactions for inventory and financial ledger entries.",
          impact:
            "Eliminated manual quoting spreadsheets, reduced material waste through accurate spool tracking, and brought real-time accounting transparency to partners.",
          techs: [
            "Next.js 16",
            "React 19",
            "PostgreSQL",
            "Prisma ORM",
            "NextAuth.js",
            "Recharts",
            "Tailwind CSS",
          ],
        },
        {
          id: "solyd3d-store",
          title: "Solyd3D Store — E-commerce & Storefront",
          category: "E-commerce",
          status: "In Production",
          highlight: "Catalog synced in real time with active filament inventory",
          description:
            "E-commerce storefront integrated with the Solyd3D ERP, offering a parts catalog with a dynamic color selector powered by active filament inventory and a WhatsApp-based checkout.",
          longDescription:
            "Custom digital storefront designed for selling on-demand and ready-to-ship 3D-printed products. Directly connected to the Solyd3D ERP database, it ensures customers can only select colors and materials that are genuinely in stock on the shop floor.",
          features: [
            "Dynamic color and material selector (PLA, PETG, ABS, Silk) synced in real time with the ERP spool inventory",
            "Responsive catalog with category filters, instant search, and variation photo galleries",
            "Persistent shopping cart with detailed breakdown of chosen color variations per item",
            "Direct WhatsApp checkout with automated structured order summary and pre-registration",
            "SEO optimization and ultra-fast page loads powered by React Server Components and smart caching",
          ],
          architecture:
            "Next.js application sharing the PostgreSQL/Prisma data layer with the Solyd3D ERP, enabling direct reads of raw material availability without manual catalog syncing.",
          impact:
            "Eliminated orders for out-of-stock colors and streamlined custom order closing via WhatsApp with pre-validated technical specifications.",
          techs: ["Next.js", "React", "Prisma ORM", "PostgreSQL", "Tailwind CSS"],
        },
        {
          id: "nullport",
          title: "NullPort — Real-Time Ephemeral Chat",
          category: "Full Stack & Cloud",
          status: "Completed",
          highlight: "Zero-Login ephemeral chat with SSE firewall bypass",
          description:
            "Secure and ephemeral chat with Zero-Login access. Utilizes Server-Sent Events (SSE) for corporate firewall bypass, client-side image compression, and hybrid storage on Supabase and Cloudflare R2.",
          longDescription:
            "Instant communication platform focused on privacy, ephemerality, and network resilience. Engineered to operate reliably in restricted network environments where traditional WebSocket connections are blocked by corporate proxies or firewalls.",
          features: [
            "Zero-Login access: instant creation and joining of ephemeral rooms protected by hash/code without registration",
            "Real-time streaming via Server-Sent Events (SSE) over standard HTTP/HTTPS for maximum network compatibility",
            "Client-side image compression and resizing prior to upload to minimize latency and bandwidth usage",
            "Automatic expiration (TTL) and self-destruction of messages and media upon session termination",
            "Hybrid storage combining real-time metadata in Supabase with object storage in Cloudflare R2",
          ],
          architecture:
            "Asynchronous Python 3.12 backend with FastAPI managing low-latency SSE streams, paired with a React 19 frontend. Distributed object storage via Cloudflare R2 (S3-compatible) with lifecycle policies for automated purging.",
          impact:
            "Enables fast, secure exchange of text, code snippets, and screenshots across devices without leaving permanent traces or requiring personal authentication.",
          techs: [
            "Python 3.12",
            "FastAPI",
            "React 19",
            "SSE",
            "Supabase",
            "Cloudflare R2",
          ],
        },
        {
          id: "cvauto",
          title: "CVauto v7.0 — RPA & Data Governance",
          category: "RPA & Automation",
          status: "In Production (v7.0)",
          highlight: "Manifest V3 robot with crash-resilient memory and PDF audit logs",
          description:
            "Automation robot (Manifest V3) for batch cancellations in ClickVita. Features tabbed TSV input (Excel), Intelligent Skip logic, Server-Sync, anti-crash hybrid memory, and PDF audit report generation.",
          longDescription:
            "Enterprise Robotic Process Automation (RPA) tool built as a Chrome Extension (Manifest V3) to automate repetitive, mission-critical batch cancellation workflows in the ClickVita platform, ensuring end-to-end traceability and governance.",
          features: [
            "Direct batch import via tabbed TSV data (copy-and-paste directly from Excel/Spreadsheets)",
            "Intelligent Skip logic that detects already processed, inconsistent, or locked records without halting the queue",
            "Crash-resilient hybrid memory: continuous queue state persistence for exact resumption after page refreshes or session drops",
            "Server-Sync mechanism that waits for true backend confirmation before advancing to the next record",
            "Automated PDF Audit Report generation upon batch completion with timestamps, per-item statuses, and execution metrics",
          ],
          architecture:
            "Manifest V3 Chrome Extension utilizing resilient Content Scripts, DOM MutationObservers, state machine persisted across LocalStorage/Chrome Storage, and a client-side PDF generation engine.",
          impact:
            "Turned hours of error-prone manual labor into auditable automated batches with 100% traceability for operational compliance.",
          techs: [
            "JavaScript",
            "Chrome Extension (Manifest V3)",
            "RPA",
            "DOM Manipulation",
            "PDF Generation",
            "LocalStorage",
          ],
        },
        {
          id: "huggyhelper",
          title: "HuggyHelper v9.0 — Customer Support Copilot & Compliance",
          category: "RPA & Automation",
          status: "In Production (v9.0)",
          highlight: "Shadow DOM copilot with Ghost Mode and LGPD compliance",
          description:
            "Assistive extension for the Huggy.app platform. Utilizes Shadow DOM injection for visual isolation, dynamic text shortcuts, Chat ID-linked notes, an ergonomic Ghost Mode, and a Garbage Collector for LGPD compliance.",
          longDescription:
            "Productivity copilot for customer support teams using the Huggy.app platform. The extension injects a rich toolset directly into the agent workspace without conflicting with the host application's CSS or scripts.",
          features: [
            "Encapsulated Shadow DOM injection ensuring complete style isolation and zero conflicts with Huggy platform updates",
            "Contextual notepad system automatically linked to the active ticket's Chat ID",
            "Dynamic text shortcuts and quick variables for standardized, rapid agent responses",
            "Ergonomic Ghost Mode: translucent, collapsible UI that never obstructs message history reading",
            "Automated Garbage Collector for periodic purging of stale local data, ensuring full LGPD privacy compliance",
          ],
          architecture:
            "Modular JavaScript architecture (Manifest V3) using Web Components / Shadow DOM encapsulation, asynchronous state management via Chrome Storage API, and background TTL cleanup routines.",
          impact:
            "Significantly reduced Average Handle Time (AHT), organized context for complex support tickets, and ensured data privacy across operator browsers.",
          techs: [
            "JavaScript",
            "Shadow DOM",
            "Chrome Extension (Manifest V3)",
            "Chrome Storage API",
            "LGPD Compliance",
            "UX/UI",
          ],
        },
        {
          id: "sgi-sku",
          title: "SGI-SKU & Multi-Store Upload",
          category: "E-commerce",
          status: "In Production",
          highlight: "Centralized SKU management and simultaneous Cloud upload",
          description:
            "Image and SKU management system integrated with AWS and Cloudflare R2 for large-scale e-commerce operations.",
          longDescription:
            "Solution engineered to centralize the visual and product catalog across multiple e-commerce sales channels. Solves the bottleneck of hosting, standardizing, and distributing thousands of product photos linked to their respective SKUs.",
          features: [
            "Simultaneous batch upload of product images to cloud object storage (AWS S3 / Cloudflare R2)",
            "Structured mapping of photo galleries by parent SKU and variations in PostgreSQL",
            "Instant generation of optimized public URLs ready for bulk listing spreadsheets and marketplace API integrations",
            "Automated validation of file format, resolution, and naming conventions prior to publishing",
          ],
          architecture:
            "Python application integrated with S3/R2 buckets via boto3 and a PostgreSQL database for catalog indexing, acting as a Single Source of Truth for product media assets.",
          impact:
            "Drastically accelerated new listing creation across multiple stores and eliminated broken image links on marketplaces.",
          techs: ["Python", "AWS S3", "Cloudflare R2", "Amazon API", "PostgreSQL"],
        },
        {
          id: "order-assistant",
          title: "Order Assistant & Dynamic Pricing",
          category: "E-commerce",
          status: "In Production",
          highlight: "Order orchestration and promotion analytics on Mercado Livre",
          description:
            "Order orchestration automation and dynamic pricing system for e-commerce with multiple integrations.",
          longDescription:
            "Python automation ecosystem created to bridge marketplace sales operations (such as Mercado Livre) with team logistics workflows and financial profitability analysis for promotional campaigns.",
          features: [
            "Integration with Mercado Livre API to capture orders, shipping statuses, and active discount campaigns",
            "Automated task orchestration and operational cards via Trello API prioritized by shipping SLA",
            "Promotion visualization dashboard and net margin simulator accounting for variable marketplace fees and shipping costs",
            "Consolidation of operational metrics in a cloud PostgreSQL database (GCP) for management reporting",
          ],
          architecture:
            "Python pipelines and services consuming REST APIs (Mercado Livre and Trello), persisting analytical data in PostgreSQL hosted on Google Cloud Platform (GCP).",
          impact:
            "Prevented shipping delays (protecting seller account reputation) and stopped negative-margin sales during marketplace promotional events.",
          techs: [
            "Python",
            "Mercado Livre API",
            "Trello API",
            "RPA",
            "PostgreSQL",
            "GCP",
          ],
        },
        {
          id: "smart-greenhouse",
          title: "Smart and Renewable Greenhouse",
          category: "IoT & Hardware",
          status: "Academic Project",
          highlight: "Autonomous irrigation with sensor telemetry and C++",
          description:
            "Automated plant cultivation system utilizing Arduino, moisture sensors, and solenoids for smart irrigation.",
          longDescription:
            "Computer Engineering project focused on sustainability and agricultural/home automation. The system continuously monitors soil and environmental conditions to trigger irrigation only when strictly needed.",
          features: [
            "Continuous reading of soil moisture and environmental variables through a microcontroller sensor network",
            "Automated actuation of solenoid valves and water pumps with hysteresis control to prevent short-cycling",
            "Embedded C++ logic optimized for low power consumption and continuous autonomous operation",
            "Designed for rational water usage and environmental sustainability",
          ],
          architecture:
            "Arduino-based hardware programmed in C/C++, integrating analog/digital sensors, power relay modules, and hydraulic actuators (solenoid valves).",
          impact:
            "Demonstrated practical hardware-software integration for sustainable automation and water conservation.",
          techs: ["Arduino", "C++", "IoT", "Sensors", "Electronics"],
        },
        {
          id: "university-carpool",
          title: "University Carpool Platform",
          category: "Full Stack & Cloud",
          status: "Academic Project",
          highlight: "Route and schedule matching for the university community",
          description:
            "Web platform designed to facilitate ride-sharing among university students, featuring an automated matching system.",
          longDescription:
            "Collaborative web platform designed to connect university students commuting along similar daily routes, reducing transportation costs, carbon emissions, and campus parking congestion.",
          features: [
            "Registration of routes, class schedules, and available seats for student drivers and passengers",
            "Smart search and matching system based on schedule compatibility, origin neighborhoods, and destination",
            "Verified student profile management and shared trip history",
            "Responsive Single Page Application (SPA) interface consuming a structured RESTful API",
          ],
          architecture:
            "Angular frontend communicating with a Python REST API, backed by a PostgreSQL relational database modeling users, routes, and ride bookings.",
          impact:
            "Delivered a dedicated, safe urban mobility solution for students while applying solid Full Stack software engineering principles.",
          techs: ["Python", "Angular", "PostgreSQL", "REST API", "TypeScript"],
        },
      ],
    },
    skills: {
      title: "Skills & Technologies",
      categories: [
        {
          name: "Languages",
          items: [
            { name: "Python", icon: "python", color: "#3776AB" },
            { name: "JavaScript", icon: "javascript", color: "#F7DF1E" },
            { name: "Java", icon: "openjdk", color: "#ED8B00" },
            { name: "C++", icon: "cplusplus", color: "#00599C" },
            { name: "SQL", icon: "postgresql", color: "#4169E1" },
          ],
        },
        {
          name: "Cloud & Infra",
          items: [
            { name: "GCP", icon: "googlecloud", color: "#4285F4" },
            { name: "Cloudflare", icon: "cloudflare", color: "#F38020" },
            { name: "Docker", icon: "docker", color: "#2496ED" },
            { name: "PostgreSQL", icon: "postgresql", color: "#4169E1" },
          ],
        },
        {
          name: "Frameworks & Tools",
          items: [
            { name: "React", icon: "react", color: "#61DAFB" },
            { name: "Angular", icon: "angular", color: "#DD0031" },
            { name: "Git", icon: "git", color: "#F05032" },
            { name: "Trello", icon: "trello", color: "#0052CC" },
          ],
        },
        {
          name: "Specialties",
          items: [
            { name: "Mercado Livre", icon: "mercadolibre", color: "#FFE600" },
            { name: "Amazon", icon: "amazon", color: "#FF9900" },
            { name: "Arduino", icon: "arduino", color: "#00979D" },
            { name: "UiPath", icon: "uipath", color: "#FA4616" },
          ],
        },
      ],
    },
    learning: {
      title: "Learning",
      educationLabel: "Academic Background",
      certificatesLabel: "Certifications",
      profilesLabel: "Learning Profiles",
      education: [
        {
          degree: "Bachelor's in Computer Engineering",
          institution: "Centro Universitário Facens",
          period: "2022 — Dec 2026",
          status: "In Progress",
        },
      ],
      certificates: [
        {
          title: "AI Solutions on GitHub",
          issuer: "Bradesco Foundation (Microsoft)",
          year: "2026",
          credential:
            "https://lms.ev.org.br/mpls/Web/Lms/Student/PrintCertificateContent.aspx?uid=7689660&p=eiStijbB2F6xHW6GD4mnWeKQZ7XGYOEE",
        },
        {
          title: "Artificial Intelligence for Nonprofits",
          issuer: "Bradesco Foundation (Microsoft)",
          year: "2026",
          credential:
            "https://lms.ev.org.br/mpls/Web/Lms/Student/PrintCertificateContent.aspx?uid=7689660&p=eiStijbB2F6mr4L6LaGY%252fUD%252fg3id5HPt",
        },
        {
          title: "AI in Practice: How Well-Structured Data Makes a Difference",
          issuer: "Bradesco Foundation (Microsoft)",
          year: "2026",
          credential:
            "https://lms.ev.org.br/mpls/Web/Lms/Student/PrintCertificateContent.aspx?uid=7689660&p=eiStijbB2F6Cq8WwQA%252bTgLzVoZUjwz56",
        },
        {
          title: "Ethics in the Era of AI",
          issuer: "Bradesco Foundation (Microsoft)",
          year: "2026",
          credential:
            "https://lms.ev.org.br/mpls/Web/Lms/Student/PrintCertificateContent.aspx?uid=7689660&p=eiStijbB2F6Cq8WwQA%252bTgFo319goAEQX",
        },
        {
          title: "Communication and Engagement with AI",
          issuer: "Bradesco Foundation (Microsoft)",
          year: "2026",
          credential:
            "https://lms.ev.org.br/mpls/Web/Lms/Student/PrintCertificateContent.aspx?uid=7689660&p=eiStijbB2F6Cq8WwQA%252bTgHyCKUSZ2yCd",
        },
      ],
      profiles: [
        { name: "GitHub", url: "https://github.com/Popriss" },
        {
          name: "LinkedIn Learning",
          url: "https://www.linkedin.com/in/pedro-modesto-0a3451250",
        },
      ],
    },
    languages: {
      title: "Languages",
      levels: {
        grammar: "Grammar",
        reading: "Reading",
        listening: "Listening",
        speaking: "Speaking",
      },
      items: [
        {
          language: "Portuguese",
          flag: "🇧🇷",
          native: true,
          nativeLabel: "Native",
          skills: null,
        },
        {
          language: "English",
          flag: "🇺🇸",
          native: false,
          nativeLabel: null,
          skills: {
            grammar: 70,
            reading: 85,
            listening: 80,
            speaking: 60,
          },
        },
      ],
    },
    contact: {
      title: "Let's talk?",
      description:
        "I'm always open to new opportunities and interesting projects. Get in touch!",
      email: "pedromodesto1712@gmail.com",
      phone: "+55 15 99685-8060",
      emailLabel: "Email",
      linkedinLabel: "LinkedIn",
      whatsappLabel: "WhatsApp",
    },
    footer: {
      rights: "All rights reserved.",
      madeWith: "Made with",
    },
  },
} as const;

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/pedro-modesto-0a3451250",
  email: "mailto:pedromodesto1712@gmail.com",
  github: "https://github.com/Popriss",
  whatsapp: "https://wa.me/5515996858060",
  phone: "tel:+5515996858060",
} as const;

export type Language = "pt" | "en";
export type PortfolioData = typeof portfolioData;
export type ProjectItem = PortfolioData[Language]["projects"]["items"][number];
