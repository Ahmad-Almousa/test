const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('open');
};



var element = document.querySelector(".main-photo");


var prevScrollPos = window.pageYOffset;


window.addEventListener("scroll", function () {

    var currentScrollPos = window.pageYOffset;


    if (currentScrollPos > prevScrollPos) {

        element.classList.add("animate");
    } else {

        element.classList.remove("animate");
    }

    prevScrollPos = currentScrollPos;
});


function hasAcceptedCookies() {
    return localStorage.getItem('cookiesAccepted') === 'true';
}

function hideCookiesBar() {
    document.getElementById('cookies-bar').style.display = 'none';
}

function acceptCookies() {
    localStorage.setItem('cookiesAccepted', 'true');
    hideCookiesBar();
}

if (!hasAcceptedCookies()) {
    document.getElementById('cookies-bar').style.display = 'block';
}

document.getElementById('cookies-accept').addEventListener('click', acceptCookies);



/*
// Smooth scrolling to anchor link
document.addEventListener('DOMContentLoaded', function () {
    let scrollLinks = document.getElementsByClassName('how');

    for (let i = 0; i < scrollLinks.length; i++) {
        scrollLinks[i].addEventListener('click', smoothScroll);
    }

    function smoothScroll(e) {
        e.preventDefault();

        let targetId = this.getAttribute('href');
        let targetElement = document.querySelector(targetId);
        let targetOffset = targetElement.offsetTop - 80 px;

        window.scrollTo({
            top: targetOffset,
            behavior: 'smooth'
        });
    }
});
*/
