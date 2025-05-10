""" 
CHALLENGE DESCRIPTION

You get an array of numbers. Return the sum of all of the positive ones.

Example: [1, -4, 7, 12] => 1 + 7 + 12 = 20

Note: If there is nothing to sum, the sum should default to 0.
"""

# MY SOLUTION
def positive_sum(arr):
    sum = 0
    for num in arr:
        if num > 0:
            sum += num
    return sum