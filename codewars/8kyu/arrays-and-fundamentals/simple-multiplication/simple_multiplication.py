""" 
CHALLENGE DESCRIPTION

This kata is about multiplying a given number by 8 if it is an even number and by 9 otherwise.
"""

# MY SOLUTION
def simple_multiplication(number):
    if number % 2 == 0:
        return number * 8
    else:
        return number * 9