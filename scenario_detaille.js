window.generateScenarioDetaille = async function(keywords) {
    // Ajout de validation
    if (!keywords || typeof keywords !== 'string') {
        throw new Error("Entrée invalide");
    }

    const sanitizedKeywords = keywords.slice(0, 200).replace(/[<>]/g, '');
    
    // ... reste du code original corrigé ...
    
    return scenario;
};
