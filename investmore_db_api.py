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


customer_product_columns = ['sign_up_cd', 'customer_cd', 'product_cd', 'balance']
customer_columns = ['customer_cd', 'customer_nm',  'monthly_income', 'job', 
                                   'investment_propensity', 'recommendation']
income_expenditure_columns = ['income_expenditure_cd', 'customer_cd',  'month', 'monthly_income', 
                                   'monthly_expenditure', 'balance']
recommendation_columns = ['job', 'monthly_income', 'monthly_expenditure']
product_columns = ['product_cd', 'volatility', 'interest_rate']
expenditure_columns = ['payment_cd', 'month', 'customer_cd', 'expenditure']




def return_json_form_df(data):
    
        json_list = []
        for i in range(len(data)):
            data_list = data.iloc[i].values.tolist()       
            customer_dict = dict()
            for j in range(len(data_list)):
                customer_dict[data.columns[j]] = str(data_list[j])
            json_list.append(customer_dict)
        
        return json_list
    
    
def get_data_columns_and_data_sets(columns):
    columns

    a = '('

    for i in columns:
        a= a + str(i) + ','

    data_columns = a[:-1]+')'


    b = '('

    for i in columns:
        b = b + '%s' + ','

    data_sets= b[:-1]+')'
    return data_columns, data_sets



def insert_data(table_name, data, df_columns):
    conn = psycopg2.connect('host={0} dbname={1} user={2} password={3}'.format(host, dbname, user, pwd))
    cur = conn.cursor()   
    data_df = pd.DataFrame(data, columns = df_columns)
    data_columns, data_sets = get_data_columns_and_data_sets(df_columns)

    ## 지정 필수!!!!
    table_name = table_name
    data = data_df
    ##########

    print(table_name +'꺼 넣기 시작 ' )
    insert_data=  data.iloc[::-1].values.tolist()

    for i in insert_data:
        try:
            i = [None if str(x) == str(np.nan) else x for x in i]
            cur.execute("INSERT INTO " + table_name + " " + data_columns + ' VALUES ' + data_sets , i) 
            print(str(i[0]))
            conn.commit()
        except Exception as e:
            print("*******Error********" + str(e))
            print("error data : " + str(i))
            conn = psycopg2.connect('host={0} dbname={1} user={2} password={3}'.format(host, dbname, user, pwd))
            cur = conn.cursor()
            pass    
    conn.commit()
    print(table_name + str('꺼끝'))

    
## 고객정보 관련 api
def get_customer_data_df():
    '''고객의 정보 테이블
       리턴 형식 : pd.DataFrame'''
    table_name = 'investmore.customer'

    conn = psycopg2.connect('host={0} dbname={1} user={2} password={3}'.format(host, dbname, user, pwd))
    cur = conn.cursor()

    cur.execute("SELECT * FROM  "+table_name)
    data = pd.DataFrame(cur.fetchall(), columns = customer_columns)
    return data


def get_customer_data_from_customer_cd(customer_cd):
    try:
        customer_cd = str(customer_cd)
        '''고객정보 가져와서, 고객 코드로 데이터 조회'''
        data = get_customer_data_df()
        data = data[data['customer_cd'] == customer_cd]
        data['accumulative_expenditure'] = get_accumulative_expenditure_of_customer_cd(customer_cd)
        data['previous_avg_payment'] = get_expenditure_from_customer_cd(customer_cd)        
        if len(data) == 0:
            raise ValueError('고객코드 조회 불가')
        return return_json_form_df(data)
    
    except:
        return {'error' : '올바르지 않은 데이터가 입력되었습니다'}

def insert_customer_data(json_data):
    table_name = 'investmore.customer'
    
    customer_columns = ['customer_cd', 'customer_nm',  'monthly_income', 'job', 
                                       'investment_propensity', 'recommendation']    
    customer_cd = json_data['customer_cd']
    customer_nm = json_data['customer_cd']
    monthly_income = json_data['monthly_income']
    job = json_data['job']
    investment_propensity = json_data['investment_propensity']
    if json_data['recommendation'] != None:
        recommendation = json_data['recommendation']
    else:
        recommendation = get_recommendation_expenditure_from_job(job)
    
    data  = [[customer_cd, customer_nm, monthly_income, job, investment_propensity, recommendation]]
    insert_data(table_name, data, customer_columns)    
    
