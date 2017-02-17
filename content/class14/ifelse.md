+++
title = "If / Else"
date = "2017-01-27"
toc = true
prev = "/class14/workingWithStrings"
next = "/class14/"
weight = 4

+++


### The if statement

Use `if` to tell JS which statements to execute, based on a condition.

```
if (condition) {
  // statements to execute
}
```

```
var x = 5;

if (x > 0) {
  console.log('x is a positive number!');
}
```

### Comparison Operators

Use these operators to compare two values for equality, inequality, or difference.
  
```
var myFavoriteNumber = 28;
```

| Operator 	| Meaning  	| True expressions                                                                             	|
|----------	|----------	|----------------------------------------------------------------------------------------------	|
| ==       	| Equality 	| myFavoriteNumber == '28' 
|           |           | 28 == '28'  |
|           |           | myFavoriteNumber == 28|
| ===       	| Strict equality 	| myFavoriteNumber === 28 
|   !=        |    Inequality       | myFavoriteNumber != 29  |
|    !==       |     Strict inequality      | myFavoriteNumber !== '28'  |
|           |           | 28 !== '28'  |
|     >	    |     Greater than      | myFavoriteNumber > 25  |
|     	    |           | '28' > 25  |
|     >=	    |    Greater than  or equal       | myFavoriteNumber >= 28   |
|     <	    |     Less than      | myFavoriteNumber < 30  |
|     <=    |     Less than  or equal     | myFavoriteNumber <= 28   |


**Common mistake: Do not confuse = (the assignment operator) with ==.**


### Logical Operators

These are typically used in combination with the comparison operators:

```
var posNum = 4;
var negNum = -2;
```

**AND - &&**

`posNum > 0 && negNum < 0`

`4 > 0 && -2 < 0`
          
**OR - || ** 
      
`||`

`posNum > 0 || negNum > 0 `

`4 > 0 || -2 > 0`


**NOT - !**

`!(posNum === negNum) `

`!(posNum < 0)`

`!(false)`



When combining together multiple conditions, use parentheses to group:

```
var myAge = 28;
if ((myAge >= 0 && myAge < 3)  || myAge > 90) {
  console.log('You\'re not quite in your peak.');
}
```


### The if/else statement

Use `else` to give JS an alternative statement to execute.

```
var age = 28;
if (age > 16) {
  console.log('Yay, you can drive!');
} else {
  console.log('Sorry, but you have ' + (16 - age) + ' years til you can drive.');
}
```


You can use `else if` if you have multiple exclusive conditions to check:

```
var age = 20;
if (age >= 35) {
  console.log('You can vote AND hold any place in government!');
} else if (age >= 25) {
  console.log('You can vote AND run for the Senate!');
} else if (age >= 18) {
  console.log('You can vote!');
} else {
  console.log('You have no voice in government!');
}
```


