class AppManager {
    constructor() {
        this.initEventListeners();
        this.loadSessionData();
    }

    initEventListeners() {
        // Gestionnaire de copie moderne
        document.addEventListener('click', async (e) => {
            if (e.target.classList.contains('copy-button')) {
                const button = e.target;
                const textarea = button.previousElementSibling;
                try {
                    await navigator.clipboard.writeText(textarea.value);
                    button.textContent = '✓ Copié!';
                    setTimeout(() => button.textContent = 'Copier', 2000);
                } catch (err) {
                    console.error('Erreur copie:', err);
                    button.textContent = '❌ Erreur';
                }
            }
        });

        // Gestion des accordséons
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('chapitre-header')) {
                const content = e.target.nextElementSibling;
                content.classList.toggle('active');
            }
        });
    }

    loadSessionData() {
        try {
            // Chargement sécurisé
            const data = JSON.parse(localStorage.getItem('bdSession') || '{}');
            this.validateSessionData(data);
            this.renderUI(data);
        } catch (error) {
            console.error('Erreur chargement session:', error);
            this.showError('Données corrompues');
        }
    }

    // ... (méthodes complètes avec gestion d'erreur) ...
}

// Initialisation sécurisée
document.addEventListener('DOMContentLoaded', () => new AppManager());
