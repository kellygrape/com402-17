+++
title = "jQuery"
date = "2017-02-22"
toc = true
prev = "/class25"
next = "/class25/jsvsjquery"
weight = 3

+++

## jQuery - `this` and $('that')

**jQuery** is a very popular and widely used Javascript Library that simplifies DOM Manipulation.  It is fast, lightweight, and can be loaded from a number of popular CDNs (content delivery networks) - including Google. Anyone can create their own **jQuery plugins** to add additional functionality to jQuery, and many of these plugins are shared with the public to use on their own websites.

> "jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers." ([from jquery.com](https://jquery.com/))

#### What's the DOM?

DOM is short for Document Object Model

- [CSS Tricks' "What is DOM"](http://css-tricks.com/dom/)
- [Short preview of Treehouse's lesson on DOM (auto-playing)](https://teamtreehouse.com/library/jquery-basics/introduction-to-jquery/what-is-the-dom)

We can explore the DOM in Chrome developer tools!


#### Learning jQuery

There are many tutorials available online, and the jQuery website has a great number of resources to help you get started.

- [jQuery.com - How jQuery Works](http://learn.jquery.com/about-jquery/how-jquery-works/)
- [http://learn.jquery.com/](http://learn.jquery.com/)
- [API Documentation](http://api.jquery.com/) - basically, the instruction manual on how to do things in jQuery.


#### Getting Started

You don't need to download jQuery to use it.  You can include it on your website from a CDN (content delivery network).

You can serve jQuery from Google.  Here is a link to the [API page](https://developers.google.com/speed/libraries/#jquery).  Google provides three options - jQuery 1.x, jQuery 2.x, and jQuery 3.x.  You can use 3.x if you do not need to support IE8 and below, and if you're not using any libraries that depend on jQuery 1.x.

Copy and paste the following line into an HTML file, at the top (in the head) or at the bottom (before the `</body>` tag)

```
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
```

Using Google's CDN is free, and the file will often load faster than serving it form your own host; many users will have this resource cached already since so many other sites use it.

#### Exploring jQuery Together

Create a new folder in your classwork folder, and call it `24-jquery`.

In this folder, create a new HTML file (named `index.html`, of course), and in the footer of the file (before the `</body>` tag), *include jQuery*.


```
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
```

Now we need to create a new script tag, and start using jQuery.  We always need to start by checking to see if the **document is ready**.  ([Read more about this](http://www.learningjquery.com/2006/09/introducing-document-ready))

```
<script>
$(document).ready(function() {
    // put all your jQuery goodness in here.
});
</script>
```


#### Need a Quick Reference?

[jQuery Tutorial for Beginners](http://www.impressivewebs.com/jquery-tutorial-for-beginners/)