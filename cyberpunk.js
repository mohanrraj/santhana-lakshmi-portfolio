// Cyberpunk effect for the hero section
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 1000,
        once: true,
        easing: 'ease-out-cubic'
    });

    // Add glitch effect to hero section on hover
    const hero = document.querySelector('.hero');
    
    hero.addEventListener('mouseenter', function() {
        this.style.animationPlayState = 'running';
    });

    hero.addEventListener('mouseleave', function() {
        this.style.animationPlayState = 'paused';
    });

    // Add floating effect to elements with data-float attribute
    const floatingElements = document.querySelectorAll('[data-float]');
    
    floatingElements.forEach(element => {
        const duration = element.getAttribute('data-float-duration') || '6s';
        const delay = element.getAttribute('data-float-delay') || '0s';
        element.style.animation = `float ${duration} ease-in-out ${delay} infinite`;
    });

    // Add scanline effect to the hero section
    const scanline = document.createElement('div');
    scanline.className = 'scanline';
    hero.appendChild(scanline);

    // Add digital rain effect
    const rainContainer = document.createElement('div');
    rainContainer.className = 'digital-rain';
    document.body.appendChild(rainContainer);

    // Create digital rain
    function createDigitalRain() {
        const characters = '01';
        const columns = Math.floor(window.innerWidth / 20);
        
        for (let i = 0; i < columns; i++) {
            const column = document.createElement('div');
            column.className = 'rain-column';
            column.style.left = `${(i * 20) + (Math.random() * 10)}px`;
            column.style.animationDelay = `${Math.random() * 5}s`;
            column.style.animationDuration = `${5 + Math.random() * 10}s`;
            
            // Create random characters for each column
            const charCount = 20 + Math.floor(Math.random() * 20);
            for (let j = 0; j < charCount; j++) {
                const char = document.createElement('span');
                char.textContent = characters.charAt(Math.floor(Math.random() * characters.length));
                char.style.opacity = Math.random() * 0.5 + 0.1;
                column.appendChild(char);
            }
            
            rainContainer.appendChild(column);
        }
    }

    // Initialize digital rain
    createDigitalRain();

    // Handle window resize
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            rainContainer.innerHTML = '';
            createDigitalRain();
        }, 200);
    });

    // Add cursor trail effect
    const cursorTrail = document.createElement('div');
    cursorTrail.className = 'cursor-trail';
    document.body.appendChild(cursorTrail);

    document.addEventListener('mousemove', function(e) {
        cursorTrail.style.left = `${e.clientX}px`;
        cursorTrail.style.top = `${e.clientY}px`;
    });
});

// Typing effect for the hero text
const typedTextSpan = document.querySelector(".typing-text");
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
window.addEventListener('load', function() {
    if (textArray.length) setTimeout(type, newTextDelay + 250);
});
