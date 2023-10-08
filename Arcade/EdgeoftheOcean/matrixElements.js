// https://app.codesignal.com/arcade/intro/level-2/xskq4ZxLyqQMCLshr

function solution(matrix) {
    let totalCost = 0;

    // Iterate through the rows of the matrix  
    for (let i = 0; i < matrix.length; i++) {
        // Iterate through the columns of the current row
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                // If the current room is free, mark all rooms below it as haunted (0)
                for (let k = i + 1; k < matrix.length; k++) {
                    matrix[k][j] = 0; 
                }
            } else {
                // Add the cost of suitable rooms to the total cost
                totalCost += matrix[i][j];
            }
        }
    }

    return totalCost;
}

// const matrix = [[0, 1, 1, 2], [0, 5, 0, 0], [2, 0, 3, 3]];
// console.log(solution(matrix)); // Output: 9



//First attempt 
// function solution(matrix) {
    
//     let totalSum = 0
//     let ignoreBelow = []
    
//     // Loop through first row and store the idexes of where to ignore (ghosts) and keep sum of rooms not haunted
//     for (let i = 0; i < matrix.length; i++) {
//         if (matrix[0][i] == 0) {
//             ignoreBelow.push[i] // if the top row where i is at, is 0, add i pos to the list to ignore below 
//         } else {
//             totalSum = totalSum + matrix[0][i]
//         }
//     }

//     for (let i = 0; i < matrix.length; i++) {
//         if (!ignoreBelow.includes(i)) { // if the current number does not have a ghost above it
//             totalSum = totalSum + matrix[i][i]
//         }
//     }
// }
