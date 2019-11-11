const myArrow = document.getElementById("arrow");

myArrow.addEventListener('click', topFunction());

window.onscroll = function () {
    if (document.body.scrollTop > 1027 || document.documentElement.scrollTop > 1027) {
        myArrow.style.display = "block";
    } else {
        myArrow.style.display = "none";
    }
};

function topFunction() {
    window.scroll({
        top: 0,
        behavior: "smooth",
    });
}