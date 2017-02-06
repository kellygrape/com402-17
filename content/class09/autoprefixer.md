+++
title = "Autoprefixer"
date = "2017-01-27"
toc = true
prev = "/class09"
next = "/class09/javascript"
weight = 2

+++

### Autoprefixer

In the last class, we briefly talked about using vendor prefixes for things like transitions, animations, etc.  Vendor prefixes help us make sure that browsers that are still working on implementing these new features can understand our code.

- [About Autoprefixer](https://css-tricks.com/autoprefixer/)

There are a lot of options for prefixing your CSS.  You can type in all your prefixes yourself (tedious and hard to remember).  Or you can use an online tool such as [pleeease](http://pleeease.io/play/) or [CSS3 Generator](http://css3generator.com/) to help you set up your transforms and transitions with the prefixes you need.

You can also install a tool called *Autoprefixer* in Atom.

- Use the **Command Palette** to install a package.  Type `⌘-⇧-p` (`command` or `control`, `shift`, and `p` all at the same time) to open the Command Palette.  Then start typing `Install Package` to see the options - you want to go to the **Settings View: Install Packages** section.
- Search for **autoprefixer** and install that package.
- Create a new CSS file and create some CSS. Try `div{ transform:rotate(360deg); }`.
- Open the **Command Palette** again and search for Autoprefixer.  Hit `Enter` to run Autoprefixer on your CSS.
