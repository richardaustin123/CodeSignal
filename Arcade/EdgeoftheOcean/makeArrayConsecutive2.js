function solution(statues) {

    let smallest = statues[0]
    let biggest = statues[0]

    for (let i = 0; i < statues.length; i++) {
        if (statues[i] < smallest) {
            smallest = statues[i]
        }
        if (statues[i] > biggest) {
            biggest = statues[i]
        }
    }

    let statuesNeededCombined = biggest - smallest + 1

    if (statues.length != statuesNeededCombined) {
        return statuesNeededCombined - statues.length 
    } else {
        return 0
    }
}
