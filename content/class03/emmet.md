+++
title = "Emmet - Quick Coding"
date = "2017-01-23"
toc = true
prev = "/class03/htmlreview"
next = "/class03/homework"
weight = 6

+++
      	
Emmet is a tool that allows us to quickly code HTML.  You still need to understand HTML, but Emmet is going to save you a lot of typing.

To get started, install [**Atom**](https://atom.io/).

Once Atom is installed, go to the **File** menu, and select **Preferences**.  The **Settings panel** will open, and in the sidebar choose **Install**.


Search for `Emmet`, and hit the "Install" button on the package from emmetio.

<img src="/course-files/emmet-01.png" alt="Install Emmet Package in Atom" />

## Getting Started

First, *create an html file*.  The rest of this will not work unless you are working in a file with the extension `html`.

Once you are working in an html file, you will be able to use any of the Emmet shortcuts for creating your HTML, followed bt the `Tab` key.


### HTML Basic Structure

- Start with an empty HTML file.
- Type `!` and hit the Tab key
- Emmet should create the basic structure of a website for you!

### Other Examples

A simple example.

```
article>header
```

All you have to do is hit TAB it will be parsed as.

```
<article>
  <header></header>
</article>
```

To generate tags AFTER each other (rather than inside each other), use the `+` symbol between your tags.

```
article+header
```

Hit `TAB` to parse as 

```
<article></article>
<header></header>
```

### Simple Math

Sometimes you want to create a list with four items, each with a link tag inside.

```
ul>li*4>a
```

Hit `TAB` to parse as 

```
<ul>
  <li><a href=""></a></li>
  <li><a href=""></a></li>
  <li><a href=""></a></li>
  <li><a href=""></a></li>
</ul>
```

### More Resources

Here is a video tutorial on using Emmet.  Skip to 3:06 to get to the part where he is demonstrating Emmet (the stuff before that is about installing it).

<iframe width="560" height="315" src="https://www.youtube.com/embed/0uIPGgq9R5Y" frameborder="0" allowfullscreen></iframe>

You can also check out the [Emmet Cheat Sheet](http://docs.emmet.io/cheat-sheet/), or download a copy of the [handout I made for class](/course-files/emmet-cheat-sheet.pdf).
