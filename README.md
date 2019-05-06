## WebdrierIO-boilerplate
![Webdriverio](https://webdriver.io/img/webdriverio.png)

Welcome to the WebDriver.io Boilerplate project!  This is meant to be a simple easy to understand project to get anyone started with Webdriver.io and Mocha BDD.  This project also supports ES6, via Babel and uses the Page Object design patter.

### Pre-requisites

- Make sure you have NodeJS `10.15.3` or higher installed.
- Make sure you have JDK 1.8 or higher.

### Installation

Clone this project into a new directory and then navigate into the cloned directory.

`npm install`

<img src="https://i.pinimg.com/originals/78/89/e9/7889e9fb00e971c7357d06725b7cde07.png" width=50px> To install all the things. 

Install the chrome and gecko drivers with the following command:

`npx selenium-standalone install`

### Running tests

To run the tests available in the boilerplate, all you need to do is run: `npm test`

This will run tests against the the [internet](http://the-internet.herokuapp.com).

### The Dockerfile

This application also has an example Dockerfile.  Many times when developing tests for customers, they will want to be able to run them in their CI environment.  This Dockerfile will build a docker image based on Docker Selenium Chrome standalone.  

This is a portable docker image that can run anywhere a Docker image can be run.  However, in order to have tests actually be able to run from the docker container, they'll need to be run in headless mode.

### Switching to headless

In the config/wdio.conf.js file at line 59 is a commented out Google Chrome options for running in headless mode.  Un-comment out those lines and you're ready to run in headless mode.




