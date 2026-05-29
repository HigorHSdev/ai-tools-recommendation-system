# 🤖 AI Tools Finder — Recomendador Inteligente de Ferramentas de IA

O **AI Tools Finder** é uma plataforma web moderna, interativa e altamente responsiva projetada para recomendar ferramentas de Inteligência Artificial de forma personalizada. A partir de um questionário dinâmico focado nas necessidades reais do usuário e um assistente inteligente integrado ("Ajuda IA"), o sistema atua de maneira consultiva, sugerindo as melhores opções baseadas em critérios de habilidade, objetivos, custos e nível de controle.

Este projeto foi concebido sob a lógica de **desenvolvimento orientado por IA agêntica, prompts e construção sob demanda (Prompt-Driven Development / SDD)**.

---

## 📌 O Prompt Inicial

Este sistema foi concebido e estruturado a partir da especificação rigorosa do seguinte prompt de engenharia de software e design de interação:

> ### 📝 Prompt Original de Geração
>
> Você é um especialista em desenvolvimento de sistemas utilizando ferramentas de IA agênticas e construção orientada por prompts. Seu objetivo é PRODUZIR um sistema funcional seguindo rigorosamente os requisitos abaixo.
>
> **IMPORTANTE:**
> - NÃO utilizar programação manual (hard code tradicional).
> - O desenvolvimento deve ser orientado por IA, prompts e ferramentas agênticas.
> - O sistema deve seguir a lógica de SDD (Software Design Document), especificando arquitetura antes da construção.
> - O sistema precisa ter interface moderna, intuitiva, limpa e objetiva.
> - O sistema deve ser totalmente funcional.
>
> **OBJETIVO DO SISTEMA:**
> Criar um sistema de recomendação inteligente de ferramentas de IA baseado em perguntas feitas ao usuário. O sistema deve atuar como um assistente de recomendação, identificando necessidades e sugerindo ferramentas adequadas.
>
> **FUNCIONAMENTO DO SISTEMA:**
> 1. **INTERFACE:** O sistema deve possuir uma interface simples, intuitiva, responsiva, moderna e objetiva. A tela inicial deve conter perguntas que identifiquem a necessidade do usuário.
> 2. **PERGUNTAS OBRIGATÓRIAS (FILTROS LÓGICOS):**
>    - **A) Nível de Habilidade:** Acessível, Desafio, Complexo.
>    - **B) Objetivo do Projeto:** Colaboração, Prototipagem, Automação.
>    - **C) Custo e Licença:** Open-source, Proprietário.
>    - **D) Controle:** Flexibilidade total, Solução pronta.
> 3. **MECANISMO DE RECOMENDAÇÃO:**
>    - Processar respostas, aplicar filtros inteligentes, exibir recomendações e mostrar justificativas claras.
>    - Cada recomendação inclui: Nome da ferramenta, categoria, descrição curta, motivo da recomendação, tipo de licença, nível de complexidade e link oficial da ferramenta.
> 4. **BOTÃO DE AJUDA INTUITIVA (OBRIGATÓRIO):**
>    - Botão "Ajuda IA" visível que abre um campo de chat interativo.
>    - O usuário pode tirar dúvidas livres como: *"O que significa controle?"* ou *"Qual a diferença entre open-source e proprietário?"*.
>    - A IA deve responder dinamicamente explicando critérios e conceitos de forma agêntica.
> 5. **EXPERIÊNCIA DO USUÁRIO (UX):**
>    - Barra de progresso, botões claros, feedback visual rápido, layout responsivo e transições agradáveis.
> 6. **ARQUITETURA (SDD):**
>    - Apresentar especificação completa antes da geração do código.

---

## 🏛️ SDD (Software Design Document)

Seguindo os preceitos do prompt, o sistema foi estruturado conforme o seguinte documento de design:

```
┌────────────────────────────────────────────────────────┐
│                      INTERFACE (UI)                    │
│      [ index.html ] ◄────► [ styles.css (Plus Jakarta) ]│
└───────────┬────────────────────────────────────────────┘
            │
            ▼
┌────────────────────────────────────────────────────────┐
│                    CONTROLADOR GERAL                   │
│      [ app.js ] (Gerencia estados, navegação e UX)     │
└─────┬───────────────────────────┬──────────────────────┘
      │                           │
      ▼                           ▼
┌──────────────────────────┐┌────────────────────────────┐
│  MOTOR DE RECOMENDAÇÃO   ││        ASSISTENTE IA       │
│[ recommendations-engine.js]││[ ai-assistant.js ] (Mock/  │
│(Algoritmo de Peso/Pontos)││     Processamento Natural) │
└─────────────┬────────────┘└────────────────────────────┘
              │
              ▼
┌────────────────────────────────────────────────────────┐
│                  BASE DE CONHECIMENTO                  │
│      [ data.js ] (Estrutura de Questões e Ferramentas)  │
└────────────────────────────────────────────────────────┘
```

