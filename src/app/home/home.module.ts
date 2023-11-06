import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './components/header/header.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CatnavigationComponent } from './components/catnavigation/catnavigation.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    CatnavigationComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class HomeModule { }
