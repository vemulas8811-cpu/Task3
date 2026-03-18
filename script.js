// Task 1
// Question: Take a string number from prompt, convert it to number, add 10 and print the result.
let n = prompt("Enter a number ");
n = Number(n);
console.log(typeof n);
n = n + 10;
console.log(n);

// Task 2
// Question: Take two numbers using prompt, convert them using Number() and print their sum.
let a = prompt("Enter a number");
let b = prompt("Enter another number");
a = Number(a);
b = Number(b);
let sum = a + b;
console.log("The sum of the two numbers is: " + sum);

// Task 3
// Question: Take a user input value and print whether it becomes true or false using Boolean().
let c = prompt("Enter a number");
c = Boolean(c);
console.log(c);

// Task 4
// Question: Convert "123" to number and multiply by 5.
let d = Number("123") * 5;
console.log(d);

// Task 5
// Question: Convert true and false into numbers and print the result.
let e = Number(true);
console.log(e);
let f = Number(false);
console.log(f);

// Task 6
// Question: Take a string input and check if it becomes true or false using Boolean().
let g = Boolean(prompt("Enter a String"));
console.log(g);

// Task 7
// Question: Convert "100" and "50" to numbers and find difference.
let h = Number("100");
let i = Number("50");
console.log(h - i);

// Task 8
// Question: Convert null, undefined, and "" into numbers and print the result.
let a1 = Number(null);
let b1 = Number(undefined);
let c1 = Number("");
console.log(a1);
console.log(b1);
console.log(c1);

// Task 9
// Question: Add "10" and 20 and explain why the result happens.
let n2 = "10";
let a2 = 20;
console.log(n2 + a2);

// Task 10
// Question: Convert "25" into number and check if it is greater than 20.
let x = Number("25");
console.log(x > 20);

// Task 11
// Question: Ask user age and check if they are eligible to vote.
let age = Number(prompt("Enter your age"));
if (age >= 18) {
  console.log("Eligible to vote");
} else {
  console.log("Not Eligible");
}

// Task 12
// Question: Take a number and check if it is positive or negative.
let n4 = Number(prompt("Enter the number"));
if (n4 >= 0) {
  console.log("Positive Number");
} else {
  console.log("Negative Number");
}

// Task 13
// Question: Check if a number is even or odd.
let n5 = Number(prompt("Enter a Number"));
if (n5 % 2 === 0) {
  console.log("Even Number");
} else {
  console.log("Odd Number");
}

// Task 14
// Question: Take 3 numbers and print the largest number.
let x1 = Number(prompt("Enter the first Number"));
let y1 = Number(prompt("Enter the Second Number"));
let z1 = Number(prompt("Enter the Third Number"));
if (x1 > y1 && x1 > z1) {
  console.log(x1 + " is largest number");
} else if (y1 > z1) {
  console.log(y1 + " is largest number");
} else {
  console.log(z1 + " is largest number");
}

// Task 15
// Question: Ask user temperature and classify weather.
let temp = Number(prompt("What is the temperature today?"));
if (temp > 35) {
  console.log("Hot day");
} else if (temp < 20) {
  console.log("Cold Day");
} else {
  console.log("Normal Temperature");
}

// Task 16
// Question: Check if a student passed or failed.
let marks = Number(prompt("Enter the marks"));
if (marks >= 35) {
  console.log("Student Passed");
} else {
  console.log("Student Failed");
}

// Task 17
// Question: Ask username and password and validate login.
let original_username = "suresh";
let original_password = "stackly";
let username = prompt("Enter the Username");
let password = prompt("Enter the password");
if (original_username === username && original_password === password) {
  console.log("Your username and password is correct");
} else {
  console.log("Your username and password is not correct");
}

// Task 18
// Question: Check if a year is leap year.
let year = Number(prompt("Enter the year"));
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(year + " is leap year");
} else {
  console.log("It is Not leap year");
}

// Task 19
// Question: Ask user time and print greeting.
let time = Number(prompt("Enter the time"));
if (time >= 5 && time <= 12) {
  console.log("Good morning");
} else if (time <= 16) {
  console.log("Good Afternoon");
} else if (time <= 20) {
  console.log("Good Evening");
} else {
  console.log("Good Night");
}

