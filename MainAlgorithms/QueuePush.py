# Add to a queue

def addToQueue(item):
    if top == max + 1:
        queueFull = True
    else:
        queue.append(item)

    print(queue)

queueFull = False
queue = [1, 2, 3, 4, 5]
top = len(queue) - 1
max = 10

addToQueue(6)
addToQueue(7)