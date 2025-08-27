document.addEventListener('DOMContentLoaded', function() {
    console.log('🍔 BURGER LOADING...');
    
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (!hamburger || !navMenu) {
        console.error('Elements not found!');
        return;
    }
    
    // Toggle burger menu
    hamburger.onclick = function() {
        console.log('🍔 CLICKED!');
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    };
    
    // Close menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            console.log('🔗 LINK CLICKED - CLOSING MENU');
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    console.log('🍔 READY!');
});
