import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './';
import { NotFoundComponent } from './';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HomeComponent,
    NotFoundComponent
  ]
})
export class ComponentsModule { }
