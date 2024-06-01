from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


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
    return render_template('testimonials.html')


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