def get_income_expenditure_df():
    '''고객의 월별 수입과 지출내역 테이블
       리턴 형식 : pd.DataFrame'''
    table_name = 'investmore.income_expenditure'

    conn = psycopg2.connect('host={0} dbname={1} user={2} password={3}'.format(host, dbname, user, pwd))
    cur = conn.cursor()

    cur.execute("SELECT * FROM  "+table_name)
    data = pd.DataFrame(cur.fetchall(), columns = income_expenditure_columns)
    return data

def get_expenditure_from_customer_cd(customer_cd):
    '''회원의 지난 지출내역 확인
    리턴 형식 : str'''
    customer_cd = str(customer_cd)
    data = get_income_expenditure_df()
    data['customer_cd'] = data['customer_cd'].apply(lambda x : str(x))
    
    data = data[data['customer_cd'] == customer_cd]
    expenditure = data.groupby('customer_cd')['monthly_expenditure'].mean().iloc[0]
    return str(expenditure)


def get_product_data_df():
    '''상품정보 보여주는 테이블
       리턴 형식 : pd.DataFrame
       
       수익률 표시해줄때는 따로 json으로 반환되게 처리해줄 것'''
    table_name = 'investmore.product'

    conn = psycopg2.connect('host={0} dbname={1} user={2} password={3}'.format(host, dbname, user, pwd))
    cur = conn.cursor()

    cur.execute("SELECT * FROM  "+table_name)
    data = pd.DataFrame(cur.fetchall(), columns = product_columns)
    return data


def get_recommendation_data_df():
    '''적정 지출선, 수입선 보여주는 테이블
    리턴 형식 : pd.DataFrame '''
    table_name = 'investmore.recommendation'

    conn = psycopg2.connect('host={0} dbname={1} user={2} password={3}'.format(host, dbname, user, pwd))
    cur = conn.cursor()

    cur.execute("SELECT * FROM  "+table_name)
    data = pd.DataFrame(cur.fetchall(), columns = recommendation_columns)
    return data


def get_recommendation_expenditure_from_job(job):
    '''값이 있을 경우 int, 없을 땐 None'''
    data = get_recommendation_data_df()
    data = data[data['job'] == job]
    if len(data) == 0:
        return None
    else:
        return data.iloc[0]['monthly_expenditure']
    
def get_recommendation_expenditure_from_monthly_income(monthly_income):
    '''값이 있을 경우 int, 없을 땐 None'''
    data = get_recommendation_data_df()
#     print(data)
    data['monthly_income'] = data['monthly_income'].apply(lambda x : str(x))
    data = data[data['monthly_income'] == str(monthly_income)]
#     print(data)
    if len(data) == 0:
        return str(44444444)
    else:
        return data.iloc[0]['monthly_expenditure']
    
    
def get_customer_product_data_df():
    '''고객이 보유한 상품들 보여주는 테이블
    리턴 형식 : pd.DataFrame'''
    table_name = 'investmore.customer_product'

    conn = psycopg2.connect('host={0} dbname={1} user={2} password={3}'.format(host, dbname, user, pwd))
    cur = conn.cursor()

    cur.execute("SELECT * FROM  "+table_name)
    data = pd.DataFrame(cur.fetchall(), columns = customer_product_columns)
    return data


def get_expenditure_data_df():
    ''' 모든 회원의 지출 내역 모두 확인
    리턴 형식 : pd.Dataframe
    '''
    table_name = 'investmore.expenditure'

    conn = psycopg2.connect('host={0} dbname={1} user={2} password={3}'.format(host, dbname, user, pwd))
    cur = conn.cursor()

    cur.execute("SELECT * FROM  "+table_name)
    data = pd.DataFrame(cur.fetchall(), columns = expenditure_columns)
    return data



def get_accumulative_expenditure_of_customer_cd(customer_cd):
    '''
    특정 회원의 모든 지출 내역
    리턴 형식 : pd.DataFrame
    '''
    data = get_expenditure_data_df()
    data['customer_cd'] = data['customer_cd'].apply(lambda x : str(x))
#     print(data)
#     print(customer_cd)
    data = data[data['customer_cd']  == customer_cd]
#     print(data)
    if len(data) == 0:
        return 0
    else:
        accumulative_expenditure = data.groupby('customer_cd')['expenditure'].sum().iloc[0]
        print(accumulative_expenditure)
        return accumulative_expenditure

