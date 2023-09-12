import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { MovieState } from 'src/app/store/movie.reducer';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent {
  movies$ = this.store.select('movies');
  constructor(private store: Store<MovieState>) {
    console.log("movie list is called");

  }
}
