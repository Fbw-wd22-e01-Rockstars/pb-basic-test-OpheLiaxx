// Add answers here 

/* #### 1. Los or New?
Create a function named "_nameOfCity_". If a passed string begins with "_Los_" or "_New_", then return the full string. If not, return "_The city name does not begin with Los or New_". The function should be **case insensitive**.
 */

function nameOfCity(city){
    if (city.startsWith("Los") || city.startsWith("New")|| city.startsWith("new") || city.startsWith("los")){
        return city;
    }
    else{
        return "_The city name does not begin with Los or New_"
    }
}

console.log(nameOfCity("New York"));
console.log(nameOfCity("newark"));
console.log(nameOfCity("London"));

/* #### 2. isDivisible?
Create a function named "_isDivisible_". The function should take an integer as an argument. If the integer is divisible by 100, then return true. If not, return false.
 */

function isDivisible(num){
    if (num % 100 === 0){
        return true;
    }
    else{
        return false;
    }
}

console.log(isDivisible(1));
console.log(isDivisible(1000));
console.log(isDivisible(100));

/* #### 4. What's the weather?
Use a **ternary operator** to complete this task. Create a function named "_isRaining_". If passed `true`, return "_wet day - you need an umbrella_". If passed `false`, return "_dry day - leave your umbrella at home_".

##### Example
````javascript
isRaining(true) ➞  */

function isRaining(word){
    return word ? "_wet day - you need an umbrella_" : "_dry day - leave your umbrella at home_";
}
console.log(isRaining(true));
console.log(isRaining(false));

/* ### Loops 

#### 1. Sequence
Create a function named "_geometricalSequence_" and **use a loop** to return the following sequence: _`1 2 4 8 16 32 64 128 256`_. Concatenate each value to a string and return a string.

##### Example
````javascript
geometricalSequence() ➞ '1 2 4 8 16 32 64 128 256' */

function geometricalSequence(){
    let result = "";
    for (let i = 1; i <= 256; i *= 2){
        result += i + " ";
    }
    return result.toString();
}

console.log(geometricalSequence());

/* #### 2. Multiples
Create a function named "_multiplesOfThree_" and **use a loop** to return the first five multiples of three: _`3 6 9 12 15`_. Concatenate each value to a string and return a string.

##### Example
````javascript
multiplesOfThree() ➞ '3 6 9 12 15' */

function multiplesOfThree(){
    let result = "";
    for (let i = 3; i <= 15; i += 3){
        result += i + " ";
    }
    return result.toString();
}
console.log(multiplesOfThree());

/* ### Math 

#### 1. You've got the power
Create a function named "_powerOf_" which takes an integer as an argument and returns the integer to the power of itself. You should **use a Math object method** to make the calculation.

##### Examples
````javascript
powerOf(3) ➞ 27
powerOf(4) ➞ 256 */

function powerOf(num){
    return Math.pow(num, num);
}
console.log(powerOf(3));
console.log(powerOf(4));

/* ### Problem Solving 

#### 1. How many? 
Create a function named "_vowelCount_" that accepts a string as an argument. Check how many vowels (A, a, E, e, I, i, O, o, U, u) the string contains, if any. **Return the vowel count** of the string. 

##### Examples
````javascript
vowelCount("hello") ➞ 2
vowelCount("test") ➞ 1
vowelCount("fbw") ➞ 0 */

function vowelCount(str){
    let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    let count = 0;
    for (let i = 0; i < str.length; i++){
        if (vowels.includes(str[i])){
            count++;
        }
    }
    return count;
}
console.log(vowelCount("hello"));
console.log(vowelCount("test"));
console.log(vowelCount("fbw"));



// DO NOT EDIT below this line - This will result in an automatic fail
// module.exports = {nameOfCity, isDivisible, missingAngle, isRaining, geometricalSequence, multiplesOfThree, powerOf, vowelCount};

