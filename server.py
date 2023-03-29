from flask import Flask, jsonify, request

app = Flask(__name__, static_url_path='/static')


@app.route('/')
def index():
    return 'Hello from Flask!'



@app.route('/check_text', methods=['POST'])
def check_text():
    data = request.get_json()
    print(data)
    text = data.get('text')
    print(text)
    if text == '-3,-3,-3,-3,-4':
        result = 'correct'
    else:
        result = 'incorrect'
    return jsonify(result=result)




app.run(host='0.0.0.0', port=81)
