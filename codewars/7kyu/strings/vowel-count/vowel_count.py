""" 
CHALLENGE DESCRIPTION

Return the number of vowels in the given string.

We will consider a, e, i, o, u as vowels for this kata (but not y).

The input string will only consist of lowercase letters and/or spaces.
"""

# MY SOLUTION
def get_count(sentence):
    vowels = "aeiou"
    return sum(1 for char in sentence if char in vowels)

# Print 2
print(get_count("hello"))

# Print 0
print(get_count("xyz"))

# Print 1
print(get_count("apt"))