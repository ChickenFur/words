Taking the dictionary from http://www.freebsd.org/cgi/cvsweb.cgi/src/share/dict/web2?rev=1.12;content-type=text%2Fplain and the random string of text you insert find all the possible words as defined by the dictionary.

Solution:
Create a hash of the chars from the random string.
Iterate over every word in the dictionary and if the hash contains all the chars in the word add it to the found list. Currently case sensitive.
