//1. Hàm function

// Tính giai thừa của số n bằng đệ quy
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

// Tính số Fibonacci thứ n với memoization
function fibonacci(n, memo = {}) {
    if (n in memo) return memo[n];
    if (n <= 1) return n;
    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
    return memo[n];
}

//2. Chuỗi (String)

// Kiểm tra chuỗi đối xứng (palindrome)
function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}

// Tìm ký tự xuất hiện nhiều nhất trong chuỗi
function mostFrequentChar(str) {
    const charCount = {};
    let maxChar = '';
    let maxCount = 0;
    
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
        if (charCount[char] > maxCount) {
            maxCount = charCount[char];
            maxChar = char;
        }
    }
    return maxChar;
}

// 3. Đối tượng và Lớp

// Xây dựng lớp Person
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    setName(name) {
        this.name = name;
    }
    setAge(age) {
        this.age = age;
    }
}

// Xây dựng lớp Rectangle
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
    getPerimeter() {
        return 2 * (this.width + this.height);
    }
}

// 4. Vòng lặp (Loop)

// In ra tất cả các số nguyên tố từ 1 đến n
function printPrimes(n) {
    function isPrime(num) {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }
    for (let i = 1; i <= n; i++) {
        if (isPrime(i)) console.log(i);
    }
}

// Tính tổng các số chia hết cho 3 hoặc 5 từ 1 đến n
function sumMultiplesOf3Or5(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
}

// 5. Xử lý mảng (Array)

// Tìm số lớn thứ hai trong mảng (không dùng sort)
function secondLargest(arr) {
    let max = -Infinity, secondMax = -Infinity;
    for (let num of arr) {
        if (num > max) {
            secondMax = max;
            max = num;
        } else if (num > secondMax && num !== max) {
            secondMax = num;
        }
    }
    return secondMax;
}

// Đếm số lần xuất hiện của mỗi phần tử trong mảng sử dụng reduce
function countOccurrences(arr) {
    return arr.reduce((acc, num) => {
        acc[num] = (acc[num] || 0) + 1;
        return acc;
    }, {});
}
