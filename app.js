// ============================================
// APP MAIN — Controle de UI/UX, fluxo do sistema
// ============================================

// Estados globais
let userProfile = {
    skillLevel: null,
    projectType: null,
    costLicense: null,
    controlLevel: null
};

let currentStep = 0;
const questions = getQuestions();

function showSection(id) {
    document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

// Feedback de progresso
function updateProgressBar() {
    document.getElementById('currentStep').textContent = currentStep + 1;
    document.getElementById('progressFill').style.width = ((currentStep+1) / questions.length*100)+"%";
}

// Renderiza uma pergunta
function renderQuestion() {
    const container = document.getElementById('questionsContainer');
    container.innerHTML = '';
    const q = questions[currentStep];

    const card = document.createElement('div');
    card.className = 'question-card';
    card.innerHTML = `
      <div class="question-title">
        <span class="question-icon">${q.icon}</span>
        <span>${q.question}</span>
      </div>
      <div class="options-grid">
        ${q.options.map(opt => `
          <label class="option${userProfile[q.id] === opt.value ? ' selected' : ''}">
            <input type="radio" name="${q.id}" value="${opt.value}"${userProfile[q.id] === opt.value ? ' checked' : ''}>
            <div class="option-content">
                <span class="option-label"><span class="option-label-icon">${opt.icon}</span> ${opt.label}</span>
                <span class="option-description">${opt.description || ""}</span>
            </div>
          </label>
        `).join('')}
      </div>
      <div class="question-description"><em>${q.description}</em></div>
    `;
    container.appendChild(card);

    // Click em opção
    [...container.querySelectorAll("input[type=radio]")].forEach(inp => {
        inp.addEventListener('change', function() {
            userProfile[q.id] = this.value;
            renderQuestion();
            updateButtons();
        });
    });
}

// Navegação
function updateButtons() {
    document.getElementById('prevBtn').style.display = currentStep > 0 ? '' : 'none';
    document.getElementById('nextBtn').style.display =
        currentStep < questions.length-1 ? (userProfile[questions[currentStep].id] ? '' : 'none') : 'none';
    document.getElementById('submitBtn').style.display =
        currentStep === questions.length-1 && userProfile[questions[currentStep].id] ? '' : 'none';
}

document.getElementById('startBtn').onclick = () => {
    showSection("questionnaireSection");
    currentStep = 0;
    userProfile = {
        skillLevel: null, projectType: null, costLicense: null, controlLevel: null
    };
    renderQuestion();
    updateProgressBar();
    updateButtons();
};
document.getElementById('prevBtn').onclick = () => {
    if (currentStep > 0) {
        currentStep--;
        renderQuestion();
        updateProgressBar();
        updateButtons();
    }
};
document.getElementById('nextBtn').onclick = () => {
    if (currentStep < questions.length-1) {
        currentStep++;
        renderQuestion();
        updateProgressBar();
        updateButtons();
    }
};
document.getElementById('submitBtn').onclick = () => {
    showLoading(true);
    setTimeout(() => {
        showLoading(false);
        renderRecommendations();
    }, 600); // efeito loading rápido
};

// Loading
function showLoading(show) {
    document.getElementById('loadingIndicator').classList.toggle('active', show);
}

// Recomendações
function renderRecommendations() {
    showSection('recommendationsSection');
    const recommendations = recommendTools({
        skillLevel: userProfile.skillLevel,
        projectType: userProfile.projectType,
        costLicense: userProfile.costLicense,
        controlLevel: userProfile.controlLevel
    });

    document.getElementById('recommendationsContainer').innerHTML = '';
    document.getElementById('emptyState').style.display = recommendations.length === 0 ? 'block' : 'none';

    recommendations.forEach(item => {
        const div = document.createElement('div');
        div.className = "recommendation-card";
        div.innerHTML = `
            <div class="recommendation-header">
                <div class="recommendation-title">
                    <span class="recommendation-icon">${item.icon || "🤖"}</span>
                    <span class="recommendation-name">${item.name}</span>
                    <span class="recommendation-category">${item.category}</span>
                </div>
                <div class="match-score">
                    <span class="match-percentage">${Math.round(item.matchScore*100)}%</span>
                    <span class="match-label">Compatibilidade</span>
                </div>
            </div>
            <div class="recommendation-description">${item.shortDescription}</div>
            <div class="recommendation-meta">
                <div class="meta-item"><span class="meta-label">Licença</span> <span class="meta-value">${item.license}</span></div>
                <div class="meta-item"><span class="meta-label">Nível</span> <span class="meta-value">${item.skillLevels.map( s => ({accessible:'Acessível',challenge:'Desafio',complex:'Complexo'}[s]).join(", ")}</span></div>
            </div>
            <div class="recommendation-reasons">
                <div class="reasons-title">Por que recomendar?</div>
                <ul class="reasons-list">
                    ${item.matchReasons.map(r => `<li class="reason-item">${r}</li>`).join('')}
                </ul>
            </div>
            <div class="tags">${item.tags && item.tags.map(t => `<span class="tag">${t}</span>`).join(" ")}</div>
            <div class="recommendation-actions">
                <a class="btn btn-primary btn-small" href="${item.link}" target="_blank">Acessar Site Oficial</a>
            </div>
        `;
        document.getElementById('recommendationsContainer').appendChild(div);
    });
    // Mensagem sobre o perfil
    document.getElementById('recommendationSubtitle').innerHTML =
        `Perfil: <strong>${formatProfile()}</strong>`;
}
function formatProfile() {
    // string amigável com base nos valores selecionados
    let labels = {
        skillLevel: {accessible:"Acessível", challenge:"Desafio", complex:"Complexo"},
        projectType: {colaboracao:"Colaboração", prototipagem:"Prototipagem", automacao:"Automação"},
        costLicense: {"open-source":"Open-source","proprietario":"Proprietário"},
        controlLevel: {flexibilidade_total:"Flexibilidade total", "solucao_pronta":"Solução pronta"}
    };
    return `${labels.skillLevel[userProfile.skillLevel]}, ${labels.projectType[userProfile.projectType]}, ${labels.costLicense[userProfile.costLicense]}, ${labels.controlLevel[userProfile.controlLevel]}`;
}

// Refazer questionário
document.getElementById('restartBtn').onclick = () => {
    showSection("questionnaireSection");
    currentStep = 0;
    userProfile = {
        skillLevel: null, projectType: null, costLicense: null, controlLevel: null
    };
    renderQuestion();
    updateProgressBar();
    updateButtons();
};
// Compartilhar — gera link simples
document.getElementById('shareBtn').onclick = () => {
    window.alert("Em breve: compartilhamento por link especial ou PDF!");
};

// =================== AJUDA INTELIGENTE ===================
const modal = document.getElementById('helpModal');
const overlay = document.getElementById('modalOverlay');
document.getElementById('helpBtn').onclick = () => {
    modal.classList.add('active');
    overlay.classList.add('active');
    document.getElementById('helpInput').focus();
};
document.getElementById('closeHelpBtn').onclick = closeModal;
overlay.onclick = closeModal;
function closeModal() {
    modal.classList.remove('active');
    overlay.classList.remove('active');
}

document.getElementById('sendHelpBtn').onclick = handleAskHelp;
document.getElementById('helpInput').addEventListener('keypress', function(e){
    if(e.key==="Enter"){
        e.preventDefault(); handleAskHelp();
    }
});
// Chama IA de ajuda
async function handleAskHelp() {
    const input = document.getElementById("helpInput");
    const value = input.value.trim();
    if (!value) return;
    appendHelpMsg(value, "user");
    input.value = "";
    const msg = await askAiAssistant(value);
    appendHelpMsg(msg, "system");
}

// Historico de chat
function appendHelpMsg(text, side) {
    const div = document.createElement("div");
    div.className = `help-message ${side === "user" ? "user-message" : "system-message"}`;
    div.innerHTML = `<p>${text}</p>`;
    document.getElementById('helpConversation').appendChild(div);
    setTimeout(() => {
        div.scrollIntoView({behavior:'smooth', block:'end'});
    }, 100);
}

window.onload = function() {
    showSection('welcomeSection');
};