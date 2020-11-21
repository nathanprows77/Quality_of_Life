import os
from sqlalchemy import create_engine
import pandas as pd
DATABASE_URL = os.environ['DATABASE_URL']
conn = create_engine(DATABASE_URL).connect()
pd.read_csv("Resources/Census_clean/clean_census_2011.csv").to_sql("clean_census_2011",conn, if_exists='replace')
pd.read_csv("Resources/Census_clean/clean_census_2012.csv").to_sql("clean_census_2012",conn, if_exists='replace')
pd.read_csv("Resources/Census_clean/clean_census_2013.csv").to_sql("clean_census_2013",conn, if_exists='replace')
pd.read_csv("Resources/Census_clean/clean_census_2014.csv").to_sql("clean_census_2014",conn, if_exists='replace')
pd.read_csv("Resources/Census_clean/clean_census_2015.csv").to_sql("clean_census_2015",conn, if_exists='replace')
pd.read_csv("Resources/Medicare_clean/clean_pc_state_rates_2011.csv").to_sql("clean_pc_state_rates_2011",conn, if_exists='replace')
pd.read_csv("Resources/Medicare_clean/clean_pc_state_rates_2012.csv").to_sql("clean_pc_state_rates_2012",conn, if_exists='replace')
pd.read_csv("Resources/Medicare_clean/clean_pc_state_rates_2013.csv").to_sql("clean_pc_state_rates_2013",conn, if_exists='replace')
pd.read_csv("Resources/Medicare_clean/clean_pc_state_rates_2014.csv").to_sql("clean_pc_state_rates_2014",conn, if_exists='replace')
pd.read_csv("Resources/Medicare_clean/clean_pc_state_rates_2015.csv").to_sql("clean_pc_state_rates_2015",conn, if_exists='replace')
pd.read_csv("Resources/Tableau_clean/Pollution_2010.csv").to_sql("Pollution_2010",conn, if_exists='replace')
pd.read_csv("Resources/Tableau_clean/Pollution_2011.csv").to_sql("Pollution_2011",conn, if_exists='replace')
pd.read_csv("Resources/Tableau_clean/Pollution_2012.csv").to_sql("Pollution_2012",conn, if_exists='replace')
pd.read_csv("Resources/Tableau_clean/Pollution_2013.csv").to_sql("Pollution_2013",conn, if_exists='replace')
pd.read_csv("Resources/Tableau_clean/Pollution_2014.csv").to_sql("Pollution_2014",conn, if_exists='replace')
pd.read_csv("Resources/Tableau_clean/Pollution_2015.csv").to_sql("Pollution_2015",conn, if_exists='replace')