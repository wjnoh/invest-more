from flask import Flask, jsonify, request
from flask_restful import Resource, Api, reqparse
# from resources.test import Test
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
api = Api(app)

name = {}

def on_json_loading_failed_return_dict(e):  
    return {}



class HOME(Resource):
    def get(self):
        try:
            json_doc = {'Greeting' : 'Hello'}
            return jsonify(json_doc)

        except Exception as e:
            return {'error':str(e)}


class Name(Resource):
    
    def get(self):
        return jsonify(name)



class CreateUser(Resource):
    def post(self):
        try:
            request.on_json_loading_failed = on_json_loading_failed_return_dict
            print(request.get_json(silent=True))
            name['1'] = str(request.get_json())
            json_doc = {'Data Post' : 'Successful, 성공 ㅎㅎㅎㅎㅎ ' + str(request.get_json())} 
            return jsonify(json_doc)
        except Exception as e:
            return {'error':str(e)}



api.add_resource(HOME, '/')
api.add_resource(CreateUser, '/trypost')
api.add_resource(Name, '/checkpost')


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)