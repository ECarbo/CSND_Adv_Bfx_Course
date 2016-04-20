#CSND_Advanced_Bfx_Course
#Entry_Assignment2


# Installing CGDSR package and select library
install.packages('cgdsr')
library("cgdsr", lib.loc="~/R/win-library/3.1")
# Create CGDS object
mycgds = CGDS("http://www.cbioportal.org/")
test(mycgds)
# Get list of cancer studies and select thca_tcga study #116
getCancerStudies(mycgds)
mycancerstudy = getCancerStudies(mycgds)[116,1]
# Select caselist, chosen for all_mutations because no subset was specified
mycaselist = getCaseLists(mycgds,mycancerstudy)[2,1]
# Select Mutations and make a dataframe out of it
mygeneticprofile = getGeneticProfiles(mycgds,mycancerstudy)[1,1]
BRAFmutations <- getProfileData(mycgds,c('BRAF'),mygeneticprofile,mycaselist)
#Add column for BioPortal Mutation Mapper and change other columnnames
colnames(BRAFmutations)[1] <- "Protein_Change"
BRAFmutations$Hugo_Symbol <- "BRAF" 
#Export data as a txt file (no foreign package required) to upload in fancy mutation mapper of cbioportal
write.table(BRAFmutations, "c:/Users/Ellen/Documents/data.txt", sep="\t") 
