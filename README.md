ihu-challenge
=============

IHU Challenge in Javascript
- Karen Kenward (karen@kenward.org)

A simple '2' page web app. Display the word 'Hello'. When clicked, 'Hello' is replaced by the 'Goodbye' page.

This app uses Javascript with AngularJS framework on Node.js platform. It utilizes routing to navigate to a second url, with a second controller, though it reuses the same view and dynamically updates the display. A custom directive is also used.

The project takes advantage of Yeoman for setup and structuring the app, Bower package manager and Grunt. Jade templating and Stylus help create compact html and css. Karma and Jasmine are used to drive the tests. Grunt controls the build tasks.