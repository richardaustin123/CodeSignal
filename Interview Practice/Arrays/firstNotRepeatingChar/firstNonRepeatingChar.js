function solution(s) {
    const charCount = new Map(); // Create a Map to store character counts
    
    // Count the occurrences of each character in the string
    for (const char of s) {
        if (charCount.has(char)) {
            charCount.set(char, charCount.get(char) + 1); // Increment count if character exists in Map
        } else {
            charCount.set(char, 1); // Otherwise, initialize count to 1
        }
    }
    
    // Find the first non-repeating character by iterating over the Map
    for (const [char, count] of charCount) {
        if (count === 1) {
            return char; // Return the character if its count is 1 (non-repeating)
        }
    }
    
    return '_'; // If no non-repeating character is found, return '_'
}

// Test cases
// console.log(solution("abacabad")); // Output: 'c'
// console.log(solution("abacabaabacaba")); // Output: '_'
