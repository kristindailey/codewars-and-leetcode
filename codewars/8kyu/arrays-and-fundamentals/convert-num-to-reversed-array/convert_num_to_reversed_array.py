""" 
CHALLENGE DESCRIPTION

Given a random non-negative number, return the digits of the number within an array in reverse order.

Example (Input => Output):
35231 => [1, 3, 2, 5, 3]
0 => [0]
"""

# MY SOLUTION
def digitize(num):
    num_arr = list(map(int, str(num)))
    return num_arr[::-1]