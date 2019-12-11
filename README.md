# Angular Modular Project Structure

This is a sample project that represents the modular folder structure of angular application with bundle analyzer build-in

## Modules structure

 app  
   ├───features  
   │   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├───lazy  
   │   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└───lazy.module.ts  
   │   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└───pages  
   │   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├───home  
   │   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├───not-found  
   │   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└───pages.module.ts   
   │   
   ├───shared  
   │   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└───shared.module.ts  
   └───app.module.ts 
	 
`features` - contains features module [https://angular.io/guide/feature-modules](https://angular.io/guide/feature-modules)</a>  
`shared` - contains shared module [https://angular.io/guide/sharing-ngmodules](https://angular.io/guide/sharing-ngmodules)</a>
  
`*core` - since angular v6 core module is not recommended anymore <a href="https://github.com/angular/angular/issues/17825" target="_blank">https://github.com/angular/angular/issues/17825</a>  

**For more details** on how to structure you app check [https://angular.io/guide/styleguide#flat](https://angular.io/guide/styleguide#flat)

## How to start

`git clone https://github.com/kuncevic/angular-modular-project-structure`  
`npm install` or `yarn`

## Bundle Analyzer

To run bundle analyzer run `npm run analyze`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
