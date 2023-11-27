/* Online C# Compiler and Editor */
using System.IO;
using System;

class Program {
    static void Main() {
        string s1 = "aabcc";
        string s2 = "adcaa";

        int result = solution(s1, s2);

        Console.WriteLine($"Number of common characters: {result}");
    }

    static int solution(string s1, string s2) {
        // Arrays to store count of each character
        int[] charCountS1 = new int[256]; 
        int[] charCountS2 = new int[256];

        // Count occurrences in the first string
        foreach (char c in s1) {
            charCountS1[c]++;
        }

        int commonCount = 0;

        // Check occurrences in the second string and update the commonCount
        foreach (char c in s2) {
            if (charCountS1[c] > 0) { 
                commonCount++;
                charCountS1[c]--;
            }
        }

        return commonCount;
    }
}