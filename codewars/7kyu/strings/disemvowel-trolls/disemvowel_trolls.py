""" 
CHALLENGE DESCRIPTION

Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and returns a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!"

Note: For this kata, y isn't considered a vowel.
"""

# MY SOLUTION
def disemvowel(string):
    vowels = "aeiouAEIOU"
    result = ""

    for char in string:
        if char not in vowels:
            result += char

    return result

# Print "Ths wbst s fr lsrs LL!"
print(disemvowel("This website is for losers LOL!"))