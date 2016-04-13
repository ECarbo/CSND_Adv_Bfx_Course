#CSND_Advanced_Bfx_Course
#Homework_Bfx_Course

#Python script for second homework exercise 
#That does something "similar" to: cat gene_PIK3CA.vcf |bio-vcf --sfilter-samples 2,3  --seval s.dp --sfilter "s.dp>7"

#After preparing template and mongo import

from pymongo import MongoClient

client = MongoClient()
db = client.PIK3CA

#Remove all the samples that you don't need, { } for all documents

#cursor=db.vcf.update_many({ },{"$pop":{"samples":-2}})
#cursor=db.vcf.update_many({ },{"$pop":{"samples":183}})

cursor =db.vcf.update({ },{"$pop":{"samples":-2}}, {multi:true})
cursor=db.vcf.update({ },{"$pop":{"samples":183}}, {multi:true}) 

#Count dp>7
#For now this might work, but only because in this example both samples are >7 everywhere
#It also might not work... But I needed some sleep
print(db.vcf.find({"samples": {"$gt": 7}}).count())
