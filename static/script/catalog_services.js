const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const image4 = document.getElementById('image4');
const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const img4 = document.getElementById('img4');

const title = document.getElementById('services-name');
const link = window.location.href;
if (link.includes("printer_repair")) {
    title.textContent = "Printer Repair";
} else if (link.includes("ciss_installation")) {
    title.textContent = "Continuous Ink Supply System (CISS) Installation";
} else if (link.includes("photo_editing")) {
    title.textContent = "Photo Editing";
} else if (link.includes("online_appointment")) {
    title.textContent = "Online Appointment Setter";
} else if (link.includes("resume_maker")) {
    title.textContent = "Resume Maker";
} else if (link.includes("defective_printer")) {
    title.textContent = "Sell Your Defective Printer";
    image1.src = imageSrc("printer", "1");
    image2.src = imageSrc("printer", "2");
    image3.src = imageSrc("printer", "3");
    image4.src = imageSrc("printer", "4");
    img1.src = imageSrc("printer", "1");
    img2.src = imageSrc("printer", "2");
    img3.src = imageSrc("printer", "3");
    img4.src = imageSrc("printer", "4");
}

function imageSrc(service, serviceNo) {
    return ('static/images/catalog_services/' + service + '/service_' + serviceNo + '.jpg');
}
