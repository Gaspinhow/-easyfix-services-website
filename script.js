// Mobile Menu Toggle - Simplified and Fixed
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM chargé');
    
    // Mobile menu toggle - DEBUGGING
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    console.log('🍔 MENU BURGER DEBUG:');
    console.log('Hamburger trouvé:', hamburger);
    console.log('Nav menu trouvé:', navMenu);
    console.log('Taille écran:', window.innerWidth);
    
    if (hamburger && navMenu) {
        console.log('Éléments trouvés, ajout des événements');
        
        hamburger.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('🍔 BURGER CLIQUÉ!');
            
            // Toggle active class
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            console.log('Menu active:', navMenu.classList.contains('active'));
            console.log('Burger active:', this.classList.contains('active'));
            
            // Debug
            console.log('Hamburger active:', this.classList.contains('active'));
            console.log('Nav menu active:', navMenu.classList.contains('active'));
            console.log('Nav menu classes:', navMenu.className);
            console.log('Nav menu style:', navMenu.style.cssText);
        });
        
        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                console.log('Lien cliqué, fermeture du menu');
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
                console.log('Clic à l\'extérieur, fermeture du menu');
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
        
        // Close menu with Escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                console.log('Touche Escape, fermeture du menu');
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
        
    } else {
        console.error('Éléments manquants!');
        console.error('Hamburger:', hamburger);
        console.error('Nav menu:', navMenu);
    }
    
    // Dropdown menu toggle for "Nos Services"
    const dropdownToggle = document.querySelector('.nav-item.dropdown .nav-link');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    
    if (dropdownToggle && dropdownMenu) {
        console.log('Dropdown trouvé, ajout des événements');
        
        dropdownToggle.addEventListener('click', function(e) {
            // Ne pas ouvrir le dropdown sur mobile
            if (window.innerWidth <= 850) {
                e.preventDefault();
                e.stopPropagation();
                console.log('Dropdown cliqué sur mobile - ignoré');
                return;
            }
            
            e.preventDefault();
            e.stopPropagation();
            console.log('Dropdown cliqué!');
            
            const dropdownItem = this.closest('.nav-item');
            dropdownItem.classList.toggle('dropdown-open');
            
            console.log('Dropdown ouvert:', dropdownItem.classList.contains('dropdown-open'));
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function(event) {
            if (!dropdownToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
                const dropdownItem = dropdownToggle.closest('.nav-item');
                dropdownItem.classList.remove('dropdown-open');
            }
        });
        
        // Close dropdown with Escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                const dropdownItem = dropdownToggle.closest('.nav-item');
                dropdownItem.classList.remove('dropdown-open');
            }
        });
    }
    
    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Force header to stay blue - NO COLOR CHANGES
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    if (header) {
        header.style.background = 'linear-gradient(135deg, #0066FF 0%, #0052CC 100%)';
        header.style.setProperty('background', 'linear-gradient(135deg, #0066FF 0%, #0052CC 100%)', 'important');
    }
});

// Keep header blue on scroll - NO COLOR CHANGES
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (header) {
        header.style.background = 'linear-gradient(135deg, #0066FF 0%, #0052CC 100%)';
        header.style.setProperty('background', 'linear-gradient(135deg, #0066FF 0%, #0052CC 100%)', 'important');
    }
});

// Force header blue on window resize
window.addEventListener('resize', () => {
    const header = document.querySelector('.header');
    if (header) {
        header.style.background = 'linear-gradient(135deg, #0066FF 0%, #0052CC 100%)';
        header.style.setProperty('background', 'linear-gradient(135deg, #0066FF 0%, #0052CC 100%)', 'important');
    }
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    // Basic validation
    if (!data.name || !data.email || !data.phone || !data.service || !data.message) {
        showNotification('Veuillez remplir tous les champs obligatoires.', 'error');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        showNotification('Veuillez entrer une adresse email valide.', 'error');
        return;
    }
    
    // Phone validation
    const phoneRegex = /^[0-9+\s\-\(\)]{10,}$/;
    if (!phoneRegex.test(data.phone)) {
        showNotification('Veuillez entrer un numéro de téléphone valide.', 'error');
        return;
    }
    
    // Show loading state
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Envoi en cours...';
    submitBtn.disabled = true;
    
    // Simulate form submission (replace with actual form handling)
    setTimeout(() => {
        // Reset form
        this.reset();
        
        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
        // Show success message
        showNotification('Votre message a été envoyé avec succès ! Nous vous contacterons rapidement.', 'success');
        
        // Log form data (for development)
        console.log('Form submitted:', data);
        
    }, 2000);
});

