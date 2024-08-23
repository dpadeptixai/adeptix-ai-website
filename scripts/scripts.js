document.addEventListener('DOMContentLoaded', function() {
    // Scroll-to-Top Button
    var toTopButton = document.getElementById('toTop');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            toTopButton.style.display = 'block';
        } else {
            toTopButton.style.display = 'none';
        }
    });

    toTopButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor click behavior
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Smooth Scroll for Navbar Links
    var navbarLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    navbarLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            var targetId = this.getAttribute('href');
            var targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - document.querySelector('.navbar').offsetHeight,
                    behavior: 'smooth'
                });
            }

            // Auto-close mobile menu after click
            var navbarToggler = document.querySelector('.navbar-toggler');
            var navbarCollapse = document.querySelector('.navbar-collapse');
            if (window.innerWidth <= 768 && navbarCollapse.classList.contains('show')) {
                navbarToggler.click(); // Simulate a click to close the menu
            }
        });
    });
});
