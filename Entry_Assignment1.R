#CSND_Advanced_Bfx_Course
#Entry Assignment 1 


#Define (increment) range for (x)
x=seq(-10,10,1)
#Formula
y=2*cos(x)
#Plot trigonometric graph with crazy increments of 1
plot(x, y, main = "Increments of 1 -> Ugly Results", xlab = "x-values", ylab = "y=2*cos(x)", type = "l", col = "purple")
