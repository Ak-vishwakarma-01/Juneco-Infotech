
chose = True

def check(a,b,n):
    if(n==1): 
        print( a+b)
    elif(n==2):
        print(a-b)
    elif(n==3): 
        print(a*b)
    else: 
        print(a/b)
    return 

while(chose):
    n = int(input("enter 1 for addition   \n" 
    "2 for substraction \n"
    "3 for multipication \n" 
    "4 for devision \n"
    "or 5 to end this cycle: "))
    if n==5:
        print("end of cycle")
        break
    else:
        a = int(input("enter the first number: "))
        b = int(input("enter the second number: "))
        check(a,b,n)
    
    

