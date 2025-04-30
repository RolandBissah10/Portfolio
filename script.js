document.addEventListener('DOMContentLoaded', function() {
    // Logo Click Handlers
    const headerLogo = document.getElementById('header-logo');
    const footerLogo = document.getElementById('footer-logo');
    [headerLogo, footerLogo].forEach(logo => {
    logo.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
    top: 0,
    behavior: 'smooth'
    });
    });
    });
    // Mobile Menu Toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenuButton.addEventListener('click', function() {
    mobileMenu.classList.toggle('hidden');
    });
    // Typing Effect
    const typingText = document.getElementById('typing-text');
    const phrases = ['Full Stack Developer', 'Graphic/UIUX Designer', 'Web Designer', 'Web Application Developer'];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    function typeText() {
    const currentPhrase = phrases[phraseIndex];
    if (isDeleting) {
    typingText.textContent = currentPhrase.substring(0, charIndex - 1);
    charIndex--;
    typingSpeed = 50;
    } else {
    typingText.textContent = currentPhrase.substring(0, charIndex + 1);
    charIndex++;
    typingSpeed = 100;
    }
    if (!isDeleting && charIndex === currentPhrase.length) {
    isDeleting = true;
    typingSpeed = 1500; // Pause at the end
    } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    typingSpeed = 500; // Pause before typing next phrase
    }
    setTimeout(typeText, typingSpeed);
    }
    typeText();
    });
    document.addEventListener('DOMContentLoaded', function() {
    // Project Filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    filterButtons.forEach(button => {
    button.addEventListener('click', function() {
    const filter = this.getAttribute('data-filter');
    // Update active button
    filterButtons.forEach(btn => btn.classList.remove('active', 'bg-secondary', 'text-primary'));
    this.classList.add('active', 'bg-secondary', 'text-primary');
    // Filter projects
    projectCards.forEach(card => {
    if (filter === 'all' || card.getAttribute('data-category') === filter) {
    card.style.display = 'block';
    } else {
    card.style.display = 'none';
    }
    });
    });
    });
    // Custom Checkbox
    const checkbox = document.getElementById('agreement-checkbox');
    checkbox.addEventListener('click', function() {
    this.classList.toggle('checked');
    });
    // Back to Top Button
    const backToTopButton = document.getElementById('back-to-top');
    window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
    backToTopButton.style.opacity = '1';
    } else {
    backToTopButton.style.opacity = '0';
    }
    });
    backToTopButton.addEventListener('click', function() {
    window.scrollTo({
    top: 0,
    behavior: 'smooth'
    });
    });
    // Animate Progress Bars on Scroll
    const progressBars = document.querySelectorAll('.progress-fill');
    const animateProgressBars = () => {
    progressBars.forEach(bar => {
    const rect = bar.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
    if (isVisible) {
    const width = bar.style.width;
    bar.style.width = '0%';
    setTimeout(() => {
    bar.style.width = width;
    }, 100);
    }
    });
    };
    // Initial check
    animateProgressBars();
    // Check on scroll
    window.addEventListener('scroll', animateProgressBars);
    // Smooth Scroll for Navigation Links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
    window.scrollTo({
    top: targetElement.offsetTop - 80,
    behavior: 'smooth'
    });
    // Close mobile menu if open
    if (!mobileMenu.classList.contains('hidden')) {
    mobileMenu.classList.add('hidden');
    }
    }
    });
    });
    // Form Validation
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    const agreement = document.getElementById('agreement-checkbox').classList.contains('checked');
    if (!name || !email || !subject || !message) {
    alert('Please fill in all required fields.');
    return;
    }
    if (!agreement) {
    alert('Please agree to the privacy policy and terms of service.');
    return;
    }
    // Form submission logic would go here
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
    document.getElementById('agreement-checkbox').classList.remove('checked');
    });
    });