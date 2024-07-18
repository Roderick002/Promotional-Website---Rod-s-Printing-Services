var imageno1 = 1;
displayimg1(imageno1);

function nextimg1(n) {
    displayimg1(imageno1 += n)
}

function currentSlide1(n) {
    displayimg1(imageno1 = n)
}

function displayimg1(n) {
    var i;
    var image1 = document.getElementsByClassName("image1");
    var dots1 = document.getElementsByClassName("dot1");

    if (n > image1.length) {
        imageno1 = 1;
    }

    if (n < 1) {
        imageno1 = image1.length;
    }

    for (i = 0; i < image1.length; i++) {
        image1[i].style.display = "none";
    }

    for (i = 0; i < dots1.length; i++) {
        dots1[i].className = dots1[i].className.replace(" active1", "");
    }

    image1[imageno1 - 1].style.display = "block";
    dots1[imageno1 - 1].className += " active1";

}

var imageno2 = 1;
displayimg2(imageno2);

function nextimg2(n) {
    displayimg2(imageno2 += n)
}

function currentSlide2(n) {
    displayimg2(imageno2 = n)
}

function displayimg2(n) {
    var i;
    var image2 = document.getElementsByClassName("image2");
    var dots2 = document.getElementsByClassName("dot2");

    if (n > image2.length) {
        imageno2 = 1;
    }

    if (n < 1) {
        imageno2 = image2.length;
    }

    for (i = 0; i < image2.length; i++) {
        image2[i].style.display = "none";
    }

    for (i = 0; i < dots2.length; i++) {
        dots2[i].className = dots2[i].className.replace(" active2", "");
    }

    image2[imageno2 - 1].style.display = "block";
    dots2[imageno2 - 1].className += " active2";

}