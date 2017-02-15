+++
title = "Simple Javascript"
date = "2017-01-27"
toc = true
prev = "/class13/userexperience"
next = "/class13/homework"
weight = 4

+++

Open your web browsers and head to the console.

Download [this zip](/0215.zip) folder and unzip it into your `classwork` folder.

## Objects

Objects are a data type that let us store a collection of properties and methods.

```
var objectName = { 
  propertyName: propertyValue,
  propertyName: propertyValue,
  ...
};
```

Objects can be multi-level, and can contain any other types of data, including other objects!

```
var donaldTrump = {
  age: 70,
  occupation: "President",
  children: ["Donald, Jr.", "Ivanka", "Eric", "Tiffany", "Baron"],
  birthday: {"month": 6, "day": 14, year: 1946},
  favoriteFood: "apples"
};
```

Access properties using dot notation or bracket notation (bracket notation is usually used for arrays.

```
donaldTrump.occupation;
// would output 'President'

donaldTrump.birthday.month
// would output '6'

donaldTrump.birthday[day]
// would output '14'

```

### Changing Objects

Use dot or bracket notation with the assignment operator to change objects.

Change existing properties:

```
donaldTrump.favoriteFood = "cheetos";
```

Or add new ones

```
donaldTrump.gender = "male"
```

Or delete them

```
delete donaldTrump.favoriteFood;
```