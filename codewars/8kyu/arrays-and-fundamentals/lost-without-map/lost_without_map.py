""" 
CHALLENGE DESCRIPTION

Given an array of integers, return a new array with each value doubled.

For example:
[1, 2, 3] --> [2, 4, 6]
"""

# MY SOLUTION
def maps(arr):
    new_arr = []

    for num in arr:
        new_arr.append(num * 2)
    
    return new_arr

print(maps([1, 2, 3]))