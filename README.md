# Angular Modular Project Structure

This is a sample project that represents the modular folder structure of angular application with bundle analyzer build in

## Modules structure

 app  
   ├───components  
   │   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├───home  
   │   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├───not-found  
   │   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└───components.module.ts  
   ├───core  
   │   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└───core.module.ts  
   ├───features  
   │   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└───lazy  
   │			 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└───lazy.module.ts  
   │   
   ├───shared  
   │   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└───shared.module.ts  
   └───app.module.ts 
	 
`components` - constants all simple components like home, about, not-found, etc (**no feature or shared components here**)  
`features` - constants features module <a href="https://angular.io/styleguide#!#04-09" target="_blank">https://angular.io/styleguide#!#04-09</a>  
`shared` - constants shared module <a href="https://angular.io/styleguide#!#04-10" target="_blank">https://angular.io/styleguide#!#04-10</a>  
`core` - constants core module <a href="https://angular.io/styleguide#!#04-11" target="_blank">https://angular.io/styleguide#!#04-11</a>  

For more details on how to structure you app check https://angular.io/styleguide#!#04-06

## How to start

`git cline https://github.com/kuncevic/angular-modular-project-structure`  
`npm install` or `yarn`

## Bundle Analyzer

To run bundle analyzer run `npm run analyze`

## This app is build with angular-cli

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
