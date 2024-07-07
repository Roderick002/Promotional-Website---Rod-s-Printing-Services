from flask import Flask, render_template, request
import firebase_admin
from firebase_admin import db, credentials, storage
from google.cloud.storage import bucket
from flask_mail import Mail, Message

cred = credentials.Certificate("credentials.json")
firebase_admin.initialize_app(
    cred, {
        "databaseURL":
        "https://rod-s-printing-services-default-rtdb.firebaseio.com/",
        'storageBucket': 'gs://rod-s-printing-services.appspot.com'
    })

bucket = storage.bucket()
ref = db.reference("/firebase")

app = Flask(__name__)
app.config['MAIL_SERVER'] = 'smtp.googlemail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USERNAME'] = 'rodsprintingservices@gmail.com'
app.config['MAIL_PASSWORD'] = 'epan yviw ygcw evkp'
app.config['MAIL_USE_TLS'] = True

mail = Mail(app)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/catalog_product_document_print', methods=['GET', 'POST'])
@app.route('/catalog_product_photo_print', methods=['GET', 'POST'])
@app.route('/catalog_product_photocopy', methods=['GET', 'POST'])
@app.route('/catalog_product_invitation', methods=['GET', 'POST'])
@app.route('/catalog_product_id_picture', methods=['GET', 'POST'])
@app.route('/catalog_product_lamination', methods=['GET', 'POST'])
@app.route('/catalog_product_framed_picture', methods=['GET', 'POST'])
@app.route('/catalog_product_printer', methods=['GET', 'POST'])
def catalog_product():
    if request.method == 'POST':
        name = request.form['name']
        phone = request.form['phone']
        email = request.form['email']
        size = request.form['size']
        color = request.form['color']
        quantity = request.form['quantity']
        description = request.form['description']
        address = request.form['address']
        time = request.form['time']
        date = request.form['date']

        username = email.replace('.', '')

        db.reference('/product_clients').update({username: ''})
        db.reference('/product_clients/' + username).update({
            'email': email,
            'name': name,
            'phone': phone,
            'size': size,
            'color': color,
            'quantity': quantity,
            'description': description,
            'address': address,
            'time': time,
            'date': date
        })
        msg = Message("Test",
                      sender='rodsprintingservices@gmail.com',
                      recipients=[email])
        msg.body = "Website Testing"
        mail.send(msg)
    return render_template('catalog_product.html')


@app.route('/catalog_services_printer_repair', methods=['GET', 'POST'])
@app.route('/catalog_services_ciss_installation', methods=['GET', 'POST'])
@app.route('/catalog_services_defective_printer', methods=['GET', 'POST'])
@app.route('/catalog_services_online_appointment', methods=['GET', 'POST'])
@app.route('/catalog_services_resume_maker', methods=['GET', 'POST'])
@app.route('/catalog_services_photo_editing', methods=['GET', 'POST'])
def catalog_services():
    if request.method == 'POST':
        name = request.form['name']
        phone = request.form['phone']
        email = request.form['email']
        username = email.replace('.', '')
        db.reference('/services_clients').update({username: ''})
        db.reference('/services_clients/' + username).update({
            'email': email,
            'name': name,
            'phone': phone
        })
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


@app.route('/about_us')
def about_us():
    return render_template('about_us.html')


@app.route('/terms_conditions')
def terms_conditions():
    return render_template('/Footer-menu/terms_conditions.html')


@app.route('/privacy_policy')
def privacy_policy():
    return render_template('/Footer-menu/privacy_policy.html')


@app.route('/contact_us')
def contact_us():
    return render_template('contact_us.html')


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
