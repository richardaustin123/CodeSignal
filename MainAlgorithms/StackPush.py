# Add to a stack

def addToStack(item):
    global top, max, stackFull, stack
    if top == max - 1:      # If stack is full
        stackFull = True    
    else:                   # If stack is not full
        top = top + 1       # Increment top so it points to the next empty space in the stack
        stack.append(item)  # Add item to top of the stack
        
    print(stack)

stackFull = False
stack = [1, 2, 3, 4, 5]
top = len(stack)
max = 10

addToStack(6)
addToStack(7)
addToStack(8)
