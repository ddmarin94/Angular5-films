import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HomeComponent } from './main-app/main-app/main-app.component';

// Main Sections:

import { SectionsViewerComponent } from './main-app/sections-viewer/sections-viewer.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'app', pathMatch: 'full' },
  {
    path: 'app',
    component: HomeComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'movies/popular' },
      {
          path: 'movies/:id',
          component: SectionsViewerComponent,
      },
    ],
  },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule],
  declarations: [],
})

export class AppRoutingModule { }
