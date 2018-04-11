import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';

@Injectable()
export class MovieService {
  private _movies: any;
  apiUrl = 'https://api.themoviedb.org/3/movie';
  api_key = 'bca591baad893fc398799bd5a5fb90af';
  constructor(private $http: Http) {
    this._movies = new BehaviorSubject(null);
  }
  get allMovies(): BehaviorSubject<any> {
    return this._movies;
  }

  getMovies() {
    return this.$http.get(`${this.apiUrl}/popular?api_key=${this.api_key}`)
      .map(res => res.json())
      .toPromise()
      .then((res) => {
        this._movies.next(res.results);
        return res.results;
      });
  }
}
