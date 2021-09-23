""""
A Narcissistic Number is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base.
Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10. 
""""
def narcissistic( value ):
    d = [int(x) for x in list(str(value))]
    e = len(d)
    sum_out = sum([x**e for x in d])
    return sum_out == value
  
""""
Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
The first word within the output should be capitalized only if the original word was capitalized 
(known as Upper Camel Case, also often referred to as Pascal case).
""""
import re
def to_camel_case(text):
    inds = [m.start() for m in re.finditer('_|-', text)]
    if len(inds) == 0:
        return ''
    fc = text[0] == text[0].upper()
    tl = list(text)
    for i in inds:
        tl[i+1] = tl[i+1].upper()
        tl[i] = ''
    return ''.join(tl) 
  
""""
Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order 
of the strings of a1 which are substrings of strings of a2.
""""
def in_array(array1, array2):
    out = []
    for x in array1:
        for x2 in array2:
            if x in x2:
                out.append(x)
    return sorted(list(set(out)))

""""
Your task is to write a function called valid_spacing() or validSpacing() which checks if a string 
has valid spacing. The function should return either True or False.

For this kata, the definition of valid spacing is one space between words, 
and no leading or trailing spaces. 
""""
import regex as re
def valid_spacing(s):
    if s == "":
        return True
    w = re.findall(r"\w+", s)
    return s.count(" ") == len(w) - 1
  
""""
Write a function that will return the count of distinct case-insensitive alphabetic characters 
and numeric digits that occur more than once in the input string. The input string can be 
assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
""""
def duplicate_count(text):
    els = list(text.lower())
    els_unique = set(els)
    n_distinct = 0
    for el in els_unique:
        n = els.count(el)
        if n > 1:
            n_distinct += 1
    return n_distinct
  
""""
Your goal in this kata is to implement a difference function, which subtracts one list 
from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.
""""
def array_diff(a, b):
    unique_b = set(b)
    new_a = []
    for el in a:
        if el not in unique_b:
            new_a.append(el)
    return(new_a)
  
""""
Write a function that accepts an array of 10 integers (between 0 and 9), that returns 
a string of those numbers in the form of a phone number.
""""
def create_phone_number(n):
    sn = "".join([str(int) for int in n])
    return "(%s) %s-%s" % ("".join(sn[0:3]), sn[3:6], sn[6:])
