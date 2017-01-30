+++
title = "CSS Resets"
date = "2017-01-27"
toc = true
prev = "/class06/lessonplan"
next = "/class06/floats"
weight = 4

+++

### CSS Resets

Browsers like to apply their own basic styling to HTML elements.  For example, your browser will likely give your H1 tags a larger font size than your H2 tags.  UL list items will have bullets and be intended.

This can be desirable, and allows you to have a launching point when setting up your own styling.  However, one challenge is that elements are not always styled in the same way in different browsers.  Browsers have small inconsistencies when styling elements, and these inconsistencies can cause issues when viewing your pages in different browsers.

Web designers and developers will often utilize a **CSS Reset** to make browsers behave more consistently.  A CSS Reset is a small file that someone (or a group of people) has developed over time that will target browser inconsistencies and even them out, so that your CSS styles will look more similar on different browsers.

The CSS Reset I prefer to use is called [normalize.css](http://necolas.github.io/normalize.css/).  Normalize is nice because it does not strip away styling (some resets will strip all styling, for instance - making `strong` and `em` tags look like normal text).  To use Normalize, you will need to download it from the Normalize website, and then include the CSS file **before** any other stylesheets in your `header`.

#### More Information

- [What is a CSS Reset](http://www.cssreset.com/what-is-a-css-reset/)