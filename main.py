from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/catalog_product_document_print')
@app.route('/catalog_product_photo_print')
@app.route('/catalog_product_photocopy')
@app.route('/catalog_product_invitation')
@app.route('/catalog_product_id_picture')
@app.route('/catalog_product_lamination')
@app.route('/catalog_product_framed_picture')
@app.route('/catalog_product_printer')
def catalog_product():
    return render_template('catalog_product.html')


@app.route('/catalog_services_printer_repair')
@app.route('/catalog_services_ciss_installation')
@app.route('/catalog_services_defective_printer')
@app.route('/catalog_services_online_appointment')
@app.route('/catalog_services_resume_maker')
@app.route('/catalog_services_photo_editing')
def catalog_services():
    return render_template('catalog_services.html')


@app.route('/catalog')
def catalog():
    return render_template('catalog.html')


@app.route('/news')
def news():
    return render_template('news.html')


@app.route('/testimonials')
def testimonials():
    return render_template('testimonials.html')


@app.route('/contact_us')
def contact_us():
    return render_template('contact_us.html')


@app.route('/about_us')
def about_us():
    return render_template('about_us.html')


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
