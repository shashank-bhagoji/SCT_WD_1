// Change navbar color on scroll
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if(window.scrollY > 40){
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
