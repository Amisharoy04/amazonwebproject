// JavaScript for navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
});

// JavaScript for smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// JavaScript for image gallery with modal
const galleryItems = document.querySelectorAll('.grid-layout1 a, .grid-layout2 a'); // Update with all grid layout classes

galleryItems.forEach(item => {
    item.addEventListener('click', openModal);
});

function openModal(e) {
    e.preventDefault();
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <img src="${e.target.getAttribute('href')}" alt="Modal Image">
        </div>
    `;
    document.body.appendChild(modal);

    const closeModal = modal.querySelector('.close');
    closeModal.addEventListener('click', () => {
        modal.remove();
    });

    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            modal.remove();
        }
    });
}

// JavaScript for form validation (example)
const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Example: Validate a form field (replace with your actual validation logic)
    const emailInput = document.querySelector('#email');
    const emailValue = emailInput.value.trim();

    if (!isValidEmail(emailValue)) {
        alert('Please enter a valid email address.');
        emailInput.focus();
    } else {
        // Submit the form if validation passes
        this.submit();
    }
});

function isValidEmail(email) {
    // Example: Simple email validation using regex (replace with your actual validation logic)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
