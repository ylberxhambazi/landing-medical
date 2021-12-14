let navLinks = document.querySelector('.nav-links');
let toggle = document.querySelector('.navbar-toggle');

toggle.addEventListener('click', function () {
    navLinks.classList.toggle('active');
});

var element = document.querySelector("#home");
element.scrollIntoView({ behavior: 'smooth', block: 'end'});