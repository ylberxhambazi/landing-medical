let navLinks = document.querySelector('.nav-links');
let toggle = document.querySelector('.navbar-toggle');

toggle.addEventListener('click', function () {
    navLinks.classList.toggle('active');
});


var btn = document.querySelector('.scrollToTop');

window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

btn.addEventListener("click", topFunction());