import {Component, OnDestroy, OnInit} from '@angular/core';
import {IMovie} from '../../interfaces/i-movie';
import {MovieService} from '../../services/movie.service';
import {AnonymousSubscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  public popularMovie: IMovie;
  public movies: IMovie[];

  private _movieSub: AnonymousSubscription;

  constructor(private $Movie: MovieService) {

    this.popularMovie = null;
    this.$Movie.getMovies();
  }

  ngOnInit() {
    this._movieSub = this.$Movie.allMovies.subscribe((res) => {
      this.movies = res;
    });

  }

  ngOnDestroy() {
    this._movieSub.unsubscribe();
  }

  public clearSelection(): void {
    this.popularMovie = null;
  }
}
