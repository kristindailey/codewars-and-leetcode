""" 
CHALLENGE DESCRIPTION

Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F
"""

# MY SOLUTION
def abbrev_name(name):
    first_initial = name[0].upper()
    space_index = name.find(" ")
    second_initial = name[space_index + 1].upper()
    return f"{first_initial}.{second_initial}"