function solution(sequence) {

    for (i = 0; i < sequence.length; i++) {

        let currentNum = sequence[i]

        for (j = 0; j < sequence.length; j++) {
            if (currentNum == sequence[j + 1]) {        // loop again to check for duplicate in pos two further down 
                return false                            // duplicate number in array therefore cannot be increasing 
                break
            } else if (sequence[j+1] < currentNum) {
                return false                            // If num two down is less than the current one, it cannot be increasing 
            }
        }

    }

    return true

}