// Notification System
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        max-width: 400px;
        animation: slideInRight 0.3s ease-out;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOutRight 0.3s ease-out';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Add notification animations to CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0;
        line-height: 1;
    }
    
    .notification-close:hover {
        opacity: 0.8;
    }
`;
document.head.appendChild(style);

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.service-card, .realization-card, .contact-form, .feature');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
});

// Phone number click tracking
document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    link.addEventListener('click', () => {
        // Track phone clicks (you can add analytics here)
        console.log('Phone number clicked:', link.href);
    });
});

// Service card hover effects
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Realization card hover effects
document.querySelectorAll('.realization-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Form field focus effects
document.querySelectorAll('.form-group input, .form-group select, .form-group textarea').forEach(field => {
    field.addEventListener('focus', () => {
        field.parentElement.style.transform = 'scale(1.02)';
    });
    
    field.addEventListener('blur', () => {
        field.parentElement.style.transform = 'scale(1)';
    });
});

// Lazy loading for images (if you add real images later)
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// Add some interactive features
document.addEventListener('DOMContentLoaded', () => {
    // Add click-to-copy functionality for phone numbers
    document.querySelectorAll('a[href^="tel:"]').forEach(link => {
        link.addEventListener('click', (e) => {
            // Add a small visual feedback
            link.style.transform = 'scale(0.95)';
            setTimeout(() => {
                link.style.transform = 'scale(1)';
            }, 150);
        });
    });
    
    // Add hover effects to buttons
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.style.transform = 'translateY(-2px)';
        });
        
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translateY(0)';
        });
    });
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(() => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'linear-gradient(135deg, rgba(0, 102, 255, 0.95) 0%, rgba(0, 82, 204, 0.95) 100%)';
        header.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.3)';
    } else {
        header.style.background = 'linear-gradient(135deg, #0066FF 0%, #0052CC 100%)';
        header.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.2)';
    }
}, 10);

window.addEventListener('scroll', debouncedScrollHandler); 

// --- Responsive Menu Enhancements (added) ---
(function() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.getElementById('primary-navigation');
  if (!hamburger || !navMenu) return;

  function closeMenu() {
    navMenu.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
  function openMenu() {
    navMenu.classList.add('is-open');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }
  hamburger.addEventListener('click', () => {
    const isOpen = navMenu.classList.contains('is-open');
    isOpen ? closeMenu() : openMenu();
  });
  navMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => closeMenu());
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });
})();


// --- Normalize KPI labels/numbers (added) ---
(function() {
  try {
    const all = Array.from(document.querySelectorAll('body *')).filter(el => el.childElementCount === 0);
    all.forEach(el => {
      const t = (el.textContent || '').trim();
      if (t === 'Années d\'expérience' || t === 'Années d’expérience') {
        el.textContent = 'Réponse rapide';
        const prev = el.parentElement && el.parentElement.querySelector('.stat-number, .kpi-number, .number, .value');
        if (prev) prev.textContent = '24h';
      }
      if (t === 'Interventions réussies') {
        el.textContent = 'Intervention sur RDV';
        const prev = el.parentElement && el.parentElement.querySelector('.stat-number, .kpi-number, .number, .value');
        if (prev) prev.textContent = '7j/7';
      }
      if (t === '30+' || t === '30 +') {
        el.textContent = '24h';
      }
      if (t === '500+' || t === '500 +') {
        el.textContent = '7j/7';
      }
    });
  } catch(e) {}
})();

// Calendly Fallback Management
function initCalendlyFallback() {
    const calendlyWidget = document.querySelector('.calendly-inline-widget');
    const fallback = document.getElementById('calendly-fallback');
    
    if (!calendlyWidget || !fallback) return;
    
    // Hide fallback after a delay to allow Calendly to load
    setTimeout(() => {
        if (calendlyWidget.querySelector('iframe')) {
            fallback.classList.add('hidden');
        } else {
            // If no iframe is loaded, show fallback permanently
            fallback.classList.remove('hidden');
        }
    }, 5000);
    
    // Check if Calendly loaded successfully
    const checkCalendlyLoaded = setInterval(() => {
        if (calendlyWidget.querySelector('iframe')) {
            fallback.classList.add('hidden');
            clearInterval(checkCalendlyLoaded);
        }
    }, 1000);
    
    // Fallback after 10 seconds if Calendly doesn't load
    setTimeout(() => {
        if (!calendlyWidget.querySelector('iframe')) {
            fallback.classList.remove('hidden');
            clearInterval(checkCalendlyLoaded);
        }
    }, 10000);
}

// Initialize Calendly fallback when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initCalendlyFallback();
    
    // Contact Form with Resend
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
        
        // Real-time validation
        const inputs = contactForm.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', validateField);
            input.addEventListener('input', clearFieldError);
        });
    }
});

// Form submission handler
async function handleFormSubmit(e) {
    e.preventDefault();
    
    if (!validateForm()) {
        return;
    }
    
    const submitBtn = document.getElementById('submitBtn');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoading = submitBtn.querySelector('.btn-loading');
    
    // Show loading state
    submitBtn.disabled = true;
    btnText.style.display = 'none';
    btnLoading.style.display = 'inline-block';
    
    try {
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        
        // TODO: Replace with your Resend API key
        const response = await fetch('/api/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        
        if (response.ok) {
            showFormSuccess();
            e.target.reset();
        } else {
            throw new Error('Erreur lors de l\'envoi');
        }
    } catch (error) {
        console.error('Form submission error:', error);
        showFormError();
    } finally {
        // Reset button state
        submitBtn.disabled = false;
        btnText.style.display = 'inline-block';
        btnLoading.style.display = 'none';
    }
}

// Form validation
function validateForm() {
    let isValid = true;
    const requiredFields = ['name', 'email', 'phone', 'urgency', 'service', 'message'];
    
    requiredFields.forEach(fieldName => {
        const field = document.getElementById(fieldName);
        if (!validateField(field)) {
            isValid = false;
        }
    });
    
    return isValid;
}

// Field validation
function validateField(field) {
    if (!field) return true;
    
    const fieldName = field.name;
    const value = field.value.trim();
    const errorElement = document.getElementById(`${fieldName}-error`);
    
    let isValid = true;
    let errorMessage = '';
    
    // Required field validation
    if (field.hasAttribute('required') && !value) {
        isValid = false;
        errorMessage = 'Ce champ est obligatoire';
    }
    
    // Email validation
    if (fieldName === 'email' && value && !isValidEmail(value)) {
        isValid = false;
        errorMessage = 'Veuillez entrer un email valide';
    }
    
    // Phone validation
    if (fieldName === 'phone' && value && !isValidPhone(value)) {
        isValid = false;
        errorMessage = 'Veuillez entrer un numéro valide';
    }
    
    // Show/hide error message
    if (errorElement) {
        errorElement.textContent = errorMessage;
        errorElement.style.display = isValid ? 'none' : 'block';
    }
    
    // Add/remove error class
    field.classList.toggle('error', !isValid);
    
    return isValid;
}

// Clear field error
function clearFieldError(e) {
    const field = e.target;
    const errorElement = document.getElementById(`${field.name}-error`);
    
    if (errorElement) {
        errorElement.style.display = 'none';
    }
    
    field.classList.remove('error');
}

// Validation helpers
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
    return phoneRegex.test(phone);
}

// Show success message
function showFormSuccess() {
    const successElement = document.getElementById('formSuccess');
    const errorElement = document.getElementById('formError');
    
    if (successElement) successElement.style.display = 'block';
    if (errorElement) errorElement.style.display = 'none';
    
    // Scroll to success message
    successElement?.scrollIntoView({ behavior: 'smooth' });
}

// Show error message
function showFormError() {
    const successElement = document.getElementById('formSuccess');
    const errorElement = document.getElementById('formError');
    
    if (errorElement) errorElement.style.display = 'block';
    if (successElement) successElement.style.display = 'none';
    
    // Scroll to error message
    errorElement?.scrollIntoView({ behavior: 'smooth' });
}


