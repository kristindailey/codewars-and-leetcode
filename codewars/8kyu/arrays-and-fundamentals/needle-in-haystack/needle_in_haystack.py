""" 
CHALLENGE DESCRIPTION

Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle."

After your function finds the needle, it should return a message (as a string) that says the following:

`found the needle at position ${index}`

Example (Input --> Output):

["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 
"""

# MY SOLUTION
def find_needle(haystack):
    for index, junk in enumerate(haystack):
        if junk == "needle":
            return f"found the needle at position {index}"
        
# Return "found the needle at position 5" 
print(find_needle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]))