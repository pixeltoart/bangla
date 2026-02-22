/**
 * JS.ORG Project Script
 * Includes Typewriter, Terminal log, and Particles config
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // ১. টাইপরাইটার এনিমেশন কনফিগারেশন
    const textElement = document.getElementById('typewriter');
    const phrases = [
        "Building Scalable Apps", 
        "Mastering React & Node", 
        "Exploring Web3", 
        "Open Source Lover"
    ];
    
    let i = 0, j = 0;
    let isDeleting = false;

    function typeEffect() {
        let current = phrases[i];
        
        if (isDeleting) {
            textElement.textContent = current.substring(0, j - 1);
            j--;
        } else {
            textElement.textContent = current.substring(0, j + 1);
            j++;
        }

        if (!isDeleting && j === current.length) {
            setTimeout(() => isDeleting = true, 2000);
        } else if (isDeleting && j === 0) {
            isDeleting = false;
            i = (i + 1) % phrases.length;
        }
        
        const speed = isDeleting ? 50 : 100;
        setTimeout(typeEffect, speed);
    }

    // ২. টার্মিনাল লগ এনিমেশন
    const output = document.getElementById('log-output');
    const message = "> Success: Connection established!\n> Status: Developer ready to build...\n> Location: js.org/domain";
    let k = 0;

    function showTerminalLog() {
        if (k < message.length) {
            output.textContent += message[k];
            k++;
            setTimeout(showTerminalLog, 40);
        }
    }

    // ৩. Particles.js কনফিগারেশন
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: '#f7df1e' },
                shape: { type: 'circle' },
                opacity: { value: 0.5, random: false },
                size: { value: 3, random: true },
                line_linked: { 
                    enable: true, 
                    distance: 150, 
                    color: '#f7df1e', 
                    opacity: 0.2, 
                    width: 1 
                },
                move: { 
                    enable: true, 
                    speed: 2, 
                    direction: 'none', 
                    random: false, 
                    straight: false, 
                    out_mode: 'out' 
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: { enable: true, mode: 'grab' },
                    onclick: { enable: true, mode: 'push' }
                }
            },
            retina_detect: true
        });
    }

    // এনিমেশন শুরু করা
    typeEffect();
    setTimeout(showTerminalLog, 1200);
});
