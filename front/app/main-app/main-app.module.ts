import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Section1Component } from './section1/section1.component';
import { HomeComponent } from './main-app/main-app.component';
import { AppRoutingModule } from '../app-routing.module';
import { ComponentsModule } from '../components/components.module';
import { FilmsService } from '../films-service/films.service';

@NgModule({
  imports: [
    ComponentsModule,
    CommonModule,
    AppRoutingModule
  ],
  exports: [Section1Component, HomeComponent],
  declarations: [Section1Component, HomeComponent],
  providers: [FilmsService],
})
export class MainAppModule { }
