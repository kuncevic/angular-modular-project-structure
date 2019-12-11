import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LazyService {

  constructor() { 
    console.log('I am lazy service "providedIn: \'root\'" imported in the app.module')
  }
}
