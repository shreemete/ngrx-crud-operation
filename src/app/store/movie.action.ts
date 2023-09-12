import { createAction, props } from "@ngrx/store";
import { Movie } from "../interfaces/movie.model";

export const getMovies = createAction(
    "[Movie] Get Movies"
)
export const getMoviesSuccess = createAction(
    "[Movie] Get Movies Success",
    props<{ movies: ReadonlyArray<Movie> }>()
)
export const addMovie = createAction(
    "[Movie] Add Movie",
    props<{ movie: Movie }>()
)
export const addMovieSuccess = createAction(
    "[Movie] Add Movie Success",
    props<{ movie: Movie }>()
)