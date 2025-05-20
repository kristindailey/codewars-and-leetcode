""" 
CHALLENGE DESCRIPTION

Given an array of integers, your solution should find the smallest integer.

For example:
Given [34, 15, 88, 2], your solution should return 2.
Given [34, -345, -1, 100], your solution should return -345.

You can assume for the purpose of this kata that the supplied array will not be empty.
"""

# MY SOLUTION
def find_smallest_int(arr):
    smallest_num = float("inf")

    for num in arr:
        if num < smallest_num:
            smallest_num = num
    
    return smallest_num