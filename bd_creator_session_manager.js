class SessionManager {
    constructor() {
        this.STORAGE_KEY = 'bdCreatorSessions';
        this.sessions = this.loadSessions();
    }

    sanitizeInput(str) {
        return String(str)
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .substring(0, 100);
    }

    saveSession(sessionData) {
        try {
            const sanitizedData = {
                name: this.sanitizeInput(sessionData.name),
                content: JSON.stringify(sessionData.content)
            };
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.sessions));
            return true;
        } catch (error) {
            console.error('Erreur sauvegarde:', error);
            return false;
        }
    }

    loadSessions() {
        try {
            return JSON.parse(localStorage.getItem(this.STORAGE_KEY)) || {};
        } catch (error) {
            console.error('Erreur chargement sessions:', error);
            return {};
        }
    }

    // ... (méthodes complètes) ...
}
