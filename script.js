const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const ctaButton = document.getElementById('ctaButton');
const typewriterElement = document.getElementById('typewriter');
const texts = [ 'Safraeel', 'Frontend Developer', 'JavaScript Warrior', 'Problem Solver', 'Continuous Learner'];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
    const currentText = texts[textIndex];

    if (isDeleting) {
        typewriterElement.textContent = currentText.substring(0, charIndex - 1);

        charIndex--;

    } else {
        typewriterElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(typeWriter, 2000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(typeWriter, 500);
    } else {
        setTimeout(typeWriter, isDeleting ? 50 : 100);
    }
}

function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');

    skillBars.forEach(bar => {
        const width = bar.parentElement.getAttribute('data-width') + '%';
        bar.style.width = width;
    });
}

function handleScrollAnimations() {
    const elements = document.querySelectorAll('.about-content > *');

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
            element.classList.add('visible');
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(typeWriter, 1000);

    document.querySelectorAll('.about-content > *').forEach(element => {
        element.classList.add('fade-in');
    });

    handleScrollAnimations();
});

window.addEventListener('scroll', function() {
    handleScrollAnimations();

    const aboutSection = this.document.getElementById('about');
    const aboutTop = aboutSection.getBoundingClientRect().top;
    const windowHeight = this.window.innerHeight;

    if (aboutTop < windowHeight - 100) {
        animateSkillBars();
    }
});

themeToggle.addEventListener('click', function() {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        themeToggle.textContent = '☀️';
    } else {
        themeToggle.textContent = '🌙';
    }
});

ctaButton.addEventListener('click', function() {
    document.getElementById('projects').scrollIntoView({
        behavior: 'smooth'
    });
});

const projectButtons = document.querySelectorAll('.project-btn');
projectButtons.forEach(button => {
    button.addEventListener('click', function() {
        alert('project details coming soon!');
    });
});