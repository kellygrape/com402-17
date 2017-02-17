+++
title = "JS Data Types"
date = "2017-01-27"
toc = true
prev = "/class14/jsDataTypes"
next = "/class14/ifelse"
weight = 3

+++

## Working with Strings

Often in Javascript, you will be working with **strings**.  It's useful to know some common ways of dealing with strings.

### Putting Strings Together (concatenation)

To combine two strings, you need to use `concatenation`.

```
  var fName = "Kelly Anne";
  var lName = "Pipe";
  
  var fullName = fName + " " + lName;
```

As you see from this example, we can add strings together by using the `+` operator.

```
  var favColor = 'blue';
  
  document.write("My favorite color is" + favColor + ".");
```

Make sure your `'` and `"` are balanced when you are writing string concatenations.

### String Properties

Sometimes in coding you want to know how long a string is.  To get that value, you will want to access the `length` property of the string.

```
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  
  console.log(alphabet.length); // 26
```


### String Methods

**Comparing Strings Alphabetically**

You can find out if a string comes before another string in the dictionary by simply using the `<` or `>` operators.

```
  if ("purple" < "zoo") { // true
    console.log("your word comes first alphabetically!");
  }
```

**Getting a letter from inside a string**

```
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  
  console.log(alphabet.charAt(1)); // ??
```

You can find lots more string functions, like how to get a piece of a string (slice), or how to split up a string into different characters, or how to make a string all uppercase or all lowercase, at the [Moz Reference for Strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)