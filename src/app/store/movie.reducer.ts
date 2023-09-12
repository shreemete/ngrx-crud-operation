import { createReducer, on } from "@ngrx/store";
import { Movie } from "../interfaces/movie.model";
import { addMovieSuccess, getMoviesSuccess } from "./movie.action";
import { MovieService } from "../shared/movie.service";

export interface MovieState {
    movies: ReadonlyArray<Movie>;
}

const initialState: ReadonlyArray<Movie> = []

export const movieReducer = createReducer(
    initialState,
    on(getMoviesSuccess, (state) => [...mockMovies()]),
    on(addMovieSuccess, (state, action) => [...state, action.movie])
)


function mockMovies(): Movie[] {
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