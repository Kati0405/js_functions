// #1
function calculateSum(arr) {
    const sum = arr.reduce((prev, current) => prev + current);
    return sum;
}

// console.log(calculateSum([1, 2, 3, 4, 5])); //15

// #2
function isTriangle(a, b, c) {
    return a + b > c && a + c > b && b + c > a;
}

// console.log(isTriangle(5, 6, 7)); //true
// console.log(isTriangle(2, 9, 3)); //false

// #3
function isIsogram(word) {
    let i, j;
    word = word.toLowerCase();
    for (i = 0; i < word.length; i++) {
        for (j = i + 1; j < word.length; j++) {
            if (word[i] === word[j]) {
                return false;
            }
        }
    }
    return true;
}

console.log(isIsogram('Dermatoglyphics')); //true
console.log(isIsogram('abab')); //false

// #4
function isPalindrome(word) {
    if (typeof word !== 'string') {
        return 'Passed argument is not a string';
    } else {
        if (typeof word === 'string') {
            let wordReverse = word.toLowerCase().split('').reverse().join('');
            return wordReverse === word.toLowerCase();
        }
    }
}

console.log(isPalindrome('Dermatoglyphics')); //false
console.log(isPalindrome('abbabba')); //true

// #5
function showFormattedDate(dateObj) {
    let day = dateObj.getDate();
    let month = dateObj.toLocaleString('en', { month: 'long' });
    let year = dateObj.getFullYear();
    return `${day} of ${month}, ${year}`;
}

console.log(showFormattedDate(new Date('05/12/22'))); //'12 of May, 2022'

// #6

const letterCount = (str, letter) => {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            count++;
        }
    }
    return count;
};

console.log(letterCount('abbab', 'b')); //3

// #7
function countRepetitions(arr) {
    let repetitions = arr.reduce(function (prev, cur) {
        prev[cur] = (prev[cur] || 0) + 1;
        return prev;
    }, {});
    return repetitions;
}

console.log(countRepetitions(['banana', 'apple', 'banana'])); // { banana: 2, apple: 1 }

// #8
function calculateNumber(arr) {
    let newArr = parseInt(arr.join(''), 2);
    return newArr;
}

console.log(calculateNumber([0, 1, 0, 1])); //5
console.log(calculateNumber([1, 0, 0, 1])); //9
