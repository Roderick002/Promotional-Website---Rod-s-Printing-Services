const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const image4 = document.getElementById('image4');
const image5 = document.getElementById('image5');
const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const img4 = document.getElementById('img4');


const title = document.getElementById('product-name');
const description = document.getElementById('product-description');
const specs = document.getElementById('specs-price');

const link = window.location.href;
if (link.includes("document_print")) {
    title.textContent = "Document Print";
    description.textContent = "Our document printing service provides high-quality prints for all your needs, from reports and presentations to flyers and brochures. Whether you need a single copy or bulk printing, our fast and reliable service guarantees professional results every time.";
    specs.textContent = 'Our document printing service ensures top-notch prints, catering to a variety of standard paper sizes, namely letter (8.5" x 11"), A4 (210 mm x 297 mm), and Legal (8.5" x 14"). These sizes accommodate diverse document requirements, whether it is for professional reports, academic papers, or personal projects. Pricing varies depending on size and color specifications. For letter and A4 sizes, grayscale prints range from ₱2.00 to ₱3.00 pesos per page, while colored variants are priced between ₱5.00 to ₱12.00 pesos per page. For Legal size prints, grayscale options are available at ₱3.00 to ₱5.00 pesos per page, while colored prints range from ₱7.00 to ₱15.00 pesos per page. ';


} else if (link.includes("photo_print")) {
    title.textContent = "Photo Print";
    description.textContent = " Capture your cherished memories with our premium photo printing service. We use high-quality photo paper to produce vibrant, true-to-life prints that preserve your photos' original beauty and detail. Available in a range of sizes and finishes, from glossy to matte, our photo prints are perfect for framing, albums, or gifting.";
    specs.textContent = 'Experience vivid memories with our photo print service, offering premium-quality prints in various sizes to suit your needs. Choose from 3R prints at ₱15.00 each, perfect for wallet-size frames, 4R prints at ₱25.00 each, ideal for standard frames and albums, or A4 prints at ₱50.00 each, great for larger displays. Printed on high-quality photo paper, each print captures lifelike colors and sharp details, ensuring your memories come to life. Whether it is family portraits, vacation snapshots, or artistic photography, our photo prints provide the perfect way to preserve and share your cherished moments.'
} else if (link.includes("photocopy")) {
    title.textContent = "Photocopy";
    description.textContent = "Our photocopying service offers quick and accurate reproductions of your documents, ensuring clear and precise copies every time. Ideal for business documents, academic materials, or personal paperwork, our service provides high-speed copying with various paper sizes and types to suit your needs. ";
    specs.textContent = 'Our photocopy service offers efficient and affordable solutions for all your document replication needs. For A4/Letter size, grayscale copies are priced at ₱2.00 per page, while colored copies are available at ₱7.00 per page. These copies are perfectly suited for standard document formats, providing crisp and clear reproductions of text and images. Additionally, for Legal size documents, grayscale copies are priced at ₱3.00 per page, while colored copies are priced at ₱10.00 per page. With competitive pricing and high-quality results, our photocopy service ensures that your documents are replicated accurately and professionally, whether they are grayscale or colored, A4/Letter or Legal size.'
} else if (link.includes("invitation")) {
    title.textContent = "Invitation";
    description.textContent = "Make your events unforgettable with our custom invitation printing service. We offer a wide selection of high-quality paper stocks, finishes, and design options to create stunning invitations for weddings, parties, corporate events, and more.From elegant and classic styles to modern and creative layouts, we cater to all tastes and occasions. ";
    specs.textContent = "Elevate your event with our invitation printing service, offering premium-quality prints and complimentary design options. Choose from our range of sizes, including 3R invitations at ₱15.00 each and 4R invitations at ₱25.00 each. Our skilled designers will work closely with you to create a customized invitation that perfectly reflects the tone and theme of your occasion. Whether it's a wedding, birthday, or corporate event, our invitations are printed on high-quality cardstock, ensuring durability and elegance. With our affordable prices and complimentary design service, you can make a lasting impression on your guests without breaking the bank."
} else if (link.includes("id_picture")) {
    title.textContent = "ID Picture";
    description.textContent = "Get professional ID pictures with our high-quality ID picture printing service. Perfect for passports, visas, driver's licenses, and other identification needs, we ensure your photos meet all required specifications and standards.Our quick and efficient service guarantees you receive your ID photos promptly, with options for both digital and physical copies.";
    specs.textContent = 'Our ID picture packages designed to meet your specific needs and budget. Package A offers a comprehensive selection with 5 pieces of 1x1 ID photos and 3 pieces of 2x2 ID photos, all for just ₱35.00. For those seeking simplicity, Package B provides 6 pieces of 2x2 ID photos at an affordable price of ₱30.00. If you require a variety of sizes, Package C includes 5 pieces of 1x1 ID photos, 2 pieces of 2x2 ID photos, and 3 passport-sized photos, ensuring versatility for different identification purposes, all for ₱40.00. Our ID picture packages combine quality and convenience, ensuring that you have the perfect photos for any application'
} else if (link.includes("lamination")) {
    title.textContent = "Lamination";
    description.textContent = "Protect and preserve your important documents, photos, and prints with our professional lamination service.Lamination involves encasing your items in a durable, clear plastic film, safeguarding them against wear, tear, moisture, and fading. Available in various sizes, our lamination enhances the longevity and appearance of certificates, ID cards, and more.";
    specs.textContent = 'Protect your important documents with our lamination service, offering durability and longevity at affordable prices. For ID size documents, lamination is available for just ₱15.00 each, ensuring your IDs remain intact and resistant to wear and tear. Larger documents, such as 4R size prints, can be laminated for ₱25.00 each, providing added protection for your cherished photos and memories. Additionally, A4 size documents can be laminated for ₱60.00 each, ideal for preserving important papers and certificates. With our lamination service, you can safeguard your documents against damage and ensure they stand the test of time.'
} else if (link.includes("framed_picture")) {
    title.textContent = "Framed Picture";
    description.textContent = "Showcase your favorite photos and artwork with our premium framed picture printing service. We offer a wide range of stylish frames and high-quality printing options to perfectly complement your images.Our frames come in various materials, sizes, and finishes, suitable for any décor style.";
    specs.textContent = "Enhance your space with our framed picture service, offering timeless elegance and customizable options to suit your preferences. Choose from 3R, 4R, and A4 sizes, with prices ranging from ₱100.00 to ₱250.00, depending on your choice of frame. Our frames are crafted from high-quality materials, available in a variety of styles and finishes to complement any decor. Whether you're displaying family portraits, vacation snapshots, or artistic prints, our framed pictures add a touch of sophistication to any room. With our range of sizes and customizable frames, you can create a personalized display that reflects your unique style and memories."
} else if (link.includes("printer")) {
    title.textContent = "Printer";
    description.textContent = "Elevate your printing experience with our range of reliable and versatile printers. Designed for home, office, or commercial use, our printers deliver exceptional quality, efficiency, and convenience. Whether you need crisp black-and-white documents, vibrant color prints, or high-resolution photos, our printers provide outstanding results every time.";
    specs.textContent = "Transform your printing experience with our converted Continuous Ink Supply System (CISS) printers, offering cost-effective and efficient solutions for all your printing needs. Experience uninterrupted printing with models such as the Canon Pixma IP2770 for ₱2,500.00, the Canon Pixma MP237 for ₱3,500.00, or the Canon Pixma MP276 and MP258 for ₱3,800.00. For more advanced features, consider the Canon Pixma MP287 for ₱4,000.00. Please note that our list is subject to updates depending on stock availability. With CISS conversion, you'll enjoy hassle-free printing, reduced ink costs, and continuous operation, making these printers the perfect choice for home, office, or business use."

    setProductSnapshots("printer");
}

function imageSrc(product, productNo) {
    return ('static/images/catalog_product/' + product + '/product_' + productNo + '.jpg');
}

function setProductSnapshots(product) {
    image1.src = imageSrc(product, "1");
    image2.src = imageSrc(product, "2");
    image3.src = imageSrc(product, "3");
    image4.src = imageSrc(product, "4");
    image5.src = imageSrc(product, "5");
    img1.src = image1.src;
    img2.src = image2.src;
    img3.src = image3.src;
    img4.src = image4.src;
    img5.src = image5.src;
}
