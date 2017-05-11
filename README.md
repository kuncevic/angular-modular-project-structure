# Angular Modular Project Structure

This is a sample project that represents the modular folder structure of angular application with bundle analyzer build in

## Project structure

 app
   ├───components
   │   ├───home
   │   ├───not-found
	 │   └───components.module.ts
   ├───core
	 │   └───core.module.ts
   ├───features
   │   └───lazy
	 │			 └───lazy.module.ts
	 │   
   ├───shared
	 │	 └───shared.module.ts
   │
   └───app.module.ts 	 
	 
`components` - constants all simple(non feature) components like home, about, not-found, etc
`features` - constants features module https://angular.io/styleguide#!#04-09
`shared` - constants shared module https://angular.io/styleguide#!#04-10
`core` - constants core module https://angular.io/styleguide#!#04-11 

For more details on how to structure you app check https://angular.io/styleguide#!#04-06

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
