# Remove from a queue

def removeFromQueue():
    global queueEmpty
    if queueEmpty == False:
        if len(queue) == min:
            queueEmpty = True
        else:
            queue.remove(queue[head])

        print(queue)
    else:
        print("Empty queue")

queueEmpty = False
queue = [1, 2, 3, 4, 5]
head = 0
min = 0

removeFromQueue()
removeFromQueue()