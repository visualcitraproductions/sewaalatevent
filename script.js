document.addEventListener('DOMContentLoaded', function () {
    // Header background change on scroll
    window.addEventListener('scroll', function () {
        const header = document.querySelector('header');
        header.classList.toggle('scrolled', window.scrollY > 50);
    });

    // Scroll animation for sections
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.2
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Home section animation
    const homeSection = document.getElementById('home');
    const homeTitle = homeSection.querySelector('h1');
    const homeText = homeSection.querySelector('p');

    setTimeout(() => {
        homeTitle.style.transform = 'translateY(0)';
        homeTitle.style.opacity = '1';
        homeText.style.transform = 'translateY(0)';
        homeText.style.opacity = '1';
    }, 500);
});