""" 
CHALLENGE DESCRIPTION

Your goal is to write a function that removes the first and last characters of a string. You're given one parameter: the original string.

Important: Your function should handle strings of any length ≥ 2 characters. For strings with exactly 2 characters, return an empty string.
"""

# MY SOLUTION
def remove_char(str):
    return str[1:-1]

# Print "ell"
print(remove_char("hello"))

# Print ""
print(remove_char("ab"))