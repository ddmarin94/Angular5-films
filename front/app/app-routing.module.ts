import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HomeComponent } from './main-app/main-app/main-app.component';

// Main Sections:

import { Section1Component } from './main-app/section1/section1.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'app', pathMatch: 'full' },
  {
    path: 'app',
    component: HomeComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'enter' },
      {
          path: 'enter',
          component: Section1Component,
      },
    ],
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
