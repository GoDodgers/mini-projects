def factorial(x):
    if x == 1:
        return 1
    else:
        return x * factorial(x - 1)

def multiply(x, y):
    return x * y

def square(base):
    # base ^ 2
    return multiply(base, base)

def cube(base):
    # base ^ 3
    return multiply(base, multiply(base, base))

def pow4(base):
    # base ^ 4
    return multiply(base, multiply(base, multiply(base, base)))

def pow(base, n):
    # base ^ power
    return multiply(base, multiply(n, n - 1))
