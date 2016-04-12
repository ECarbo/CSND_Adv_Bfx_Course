# CSND_Advanced_Bfx_Course 
# Homework_Day1_Assignment2.sql


#SQL statement creating two tables, Mutations and Samples

CREATE TABLE Mutations
(
MutationID int,
Chromosome varchar(2),
Position int,
Alt varchar(50),
Ref varchar(50),
Filter varchar(50),
Gene varchar(50)
);

CREATE TABLE Samples
(
SampleID varchar(25),
MutationID int,
Genotype varchar(3)
);
