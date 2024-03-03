from flask import Flask, request, render_template, Response
from flask import jsonify

app = Flask(__name__)

@app.route('/yuliao', methods=['GET', 'POST'])
def login():
    t = request.data
    print(t.decode("utf-8"))
    return "1"


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)