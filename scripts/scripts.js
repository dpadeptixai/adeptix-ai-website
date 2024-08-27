document.addEventListener('DOMContentLoaded', function() {

    if (window.innerWidth <= 768) {
        $(".contact-form").hide();
    }
    else{
        $(".contact-form").show();
    }

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
        var targetElement = document.querySelector('#home');
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - document.querySelector('.navbar').offsetHeight,
                behavior: 'smooth'
            });
        }
    });

    var logoImage = document.querySelector('.navbar-brand');
    logoImage.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor click behavior
        var targetElement = document.querySelector('#home');
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - document.querySelector('.navbar').offsetHeight,
                behavior: 'smooth'
            });
        }
    });

    // Smooth Scroll for Navbar Links
    var navbarLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    navbarLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            var targetId = this.getAttribute('href');
            var targetElement = document.querySelector(targetId);

            var collapsedHeight = 0;
            var navbarToggler = document.querySelector('.navbar-toggler');
            var navbarCollapse = document.querySelector('.navbar-collapse');
            if (window.innerWidth <= 768 && navbarCollapse.classList.contains('show')) {
                collapsedHeight = document.querySelector('#navbarNav').offsetHeight;
            }

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - document.querySelector('.navbar').offsetHeight + collapsedHeight,
                    behavior: 'smooth'
                });
            }

            if(collapsedHeight > 0) {
                navbarToggler.click();
            }
        });
    });
});
