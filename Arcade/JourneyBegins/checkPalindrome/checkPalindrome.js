function solution(inputString) {
    const lengthOfString = inputString.length;

    for (let i = 0; i < lengthOfString / 2; i++) {
        if (inputString[i] !== inputString[lengthOfString - 1 - i]) {
            return false;
        }
    }

    return true;
}

// function solution(inputString) {
//     let lengthOfString = inputString.length;
//     let frontArray = [];
//     let backArray = [];

//     for (let i = 0; i <= lengthOfString / 2; i++) {
//         frontArray.push(inputString[i]);
//     }

//     for (let j = lengthOfString - 1; j >= lengthOfString / 2; j--) {
//         backArray.push(inputString[j]);
//     }

//     if (JSON.stringify(frontArray) === JSON.stringify(backArray)) {
//         return true;
//     } else {
//         return false;
//     }
// }


// Java
// boolean solution(String inputString) {
    
//     String temporary = inputString;
//     String reverse = "";
//     String lastLetter;
//     int lengthOfString = inputString.length();
    
//     for(int i = lengthOfString -1; i >= 0; i--) {
//         reverse += inputString.charAt(i);
//     }
//     if(inputString.equals(reverse)) {
//         return true;
//     } else {
//         return false;
//     }
// }
