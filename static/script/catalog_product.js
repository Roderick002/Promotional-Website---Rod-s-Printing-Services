const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const image4 = document.getElementById('image4');
const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const img4 = document.getElementById('img4');

const title = document.getElementById('product-name');
const link = window.location.href;
if (link.includes("document_print")) {
    title.textContent = "Document Print";
} else if (link.includes("photo_print")) {
    title.textContent = "Photo Print";
} else if (link.includes("photocopy")) {
    title.textContent = "Photocopy";
} else if (link.includes("invitation")) {
    title.textContent = "Invitation";
} else if (link.includes("id_picture")) {
    title.textContent = "ID Picture";
} else if (link.includes("lamination")) {
    title.textContent = "Lamination";
} else if (link.includes("framed_picture")) {
    title.textContent = "Framed Picture";
} else if (link.includes("printer")) {
    title.textContent = "Printer";
    image1.src = imageSrc("printer", "1");
    image2.src = imageSrc("printer", "2");
    image3.src = imageSrc("printer", "3");
    image4.src = imageSrc("printer", "4");
    img1.src = imageSrc("printer", "1");
    img2.src = imageSrc("printer", "2");
    img3.src = imageSrc("printer", "3");
    img4.src = imageSrc("printer", "4");
}

function imageSrc(product, productNo) {
    return ('static/images/catalog_product/' + product + '/product_' + productNo + '.jpg');
}
