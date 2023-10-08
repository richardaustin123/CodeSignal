// https://app.codesignal.com/arcade/intro/level-3/fzsCQGYbxaEcTr2bL

function solution(inputArray) {

    let longestString = 0
    let outputArray = []

    // Loop to find longest string
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i].length > longestString) {
            longestString = inputArray[i].length
        }
    }

    // Loop to add all strings that have have the same longest length to an array
    for (let i = 0; i < inputArray.length; i++) {
        if(inputArray[i].length == longestString) {
            outputArray.push(inputArray[i])
        }
    }

    return outputArray

}
