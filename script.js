const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const ctaButton = document.getElementById('ctaButton');

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