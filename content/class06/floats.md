+++
title = "CSS Layout with Floats"
date = "2017-01-27"
toc = true
prev = "/class06/resets"
next = "/class06/responsive"
weight = 5

+++


- Utilizing floats
- Clearfix - I like to use [Nicholas Gallagher's Micro-clearfix](http://nicolasgallagher.com/micro-clearfix-hack/).  Copy and paste the following code into your CSS file.

```
/**
 * For modern browsers
 * 1. The space content is one way to avoid an Opera bug when the
 *    contenteditable attribute is included anywhere else in the document.
 *    Otherwise it causes space to appear at the top and bottom of elements
 *    that are clearfixed.
 * 2. The use of `table` rather than `block` is only necessary if using
 *    `:before` to contain the top-margins of child elements.
 */
.cf:before,
.cf:after {
    content: " "; /* 1 */
    display: table; /* 2 */
}

.cf:after {
    clear: both;
}

/**
 * For IE 6/7 only
 * Include this rule to trigger hasLayout and contain floats.
 */
.cf {
    *zoom: 1;
}
```