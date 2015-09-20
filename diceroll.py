import random
user_input = none
while user_input != q:
    print("dice roll")
    input()
    roll = random.randint(1,6)
    if roll == 1 :
        print("----------")
        print("|        |")
        print("|   o    |")
        print("|        |")
        print("----------")
    if roll == 2 :
        print("----------")
        print("| o      |")
        print("|        |")
        print("|      o |")
        print("----------")
    if roll == 3 :
        print("----------")
        print("| o      |")
        print("|    o   |")
        print("|       o|")
        print("----------")
    if roll == 4 :
        print("----------")
        print("| o    o |")
        print("|        |")
        print("| o    o |")
        print("----------")
    if roll == 5 :
        print("----------")
        print("| o    o |")
        print("|   o    |")
        print("| o    o |")
        print("----------")
    if roll == 6 :
        print("----------")
        print("| o    o |")
        print("| o    o |")
        print("| o    o |")
        print("----------")
    input("Roll Again?")






