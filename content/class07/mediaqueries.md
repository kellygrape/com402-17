+++
title = "Media Queries"
date = "2017-01-27"
toc = true
prev = "/class07"
next = "/class07/grids"
weight = 3

+++

Media Queries are a feature in CSS that allow you to specify when a certain rule (or set of rules) will be applied.

```
// normal style
#header-image {
    background-repeat: no-repeat;
    background-image:url('image.gif');
}

// show a larger image when you're on a big screen
@media screen and (min-width: 1200px) {
    #header-image {
        background-image:url('large-image.gif');
    }
}

// remove header image when printing.
@media print {
    #header-image {
        display: none;
    }
}
```

Media queries start with `@media`, followed by a condition or set of conditions.  When the condition (or conditions) are true, the CSS inside of the media query will be triggered to apply.

The condition line ends with a {, and CSS rules are written (as usual) after the open curly brace.  Don't forget to close the curly brace!  You will end up with two closed curly braces } at the end of your media query - one for the last CSS rule, and one for the media query itself.

There are more conditions than I can list here, but if you are interested you can read more about the options on [Mozilla's guide to media queries](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Media_queries) (Mozilla has a great CSS resource guide in general!).

The basic conditions you will see are:

#### Media Types

There are more than 10 media types, but the most commonly used ones are : 

```
screen (media type, generally refers to things 
        viewed on a screen, including mobile devices)
   
print (media type, generally refers to printed documents.  
      This is how your page will look when printed!)
   
all (all of the media types combined - use this to apply 
     to both screen and print!)
```

#### Measurements

Measurements allow you to get the width of the window (or the screen, if the window takes up the whole viewport, like on a phone).  Measurements can be done using any of the valid web measurements - most commonly pixels (px), but could be em or rem.

```
min-width
max-width
```

#### Logical Operators in Media Queries

Conditions in media queries can be combined using logical operators.  There are three different logical operators available for use within media queries, including `and`, `not`, and `only`.

