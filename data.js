// ============================================
// BASE DE DADOS DE FERRAMENTAS IA
// ============================================

const QUESTIONS = [
    {
        id: "skill_level",
        question: "Qual é seu nível de habilidade com IA?",
        icon: "🎓",
        type: "single",
        description: "Escolha o nível que melhor descreve sua experiência",
        options: [
            {
                value: "accessible",
                label: "Acessível",
                icon: "🟢",
                description: "Iniciante, sem experiência técnica"
            },
            {
                value: "challenge",
                label: "Desafio",
                icon: "🟡",
                description: "Intermediário, com alguns conhecimentos"
            },
            {
                value: "complex",
                label: "Complexo",
                icon: "🔴",
                description: "Avançado, experiência técnica aprofundada"
            }
        ]
    },
    {
        id: "project_type",
        question: "Qual é o objetivo principal do seu projeto?",
        icon: "🎯",
        type: "single",
        description: "Selecione o tipo de projeto que melhor se aplica",
        options: [
            {
                value: "colaboracao",
                label: "Colaboração",
                icon: "👥",
                description: "Trabalho em equipe, comunicação"
            },
            {
                value: "prototipagem",
                label: "Prototipagem",
                icon: "🔨",
                description: "Criação rápida, testes e iteração"
            },
            {
                value: "automacao",
                label: "Automação",
                icon: "⚙️",
                description: "Automatizar processos e tarefas"
            }
        ]
    },
    {
        id: "cost_license",
        question: "Qual é sua preferência de custo e licença?",
        icon: "💰",
        type: "single",
        description: "Escolha entre opções de licença",
        options: [
            {
                value: "open-source",
                label: "Open-source",
                icon: "🔓",
                description: "Código aberto, gratuito"
            },
            {
                value: "proprietario",
                label: "Proprietário",
                icon: "🔐",
                description: "Solução comercial, com suporte"
            }
        ]
    },
    {
        id: "control_level",
        question: "Que tipo de controle você prefere?",
        icon: "🎛️",
        type: "single",
        description: "Escolha entre flexibilidade ou praticidade",
        options: [
            {
                value: "flexibilidade_total",
                label: "Flexibilidade Total",
                icon: "🌊",
                description: "Customização completa, controle total"
            },
            {
                value: "solucao_pronta",
                label: "Solução Pronta",
                icon: "📦",
                description: "Plug and play, fácil de usar"
            }
        ]
    }
];

