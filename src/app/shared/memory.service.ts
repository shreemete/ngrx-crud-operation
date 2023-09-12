import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Movie } from '../interfaces/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MemoryService implements InMemoryDbService {

  constructor() { }

  createDb() {
    return {
      movies: this.mockMovies(),
    };
  }

  private mockMovies(): Movie[] {
    const movie = new Movie(
      'Avengers: Endgame',
      "abcdefghijklmn",
      1234
    );
    movie.id = 1;

    const movie1 = new Movie(
      'Avengers: Infinity War',
      "abcdefghijklmn",
      1234
    );
    movie1.id = 2;

    const movie2 = new Movie(
      'Age of Ultron',
      "abcdefghijklmn",
      1234
    );
    movie2.id = 3;

    const movies = [movie, movie1, movie2];
    return movies;
  }
}


