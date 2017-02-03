+++
title = "Concept Check"
date = "2017-01-27"
toc = true
prev = "/class08/"
next = "/class08/transforms"
weight = 3

+++

### Core Concept Check

An HTML Element is written like this:

```
<div class="awesome-div">
  This is my div!
</div>
```

Some CSS that could target that element could be written like this:

```
div {
  background-color: green;
  width: 200px;
  height: 200px;
}
```

OR like this:

```
.awesome-div {
  background-color: green;
  width: 200px;
  height: 200px;
}
```

We can use pseudo-classes to change the styling of almost any HTML element.  One of the most common ways to alter CSS is when **hovering** on that element.

```
.awesome-div:hover{
  background-color: blue;
  width: 300px;
  height: 300px;
}
```

Let's play around with this on CodePen.

[See this example on CodePen](http://codepen.io/kellygrape/pen/LEemKV?editors=110)