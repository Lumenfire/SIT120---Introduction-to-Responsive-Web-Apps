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