### A. Escopo do Sistema
O sistema visa responder à dor de desenvolvedores, designers e profissionais de tecnologia na escolha de ferramentas de IA ideais para seus projetos, reduzindo a sobrecarga de escolhas (analysis paralysis) por meio de um funil lógico focado em comportamento e necessidade do usuário, em vez de filtros puramente técnicos.

### B. Arquitetura do Sistema
A arquitetura é baseada em uma aplicação web estática ("Single Page App" pura) desenvolvida de forma modular no front-end:
*   **Camada de Apresentação (HTML5 / CSS3):** Design construído com variáveis globais CSS, tipografia premium por fontes otimizadas (**Plus Jakarta Sans** e **Outfit**), layouts flexíveis (`Flexbox`/`CSS Grid`) e suporte responsivo completo.
*   **Camada de Controle e Estado (`app.js`):** Gerencia a navegação por seções ocultas/ativas, controla o estado do perfil do usuário e orquestra a transição de telas e inputs.
*   **Camada Lógica e de Negócio (`recommendations-engine.js`):** Processa o perfil coletado contra a base de dados utilizando pesos parametrizados.
*   **Camada Cognitiva Simulada (`ai-assistant.js`):** Implementa um motor de conversação local, interpretando intenções de linguagem natural sobre os termos e conceitos de IA do formulário.
*   **Camada de Dados (`data.js`):** Centraliza as questões e ferramentas recomendadas estruturadas de modo que novas ferramentas ou opções possam ser integradas sem alterar a lógica de renderização ou o motor de recomendação.

### C. Fluxo do Usuário
1.  **Welcome Section:** Apresentação da ferramenta, tempo estimado (2 min) e botão de início.
2.  **Questionnaire Section:** Pergunta por pergunta. A barra de progresso avança 25% a cada resposta. O botão "Próximo" só é liberado ao selecionar uma opção.
3.  **Loading Efetivo:** Um pequeno loader visual de processamento de recomendações simula o processamento inteligente em 600ms para enriquecer a experiência de usuário.
4.  **Recommendations Section:** Exibição elegante em cards contendo as ferramentas com maior nível de compatibilidade (porcentagem de match), tags, metadados e um parágrafo personalizado que explica de forma clara *por que* a IA fez aquela sugestão específica.
5.  **Smart Assistant Interface (Interação Paralela):** A qualquer momento do fluxo, o usuário pode clicar em **"Ajuda IA"** no topo superior direito para esclarecer dúvidas em linguagem natural.

### D. Componentes Principais
*   **Question Card:** Renderizado em tempo real baseado no estado atual da pergunta (`currentStep`). Garante modularidade e adaptabilidade rápida caso surjam novos filtros.
*   **Recommendation Card:** Exibe o percentual exato de compatibilidade, descrição curta da ferramenta, tags e justificativas de forma estruturada.
*   **Help Modal:** Interface de chat embutida com rolagem automática suave e tratamento rápido de envio.

### E. Estrutura do Motor de Recomendação
Em vez de um filtro simples do tipo "tudo ou nada" (que poderia facilmente retornar 0 resultados se o usuário fizesse escolhas muito específicas), o motor aplica um **algoritmo de pontuação e peso semântico**:
*   **Habilidade Recomendada:** +30 pontos
*   **Objetivo do Projeto:** +25 pontos
*   **Custo e Licença:** +25 pontos
*   **Nível de Controle:** +20 pontos

A pontuação total de match varia de 0 a 100 pontos. O sistema exibe ferramentas que alcancem no mínimo **60% de compatibilidade** (Match ≥ 0.6), ordenando-as da maior pontuação para a menor.

### F. Como funciona a "Ajuda IA"
A inteligência do chat agêntico foi desenvolvida via processamento local de intenções e detecção semântica em linguagem natural (`NLP`). Quando o usuário digita uma pergunta livre sobre um conceito técnico:
1.  O sistema sanitiza e busca palavras-chave (como *controle*, *open-source*, *automação*, *licença*, *habilidade*).
2.  Cruza essas palavras-chave com as estruturas lógicas do questionário.
3.  Devolve uma resposta fluida e explicativa sobre como aquele critério afeta a recomendação das IAs de forma natural.
4.  Possui um *fallback* inteligente caso o assunto fuja do escopo da recomendação do sistema.

