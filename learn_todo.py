# -*- coding: utf-8 -*-
__author__ = 'florije'

from flask import Flask, make_response, render_template

app = Flask(__name__)


@app.route('/')
def hello_world():
    # return 'Hello World!'
    # return make_response(open('angular_flask/templates/index.html').read())
    return render_template('index.html')


if __name__ == '__main__':
    app.run()
