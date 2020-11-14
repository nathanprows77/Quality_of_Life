from sqlalchemy import create_engine
import psycopg2
# import config
import pandas as pd 
import os 
from flask import Flask, jsonify, send_from_directory
from flask_cors import CORS, cross_origin


app = Flask(__name__, static_url_path="",static_folder="")
cors = CORS(app)
try:
    DATABASE_URL = os.environ['DATABASE_URL']
except KeyError:
    DATABASE_URL = DATABASE_URI = 'postgres+psycopg2://postgres:Butler_Data@localhost:5432/finalproject_db'
    app.config['SQLALCHEMY_DATABASE_URI'] = DATABASE_URL
app.config['SQLALCHEMY_DATABASE_URI'] = DATABASE_URL
@app.route("/")
def index():
    return app.send_static_file('static/index.html')
print (DATABASE_URL)
conn = create_engine(DATABASE_URL).connect()
# pd.read_csv("Resources/Census_clean/clean_census_2011.csv").to_sql("clean_census_2011",conn)
# pd.read_csv("Resources/Census_clean/clean_census_2012.csv").to_sql("clean_census_2012",conn)
# pd.read_csv("Resources/Census_clean/clean_census_2013.csv").to_sql("clean_census_2013",conn)
# pd.read_csv("Resources/Census_clean/clean_census_2014.csv").to_sql("clean_census_2014",conn)
# pd.read_csv("Resources/Census_clean/clean_census_2015.csv").to_sql("clean_census_2015",conn)
# pd.read_csv("Resources/Medicare_clean/clean_pc_state_rates_2011.csv").to_sql("clean_pc_state_rates_2011",conn)
# pd.read_csv("Resources/Medicare_clean/clean_pc_state_rates_2012.csv").to_sql("clean_pc_state_rates_2012",conn)
# pd.read_csv("Resources/Medicare_clean/clean_pc_state_rates_2013.csv").to_sql("clean_pc_state_rates_2013",conn)
# pd.read_csv("Resources/Medicare_clean/clean_pc_state_rates_2014.csv").to_sql("clean_pc_state_rates_2014",conn)
# pd.read_csv("Resources/Medicare_clean/clean_pc_state_rates_2015.csv").to_sql("clean_pc_state_rates_2015",conn)
# pd.read_csv("Resources/Tableau_clean/Pollution__2010.csv").to_sql("Pollution__2010",conn)
# pd.read_csv("Resources/Tableau_clean/Pollution__2011.csv").to_sql("Pollution__2011",conn)
# pd.read_csv("Resources/Tableau_clean/Pollution__2012.csv").to_sql("Pollution__2012",conn)
# pd.read_csv("Resources/Tableau_clean/Pollution__2013.csv").to_sql("Pollution__2013",conn)
# pd.read_csv("Resources/Tableau_clean/Pollution__2014.csv").to_sql("Pollution__2014",conn)
# pd.read_csv("Resources/Tableau_clean/Pollution__2015.csv").to_sql("Pollution__2015",conn)

@app.route("/census/<year>")
@cross_origin()
def census(year):
    query = f'SELECT * FROM census_clean_{year}'
    df = pd.read_sql(query, conn)
    return df.to_json()

@app.route("/medicare/<year>")
@cross_origin()
def medicare(year):
    query = f'SELECT * FROM medicare_clean_{year}'
    df = pd.read_sql(query, conn)
    return df.to_json()

@app.route("/pollution/<year>")
@cross_origin()
def pollution(year):
    query = f'SELECT * FROM pollution_clean_{year}'
    df = pd.read_sql(query, conn)
    return df.to_json()


if __name__ == '__main__':
    app.run(debug=True, port=5001)
