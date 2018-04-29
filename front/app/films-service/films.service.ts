import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Section } from '../types/types';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class FilmsService {

  constructor(private httpClient: HttpClient) { }

  moviesByCategory(category: Section):Observable<any> {
    return this.httpClient.get(`https://api.themoviedb.org/3/movie/${category}?api_key=${environment.apiKey}&language=en-US&page=1`);
  }

  searchOneFilm(filmName:string):Observable<any> {
    return this.httpClient.get(`https://api.themoviedb.org/3/search/movie?api_key=${environment.apiKey}&query=${filmName}`);
  }
}
