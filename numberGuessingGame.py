import random

print("My Number Guessing Game")
print("Guess the number between 1-100")

randomNumber = random.randint(1, 101)
number = int(input("Take a Guess Hot Shot! "))

while randomNumber != number:
    
    if number < randomNumber :
        print("Too Low!")
    elif number > randomNumber :
        print("Too High!")
    number = int(input("Take another Guess Hot Shot!"))
    
else:
    number == randomNumber
    print("You Guessed Right Mofo! The number was ", randomNumber)

