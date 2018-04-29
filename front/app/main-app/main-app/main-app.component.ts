import { Component, AfterViewInit } from '@angular/core';
import { Section } from '../../types/types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-app',
  templateUrl: './main-app.component.html',
  styleUrls: ['./main-app.component.scss']
})

export class HomeComponent {

  public sectionSelected: Section = 'popular';

  constructor(private router: Router ) { }

  navigateToSection() {
    this.router.navigate([`app/movies/${this.sectionSelected}`]);
  }

  changeSection(event: Section):void {
      if(this.sectionSelected !== event) {
        this.sectionSelected = event;
        this.navigateToSection();
      }
  }
}
