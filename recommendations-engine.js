// ============================================
// MOTOR DE RECOMENDAÇÃO DE FERRAMENTAS IA
// ============================================

function recommendTools(userProfile) {
    const tools = getTools();
    const recommendations = [];

    tools.forEach(tool => {
        let score = 0;
        const reasons = [];

        // Nível de Habilidade
        if (tool.skillLevels.includes(userProfile.skillLevel)) {
            score += 30;
            if (tool.matchReasons && tool.matchReasons[userProfile.skillLevel]) {
                reasons.push(tool.matchReasons[userProfile.skillLevel]);
            }
        }

        // Objetivo do Projeto
        if (tool.projectTypes.includes(userProfile.projectType)) {
            score += 25;
            reasons.push("Alinhada ao objetivo do projeto.");
        }

        // Tipo de Licença
        if (
            (userProfile.costLicense === "open-source" && tool.license === "open-source") ||
            (userProfile.costLicense === "proprietario" && tool.license === "proprietario")
        ) {
            score += 25;
            reasons.push(
                tool.license === "open-source"
                    ? "Possui código aberto e comunidade ativa."
                    : "Solução comercial e suporte oferecido."
            );
        }

        // Nível de Controle
        if (tool.controlLevel.includes(userProfile.controlLevel)) {
            score += 20;
            reasons.push(
                userProfile.controlLevel === "flexibilidade_total"
                    ? "Permite customização e integração avançada."
                    : "Funciona plug and play e é fácil de usar."
            );
        }

        const match = score / 100;
        if (match >= 0.6) {
            recommendations.push({
                ...tool,
                matchScore: match,
                matchReasons: [...new Set(reasons)]
            });
        }
    });

    // Ordenar por score desc, pegar top 10
    return recommendations
        .sort((a, b) => b.matchScore - a.matchScore)
        .slice(0, 10);
}