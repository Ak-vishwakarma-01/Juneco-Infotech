
chose = True

def check(a,b,type):
    if(type==1): 
        print( a+b)
    elif(type==2):
        print(a-b)
    elif(type==3): 
        print(a*b)
    else: 
        print(a/b)
    return 

while(chose):
    type = int(input("enter 1 for addition   \n" 
    "2 for substraction \n"
    "3 for multipication \n" 
    "4 for devision \n"
    "or 5 to end this cycle: "))
    a = int(input("enter the first number: "))
    b = int(input("enter the second number: "))
    check(a,b,type)
    
    

