# Vehicle Enquiry Service (2023)

## Author
   Jack Ramsay

## Contents
   A web app that returns a car's information with just a reg number.

## Features
   * The Garage
      There are a few cars in 'the garage' already as examples. 
   * Entry Box
      A box to enter car regs in. The car's information is display at the end of the list of the garage.

## Design & Implementation Rationale
   I made this originally for a company's recuritment challenge - which had a whole lsit of requirements for the build as listed below:
        * You need to get more information about the car from DVLA
        * Information about the car should include the make, model, image and year.  
        * The page should handle errors returned from integration.
        * You need to use the ‘Garage’ variable to retrieve and store all required information about each car. 
        * You need to use the ‘add’, ‘delete’, ‘get’ function from the ‘Garage’ variable to manipulate stored data.
        * You can create and add any new functions to the ‘Garage’ variable if you need to.
        * The finished page on load should show 6 cars with information about each car. The page needs to be nicely styled. As a bonus, the page should be mobile-friendly.
        * The page should also have an input to validate and register new Cars into the 'Garage' 
        * The 'Garage' should only contain valid registration plates.    
        * Function ‘start()’ will be called once the garage is loaded with registration plates.
        * All coding should be done in src.js, garage.js and style.css.
        * You should not manipulate the main.js file.
        * Code contains bugs and uncompleted code. Bugs need to be identified and fixed. 
        * You should spend no more than a couple of hours on the task.
   There was a contradiction within these requirements as only one number plate worked from the ones gathered so having 6 working plates was unfeasible. This is due to an update within the API that rendered these example plates unavailable. I have added a few random number plates though to make the website fuller. 
   

## Future Work
   * Images:
      Having images of the exact car (including correct colour).
   * Model:
      Having the model of the vehicle.
 
## Installation & Use
1. Clone the repository with:
   ```bash
   git clone [Enter URL here]
   ```
2. Go into the locally cloned repo with:
   ```bash
   cd 
   ```
3. Initialise npm with:
   ```bash
   npm init
   ```
4. Install libraries with:
   ```bash
   npm install
   ```
5. Start a simple, local HTTP server on port 8080 with:
   ```bash
   npm start
   ```
6. Type 'localhost:8080' into the searchbar of browser of choice

## Built With
   * Visual Studio Code
   * Node.js
   * npm
   * Express.js
   * Webpack
   * dotenv

## Sources
   * MDN Web Docs - https://developer.mozilla.org/en-US/