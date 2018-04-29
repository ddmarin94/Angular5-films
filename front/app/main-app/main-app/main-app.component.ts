import { Component, OnInit } from '@angular/core';
import { Section } from '../../types/types';
import { FilmsService } from '../../films-service/films.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main-app',
  templateUrl: './main-app.component.html',
  styleUrls: ['./main-app.component.scss']
})
export class HomeComponent implements OnInit {

  public sectionSelected: Section = 'popular';
  public filmsProvider: Observable<any>;

  constructor(public filmService: FilmsService) { }

  ngOnInit() {
    this.setSectionData(this.sectionSelected);
  }
 
  setSectionData(sectionSelected:Section):void {
      this.filmService.moviesByCategory(sectionSelected).subscribe(d => console.log(d));
  }

  setSearchFilm(sectionSelected: 'search-film'):void {
      this.filmsProvider = this.filmService.moviesByCategory(sectionSelected);
  }

  changeSection(event: Section):void {
      this.sectionSelected = event;
      if(this.sectionSelected !== 'search-film') {
        this.setSectionData(this.sectionSelected);
      }
  }

  ngOnDestroy() {

  }
}
