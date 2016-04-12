#Homework_Day2_Assignment1.py

#Python script to count annotation ENST00000263967

#After preparing a template with bio-vcf including annotation: "ann":  '"<%= rec.info.ann %>"'
#And importing into Mongo

from pymongo import MongoClient

client = MongoClient()
db = client.PIK3CA
print(db.vcf.find({"rec.ann":{"$regex": "ENST00000263967"}}).count())
