DROP TABLE census_clean_2011
CREATE TABLE census_clean_2011 (
	State INT,
	Name VARCHAR(20),
	Population INT,
	HHI INT,
	PovertyRate DEC
);

DROP TABLE census_clean_2012
CREATE TABLE census_clean_2012 (
	State INT,
	Name VARCHAR(20),
	Population INT,
	HHI INT,
	PovertyRate DEC
);

DROP TABLE census_clean_2013
CREATE TABLE census_clean_2013 (
	State INT,
	Name VARCHAR(20),
	Population INT,
	HHI INT,
	PovertyRate DEC
);

DROP TABLE census_clean_2014
CREATE TABLE census_clean_2014 (
	State INT,
	Name VARCHAR(20),
	Population INT,
	HHI INT,
	PovertyRate DEC
);

DROP TABLE census_clean_2015
CREATE TABLE census_clean_2015 (
	State INT,
	Name VARCHAR(20),
	Population INT,
	HHI INT,
	PovertyRate DEC
);

DROP TABLE medicare_clean_2011
CREATE TABLE medicare_clean_2011 (
	state_id INT,
	state_name VARCHAR(20),
	beneficiaries_part_b INT,
	one_ambulatory_visit DEC,
	diabetic_enrollees_age_65_to_75 INT,
	average_diabetic_enrollees_hemoglobin_a1c_test DEC,
	average_diabetic_enrollees_eye_exam DEC,
	average_diabetic_enrollees_blood_lipids_test DEC,
	average_female_enrollees_age_67_to_69 INT,
	average_female_age_67_to_69_mammogram DEC,
	beneficiaries_part_a_eligible INT,
	leg_amputations_per_1000_enrollees DEC,
	discharges_ambulatory_care_sensitive_conditions_per_1000_enrollees DEC
);

DROP TABLE medicare_clean_2012
CREATE TABLE medicare_clean_2012 (
	state_id INT,
	state_name VARCHAR(20),
	beneficiaries_part_b INT,
	one_ambulatory_visit DEC,
	diabetic_enrollees_age_65_to_75 INT,
	average_diabetic_enrollees_hemoglobin_a1c_test DEC,
	average_diabetic_enrollees_eye_exam DEC,
	average_diabetic_enrollees_blood_lipids_test DEC,
	average_female_enrollees_age_67_to_69 INT,
	average_female_age_67_to_69_mammogram DEC,
	beneficiaries_part_a_eligible INT,
	leg_amputations_per_1000_enrollees DEC,
	discharges_ambulatory_care_sensitive_conditions_per_1000_enrollees DEC
);

DROP TABLE medicare_clean_2013
CREATE TABLE medicare_clean_2013 (
	state_id INT,
	state_name VARCHAR(20),
	beneficiaries_part_b INT,
	one_ambulatory_visit DEC,
	diabetic_enrollees_age_65_to_75 INT,
	average_diabetic_enrollees_hemoglobin_a1c_test DEC,
	average_diabetic_enrollees_eye_exam DEC,
	average_diabetic_enrollees_blood_lipids_test DEC,
	average_female_enrollees_age_67_to_69 INT,
	average_female_age_67_to_69_mammogram DEC,
	beneficiaries_part_a_eligible INT,
	leg_amputations_per_1000_enrollees DEC,
	discharges_ambulatory_care_sensitive_conditions_per_1000_enrollees DEC
);

DROP TABLE medicare_clean_2014
CREATE TABLE medicare_clean_2014 (
	state_id INT,
	state_name VARCHAR(20),
	beneficiaries_part_b INT,
	one_ambulatory_visit DEC,
	diabetic_enrollees_age_65_to_75 INT,
	average_diabetic_enrollees_hemoglobin_a1c_test DEC,
	average_diabetic_enrollees_eye_exam DEC,
	average_diabetic_enrollees_blood_lipids_test DEC,
	average_female_enrollees_age_67_to_69 INT,
	average_female_age_67_to_69_mammogram DEC,
	beneficiaries_part_a_eligible INT,
	leg_amputations_per_1000_enrollees DEC,
	discharges_ambulatory_care_sensitive_conditions_per_1000_enrollees DEC
);

DROP TABLE medicare_clean_2015
CREATE TABLE medicare_clean_2015 (
	state_id INT,
	state_name VARCHAR(20),
	beneficiaries_part_b INT,
	one_ambulatory_visit DEC,
	diabetic_enrollees_age_65_to_75 INT,
	average_diabetic_enrollees_hemoglobin_a1c_test DEC,
	average_diabetic_enrollees_eye_exam DEC,
	average_diabetic_enrollees_blood_lipids_test DEC,
	average_female_enrollees_age_67_to_69 INT,
	average_female_age_67_to_69_mammogram DEC,
	beneficiaries_part_a_eligible INT,
	leg_amputations_per_1000_enrollees DEC,
	discharges_ambulatory_care_sensitive_conditions_per_1000_enrollees DEC
);

DROP TABLE pollution_clean
CREATE TABLE pollution_clean (
	state VARCHAR(25),
	county VARCHAR(25),
	city VARCHAR(50),
	date_local DATE,
	no2_units VARCHAR(40),
	no2_mean DEC,
	o3_units VARCHAR(40),
	o3_mean DEC,
	so2_units VARCHAR(40),
	so2_mean DEC,
	co_units VARCHAR(40),
	co_mean DEC
);
