import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import { IMovie } from '../interfaces/i-movie';

@Injectable()
export class MovieService {
  private _movies: BehaviorSubject<IMovie[]>;
  apiUrl = 'https://api.themoviedb.org/3/movie';
  api_key = 'bca591baad893fc398799bd5a5fb90af';
  constructor(private $http: Http) {
    this._movies = new BehaviorSubject([]);
  }
  get allMovies(): BehaviorSubject<IMovie[]> {
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
