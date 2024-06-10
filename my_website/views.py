from flask import Blueprint, render_template

views = Blueprint('views', __name__)

@views.route('/', methods=['GET', 'POST'])
def home():
    return render_template('home.html')


@views.route('/projects')
def about():
    return render_template('projects.html')

# @views.route('/contact', methods=['GET', 'POST'])
# def contact():
#     return render_template('contact.html')

@views.route('/resume') 
# methods=['GET', 'POST'] add to line above maybe
def resume():
    return render_template('resume.html')