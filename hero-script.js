// Background slideshow functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.background-slide');
const totalSlides = slides.length;

// Function to change background slide
function nextSlide() {
    // Remove active class from current slide
    slides[currentSlide].classList.remove('active');
    
    // Move to next slide (loop back to 0 if at the end)
    currentSlide = (currentSlide + 1) % totalSlides;
    
    // Add active class to new slide
    slides[currentSlide].classList.add('active');
}

// Start automatic slideshow
function startSlideshow() {
    setInterval(nextSlide, 5000); // Change slide every 5 seconds
}

// Navigation functionality
function startQuestions() {
    // Redirect to the first question page
    window.location.href = 'index.html';
}

// Smooth scroll for navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1);
        
        // For now, just log the navigation
        // In a real website, you would scroll to the section or navigate to the page
        console.log(`Navigating to: ${targetId}`);
        
        // You can add actual navigation logic here
        if (targetId === 'home') {
            // Stay on current page or scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        // Add more navigation logic as needed
    });
});

// Initialize slideshow when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Start the automatic slideshow
    startSlideshow();
    
    // Add fade-in animation to hero content
    const heroContent = document.querySelector('.hero-content');
    heroContent.style.opacity = '0';
    heroContent.style.transform = 'translateY(30px)';
    
    setTimeout(() => {
        heroContent.style.transition = 'opacity 1s ease, transform 1s ease';
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateY(0)';
    }, 500);
});

// Pause slideshow on hover (optional enhancement)
const heroContainer = document.querySelector('.hero-container');
let slideshowInterval;

function pauseSlideshow() {
    clearInterval(slideshowInterval);
}

function resumeSlideshow() {
    slideshowInterval = setInterval(nextSlide, 5000);
}

// Optional: Pause slideshow when user hovers over the hero section
heroContainer.addEventListener('mouseenter', pauseSlideshow);
heroContainer.addEventListener('mouseleave', resumeSlideshow);

// Start the main slideshow interval
slideshowInterval = setInterval(nextSlide, 5000);
