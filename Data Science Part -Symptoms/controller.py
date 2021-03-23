# from typing import get_origin
# from flask import Flask
# from flask_cors import CORS
# from flask_cors.decorator import cross_origin

# app = Flask(__name__)
# app.debug = True

# app.config['CORS_HEADERS'] = 'Content-Type'
# CORS(app)


# @app.route('/getDisease', methods=['POST'])
# @cross_origin(origin='*', headers=['Content-Type', 'Authorization'])
# def returnDisease():
#     print('Working')
#     return "Pneumonia"

# if __name__ == '__main__':
#     app.run(debug=True)


from flask import Flask

app = Flask(__name__)

@app.route('/getDisease', methods=['GET'])
def index():
    return {
        'name': 'Hello World'
    }


if __name__ == '__main__':
    app.run(debug=True)