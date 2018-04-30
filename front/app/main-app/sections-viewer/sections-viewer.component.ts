import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../../films-service/films.service';
import { Observable } from 'rxjs';
import { ISubscription } from "rxjs/Subscription";
import { Section } from '../../types/types';
import { Router, NavigationEnd, ActivatedRoute, Event } from '@angular/router';

@Component({
  selector: 'sections-viewer',
  templateUrl: './sections-viewer.component.html',
  styleUrls: ['./sections-viewer.component.scss']
})
export class SectionsViewerComponent implements OnInit {

  public filmsProvider: Observable<any>;
  public sectionSelected: Section;
  public foundFilm: boolean = false;
  public page:number = 1;
  private routerProvider: ISubscription;

  constructor(
    public filmService: FilmsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.sectionSelected = this.activatedRoute.snapshot.params.id;
    this.subscribeRouterEvents();
    this.setSectionData(this.sectionSelected);
  }

   subscribeRouterEvents():void {
     this.routerProvider = this.router.events.subscribe((event: Event):void => {
       if(event instanceof NavigationEnd) {
         this.sectionSelected = this.activatedRoute.snapshot.params.id;
         this.changeSection(this.sectionSelected);
       }
     });
   }

   setSectionData(sectionSelected:Section):void {
     this.filmsProvider = this.filmService.moviesByCategory(sectionSelected, this.page);
   }

   setSearchFilm(sectionSelected: 'search-film'):void {
     // this.filmsProvider = this.filmService.moviesByCategory(sectionSelected);
   }

   nextPage(sectionSelected) {
     this.page = this.page +1;
     this.filmsProvider = this.filmService.moviesByCategory(sectionSelected, this.page);
   }

   changeSection(event: Section):void {
     this.sectionSelected = event;
     if(this.sectionSelected !== 'search-film') {
       this.setSectionData(this.sectionSelected);
     }
   }
}
