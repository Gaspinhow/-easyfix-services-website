// Test simple du menu hamburger
console.log('Test menu hamburger chargé');

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM chargé');
    
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    console.log('Hamburger trouvé:', hamburger);
    console.log('Nav menu trouvé:', navMenu);
    
    if (hamburger && navMenu) {
        console.log('Éléments trouvés, ajout des événements');
        
        hamburger.addEventListener('click', function() {
            console.log('Hamburger cliqué!');
            
            // Toggle active class
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            console.log('Hamburger active:', this.classList.contains('active'));
            console.log('Nav menu active:', navMenu.classList.contains('active'));
        });
        
        // Test: clic sur le premier lien pour fermer le menu
        const firstLink = document.querySelector('.nav-link');
        if (firstLink) {
            firstLink.addEventListener('click', function() {
                console.log('Premier lien cliqué, fermeture du menu');
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        }
        
    } else {
        console.error('Éléments manquants!');
        console.error('Hamburger:', hamburger);
        console.error('Nav menu:', navMenu);
    }
}); 