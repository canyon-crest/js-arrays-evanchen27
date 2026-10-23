// ============================================
//  Unit 8.5 – Arrays
// ============================================
//  This program runs automatically when the page loads.
//  All output goes to console.log() — open the browser
//  console (F12) to see the results.
//
//  Complete each section below by following the STEP comments.
// ============================================


// ============================================
//  WARM-UP: Favorite Colors
// ============================================
// Build an array of 3 colors and print each one.
let colors = ["red", "green", "blue"]
for (i = 0; i <= (colors.length-1); i++) {
    console.log("Color: " + colors[i])
}

let the = 0
let sum = 0
let largest = 0
let count = 0
let numbers = []
for (i = 0; i <= 4; i++) {
    let the = parseFloat(prompt("Enter number " + (i+1)))
    numbers.push(the)
}
let result = ""
for (i=0; i < numbers.length; i++) {
    if (i >= 1) {
        result = result + ", " + numbers[i]
        sum = sum + parseFloat(numbers[i])
    } else {
         result = result + numbers[i]
         sum = parseFloat(numbers[i])
    }
    if (numbers[i] % 2 === 0) {
        count = count + 1
    }
    if (numbers[i] > largest) {
        largest = numbers[i]
    }
}
console.log("Numbers: " + result)
console.log("Sum: " + sum)
console.log("Average: " + sum/numbers.length)
console.log("Even count: " + count)
console.log("Largest: " + largest)


// STEP 1: Create an array called "colors" with exactly
//         three strings: "red", "green", "blue"
//         Use let to declare it.

// STEP 2: Use a for loop to print each color.
//         Each line should say exactly:
//         "Color: red"
//         "Color: green"
//         "Color: blue"
//         Use: console.log("Color: " + colors[i])


// ============================================
//  MAIN: Number Analyzer
// ============================================
// Collect 5 numbers from the user, store them in an array,
// then calculate and display statistics.
// STEP 5: Print all the numbers on one line.
//         Build a string by looping through the array.
//         Separate each number with ", " (comma and space).
//         Print: console.log("Numbers: " + yourString)
//         Example: "Numbers: 10, 20, 30, 40, 50"
//
//         HINT: Start with an empty string. In the loop,
//         add the number. If it's not the last number,
//         also add ", " after it.

// STEP 6: Calculate the sum of all numbers.
//         Use a for loop to add each number to a running total.
//         Print: console.log("Sum: " + sum)

// STEP 7: Calculate the average.
//         Average = sum / numbers.length
//         Print: console.log("Average: " + average)
//         (No rounding needed)

// STEP 8: Count how many numbers are even.
//         A number is even if number % 2 equals 0.
//         Use a for loop and an if statement.
//         Print: console.log("Even count: " + count)

// STEP 9: Find the largest number.
//         Start with the first number as the largest.
//         Loop through the rest and update if you find a bigger one.
//         Print: console.log("Largest: " + largest)
