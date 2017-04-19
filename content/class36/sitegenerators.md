+++
title = "Site Generators"
date = "2017-02-22"
toc = true
prev = "/class36/"
next = "/class36/"
weight = 4

+++


Have you ever gone in and looked at the source code for this class website?  I mean, in the github repo.  You may have noticed a lot of stuff that looks like unformatted "Readme" files from other repositories.  For example, check out yesterday's lesson about Fastshell. ([View on Github](https://github.com/kellygrape/com402-17/blob/master/content/class35/fastshell.md))

I am using a static site generator called *Hugo* to build my site.  This allows me to write my site in Markdown (a simple, text-only way of writing content), run a command on my computer (using Terminal, like we did yesterday!), and a site is generated.

Then, I am able to serve my site up to Github, using Github Pages.


- *A static site* is a collection of pages contained in basic HTML files. You could hand-write these in a text editor, but managing assets and repeated elements such as navigation can become problematic.
- *A content management system (CMS)* stores page content in a database and provides facilities to edit and apply themes. Management becomes easier at the expense of flexibility, performance, server requirements, security and backups.
- *A static site generator (SSG)* is a compromise between using a hand-coded static site and a full CMS. You generate an HTML-only website using raw data (such as Markdown files) and templates. The resulting build is transferred to your live server.

(above is from [Sitepoint](https://www.sitepoint.com/7-reasons-not-use-static-site-generator/))


## Jekyll

Let's all set up Jekyll on our computers.

[Windows Instructions](https://davidburela.wordpress.com/2015/11/28/easily-install-jekyll-on-windows-with-3-command-prompt-entries-and-chocolatey/)

[Mac Instructions](http://treehouse.github.io/installation-guides/mac/jekyll-mac.html)

Once you have Jekyll installed, pick one of these two portfolio sites:

- [Portfolio IRO](http://madebymunsters.github.io/portfolio-iro/) ([github link](https://github.com/bloc/portfolio-iro))
- [Portfolio Kami](http://madebymunsters.github.io/portfolio-kami/) ([github link](https://github.com/madebymunsters/portfolio-kami))

**Fork** the one that you like best, and then **clone** it to your computer.

When you have cloned it, the folder will be on your computer. Find where it has been cloned to, and then open it with Atom.

## Terminal Plus

In Atom, open the Package Installer (Cmd-Shift-P, search for "Install" .. you want to install a package) and search for "Terminal Plus".  Install this.


I'll give everyone some time to do these two steps, and then we will look at the code together.