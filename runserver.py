# -*- coding: utf-8 -*-
__author__ = 'florije'

from flask import Flask, make_response, render_template, send_from_directory
import os

app = Flask(__name__)


@app.route('/')
def hello_world():
    # return 'Hello World!'
    # return make_response(open('angular_flask/templates/index.html').read())
    return render_template('index.html')


@app.route('/favicon.ico')
def favicon():
    return send_from_directory(os.path.join(app.root_path, 'static'), 'img/favicon.ico')


if __name__ == '__main__':
    app.run()
