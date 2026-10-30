// 1. Write a function to reverse a string without using reverse().


function reverseString(str) {
    let result = "";

    for (let i = str.length - 1; i >= 0; i--) {
        result = result + str[i];
    }

    return result;
}

console.log(reverseString("hello"));
// The loop starts from the last character and adds each character to result.
// This reverses the string without using reverse().


// 2. Write a function to check whether a string is a palindrome.

function isPalindrome(str) {
    let result = "";

    for (let i = str.length - 1; i >= 0; i--) {
        result = result + str[i];
    }

    return str === result;
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));
// The code reverses the string.
// Then it compares the reversed string with the original string.

// 3. Write a function to count vowels and consonants in a string.


function countLetters(str) {
    let vowels = 0;
    let consonants = 0;

    str = str.toLowerCase();

    for (let i = 0; i < str.length; i++) {
        let ch = str[i];

        if (ch >= "a" && ch <= "z") {
            if ("aeiou".includes(ch)) {
                vowels++;
            } else {
                consonants++;
            }
        }
    }

    console.log("Vowels =", vowels);
    console.log("Consonants =", consonants);
}

countLetters("Hello World");
// The program checks each character. 
// If it is a vowel (a, e, i, o, u), it increases the vowel count. 
// English letter is counted as a consonant.

// 4. Write a function to find the second-largest distinct number in an array.


function secondLargest(arr) {
    arr.sort((a, b) => b - a);

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[0]) {
            return arr[i];
        }
    }

    return "Second largest does not exist";
}

console.log(secondLargest([10, 5, 20, 8, 20]));


// 5. Write a function to remove duplicate elements from an array without using Set.


function removeDuplicates(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (!result.includes(arr[i])) {
            result.push(arr[i]);
        }
    }

    return result;
}

console.log(removeDuplicates([1, 2, 2, 3, 1]));

// The program creates an empty array called result. 
// It adds an element only if that element is not already present in result.

// 6. Write a function to find the sum of all even numbers in an array.


function sumEven(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sum = sum + arr[i];
        }
    }

    return sum;
}

console.log(sumEven([1, 2, 3, 4, 5, 6]));
// The condition arr[i] % 2 === 0 checks whether a number is even.
//  If it is even, the number is added to sum.

// 7. Write a function to find the frequency of a given element in an array


function frequency(arr, target) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            count++;
        }
    }

    return count;
}

console.log(frequency([1, 2, 3, 2, 4, 2], 2));

// The loop checks every element against target.
// Whenever the element matches, count increases by one.

// 8. Write a function to check whether two strings are anagrams.


function isAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    let count1 = {};
    let count2 = {};

    for (let i = 0; i < str1.length; i++) {
        let ch1 = str1[i];
        let ch2 = str2[i];

        count1[ch1] = (count1[ch1] || 0) + 1;
        count2[ch2] = (count2[ch2] || 0) + 1;
    }

    for (let ch in count1) {
        if (count1[ch] !== count2[ch]) {
            return false;
        }
    }

    return true;
}

console.log(isAnagram("listen", "silent"));
console.log(isAnagram("hello", "world"));
// The program checks whether both strings have the same length. 
// Then it counts each character and compares their frequencies.

// 9. Write a function to move all zeros to the end of an array 
// while maintaining the order of non-zero elements. 


function moveZeros(arr) {
    let result = [];
    let zeroCount = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            zeroCount++;
        } else {
            result.push(arr[i]);
        }
    }

    for (let i = 0; i < zeroCount; i++) {
        result.push(0);
    }

    return result;
}

console.log(moveZeros([0, 1, 0, 3, 12]));
// The program stores all non-zero elements in a new array and counts the zeros.
// Then it adds the zeros at the end, keeping the original order of the non-zero elements

