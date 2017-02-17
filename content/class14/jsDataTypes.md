+++
title = "JS Data Types"
date = "2017-01-27"
toc = true
prev = "/class14"
next = "/class14/workingWithStrings"
weight = 2

+++

We learned in the last class that one data type of JS is "Object".  Another is "Array".

Let's look at some of the more **basic** data types.  We've used a lot of these already in class.

### String

A string is a set of characters (letters, etc).

```
    var myName = 'Kelly Anne';
    var schoolName = "Saint Joseph's University";
```

### Number

Number refers to whole numbers (6, -100) or decimal numbers (3.141592).

```
  var myAge = 33;
  var birthMonth = 12;
```

You can do simple math with numbers, such as using `+`, `-`, `/`, and `*`.  Another useful operator is `%` (modulus) - this gives you the *remainder* of a division.

We've also seen shortcut operators, `++` and `--` - increment and decrement.  These take the value of a variable and add or minus 1.

More complex Math things are available through the built-in `Math` object.  For example, you can access the property `pi` of the `Math` object by writing:

```
  var pi = Math.pi;
```

`Math` has a number of built-in functions too! You could get a random number by writing:

```
  var random = Math.random();
```

This returns a number between 0 and 1.

You can read more about the `Math` object here - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math


### Boolean

Booleans represent values, true or false.

```
    var itsAGoodDog = true;
    var dogIsOverrated = false;
```

### Undefined

Undefined is simply a value that has no definition yet.  You get an undefined variable by simply writing

```
  var myVar;
```

Because you haven't assigned myVar any value, it is undefined.


### Null

Null is similar to undefined, but not entirely the same.

Null is an empty value.

```
  var badDogs = null;
```