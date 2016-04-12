# CSND_Advanced_Bfx_Course 
# Homework_Day1_Assignment1.sql

#Join at least 3 tables from test database at http://www.w3schools.com/sql/

SELECT Products.*, Orders.*, OrderDetails.*, Customers.*
FROM Products
Join OrderDetails
ON Products.ProductID=OrderDetails.ProductID
Join Orders
ON OrderDetails.OrderID=Orders.OrderID
Join Customers
ON Orders.CustomerID=Customers.CustomerID
WHERE ProductName='Gorgonzola Telino'
