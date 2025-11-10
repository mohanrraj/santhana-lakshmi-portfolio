// Modern Gradient Theme JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 800,
        once: true,
        easing: 'ease-out-cubic'
    });

    // Add floating effect to elements with data-float attribute
    const floatElements = document.querySelectorAll('[data-float]');
    
    floatElements.forEach(element => {
        const duration = element.getAttribute('data-float-duration') || '6s';
        const delay = element.getAttribute('data-float-delay') || '0s';
        element.style.animation = `float ${duration} ease-in-out ${delay} infinite`;
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add gradient animation to hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.setProperty('--gradient-rotation', '0deg');
        
        const updateGradient = () => {
            const scrollY = window.scrollY;
            const rotation = (scrollY * 0.1) % 360;
            hero.style.setProperty('--gradient-rotation', `${rotation}deg`);
            requestAnimationFrame(updateGradient);
        };
        
        window.addEventListener('scroll', updateGradient);
    }
});

// Typing effect for the hero text
const typedTextSpan = document.querySelector(".typing-text");
if (typedTextSpan) {
    const textArray = ["Sales and Marketing Manager", "Real Estate Expert", "Property Consultant", "Client Relations Specialist"];
    const typingDelay = 100;
    const erasingDelay = 50;
    const newTextDelay = 2000;
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < textArray[textArrayIndex].length) {
            typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } else {
            setTimeout(erase, newTextDelay);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        } else {
            textArrayIndex++;
            if (textArrayIndex >= textArray.length) textArrayIndex = 0;
            setTimeout(type, typingDelay + 1100);
        }
    }

    // Start the typing effect when the page loads
    if (textArray.length) setTimeout(type, newTextDelay + 250);
}
