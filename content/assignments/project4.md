+++
title = "Project #4"
date = "2017-01-06T18:41:57-05:00"
toc = false
prev = "/assignments/projects"
weight = 1

+++

Final Project for COM402
=========================

This is a two-part project.  



# Project 4 Part 1 - Airport Parking App

The first part will allow you to build a single-page application that displays parking information about the Philly Airport.  This simple app will demonstrate your ability to consume an API and display the information.

[API Information](http://phlapi.com/airportparking.html)

## Instructions

* Develop HTML and CSS for an app that displays parking information for the Philly Airport.
* Write JavaScript to request [the Philly Parking API](http://phlapi.com/airportparking.html) via AJAX and populate your app with live data.
* Display the location of the parking lot (display_name in the API) and the number of spaces.
* Add some styling that will help the user to quickly see if the lot is almost full (the API does show the total number of spaces, so you can compare that to the spaces available - you get to decide what constitutes "almost full", but at least ONE of your lots should be almost full.)
* Add comments to your code to let me know what you were thinking!

## Requirements

* *Libraries & Frameworks*: You are welcome to use any framework that you wish - plain Javascript, jQuery, whatever you wish!
* *This must be responsive!* Your app should be accessible on a mobile phone.  Think really carefully about how it looks in different browsers / at different sizes.  
* *Standards*: Your solution should be valid (check your HTML and CSS for coding errors), semantic (use semantic HTML markup), accessible (make sure that people who may have disabilities and cannot navigate using a mouse are able to tab through your form), and lightweight (no huge images!).  Feel free to use Bootstrap or another design framework.
* *Give Credit Where it is Due*: if you use some great styling you found on Codepen, or are using some type of framework, please put a comment in your code that gives credit to the original creator.
* *Submission*: Upload to Github or send me a zip file

## Bonus

* The API includes longitude and latitude points.  Use these to create a Google Maps direction to each parking lot.

## Super Challenge (optional)

* Integrate the Google Maps API so that these come up as pins on a Google Map!


# Project 4 Part 2 - Find Your Representatives!

Your challenge is to create an interactive widget for finding elected officials.

Your data will come from the [Sunlight Foundation](https://sunlightlabs.github.io/congress/index.html) Open API.  At the time of this assignment being created, the Sunlight Foundation API is being migrated to [Pro-Publica](https://www.propublica.org/nerds/item/sunlight-labs-takeover-update).  This is excellent for open data, but a bit challenging for us - the documentation for both is a bit outdated.

The largest impact to you is that you cannot register for an API key - but you do not actually need one right now (despite what the API docs say).

[You can get an example of how to start this here](http://codepen.io/kellygrape/pen/NjGNdJ)

## Instructions

* Develop HTML and CSS for an app that will allow a user to search for their elected officials using a zip code.
* Write JavaScript to request [the Sunlight Congress API](https://sunlightlabs.github.io/congress/index.html) via AJAX and populate your app with live data.
* Integrate at least four different pieces of biographical information into your return.  For example, you may wish to provide contact information or social media links for the representatives.
* Consider how you may handle errors.  Your app should handle if a user searches for a non-working zip code (like, ABCDE instead of 19131).  
* Add comments to your code to let me know what you were thinking!

## Requirements

* *Libraries & Frameworks*: You are welcome to use any framework that you wish - plain Javascript, jQuery, whatever you wish!
* *This must be responsive!* Your app should be accessible on a mobile phone.  Think really carefully about how it looks in different browsers / at different sizes.
* *Standards*: Your solution should be valid (check your HTML and CSS for coding errors), semantic (use semantic HTML markup), accessible (make sure that people who may have disabilities and cannot navigate using a mouse are able to tab through your form), and lightweight (no huge images!).  Feel free to use Bootstrap or another design framework.
* *Give Credit Where it is Due*: if you use some great styling you found on Codepen, or are using some type of framework, please put a comment in your code that gives credit to the original creator.
* *Submission*: Upload to Github or send me a zip file

## Super Challenge (optional)

* Include a button below each representative; if they have a twitter account, pull in their latest tweet!



Delivery
------------

This is due on May 10, 2017 at 1:00pm.

Late submissions cannot be accepted.