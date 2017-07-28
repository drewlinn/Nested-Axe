# Nested Axe

#### A Choose Your Own Adventure Role-Playing Game, 07/27/17

#### By **Brendan Hanna, Justin Gomez, Jordan Mysliwiec, Andrew Dalton**

## Description

Nested Axe is a Choose Your Own Adventure Game where you can create a character and play with that character through a short adventure.

## Planning

1. Configuration/dependencies
  * This should include ALL dependencies.

  * Install the following packages:

    * Node Packages
      * The following were implemented for use in our Development Environment

        * sass - translates our files into normal CSS .
        * sourcemaps - adds some code which allows us to see which Sass files are responsible for each CSS rule that we see in the browser.
        * bower-files - installs the necessary files on which our front-end package manager depends.

    * Bower Packages
      * The following were implemented in our Production Environment
        * bootstrap - provides us with some rudimentary page styling tools.


  2. Specifications

  | Behavior | Input | Output |
  | :--------| :---- | :------|
  | User can create a character | "Ragnar the Beast Slayer" | "Ragnar the Beast Slayer" |
  | User can update that character | click "update" | "Ragnar the Beast" |
  | User can delete a character | click "delete" | "Are you sure you want to delete this character" |
  | User can select their character and play with them through the adventure | click "Select this character" | game start "You are in a jail cell..." |
  | Character's progress through the game is tracked, so the user can start where they left off | "Select this character" | game start on scene03 |

3. Integration
  * app.module, app.routing, app.component first route to welcome.component for application entry and routing
  * player, character-list, character-edit, character-detail, and character components for creating characters in our database and selecting them for gameplay.
  * scene01-scene07 for our adventure scenarios.
  * about component to briefly describe the application.

## Setup/Installation Requirements

* Open your console or powershell command line.
* In your command line, navigate to the desktop or your desired folder destination.
* Copy the project's github address (https://github.com/drewlinn/Nested-Axe.git)
* Write in your console the command "git clone" and paste the project address afterward and press enter.
* Use your console to navigate to the project directory and perform 'npm install' and 'bower install' commands
* Create a file called 'api-keys.ts' in the 'src/app' folder of the project directory.
* Open your browser and navigate to https://console.firebase.google.com/ in your web browser.
* If necessary, create an account.
* In the dashboard area, click on the 'Create a New Project' option; provide it with a name and select your Country/Region from the drop-down menu.
* You will then be directed to an Overview area. Select the 'Add Firebase to your web app' option.
* In the window that pops up, Copy everything nested in the 'var config' code block and paste it into your 'api-keys.ts file; change the declaration from 'var config' to 'export var masterFirebaseConfig'. Like so:
  **export var masterFirebaseConfig = {
    apiKey: "YOUR-API-KEY-GOES-HERE",
    authDomain: "xxxx.firebaseapp.com",
    databaseURL: "https://xxxx.firebaseio.com",
    storageBucket: "xxxx.appspot.com",
    messagingSenderId: "xxxx"
  };**
* Make sure to save the new file.
* Return to the Firebase Console and select your project. Click on the Database option in the side Navbar.
* Near the top of the page on the blue navbar, select the option that reads RULES; change both the ".read" and ".write" properties from "auth !== null" to "true", like this:
  **{
    "rules": {
      ".read": "true",
      ".write": "true"
    }
  }**
* In your console (make sure you are still in the project directory), perform the commands 'ng build' followed by 'ng serve'
* In your Web Browser, navigate to 'localhost:4200'
* The application should successfully be displayed with full functionality.


      ## Development server

      Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

      ## Code scaffolding

      Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

      ## Build

      Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

      ## Running unit tests

      Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

      ## Running end-to-end tests

      Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
      Before running the tests make sure you are serving the app via `ng serve`.

      ## Further help

      To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Known Bugs

There are no known bugs at this time.

## Support and contact details

If you notice any bugs in our application or code or any other issues in our project... just... like... ignore it... I guess...

(or send an email to expandrew@gmail.com)

## Technologies Used

HTML
CSS
SCSS
Javascript
Typescript
Angular 2
Angular 4 CLI
Bower
Node
Node Package Manager
Firebase

### License

*This software is licensed under the MIT license.*

Copyright (c) 2016 **Brendan Hanna, Justin Gomez, Jordan Mysliwiec, Andrew Dalton, Epicodus**
