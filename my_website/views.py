from flask import Blueprint, render_template

views = Blueprint('views', __name__)

@views.route('/', methods=['GET', 'POST'])
def home():
    return render_template('home.html')

@views.route('/menu', methods=['GET', 'POST'])
def menu():
    return render_template('menu.html')

@views.route('/about')
def index():
    return render_template('about.html')