### G. Tecnologias Utilizadas
*   **HTML5 Semântico:** Para estrutura limpa, acessível e otimizada.
*   **CSS3 Vanilla Moderno:** Organizado com arquitetura de variáveis (`:root`), transições aceleradas por hardware, gradientes modernos e total responsividade.
*   **JavaScript ES6+ nativo:** Para manipulação assíncrona da DOM, motor de busca e processamento de linguagem natural do chat.
*   **Google Fonts:** Fontes *Outfit* (headings dinâmicas) e *Plus Jakarta Sans* (leitura do corpo limpa).
*   **Dev Server:** Inicializado dinamicamente via `http-server` integrado no ecossistema do Node.js.

---

## 📁 Estrutura do Projeto

O diretório do projeto está organizado de forma modular, separando responsabilidades:

```bash
ai-tools-recommendation-system/
│
├── index.html                  # Estrutura e marcação SPA principal
├── styles.css                  # Folha de estilos premium responsiva (variáveis, temas)
│
├── data.js                     # Base de dados (questões estruturadas e lista de IAs)
├── recommendations-engine.js   # Algoritmo de cálculo de match e score
├── ai-assistant.js             # Lógica e mock dinâmico do assistente de ajuda
├── app.js                      # Controlador de UI/UX, progresso e estados globais
│
├── package.json                # Gerenciamento de scripts e dependência do servidor local
└── README.md                   # Documentação detalhada do sistema
```

---

## ⚡ Como Executar o Sistema

Para executar e testar o sistema no seu navegador localmente, siga os passos abaixo:

### Pré-requisitos
*   Ter o [Node.js](https://nodejs.org) instalado na sua máquina (versão LTS recomendada).

### Passo a Passo

1.  **Navegue até o diretório do projeto:**
    ```bash
    cd c:\Users\higor\OneDrive\Desktop\ai-tools-recommendation-system
    ```

2.  **Inicie o Servidor de Desenvolvimento:**
    O projeto já está configurado com um script de dev. Basta rodar:
    ```bash
    npm run dev
    ```
    *(Este comando iniciará o `http-server` na porta 3000 de forma automática).*

3.  **Acesse no seu navegador:**
    Abra o seu navegador de preferência e acesse:
    👉 **[http://localhost:3000](http://localhost:3000)**

---

## 📈 Lógica e Flexibilidade de Expansão

O design de dados foi criado especificamente para ser **extensível**.

### Adicionando novas perguntas:
Se você desejar expandir o questionário para incluir, por exemplo, "Suporte Multilíngue" no futuro, basta adicionar o novo objeto de questão em `data.js` dentro do array `QUESTIONS`:

```javascript
// Exemplo de expansão em data.js
{
    id: "language_support",
    question: "Você precisa de suporte em português?",
    icon: "🌐",
    type: "single",
    description: "Escolha entre suporte nacional ou internacional",
    options: [
        { value: "pt", label: "Sim, nativo", icon: "🇧🇷" },
        { value: "en", label: "Apenas inglês basta", icon: "🇺🇸" }
    ]
}
```

E no motor de recomendação (`recommendations-engine.js`), basta adicionar uma nova verificação de pontuação incrementando o peso no cálculo do match!

---

## 🚀 Sugestões de Melhorias Futuras

1.  **Conexão Real com APIs de LLMs:**
    No arquivo [`ai-assistant.js`](file:///c:/Users/higor/OneDrive/Desktop/ai-tools-recommendation-system/ai-assistant.js), o chat de ajuda está mockado localmente para agilidade. Uma evolução imediata seria integrar uma chamada de API real do Google Gemini (ou OpenAI) usando o SDK do cliente ou rotas de back-end em Node.js.
2.  **Exportação em PDF ou Relatório:**
    Implementar uma biblioteca front-end como `jspdf` para permitir que o usuário faça o download das recomendações geradas em um documento PDF corporativo.
3.  **Persistência de Resultados:**
    Utilizar o `localStorage` do navegador para manter as últimas recomendações salvas para que o usuário não as perca ao atualizar a página acidentalmente.
4.  **Filtros Avançados Dinâmicos (Pós-Recomendação):**
    Adicionar um campo de pesquisa por texto ou botões rápidos para filtrar os cards de recomendações sugeridos na tela final de resultados (ex: filtrar apenas as que possuem a tag "imagem").
