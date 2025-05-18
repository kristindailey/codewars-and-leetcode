""" 
CHALLENGE DESCRIPTION

Complete the square sum function so that it squares each number passed into it and then sums the results together.
"""

# MY SOLUTION
def square_sum(numbers):
    sum = 0
    for num in numbers:
        squared = num * num
        sum += squared
    return sum