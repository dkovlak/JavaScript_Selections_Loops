console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for (let i = 1; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log('FIZZBUZZ');
  } else if (i % 3 === 0) {
    console.log('FIZZ');
  } else {
    console.log('BUZZ');
  }
}

console.log("EXERCISE 3:\n==========\n");
let i = 1;

do {
  if (i % 2 !== 0) {
    console.log(i);
  }
  i++;
} while (i <= 100);

let ii = 1;
while (ii <= 100) {
  if (ii % 2 !== 0) {
    console.log(ii);
  }
  ii++;
}

let iii = 1;
while (iii <= 100) {
  if (iii % 3 === 0 && iii % 5 === 0) {
    console.log('FIZZBUZZ');
  } else if (iii % 3 === 0) {
    console.log('FIZZ');
  } else {
    console.log('BUZZ');
  }
  iii++;
}

let i1 = 1;
do {
  if (i1 % 3 === 0 && i1 % 5 === 0) {
    console.log('FIZZBUZZ');
  } else if (i1 % 3 === 0) {
    console.log('FIZZ');
  } else {
    console.log('BUZZ');
  } 
  i1++;
} while (i1 <= 100);

console.log("EXERCISE 4:\n==========\n");

let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

for (let i = 0; i <= n; i++){
    if(i == value) {
        console.log("Found value!");
        break;
    }
    if (i == n) {
        console.log("Did not find value")
    }
}

console.log("EXERCISE 5:\n==========\n");

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let n1 = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

for (let i = start; i <= n; i++) {
    if (i % fizzDivisor == 0 && buzzDivisor % 5 == 0) {
      console.log('FIZZBUZZ');
    } else if (fizzDivisor % 3 === 0) {
      console.log('FIZZ');
    } else {
      console.log('BUZZ');
    }
}