// Task 20
// Question: Ask salary and calculate tax.
let salary = Number(prompt("What is your salary"));
if (salary >= 50000) {
  console.log("You have to pay " + salary * 0.2);
} else if (salary >= 30000) {
  console.log("You have to pay " + salary * 0.1);
} else {
  console.log("No tax");
}

// Task 21
// Question: Print numbers 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Task 22
// Question: Print 10 to 1
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// Task 23
// Question: Print even numbers 1–50
for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// Task 24
// Question: Print odd numbers 1–50
for (let i = 1; i <= 50; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// Task 25
// Question: Print multiplication table for a given number
let num6 = Number(prompt("Enter the number for multiplication"));
for (let i = 1; i <= 10; i++) {
  console.log(num6 + " * " + i + " = " + num6 * i);
}

// Task 26
// Question: Find sum of numbers from 1–100
let sum6 = 0;
for (let i = 1; i <= 100; i++) {
  sum6 += i;
}
console.log(sum6);

// Task 27
// Question: Find factorial of a number
let num5 = Number(prompt("Enter the number"));
let fact = 1;
for (let i = num5; i >= 1; i--) {
  fact *= i;
}
console.log(fact);

// Task 28
// Question: Count numbers divisible by 5 from 1–100
let count = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 5 === 0) {
    count++;
  }
}
console.log(count);

// Task 29
// Question: Print square of numbers from 1–10
for (let i = 1; i <= 10; i++) {
  console.log(i * i);
}

// Task 30
// Question: Reverse a number
let num4 = prompt("Enter the number");
let n1 = "";
for (let i = num4.length - 1; i >= 0; i--) {
  n1 += num4[i];
}
console.log(n1);

// Task 31
// Question: Print all elements in array
let arr1 = ["apple", "banana", "orange"];
for (let i of arr1) {
  console.log(i);
}

// Task 32
// Question: Count total elements in an array
let arr2 = ["How", "Are", "You", "My", "Friend"];
let count1 = 0;
for (let i = 0; i < arr2.length; i++) {
  count1++;
}
console.log(count1);

// Task 33
// Question: Find largest number in array
let num7 = [23, 58, 545, 576, 674];
let largest = num7[0];
for (let i = 0; i < num7.length; i++) {
  if (num7[i] > largest) {
    largest = num7[i];
  }
}
console.log(largest);

// Task 34
// Question: Find sum of array numbers
let num = [23345, 34434556, 435645, 243459];
let sum1 = 0;
for (let i = 0; i < num.length; i++) {
  sum1 += num[i];
}
console.log(sum1);

// Task 35
// Question: Print even numbers from array
let num2 = [14, 45, 48, 675, 280];
for (let i = 0; i < num2.length; i++) {
  if (num2[i] % 2 === 0) {
    console.log(num2[i]);
  }
}

// Task 36
// Question: Print all keys and values from object
let student = {
  name: "suresh",
  age: 24,
  city: "Hyderabad",
};
for (let key in student) {
  console.log(key + ":" + student[key]);
}

// Task 37
// Question: Count how many properties are inside an object
let college = {
  name: "suresh",
  Degree: "Btech",
  passout: "2024",
  section: "A",
};
let count6 = 0;
for (let key in college) {
  count6++;
}
console.log(count6);

// Task 38
// Question: Check if object contains salary property
let company = {
  name: "suresh",
  company: "stackly",
  location: "Hyderabad",
  salary: 10000,
};
if ("salary" in company) {
  console.log("Salary property is there");
} else {
  console.log("Salary property is not there");
}

// Task 39
// Question: Print only values from object
let object1 = {
  name: "suresh",
  age: "23",
  location: "Hyderabad",
  company: "stackly",
};
for (let key in object1) {
  console.log(object1[key]);
}

// Task 40
// Question: Create employee object and display employee details
let employee = {
  name: "suresh",
  role: "software developer",
  salary: 10000,
  department: "Developer",
};
for (let key in employee) {
  console.log(key);
}
