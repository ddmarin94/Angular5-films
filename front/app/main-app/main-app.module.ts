import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionsViewerComponent } from './sections-viewer/sections-viewer.component';
import { HomeComponent } from './main-app/main-app.component';
import { AppRoutingModule } from '../app-routing.module';
import { ComponentsModule } from '../components/components.module';
import { FilmsService } from '../films-service/films.service';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    ComponentsModule,
    CommonModule,
    AppRoutingModule,
    BrowserModule
  ],
  exports: [SectionsViewerComponent, HomeComponent],
  declarations: [SectionsViewerComponent, HomeComponent],
  providers: [FilmsService],
})
export class MainAppModule { }
