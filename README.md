# Expenses

Expenses is a small comand line application which uses a PostgreSQL database to store data about everyday expenses. 

## Technologies: 
<div>
  <img src="https://img.shields.io/badge/node.js%20-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white"/>
  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white"/>
</div>

## Specification:

The program run from the command line with the following command: 

$ ./expense

The command should be run from the directory where the application file is located. 
As a default the program prints the following: 

$ ./expense
An expense recording system

### Commands:

add AMOUNT MEMO [DATE] - record a new expense
clear - delete all expenses
list - list all expenses
delete NUMBER - remove expense with id NUMBER
search QUERY - list expenses with a matching memo field

### Adding Expenses: 
We can add new expenses by using following command: 

$ ./expense add [expense price] [expense title]

If there expense title has more than one word it should be encosed with quotation marks. 

### Listing Expenses:

You can list all the expenses with the following command: 

$ ./expense list

The output will look like this:

$ ./expense list

There are 2 expenses.
  1 | Mon Nov 04 2019 |         4.56 | Coffee
  2 | Mon Nov 05 2019 |         9.23 | Lunch with client
______________________________________________________
Total                          13.79

## Searching for Specific Expenses:

You can require a list with a specific expenses with the following command: 

$ ./expense search coffee

The output will look: 

There is 1 expense.
  1 | Mon Nov 04 2019 |         4.56 | Coffee

## Deleting Expenses:

You can delete expenses that have been stored by using delete command and passing the id of the expense:

$ ./expense delete 1
The following expense has been deleted:
  1 | Mon Nov 04 2019 |         4.56 | Coffee

## Clearing all the expenses:
You can clear all the expenses with clear command: 

$ ./expense clear

This will remove all expenses. Are you sure? (enter y to confirm)
All expenses have been deleted
$ ./expense list
There are no expenses.
