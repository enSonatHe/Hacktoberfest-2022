#generatepassword

import random
char='abcdefghijklmnopqrstuvwxyz1234567890()&%$@*/'

while(True):
    l=int(input('Enter the length of the password to be created '))
    n=int(input('Enter no. of passwords to begenerate '))
    for i in range(n):    
        password=''
        for i in range(0,l):
            password=password+ random.choice(char)
        print('The password is ',password)