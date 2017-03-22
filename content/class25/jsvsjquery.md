+++
title = "JS vs jQuery"
date = "2017-02-22"
toc = true
prev = "/class25/jquery"
next = "/class25"
weight = 4

+++

## JS vs jQuery

jQuery just **helps us to write Javascript easier**.  One of the first things you'll notice is that it becomes much easier to *select* elements using jQuery.

Compare:

## Javascript - selecting things

```
document.querySelector('.some_class') // returns a single selector that has that class
document.querySelectorAll('.some_class') // returns ALL the things with that class
```

## jQuery - selecting things

```
$('.some_class') // returns ALL the things with that class.
```

## Javascript - toggle a class to one OR many

```
document.querySelector('.some_class').classList.toggle('active');
// not so bad for a single node ... but if you have more than one node?

// querySelectorAll returns all the nodes it finds with the selector
// however, you can't iterate over querySelectorAll results (!!)
// so this is a workaround - call Array.map and pass in the 
// list of nodes along with a function
// technically querySelectorAll returns a NodeList not an Array so
/// doesn't have standard array functions
[].map.call(document.querySelectorAll('.some_class'), function(el) {
    
    // classList is the key here - contains functions to manipulate
    // classes on an element
    el.classList.toggle('active');
});
```

## jQuery - adding a class to one OR many

```
$('.some_class').toggleClass('active');
```

## Why use Javascript????

So, it's "easier" to write jQuery (at least, according to these two examples...) -- so why not always use it?

The fundamentals of Javascript will help you with jQuery - knowing how to do loops and if statements are still important concepts, as well as functions and variables.

In addition, knowing "vanilla" Javascript allows you to not have to depend on an additional library.  Your browser has Javascript baked right in - no need to add additional scripts to the page.
