import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LazyService {

  constructor() { 
    console.log('I am lazy service "providedIn: \'root\'" used in lazy loaded module')
  }
}
