+++
chapter = true
prev = "/class19"
next = "/class21"
weight = 2
title = "Friday, March 3, 2017"
date = "2017-01-06T18:43:51-05:00"
icon = "<b>X. </b>"

+++

### Friday, March 3, 2017

# Javascript - Recipe Project

We will continue to work on our recipe project.

[Slides](/gdi-intro-js-master/class20.html)

- Adding event listeners
- Creating a collection of object using array
- Using 'foreach' to print all pieces of an array
- Understanding data types and how to change / transfer data types
- Using data attributes to share information from HTML to JS.

## Starting Code

Use the following code in the bottom of your script.js for your recipe project.  This is what we worked on in the last class, so you probably already have a lot of this written.


```
/// showRecipe prints out a recipe
//    r should be a recipe object.
function showRecipe(r){
  document.querySelector('.recipe h2').innerHTML = r.title;
  document.querySelector('.recipe .servings').innerHTML = r.servings;
  document.querySelector('.recipe .ingredients').innerHTML = '';
  var numingredients = r.ingredients.length;
  for(var i = 0; i < r.ingredients.length; i = i+1){
    document.querySelector('.ingredients').innerHTML +=  '<li>'+r.ingredients[i]+'</li>';
  }
};

document
  .querySelector('.nextrecipe')
  .addEventListener('click',function(){
    console.log(this.classList);
    console.log(this.getAttribute('data-recipe'));
    var recipetoshow = this.getAttribute('data-recipe');
    console.log(recipetoshow);
    console.log(typeof recipetoshow);
  });

```