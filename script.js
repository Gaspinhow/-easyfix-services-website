document.addEventListener('DOMContentLoaded', function() {
    console.log('🍔 BURGER LOADING...');
    
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (!hamburger || !navMenu) {
        console.error('Elements not found!');
        return;
    }
    
    hamburger.onclick = function() {
        console.log('🍔 CLICKED!');
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    };
    
    console.log('🍔 READY!');
});
