const card = document.getElementById("card");
const browserWidth = document.documentElement.clientWidth;
const browserHeight = document.documentElement.clientHeight;

var y = 0;
var x = 0;

test.addEventListener("mousemove", () => {
    var posX = event.clientX;
    var posY = event.clientY;

    x = (posX - (browserWidth / 2)) / 75;
    y = ((browserHeight / 2) - posY) / 75;

    card.style.transform = "rotateY(" + x + "deg) rotateX(" + y + "deg)";
});