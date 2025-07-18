""" 
CHALLENGE DESCRIPTION

Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example:
[True,  True,  True,  False,
  True,  True,  True,  True ,
  True,  False, True,  False,
  True,  False, False, True ,
  True,  True,  True,  True ,
  False, False, True,  True]

The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined.
"""

# MY SOLUTION
def count_sheeps(sheep):
    total = 0

    for present in sheep:
        if present == True:
            total += 1
    
    return total