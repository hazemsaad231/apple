let image = document.querySelector("#iphone")
let iphone1 = document.querySelector("#ipone1")
let iphone2 = document.querySelector("#ipone2")
let iphone3 = document.querySelector("#ipone3")
let iphone4 = document.querySelector("#ipone4")
let iphone5 = document.querySelector("#ipone5")


window.onload = function() {
    const savedColor = localStorage.getItem("backgroundColor");
    const savedImage = localStorage.getItem("backgroundImage");
    if (savedColor, savedImage) {
        document.body.style.background = savedColor;
        image.src = savedImage;
    }
};

function setBackground(color, imagePath) {
    document.body.style.background = color;
    localStorage.setItem("backgroundColor", color);
    localStorage.setItem("backgroundImage", imagePath);
    image.src = imagePath;
}

function ap1() {
    setBackground("#FFA500", "img/0.png");
}

function ap2() {
    setBackground("#ADD8E6", "img/1.png");
}

function ap3() {
    setBackground("#808080", "img/2.png");
}

function ap4() {
    setBackground("wheat", "img/3.png");
}

function ap5() {
    setBackground("red", "img/4.png");
}
