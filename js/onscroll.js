window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    var navbar = document.getElementById("navbar");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        navbar.classList.add("shadow");
        navbar.classList.add("bg-white");
    } else {
        navbar.classList.remove("shadow");
        navbar.classList.remove("bg-white");
    }

}



