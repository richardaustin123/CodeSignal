# Remove from a stack

def removeFromStack():
    global top, min, stackEmpty, stack
    if top == min:          # If stack is empty
        stackEmpty = True    
    else:                   # If stack is not empty
        stack.remove(top)   # Remove item from top of the stack
        top = top - 1       # Decrement top so it is now the new last item in the stack
        
    print(stack)

stackEmpty = False
stack = [1, 2, 3, 4, 5]
top = len(stack)
min = 0

removeFromStack()
removeFromStack()
removeFromStack()