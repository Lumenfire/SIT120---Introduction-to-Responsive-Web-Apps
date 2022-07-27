let text = "supercalifragilisticexpialidocious";
console.log(text);
console.log(text.charAt(5));

let letters = "26"
if (text < letters) {
    console.log(text + ' is less than ' + letters + ' characters');
} else if (text > letters){
    console.log(text + ' has more than ' + letters + ' characters');
} else {
    console.log(text + ' has ' + letters + ' characters');
}

console.log(text.toUpperCase());
console.log(text.toLowerCase());

console.log(text.slice(0, 5));

let food = "I want some chocolate";
let meal = food.replace("chocolate", "cake");
console.log(food);
console.log(meal);

function myFunction() {
    meal.replace(/CHOCOLATE/i,"cake");
    console.log(meal);
  }

  let fruits = ['Apple', 'Pear', 'Watermelon', 'Strawberry'];
  console.log(fruits);
  console.log(fruits.find((fruit) => fruit === 'Pear'));
  console.log(fruits.find((fruit) => fruit === 'Banana'));

  console.log(fruits.findIndex((fruit) => fruit === 'Pear'));
  console.log(fruits.findIndex((fruit) => fruit === 'Banana'));
  console.log(fruits.findIndex((fruit) => fruit === 'Watermelon'));

  console.log(fruits.push('Peach'));
  console.log(fruits)
  console.log(fruits.findIndex((fruit) => fruit === 'Peach'));

  console.log(fruits.pop());
  console.log(fruits)
  console.log(fruits.findIndex((fruit) => fruit === 'Peach'));

  let numbers = [6, 9, 1, 7, 3];
  console.log(numbers);
  console.log(numbers.sort());
  console.log(numbers);

  console.log(fruits);
  console.log(fruits.slice(1));
  console.log(fruits.slice(1, 3));
  console.log(fruits.slice(-1));

  fruits.forEach((fruit) => console.log(fruit));
  numbers.forEach((number) => console.log(number));

  console.log(fruits.includes("Mango"));
  console.log(fruits.includes("Apple"));
  console.log(numbers.includes(3));
  console.log(fruits.includes("Apple", 2));

  let length = fruits.length;
  console.log(length);

  console.log(numbers.unshift(8));
  console.log(numbers);

  let x = 2.365;
  console.log(x);
  console.log(x.toExponential(2));
  console.log(x.toPrecision(6));


