import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../../films-service/films.service';
import { Observable } from 'rxjs';
import { ISubscription } from "rxjs/Subscription";
import { Section } from '../../types/types';
import { Router, NavigationEnd, ActivatedRoute, Event } from '@angular/router';

@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.scss']
})
export class Section1Component implements OnInit {

  public filmsProvider: Observable<any>;
  public sectionSelected: Section;

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
       this.filmsProvider = this.filmService.moviesByCategory(sectionSelected);
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
}
