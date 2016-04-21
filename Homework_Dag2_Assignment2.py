#CSND_Advanced_Bfx_Course
#Homework_Bfx_Course

#Attempt number two (or three...) ;-)

from pymongo import MongoClient
client = MongoClient()
db = client.PIK3CA

## Read input and set count
cursor = db.vcf.find()
count=0

## Loop through cursor input and count for sample 3 and 4 the same like bio-vcf --sfilter "s.dp>7"
## Output record starts with "rec" and the samples are listed under "samples"

for document in cursor:
    if document["rec"]["samples"][2]>7 and document["rec"]["samples"][3]>7:
        count +=1

#Print
print("The answer is (and hopefully this will be 25...): " + str(count))



















#Old attempt below, please ignore.....
#Python script for second homework exercise 
#That does something "similar" to: cat gene_PIK3CA.vcf |bio-vcf --sfilter-samples 2,3  --seval s.dp --sfilter "s.dp>7"

#After preparing template and mongo import

#from pymongo import MongoClient

#client = MongoClient()
#db = client.PIK3CA

#Remove all the samples that you don't need, { } for all documents

#cursor=db.vcf.update_many({ },{"$pop":{"samples":-2}})
#cursor=db.vcf.update_many({ },{"$pop":{"samples":183}})

#cursor =db.vcf.update({ },{"$pop":{"samples":-2}}, {"multi:true"})
#cursor=db.vcf.update({ },{"$pop":{"samples":183}}, {"multi:true"}) 

#Count dp>7
#For now this might work, but only because in this example both samples are >7 everywhere
#It also might not work... But I needed some sleep
#print(db.vcf.find({"samples": {"$gt": 7}}).count())
