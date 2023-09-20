// function solution(inputArray) {

//     let biggestNum = 0;
//     let biggestNumIndex = 0;
//     let output = 0;

//     for (let i = 0; i < inputArray.length; i++) {
//         if (inputArray[i] > biggestNum) {
//             biggestNum = inputArray[i];
//             biggestNumIndex = i;
//         }
//     }

//     if (inputArray[biggestNumIndex - 1] >= inputArray[biggestNumIndex + 1]) {
//         output = inputArray[biggestNumIndex - 1] * biggestNum
//     } else {
//         output = inputArray[biggestNumIndex + 1] * biggestNum
//     }

//     return output

// }

function solution(inputArray) {

    let biggestNum = inputArray[0] * inputArray[1]

    for (let i = 0; i < inputArray.length; i++) {

    let numOne = inputArray[i]
    let numTwo = inputArray[i+1]

        if (numOne * numTwo > biggestNum) {
            biggestNum = numOne * numTwo
        }
    }

    return biggestNum

}
