+++
title = "CSS Transforms"
date = "2017-01-27"
toc = true
prev = "/class08/conceptcheck"
next = "/class08/transitions"
weight = 4

+++

### CSS Transforms

You can use CSS to *transform* an element.  We are used to changing element properties, such as `color` or `width` or `border`.

The `transform` property allows you to visually manipulate an element by skewing, rotating, translating, or scaling.

- `scale()` - making an element bigger or smaller (unlike changing the width and height, this causes ALL things inside the element to scale - including the text inside it and the padding)
- `skewX()` and `skewY()` - tilting an element 
- `translate()` - affects the positioning of an element - moving it up or down, left or right
- `rotate()` - rotates the element clockwise (or counter-clockwise) from its current position

There is also `matrix()` and `perspective()`, which we won't be touching on.  Matrix is a way to combine all transforms into one, and really isn't easy to write out.  Perspective is used in 3D transforms.

### Reference

[CSS Transforms Guide](http://learn.shayhowe.com/advanced-html-css/css-transforms/)
[CSS Tricks about Transforms](https://css-tricks.com/almanac/properties/t/transform/)