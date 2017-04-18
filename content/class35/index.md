+++
chapter = true
prev = "/class34"
next = "/class36"
weight = 2
title = "TUESDAY, April 18, 2017"
date = "2017-01-06T18:43:51-05:00"
icon = "<b>X. </b>"

+++

### Tuesday, April 18, 2017

# Tuesday?

Today we will be looking at the final project, and having an opportunity to begin working on it.

I will also be introducing the concept of *build scripts*, pieces of code that you run on your own computer to help do things like **compile SASS** and **auto-prefix**.

We will be installing FastShell, an HTML starter kit that integrates SASS, jQuery, and builds it all together using Gulp.


##FastShell

[Download Fastshell Here](https://github.com/HosseinKarami/fastshell)

<blockquote>The opinionated FastShell framework. Built for the modern developer. For teams and the individual, encouraging a better workflow. JavaScript task running, build processes, autominification and file concatenation, wrapped with an enhanced HTML5 boilerplated framework.</blockquote>

## Project setup and Gulp installation

FastShell utilizes open source components running on the Terminal/command-line for its workflow, you'll need to install Node and Gulp. Here's a walkthrough of how to get a project up and running in minutes. Once Node and Gulp are installed all future projects running Gulp are instant.

1. Install [Node.js](http://nodejs.org/download), [Sass](http://sass-lang.com/tutorial.html) and [Git](http://git-scm.com) on your machine. If you're a Windows user you'll also need to install [Ruby](http://rubyinstaller.org/downloads).
2. [Install Gulp](http://Gulpjs.com/) using `npm install -g gulp`. You may need to use `sudo` in front of the Gulp install command to give it permissions.
3. Fork/Clone/Download the FastShell repository into your machine, you should hopefully see all the files and folders.
4. Open Terminal and install FastShell's dependencies to `node_modules` directory in your project directory using `npm install`. You don't need `sudo` to do this.
5. The `npm install` you did in previous step should install all the dependencies, which you can confirm by visiting the `node_modules` in your project directory. Then use `gulp` (again in your project directory) to run the commands associated with FastShell and to automatically open a new FastShell project running on `localhost:3002`.
6. From now on, just run `gulp` in your project directory to automatically run FastShell's Gulp tasks.

## How to use FastShell
Using FastShell is very easy, it's based on an easy philosophy of keeping things simple so that anybody can use it, even with zero experience on the command-line. FastShell uses Gulp to manage all the essential tasks for building with the web.

_[Previous content from FastShell's Docs](https://github.com/HosseinKarami/fastshell/blob/master/DOCS.md)_