const TOOLS = [
    // ===== TIER 1: Ferramentas Universais =====
    {
        id: "chatgpt",
        name: "ChatGPT Plus",
        category: "IA Generativa",
        shortDescription: "Modelo de linguagem conversacional avançado",
        fullDescription: "ChatGPT é um modelo de linguagem de grande porte desenvolvido pela OpenAI. Oferece capacidades conversacionais excecionais, análise de texto, geração de código e muito mais.",
        icon: "💬",
        license: "proprietario",
        skillLevels: ["accessible", "challenge", "complex"],
        projectTypes: ["colaboracao", "prototipagem", "automacao"],
        controlLevel: ["solucao_pronta", "flexibilidade_total"],
        link: "https://chat.openai.com",
        tags: ["conversacao", "escrita", "analise", "codigo"],
        matchReasons: {
            accessible: "Interface intuitiva e acessível",
            challenge: "Capaz de lidar com tarefas complexas",
            complex: "API poderosa para integrações avançadas"
        }
    },
    {
        id: "claude",
        name: "Claude 3 (Anthropic)",
        category: "IA Generativa",
        shortDescription: "Modelo de linguagem seguro e amigável",
        fullDescription: "Claude é um assistente de IA criado pela Anthropic com foco em segurança e alinhamento. Excelente para escrita, análise e raciocínio lógico.",
        icon: "🧠",
        license: "proprietario",
        skillLevels: ["accessible", "challenge", "complex"],
        projectTypes: ["colaboracao", "prototipagem"],
        controlLevel: ["solucao_pronta"],
        link: "https://claude.ai",
        tags: ["analise", "escrita", "pesquisa", "resumo"],
        matchReasons: {
            accessible: "Muito amigável e seguro",
            challenge: "Excelente raciocínio lógico"
        }
    },
    {
        id: "perplexity",
        name: "Perplexity AI",
        category: "IA Generativa",
        shortDescription: "Assistente de IA com busca na web",
        fullDescription: "Perplexity combina IA conversacional com busca na web em tempo real. Perfeito para pesquisa e análise de informações atualizadas.",
        icon: "🔍",
        license: "proprietario",
        skillLevels: ["accessible", "challenge"],
        projectTypes: ["pesquisa", "colaboracao"],
        controlLevel: ["solucao_pronta"],
        link: "https://www.perplexity.ai",
        tags: ["pesquisa", "web", "analise"],
        matchReasons: {
            accessible: "Busca integrada e fácil",
            challenge: "Informações atualizadas em tempo real"
        }
    },

    // ===== TIER 2: Ferramentas de Código =====
    {
        id: "copilot",
        name: "GitHub Copilot",
        category: "Desenvolvimento",
        shortDescription: "Assistente de IA para programação",
        fullDescription: "GitHub Copilot é um assistente de IA que ajuda você a escrever código mais rápido. Suporta múltiplas linguagens e integra-se com seu editor de código.",
        icon: "⚙️",
        license: "proprietario",
        skillLevels: ["challenge", "complex"],
        projectTypes: ["desenvolvimento", "automacao"],
        controlLevel: ["solucao_pronta"],
        link: "https://github.com/features/copilot",
        tags: ["codigo", "desenvolvimento", "automacao"],
        matchReasons: {
            challenge: "Integração perfeita com IDE",
            complex: "Suporta múltiplas linguagens de programação"
        }
    },
    {
        id: "tabnine",
        name: "Tabnine",
        category: "Desenvolvimento",
        shortDescription: "Autocompletar inteligente para código",
        fullDescription: "Tabnine é um assistente de IA que oferece autocompletar avançado para desenvolvimento. Funciona offline com modelos locais.",
        icon: "✨",
        license: "proprietario",
        skillLevels: ["accessible", "challenge", "complex"],
        projectTypes: ["desenvolvimento"],
        controlLevel: ["flexibilidade_total"],
        link: "https://www.tabnine.com",
        tags: ["codigo", "desenvolvimento", "ide"],
        matchReasons: {
            accessible: "Fácil de instalar e usar",
            complex: "Modelos locais para máxima privacidade"
        }
    },

    // ===== TIER 3: Ferramentas de Design =====
    {
        id: "midjourney",
        name: "Midjourney",
        category: "Design",
        shortDescription: "Gerador de imagens por IA",
        fullDescription: "Midjourney é uma plataforma de geração de imagens usando IA. Perfeita para criar ilustrações, design e conceitos visuais.",
        icon: "🎨",
        license: "proprietario",
        skillLevels: ["accessible", "challenge"],
        projectTypes: ["prototipagem", "design"],
        controlLevel: ["solucao_pronta"],
        link: "https://www.midjourney.com",
        tags: ["imagem", "design", "arte", "visual"],
        matchReasons: {
            accessible: "Prompts em linguagem natural",
            challenge: "Controle fino sobre resultados"
        }
    },
    {
        id: "stable-diffusion",
        name: "Stable Diffusion",
        category: "Design",
        shortDescription: "Gerador de imagens open-source",
        fullDescription: "Stable Diffusion é um modelo de difusão de texto para imagem de código aberto. Pode ser instalado localmente para total controle.",
        icon: "🖼️",
        license: "open-source",
        skillLevels: ["challenge", "complex"],
        projectTypes: ["prototipagem", "design"],
        controlLevel: ["flexibilidade_total"],
        link: "https://stability.ai",
        tags: ["imagem", "design", "open-source", "local"],
        matchReasons: {
            challenge: "Pode ser hospedado localmente",
            complex: "Customização completa de modelos"
        }
    },
    {
        id: "canva-ai",
        name: "Canva AI",
        category: "Design",
        shortDescription: "Design gráfico com IA",
        fullDescription: "Canva integra IA para auxiliar no design gráfico. Templates, gerador de imagens e edição simplificada.",
        icon: "🎭",
        license: "proprietario",
        skillLevels: ["accessible"],
        projectTypes: ["prototipagem", "design"],
        controlLevel: ["solucao_pronta"],
        link: "https://www.canva.com",
        tags: ["design", "grafico", "template", "intuitivo"],
        matchReasons: {
            accessible: "Interface super amigável"
        }
    },

    // ===== TIER 4: Ferramentas de Automação =====
    {
        id: "zapier",
        name: "Zapier",
        category: "Automação",
        shortDescription: "Automatização de workflows entre apps",
        fullDescription: "Zapier conecta suas ferramentas favoritas e automatiza fluxos de trabalho. Integra-se com centenas de aplicativos.",
        icon: "⚡",
        license: "proprietario",
        skillLevels: ["accessible", "challenge"],
        projectTypes: ["automacao", "colaboracao"],
        controlLevel: ["solucao_pronta"],
        link: "https://zapier.com",
        tags: ["automacao", "integracao", "workflow"],
        matchReasons: {
            accessible: "Visual workflow builder",
            challenge: "Integração com centenas de apps"
        }
    },
    {
        id: "make",
        name: "Make (Integromat)",
        category: "Automação",
        shortDescription: "Plataforma de automação visual",
        fullDescription: "Make permite automatizar processos complexos com uma interface visual. Oferece ferramentas poderosas de integração.",
        icon: "🔗",
        license: "proprietario",
        skillLevels: ["challenge", "complex"],
        projectTypes: ["automacao"],
        controlLevel: ["flexibilidade_total"],
        link: "https://www.make.com",
        tags: ["automacao", "integracao", "workflow", "complexo"],
        matchReasons: {
            challenge: "Interface poderosa mas intuitiva",
            complex: "Lógicas complexas e customização avançada"
        }
    },

    // ===== TIER 5: Ferramentas Agênticas =====
    {
        id: "langchain",
        name: "LangChain",
        category: "Agentes de IA",
        shortDescription: "Framework para construir aplicações de IA",
        fullDescription: "LangChain é um framework open-source para construir aplicações com modelos de linguagem. Oferece abstrações para chains, agents e memory.",
        icon: "🔗",
        license: "open-source",
        skillLevels: ["challenge", "complex"],
        projectTypes: ["desenvolvimento", "automacao"],
        controlLevel: ["flexibilidade_total"],
        link: "https://www.langchain.com",
        tags: ["framework", "developers", "open-source", "agents"],
        matchReasons: {
            challenge: "Documentação excelente",
            complex: "Construir agents e chains customizadas"
        }
    },
    {
        id: "openai-api",
        name: "OpenAI API",
        category: "Desenvolvimento",
        shortDescription: "API para integrar GPT em aplicações",
        fullDescription: "A API da OpenAI permite integrar GPT-4, GPT-3.5 e outros modelos em suas aplicações. Perfeita para builders e developers.",
        icon: "🔌",
        license: "proprietario",
        skillLevels: ["challenge", "complex"],
        projectTypes: ["desenvolvimento", "automacao"],
        controlLevel: ["flexibilidade_total"],
        link: "https://openai.com/api",
        tags: ["api", "developers", "integracao", "customizacao"],
        matchReasons: {
            challenge: "Fácil de integrar",
            complex: "Controle total sobre os modelos"
        }
    },

    // ===== TIER 6: Ferramentas de Colaboração =====
    {
        id: "microsoft-copilot",
        name: "Microsoft Copilot Pro",
        category: "Colaboração",
        shortDescription: "IA integrada no ecossistema Microsoft",
        fullDescription: "Microsoft Copilot Pro traz IA aos produtos Microsoft. Integração com Office, Teams, Outlook e mais.",
        icon: "🔷",
        license: "proprietario",
        skillLevels: ["accessible", "challenge"],
        projectTypes: ["colaboracao", "prototipagem"],
        controlLevel: ["solucao_pronta"],
        link: "https://copilot.microsoft.com",
        tags: ["microsoft", "colaboracao", "office", "productividade"],
        matchReasons: {
            accessible: "Integrado no Microsoft 365",
            challenge: "Sem curva de aprendizagem"
        }
    },
    {
        id: "notion-ai",
        name: "Notion AI",
        category: "Colaboração",
        shortDescription: "IA para notas e organização",
        fullDescription: "Notion AI integra assistente de IA para escrita, geração de conteúdo e organização de informações.",
        icon: "📝",
        license: "proprietario",
        skillLevels: ["accessible"],
        projectTypes: ["colaboracao", "prototipagem"],
        controlLevel: ["solucao_pronta"],
        link: "https://www.notion.so",
        tags: ["notas", "colaboracao", "produtividade"],
        matchReasons: {
            accessible: "Muito intuitivo e direto"
        }
    },

    // ===== TIER 7: Ferramentas Especializadas =====
    {
        id: "hugging-face",
        name: "Hugging Face",
        category: "Agentes de IA",
        shortDescription: "Comunidade e repositório de modelos IA",
        fullDescription: "Hugging Face é a maior comunidade de modelos de IA open-source. Oferece modelos, datasets e ferramentas de IA.",
        icon: "🤗",
        license: "open-source",
        skillLevels: ["challenge", "complex"],
        projectTypes: ["desenvolvimento", "pesquisa"],
        controlLevel: ["flexibilidade_total"],
        link: "https://huggingface.co",
        tags: ["open-source", "modelos", "comunidade", "datasets"],
        matchReasons: {
            challenge: "Modelos pré-treinados prontos",
            complex: "Comunidade ativa e suporte"
        }
    },
    {
        id: "vertex-ai",
        name: "Google Vertex AI",
        category: "Desenvolvimento",
        shortDescription: "Plataforma IA do Google Cloud",
        fullDescription: "Vertex AI é a plataforma de IA do Google Cloud. Oferece ferramentas para build, train e deploy de modelos de IA.",
        icon: "☁️",
        license: "proprietario",
        skillLevels: ["challenge", "complex"],
        projectTypes: ["desenvolvimento", "automacao"],
        controlLevel: ["flexibilidade_total"],
        link: "https://cloud.google.com/vertex-ai",
        tags: ["cloud", "google", "mlops", "enterprise"],
        matchReasons: {
            challenge: "Infraestrutura poderosa",
            complex: "Ferramentas enterprise completas"
        }
    },
    {
        id: "aws-sagemaker",
        name: "AWS SageMaker",
        category: "Desenvolvimento",
        shortDescription: "Serviço de machine learning da AWS",
        fullDescription: "Amazon SageMaker é um serviço gerenciado para build, train e deploy de modelos de ML em escala.",
        icon: "🦾",
        license: "proprietario",
        skillLevels: ["complex"],
        projectTypes: ["desenvolvimento", "automacao"],
        controlLevel: ["flexibilidade_total"],
        link: "https://aws.amazon.com/sagemaker",
        tags: ["aws", "mlops", "cloud", "enterprise"],
        matchReasons: {
            complex: "Escalabilidade e performance"
        }
    },

    // ===== TIER 8: Ferramentas Emergentes =====
    {
        id: "dify",
        name: "Dify",
        category: "Agentes de IA",
        shortDescription: "Plataforma open-source para apps de IA",
        fullDescription: "Dify é uma plataforma open-source para criar aplicações de IA sem código. Interface visual para definir workflows.",
        icon: "🎯",
        license: "open-source",
        skillLevels: ["accessible", "challenge"],
        projectTypes: ["prototipagem", "automacao"],
        controlLevel: ["solucao_pronta", "flexibilidade_total"],
        link: "https://dify.ai",
        tags: ["no-code", "open-source", "agentes", "workflows"],
        matchReasons: {
            accessible: "Interface visual e intuitiva",
            challenge: "Customização avançada disponível"
        }
    },
    {
        id: "n8n",
        name: "n8n",
        category: "Automação",
        shortDescription: "Automação de workflows open-source",
        fullDescription: "n8n é uma plataforma de automação de workflows open-source. Pode ser auto-hospedada para total controle.",
        icon: "🔄",
        license: "open-source",
        skillLevels: ["challenge", "complex"],
        projectTypes: ["automacao"],
        controlLevel: ["flexibilidade_total"],
        link: "https://n8n.io",
        tags: ["open-source", "automacao", "self-hosted", "workflows"],
        matchReasons: {
            challenge: "Interface visual mas poderosa",
            complex: "Hospedagem própria e customização total"
        }
    },

    // ===== FERRAMENTAS ESPECÍFICAS POR USO =====
    {
        id: "synthesia",
        name: "Synthesia",
        category: "Design",
        shortDescription: "Gerador de vídeos com IA",
        fullDescription: "Synthesia cria vídeos com personagens animados gerados por IA. Perfeito para criar conteúdo de vídeo rapidamente.",
        icon: "🎬",
        license: "proprietario",
        skillLevels: ["accessible"],
        projectTypes: ["prototipagem", "design"],
        controlLevel: ["solucao_pronta"],
        link: "https://www.synthesia.io",
        tags: ["video", "design", "criacao", "rapido"],
        matchReasons: {
            accessible: "Muito fácil de usar"
        }
    },
    {
        id: "copy-ai",
        name: "Copy.ai",
        category: "IA Generativa",
        shortDescription: "Gerador de copywriting com IA",
        fullDescription: "Copy.ai ajuda você a escrever textos persuasivos com IA. Perfeito para marketing, vendas e conteúdo.",
        icon: "📄",
        license: "proprietario",
        skillLevels: ["accessible", "challenge"],
        projectTypes: ["colaboracao", "prototipagem"],
        controlLevel: ["solucao_pronta"],
        link: "https://www.copy.ai",
        tags: ["escrita", "marketing", "copywriting", "rapido"],
        matchReasons: {
            accessible: "Templates prontos",
            challenge: "Customização de tons de voz"
        }
    },
    {
        id: "otter",
        name: "Otter.ai",
        category: "Colaboração",
        shortDescription: "Transcrição e notas de reuniões",
        fullDescription: "Otter.ai transcreve reuniões automaticamente e gera resumos. Integra-se com Zoom, Google Meet e Teams.",
        icon: "🎤",
        license: "proprietario",
        skillLevels: ["accessible"],
        projectTypes: ["colaboracao"],
        controlLevel: ["solucao_pronta"],
        link: "https://otter.ai",
        tags: ["transcricao", "reunioes", "notas", "colaboracao"],
        matchReasons: {
            accessible: "Plug and play com videoconferências"
        }
    }
];

// ============================================
// FUNÇÃO AUXILIAR: Obter perguntas
// ============================================

function getQuestions() {
    return QUESTIONS;
}

function getTools() {
    return TOOLS;
}

function getQuestionById(id) {
    return QUESTIONS.find(q => q.id === id);
}

function getToolById(id) {
    return TOOLS.find(t => t.id === id);
}