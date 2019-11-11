const myArrow = document.getElementById("arrow");

window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 1027 || document.documentElement.scrollTop > 1027) {
        myArrow.style.display = "block";
    } else {
        myArrow.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}