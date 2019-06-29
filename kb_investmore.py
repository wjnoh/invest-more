from flask import Flask, jsonify, request
from flask_restful import Resource, Api, reqparse
# from resources.test import Test
from flask_cors import CORS
import requests
from bs4 import BeautifulSoup
from html_table_parser import parser_functions as parser
import pandas as pd
import numpy as np
import re
import hgtk
import datetime
from time import sleep
import inspect
import sys
import logging
import schedule
import time
import os
params = {'host':'localhost', 'dbname':'KISA', 'user':'postgres', 'pwd':'dpafhqh1!'}
host = params['host']
dbname = params['dbname']
user = params['user']
pwd = params['pwd']
import psycopg2

#private modules
from investmore_db_api import *

###
customer_columns = ['customer_cd', 'customer_nm', 'product_cd', 'balance', 'previous_monthly_payment', 'previous_monthly_income', 'proper_payment', 'recent_monthly_accumulative_payment', 'exceed']


app = Flask(__name__)
CORS(app)
api = Api(app)

name = {}

## 함수 섹션 나중에 모듈에 다 넣을꺼임

def on_json_loading_failed_return_dict(e):  
    return {}

def return_json_form_df(data):
    
        json_list = []
        for i in range(len(data)):
            data_list = data.iloc[i].values.tolist()       
            customer_dict = dict()
            for j in range(len(data_list)):
                customer_dict[data.columns[j]] = str(data_list[j])
            json_list.append(customer_dict)
        
        return json_list
     
def get_db_data():
    table_name = 'investmore.customer'
    conn = psycopg2.connect('host={0} dbname={1} user={2} password={3}'.format(host, dbname, user, pwd))
    cur = conn.cursor()
    cur.execute("SELECT * FROM  "+table_name)
    data = pd.DataFrame(cur.fetchall(), columns = customer_columns)  
    return data

def get_db_data_from_customer_cd(customer_cd):
    table_name = 'investmore.customer'
    conn = psycopg2.connect('host={0} dbname={1} user={2} password={3}'.format(host, dbname, user, pwd))
    cur = conn.cursor()
    cur.execute('SELECT * FROM  '+table_name + ' where customer_cd=' + "'"+ str(customer_cd) +"'")
    data = pd.DataFrame(cur.fetchall(), columns = customer_columns)
    return data
##########################################

class HOME(Resource):
    def get(self):
        try:
            json_doc = {'Greeting' : 'Hello'}
            return jsonify(json_doc)

        except Exception as e:
            return {'error':str(e)}

        
class GetDBData(Resource):
    
    def get(self):
        
        data = get_db_data()
        customer_dict = return_json_form_df(data)
        
        return jsonify(customer_dict)


class TryPost(Resource):
    def post(self):
        try:
            request.on_json_loading_failed = on_json_loading_failed_return_dict
            print(request.get_json(silent=True))
            name['1'] = str(request.get_json())
            json_doc = {'Data Post' : 'Successful, 성공 ㅎㅎㅎㅎㅎ ' + str(request.get_json())} 
            return jsonify(json_doc)
        except Exception as e:
            return {'error':str(e)}


class SignUp(Resource):
    
    def post(self):
        try:
            request.on_json_loading_failed = on_json_loading_failed_return_dict
            json_data = request.get_json(silent=True)
            print(json_data)
            #json 받는 형태 : {"customer_cd" : "10000000001"}
            try:
                if json_data['recommendation'] == '0':
                    print('yes')
                    monthly_income = json_data['monthly_income']
                    adjusted_monthly_income = int(monthly_income) - (int(monthly_income)%100000)
                    print(monthly_income)
                    json_data['recommendation'] = str(get_recommendation_expenditure_from_monthly_income(adjusted_monthly_income))
                    print(str(get_recommendation_expenditure_from_monthly_income(json_data['monthly_income'])))
                insert_customer_data(json_data)
    
                successful_message = [{'result' : 'successful'}, {'data' : json_data}]
        
                return jsonify(successful_message)
            except Exception as e:
                 return {'error':str(e)}   
                
        except Exception as e:
            return {'error':str(e)}        

class ChooseCharacter(Resource):
    def post(self):
        try:
            request.on_json_loading_failed = on_json_loading_failed_return_dict
            customer_dict = request.get_json(silent=True)
            
            #json 받는 형태 : {"customer_cd" : "10000000001"}
            customer_cd = customer_dict['customer_cd']   
            
            
            
            customer_dict = get_customer_data_from_customer_cd(customer_cd)
            
           
   
            return jsonify(customer_dict)
        
        except Exception as e:
            return {'error':str(e)}        

class ProductInformation(Resource):
    def get(self):
        
        try:
            data = get_product_data_df()
            data = data[['volatility', 'interest_rate']]

            json_data = return_json_form_df(data)
            return jsonify(json_data)
            
        except Exception as e:
            return {'error':str(e)}                
        

api.add_resource(HOME, '/')
api.add_resource(TryPost, '/trypost')
api.add_resource(GetDBData, '/getdbdata')
api.add_resource(ChooseCharacter, '/choosecharacter')
api.add_resource(SignUp, '/signup')
api.add_resource(ProductInformation, '/productinformation')



if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)