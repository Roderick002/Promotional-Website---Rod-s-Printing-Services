const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const image4 = document.getElementById('image4');
const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const img4 = document.getElementById('img4');

const title = document.getElementById('services-name');
const description = document.getElementById('services-description');
const specs = document.getElementById('specs-price');

const link = window.location.href;
if (link.includes("printer_repair")) {
    title.textContent = "Printer Repair";
    description.textContent = "When your printer encounters issues, our expert repair services are here to help. We specialize in diagnosing and fixing a wide range of printer problems, from paper jams and connectivity issues to hardware malfunctions and software glitches. We provide efficient repairs to get your printer up and running smoothly again.";
    specs.textContent = "For expert printer repair services, our pricing is flexible and dependent on the specific issue and any necessary parts replacement. Repair costs range from ₱300.00 to ₱1,200.00, ensuring affordability and transparency in addressing your printer's needs. Whether it's resolving paper jams, fixing connectivity issues, or replacing worn-out components, our skilled technicians provide efficient solutions tailored to your printer's requirements. Rest assured, we prioritize quality repairs and customer satisfaction, striving to restore your printer's functionality at a reasonable price. Contact us today for reliable printer repair services you can trust.";
} else if (link.includes("ciss_installation")) {
    title.textContent = "Continuous Ink Supply System (CISS) Installation";
    description.textContent = "Experience uninterrupted printing with our professional CISS installation service. CISS is a cost-effective and convenient solution that replaces traditional ink cartridges with refillable ink tanks, allowing for continuous ink flow to your printer. With CISS, you'll enjoy significant savings on ink costs and reduced downtime due to frequent cartridge changes.";
    specs.textContent = "Upgrade your Canon printer with our expert Continuous Ink Supply System (CISS) installation service, starting at a base price of ₱1,200.00. Our skilled technicians specialize in Canon printer models, including Pixma TS207, IP2770, MP237, MP258, MP276, MP287, MG2570, MG3070, E470, E4270, and more. Whether you're looking to reduce printing costs or enhance efficiency, CISS installation offers continuous ink flow and eliminates the need for frequent cartridge replacements. Prices may vary depending on the printer model and location for home service, with rates extending up to ₱2,000.00. Experience seamless printing and cost savings with our professional CISS installation service tailored to your Canon printer.";
} else if (link.includes("photo_editing")) {
    title.textContent = "Photo Editing";
    description.textContent = " Transform your photos into stunning works of art with our professional photo editing services. Whether you need retouching, color correction, background removal, or creative enhancements, our skilled editors utilize industry-leading software to bring out the best in your images. With quick turnaround times and affordable rates, we ensure your photos stand out and make a lasting impression.";
    specs.textContent = 'Transform your photos into stunning masterpieces with our professional photo editing service, priced from ₱30.00 to ₱100.00, depending on the complexity of the edits. Whether you need simple adjustments like brightness and contrast enhancements or more intricate alterations such as background removal or digital retouching, our skilled editors ensure your images shine. From family portraits to product photography, we cater to all your editing needs, delivering high-quality results that exceed your expectations. With flexible pricing and exceptional attention to detail, let us elevate your photos to the next level.';
} else if (link.includes("online_appointment")) {
    title.textContent = "Online Appointment Setting";
    description.textContent = "Take the hassle out of scheduling with our expert online appointment setting service. We specialize in efficiently arranging appointments on your behalf, ensuring a smooth and organized calendar without the need for you to manage it manually. With a focus on personalized service and attention to detail, we prioritize your preferences and ensure that each appointment is tailored to your needs.";
    specs.textContent = 'Simplify your appointment scheduling with our online appointment setting service, offering convenience and efficiency for various government appointments. Secure appointments for Philippine Statistics Authority (PSA) services like birth certificates, CENOMAR, and more for just ₱35.00 each. Book National Bureau of Investigation (NBI) clearance appointments or police clearance appointments seamlessly for ₱45.00 each. Additionally, streamline Philippine Passport appointments for ₱80.00. Our service ensures hassle-free booking, saving you time and effort. Say goodbye to long queues and uncertainty—book your government appointments with ease through our online platform.';
} else if (link.includes("resume_maker")) {
    title.textContent = "Resume Maker";
    description.textContent = " Elevate your job application with our professional resume maker service. Our intuitive platform guides you through the resume creation process, offering customizable templates and expert tips to showcase your skills and experience effectively. Start building your career success with our user-friendly resume maker service today.";
    specs.textContent = "Craft the perfect resume with our user-friendly resume maker service, priced from ₱60.00 to ₱120.00, depending on the design chosen and complexity. Whether you're a recent graduate or a seasoned professional, our intuitive platform offers customizable templates and expert guidance to help you create a standout resume tailored to your career goals. Choose from a variety of designs and layouts to showcase your skills and experience effectively. With flexible pricing options and comprehensive features, our resume maker ensures that your application stands out from the crowd. Unlock your career potential today with our affordable and convenient resume creation service.";
} else if (link.includes("defective_printer")) {
    title.textContent = "Sell Your Defective Printer";
    description.textContent = "We specialize in purchasing defective printers, providing a hassle-free solution for those looking to offload non-functional or problematic devices. Whether your printer has print quality issues, connectivity problems, or other malfunctions, we offer fair prices based on its condition and potential for refurbishment or parts.";
    specs.textContent = "Looking to offload your defective printer? We're here to help! We specialize in purchasing defective printers directly from customers like you. Whether your printer has print quality issues, connectivity problems, or other malfunctions, we're interested in buying it. Our pricing varies based on the specific model and issue, ranging from ₱300.00 to ₱1,200.00. Selling your defective printer to us not only frees up space but also ensures that it's disposed of responsibly. Plus, you'll receive cash in return, which you can put towards a new printer or any other needs. If you have a defective printer that you're looking to sell, contact us today for a quote and hassle-free transaction!";
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
