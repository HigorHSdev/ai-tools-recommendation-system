// ============================================
// AJUDA IA VIA API (MOCK local para protótipo)
// ============================================

// Prompt base do sistema
const HELP_PROMPT_SYSTEM = `Você é um assistente amigável que ajuda usuários a entender um sistema de recomendação de ferramentas de IA.
Explique conceitos como: níveis de habilidade, licenças, automação, controle, prototipagem e diferenças entre as opções.
Responda sempre em português, de forma simples e direta.`;

// Mock para rodar localmente sem API paga.
async function askAiAssistant(question) {
    // Aqui você pode integrar com fetch para sua API real
    // Por enquanto, respostas simuladas automáticas:
    question = question.toLowerCase();

    if (question.includes("controle")) {
        return "O controle determina o quanto você pode personalizar ou modificar a ferramenta. 'Flexibilidade total' permite personalização avançada, enquanto 'Solução pronta' está pronta para uso imediato, sem necessidade de ajustes técnicos.";
    }
    if (question.includes("open-source") || question.includes("código aberto")) {
        return "Open-source significa que o código da ferramenta é aberto e pode ser modificado por qualquer pessoa. Em geral, open-source é gratuito e possibilita customizações, enquanto 'proprietário' exige licença e tem restrições de uso.";
    }
    if (question.includes("automação")) {
        return "Automação refere-se ao uso de IA para executar tarefas automaticamente, reduzindo esforços manuais. Exemplo: criar fluxos de trabalho que conectam várias ferramentas.";
    }
    if (question.includes("prototipagem")) {
        return "Prototipagem é o processo de criar versões iniciais de uma solução ou projeto de forma rápida, permitindo testar ideias antes de investir em um desenvolvimento completo.";
    }
    if (question.includes("desafio") || question.includes("complexo") || question.includes("acessível")) {
        return "Esses são níveis de habilidade: 'Acessível' é indicado para iniciantes, 'Desafio' para intermediários e 'Complexo' para quem tem experiência técnica avançada.";
    }
    if (question.includes("licença")) {
        return "Licença define as permissões de uso da ferramenta. Open-source é livre para uso/modificação, proprietário requer pagamento ou permissão.";
    }
    if (question.includes("colaboração")) {
        return "Colaboração significa trabalhar em equipe, compartilhando informações, documentos e comunicação via IA.";
    }
    // Fallback genérico
    return "Desculpe, ainda não tenho informações detalhadas sobre esse termo, mas posso pesquisar caso integre uma API de IA real.";
}