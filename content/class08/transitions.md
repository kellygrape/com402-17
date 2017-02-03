+++
title = "CSS Transitions"
date = "2017-01-27"
toc = true
prev = "/class08/transforms"
next = "/class08/animations"
weight = 5

+++

### CSS Transitions

When we make changes to the look an element, those changes happen immediately. Given the following CSS --

```
  a{
    color: green;
    background-color: blue;
  }
  a:hover{
    color: blue;
    background-color: green;
  }
```
any element `a` that is hovered will instantly change colors.

Transitions allow us to slow this change down.

> These transition properties allow elements to change values over a specified duration, animating the property changes, rather than having them occur immediately

Transition properties are written in the *original element*.

Let's take a look at the [Shay Howe](http://learn.shayhowe.com/advanced-html-css/transitions-animations/) article about transitions for some examples.


### Reference

[CSS Tricks](https://css-tricks.com/almanac/properties/t/transition/)
[Shay Howe](http://learn.shayhowe.com/advanced-html-css/transitions-animations/)