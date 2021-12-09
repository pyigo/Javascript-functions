/* 
1. Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.
*/

maxOfTwoNumbers = (a, b) => {
    if (a > b) {
        return a;
    }
    else {
        return b;
    }

};
console.log(maxOfTwoNumbers(6, 7));


//maxOfThree();

/*
2. Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
*/
maxOfThree = (a, b, c) => {
    if (a > b && a > c) {
        return a;
    }
    else if (b > a && b > c) {
        return b;
    }
    else {
        return c;
    }
};
/*
3. Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
*/
isCharacterAVowel = (myChar) => {
    let vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
    if (vowels.indexOf(myChar.toLowerCase()) === -1) {
        return false;
    }
    else {
        return true;
    }
};
console.log(isCharacterAVowel('b'))
/*
4. Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
*/

sumArray = (myArr) => {

    let sum = 0;
    for (let i = 0; i < myArr.length; i++) {
        sum += myArr[i];
    }
    return sum;
};
let test = [9, 4, 200, 45, 19];
console.log(sumArray(test))


productArray = (myArr) => {
    let product = 1;
    for (let i = 0; i < myArr.length; i++) {
        product *= myArr[i];
    }
    return product;
};
let test = [9, 4, 200, 45, 19];
console.log(productArray(test))

/*
5.Write a function that returns the number of arguments passed to the function when called.
*/
returnNumofArg = (myNum1, mynum2, myNum3, myNum4) => {
    return (returnNumofArg.length);
}

console.log(returnNumofArg('Anne', 'Maryline'));

/*
6. Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
*/

reverseString = () => {

};

/*
7. Write a function findLongestWord that takes an array of words and returns the length of the longest one.
*/
findLongestWord = (sentence) => {
    console.log(sentence)
    let words = sentence.split(' ');
    console.log(words)
    let longestWord = 0;
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord) {
            longestWord = words[i].length;

        }

    }
    return longestWord;
}
console.log(findLongestWord('Tomorrow is another day that you will live to see'))

/*
8. Write a function filterLongWords that takes an array of words and a number i and returns the array of words that are longer than i characters long.
*/
filterLongWords = () => {
    // ADD YOUR CODE HERE
};
