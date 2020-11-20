import os
import psycopg2
import pandas as pd
DATABASE_URL = os.environ['DATABASE_URL']
conn = psycopg2.connect(DATABASE_URL, sslmode='require')
pd.read_csv("Resources/Census_clean/clean_census_2011.csv").to_sql("clean_census_2011",conn)
pd.read_csv("Resources/Census_clean/clean_census_2012.csv").to_sql("clean_census_2012",conn)
pd.read_csv("Resources/Census_clean/clean_census_2013.csv").to_sql("clean_census_2013",conn)
pd.read_csv("Resources/Census_clean/clean_census_2014.csv").to_sql("clean_census_2014",conn)
pd.read_csv("Resources/Census_clean/clean_census_2015.csv").to_sql("clean_census_2015",conn)
pd.read_csv("Resources/Medicare_clean/clean_pc_state_rates_2011.csv").to_sql("clean_pc_state_rates_2011",conn)
pd.read_csv("Resources/Medicare_clean/clean_pc_state_rates_2012.csv").to_sql("clean_pc_state_rates_2012",conn)
pd.read_csv("Resources/Medicare_clean/clean_pc_state_rates_2013.csv").to_sql("clean_pc_state_rates_2013",conn)
pd.read_csv("Resources/Medicare_clean/clean_pc_state_rates_2014.csv").to_sql("clean_pc_state_rates_2014",conn)
pd.read_csv("Resources/Medicare_clean/clean_pc_state_rates_2015.csv").to_sql("clean_pc_state_rates_2015",conn)
pd.read_csv("Resources/Tableau_clean/Pollution__2010.csv").to_sql("Pollution__2010",conn)
pd.read_csv("Resources/Tableau_clean/Pollution__2011.csv").to_sql("Pollution__2011",conn)
pd.read_csv("Resources/Tableau_clean/Pollution__2012.csv").to_sql("Pollution__2012",conn)
pd.read_csv("Resources/Tableau_clean/Pollution__2013.csv").to_sql("Pollution__2013",conn)
pd.read_csv("Resources/Tableau_clean/Pollution__2014.csv").to_sql("Pollution__2014",conn)
pd.read_csv("Resources/Tableau_clean/Pollution__2015.csv").to_sql("Pollution__2015",conn)