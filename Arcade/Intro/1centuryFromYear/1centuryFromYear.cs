// C#
int Solution(year) {
    int count = 0;
    for (int i=1; i <= year, i++) {
        count++;
        if (year >= i && year < i+100) {
            return i;
        }
    }
    return 0;
}