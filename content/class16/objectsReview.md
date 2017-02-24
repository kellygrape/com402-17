+++
title = "Objects - a Recap"
date = "2017-02-22"
toc = true
prev = "/class16"
next = "/class16/miniquiz"
weight = 2

+++

We finished up our recipe, printing out one recipe to the page.

## Using an object to store the recipe

We have used an `object` to store our recipe.  Objects are a type data in Javascript that have `properties` and `methods`.

Our object is named `recipe`, and we have given it a number of properties (no methods!).

An object can be created just by naming a variable and the giving it a set of empty curly brackets.

Remember, **objects use curly brackets, `{` and `}`**.

```
var sampleObject = {};
```

We can also set up an object by passing it some properties at the very beginning!

```
var sampleObjectWithProperties = {
    property1 : 'value of property1',
    property2 : 15,
    property3 : {},
    property4 : []
  };
```

In the object above, `property1` is a String with the value `"value of property"`.  If you wanted to access this value, you would use `dot notation`.

```
sampleObjectWithProperties.property1
```

property2 is an Integer, property3 is another object, and property4 is an array.  That's right, objects can hold any data type in their properties, even other objects!


Now, let's look at a sample recipe object.

```
var recipe = {
  title: "Dad's Pancakes",
  servings: 6,
  ingredients: [
      "1 1/4 cup flour",
      "1 cup milk",
      "1 egg",
      "2 tsp baking powder",
      "3 tsp butter"
  ]
};
``` 