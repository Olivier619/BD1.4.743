function generateSafeScenario(keywords) {
    const sanitizedKeywords = keywords
        .replace(/[^a-zA-Z0-9 éèàçùîôêâäöüßÉÈÀÇÙÎÔÊÂÄÖÜ]/g, '')
        .substring(0, 200);

    return {
        title: `Scénario : ${sanitizedKeywords}`,
        chapters: this.generateChapters(sanitizedKeywords),
        safe: true // Marqueur de sécurité
    };
}

// ... (méthodes de génération sécurisées) ...
