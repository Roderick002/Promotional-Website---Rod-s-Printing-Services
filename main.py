from flask import Flask, render_template, request
import firebase_admin
import os
from firebase_admin import db, credentials, storage
from dotenv import load_dotenv
from google.cloud.storage import bucket
from flask_mail import Mail, Message
from datetime import datetime

app = Flask(__name__)
app.config['MAIL_SERVER'] = 'smtp.googlemail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USERNAME'] = 'rodsprintingservices@gmail.com'
app.config['MAIL_PASSWORD'] = 'epan yviw ygcw evkp'
app.config['MAIL_USE_TLS'] = True

# Load environment variables from .env file
load_dotenv()

firebase_config = {
    "type": "service_account",
    "project_id": os.getenv("FIREBASE_PROJECT_ID"),
    "private_key_id": os.getenv("FIREBASE_PRIVATE_KEY_ID"),
    "private_key": os.getenv("FIREBASE_PRIVATE_KEY"),
    "client_email": os.getenv("FIREBASE_CLIENT_EMAIL"),
    "client_id": os.getenv("FIREBASE_CLIENT_ID"),
    "auth_uri": os.getenv("FIREBASE_AUTH_URI"),
    "token_uri": os.getenv("FIREBASE_TOKEN_URI"),
    "auth_provider_x509_cert_url":
    os.getenv("FIREBASE_AUTH_PROVIDER_CERT_URL"),
    "client_x509_cert_url": os.getenv("FIREBASE_CLIENT_CERT_URL"),
    "universe_domain": os.getenv("FIREBASE_UNIVERSE_DOMAIN")
}

cred = credentials.Certificate(firebase_config)
firebase_admin.initialize_app(
    cred, {
        "databaseURL": os.getenv("FIREBASE_DATABASE_URL"),
        'storageBucket': os.getenv("FIREBASE_STORAGE_BUCKET")
    })

ref = db.reference("/firebase")

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
        item = request.form['item-name']
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
        currentDate = datetime.now()
        dateFormat = currentDate.strftime("%Y-%m-%d")
        dateTime = currentDate.strftime("%Y-%m-%d-%H-%M-%S")

        db.reference('/product_clients').update({username: ''})
        db.reference('/product_clients/' + username).update({
            'item': item,
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
        db.reference('/new_orders/' + dateTime).update({
            'item': item,
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
        db.reference('/order_history/' + dateFormat + '/' + dateTime).update({
            'item':
            item,
            'email':
            email,
            'name':
            name,
            'phone':
            phone,
            'size':
            size,
            'color':
            color,
            'quantity':
            quantity,
            'description':
            description,
            'address':
            address,
            'time':
            time,
            'date':
            date
        })

        msg = Message("Order Confirmation - Rod's Printing Services",
                      sender='no-reply@rodsprintingservices',
                      recipients=[email])

        msg.html = "<br> Greetings <b> " + name + "</b>, <br> <br> Thank you for choosing Rod's Printing Services for your printing needs! <br><br>We are pleased to inform you that we have successfully received your order. Below are the details of <br> your order for your reference: <br> <br> ORDER INFORMATION: <br> <b>Product/Service:</b> " + item + "<br> <b>Date   of Order: </b>" + dateFormat + "<br> <b>Address: </b>" + address + " <br> <b>Scheduled Time:</b>" + time + " <br><b>Scheduled Date: </b>" + date + " <br> <br> SPECIFICATIONS: <br> <b>Size: </b>" + size + "<br> <b>Color: </b>" + color + "<br> <b>Quantity: </b>" + quantity + " <br> <br>Our team is currently processing your order and will ensure that it is completed with the highest <br> quality and delivered to you in a timely manner. We will keep you updated on the status of your <br> order and will contact you ASAP to discuss the details <br> <br> If you have any   questions or need further assistance, please do not hesitate to contact us <br> <br> Thank you for choosing Rod's Printing Services! <br> <br> Best regards, <br><br> <i>Mr. Roderick Palmes</i> <br> <i>Business Owner</i> <br> <i>Rod's Printing Services</i> <br> <i>https://rods-printing-services-jibu.onrender.com/</i>"

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
        item = request.form['item-name']
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
        currentDate = datetime.now()
        dateFormat = currentDate.strftime("%Y-%m-%d")
        dateTime = currentDate.strftime("%Y-%m-%d-%H-%M-%S")

        db.reference('/services_clients').update({username: ''})
        db.reference('/services_clients/' + username).update({
            'item': item,
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
        db.reference('/new_orders/' + dateTime).update({
            'item': item,
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
        db.reference('/order_history/' + dateFormat + '/' + dateTime).update({
            'item':
            item,
            'email':
            email,
            'name':
            name,
            'phone':
            phone,
            'size':
            size,
            'color':
            color,
            'quantity':
            quantity,
            'description':
            description,
            'address':
            address,
            'time':
            time,
            'date':
            date
        })

        msg = Message("Order Confirmation - Rod's Printing Services",
                      sender='no-reply@rodsprintingservices',
                      recipients=[email])

        msg.html = "<br> Greetings <b> " + name + "</b>, <br> <br> Thank you for choosing Rod's Printing Services for your printing needs! <br><br>We are pleased to inform you that we have successfully received your order. Below are the details of <br> your order for your reference: <br> <br> ORDER INFORMATION: <br> <b>Product/Service:</b> " + item + "<br> <b>Date   of Order: </b>" + dateFormat + "<br> <b>Address: </b>" + address + " <br> <b>Scheduled Time:</b>" + time + " <br><b>Scheduled Date: </b>" + date + " <br> <br> SPECIFICATIONS: <br> <b>Size: </b>" + size + "<br> <b>Color: </b>" + color + "<br> <b>Quantity: </b>" + quantity + " <br> <br>Our team is currently processing your order and will ensure that it is completed with the highest <br> quality and delivered to you in a timely manner. We will keep you updated on the status of your <br> order and will contact you ASAP to discuss the details <br> <br> If you have any   questions or need further assistance, please do not hesitate to contact us <br> <br> Thank you for choosing Rod's Printing Services! <br> <br> Best regards, <br><br> <i>Mr. Roderick Palmes</i> <br> <i>Business Owner</i> <br> <i>Rod's Printing Services</i> <br> <i>https://rods-printing-services-jibu.onrender.com/</i>"

        mail.send(msg)

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
