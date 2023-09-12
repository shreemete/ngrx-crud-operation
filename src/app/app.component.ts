import { Component } from '@angular/core';
import { Movie } from './interfaces/movie.model';
import { Store } from '@ngrx/store';
import { addMovie, addMovieSuccess, getMovies, getMoviesSuccess } from './store/movie.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  newMovie: Movie = new Movie("", "", 0);
  constructor(private store: Store) { }
  ngOnInit() {
    this.getAllMovies()
  }
  getAllMovies() {
    this.store.dispatch(getMovies());
  }
  addMovie() {
    this.store.dispatch(addMovie({ movie: this.newMovie }));
    console.log(this.newMovie);
    this.newMovie = new Movie("", "", 0);
  }
}
