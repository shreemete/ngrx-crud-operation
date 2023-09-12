import { Injectable } from "@angular/core"
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { addMovie, addMovieSuccess, getMovies, getMoviesSuccess } from "./movie.action"
import { MovieService } from "../shared/movie.service"
import { catchError, exhaustMap, map } from "rxjs/operators"
import { EmptyError } from "rxjs"


@Injectable()
export class MovieEffects {
    loadMovie$ = createEffect(() =>
        this.actions$.pipe(
            ofType(getMovies),
            exhaustMap(() =>
                this.movieService.getMovies().pipe(
                    map((movies) => getMoviesSuccess({ movies }))
                )
            )
        ));
    addMovie$ = createEffect(() =>
        this.actions$.pipe(
            ofType(addMovie),
            exhaustMap((newMovie) =>
                this.movieService.addMovies(newMovie.movie).pipe(
                    map((movie) => addMovieSuccess({ movie }))
                )
            )
        ));

    constructor(private actions$: Actions, private movieService: MovieService) { }
}